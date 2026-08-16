import { Resend } from "resend";

/**
 * The contact form's endpoint.
 *
 * The form used to fake a send with a timer and report success, so every
 * message typed into it was silently discarded while the sender was told it
 * had arrived. The single most important property of this file is therefore
 * that it **never reports success it cannot prove**: if the mail provider is
 * unconfigured or the send fails, the caller gets an error and the form says
 * so. A dropped message the sender knows about is recoverable. A dropped
 * message they think arrived is not.
 *
 * Configuration (all in .env.local locally, and in Vercel's project settings
 * for production — never committed):
 *
 *   RESEND_API_KEY     required. From resend.com/api-keys.
 *   CONTACT_TO_EMAIL   optional, defaults to braden@craftedbyellis.com
 *   CONTACT_FROM_EMAIL optional, defaults to Resend's shared sending domain,
 *                      which works immediately but can only deliver to the
 *                      address that owns the Resend account. Point it at
 *                      something @craftedbyellis.com once that domain is
 *                      verified in Resend.
 */

const TO = process.env.CONTACT_TO_EMAIL ?? "braden@craftedbyellis.com";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Crafted by Ellis <onboarding@resend.dev>";

// Must stay in step with the <select> in components/ContactForm.tsx. Anything
// else is coerced to the default rather than rejected — a mismatch here is our
// bug, and it should not cost the sender their message.
const SUBJECTS = new Set([
  "General enquiry",
  "Bug report",
  "Feature request",
  "Renew+ support",
  "Crafted Co",
  "Other",
]);

const MAX = { name: 100, email: 200, subject: 80, message: 5000 };

// Per-IP throttle. In-memory, so it resets on deploy and is per-instance rather
// than global — that is fine for the threat here (a person or a dumb bot
// hammering the form), and the honeypot below catches most of the rest. If this
// ever needs to be real, it wants Upstash or Vercel KV, not a bigger Map.
const RATE_LIMIT = { windowMs: 60_000, max: 3 };
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT.max;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

// Deliberately loose. Address validity is proved by a reply arriving, not by a
// regex, and every strict pattern rejects somebody's real address.
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (rateLimited(clientIp(request))) {
    return Response.json(
      { error: "Too many messages in a short time. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: a field hidden from people and irresistible to naive bots.
  // Answer 200 so the bot believes it succeeded and does not retry with
  // variations, but send nothing.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const subjectRaw = String(payload.subject ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (!looksLikeEmail(email)) {
    return Response.json({ error: "That email address does not look right." }, { status: 400 });
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    message.length > MAX.message ||
    subjectRaw.length > MAX.subject
  ) {
    return Response.json({ error: "That message is too long to send." }, { status: 400 });
  }

  const subject = SUBJECTS.has(subjectRaw) ? subjectRaw : "General enquiry";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Loud on the server, honest to the sender. Never a silent success.
    console.error("[contact] RESEND_API_KEY is not set — cannot send. Message dropped.");
    return Response.json(
      { error: "The contact form is not available right now. Please email braden@craftedbyellis.com." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      // Replying in a mail client should reach the sender, not the robot.
      replyTo: email,
      subject: `[${subject}] ${name}`,
      text: [
        `From:    ${name} <${email}>`,
        `Subject: ${subject}`,
        "",
        message,
        "",
        "— sent from the craftedbyellis.com contact form",
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend rejected the send:", error);
      return Response.json(
        { error: "Sending failed. Please email braden@craftedbyellis.com instead." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (cause) {
    console.error("[contact] Unexpected failure sending message:", cause);
    return Response.json(
      { error: "Sending failed. Please email braden@craftedbyellis.com instead." },
      { status: 502 },
    );
  }
}
