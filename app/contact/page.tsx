import type { CSSProperties } from "react";
import ContactForm from "@/components/ContactForm";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact | Crafted by Ellis",
  description: "Questions, bugs or feedback reach the person who wrote the app. Most replies go out the same day.",
};

const ADDRESSES = [
  { label: "Renew+ support", email: "RenewPlus@craftedbyellis.com" },
  { label: "Crafted Co", email: "CraftedCo@craftedbyellis.com" },
  { label: "Everything else", email: "braden@craftedbyellis.com" },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="It reaches me, not a queue."
        lead="There is no support team to be routed through. Whatever you send lands with the person who designed and built the app, and most replies go out the same day."
      />

      <section style={sectionStyle}>
        <div>
          <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(20px, 2.6vw, 28px)" }}>
            Send a message
          </Reveal>
          <Reveal index={2}>
            <ContactForm />
          </Reveal>
        </div>

        <div>
          <Reveal index={3} className="eyebrow" style={{ marginBottom: "clamp(20px, 2.6vw, 28px)" }}>
            Or email directly
          </Reveal>
          <Reveal index={4} style={{ display: "grid", gap: "22px" }}>
            {ADDRESSES.map(({ label, email }) => (
              <div key={email}>
                <div className="micro-label" style={{ marginBottom: "6px" }}>
                  {label}
                </div>
                <a href={`mailto:${email}`} className="contact-link" style={{ fontSize: "16px" }}>
                  {email}
                </a>
              </div>
            ))}
            <p style={noteStyle}>Replies usually go out within 48 hours, and always from a person.</p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

const sectionStyle: CSSProperties = {
  padding: "0 var(--gutter) clamp(60px, 8vw, 96px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "clamp(32px, 5vw, 70px)",
  alignItems: "start",
  maxWidth: "1080px",
};

const noteStyle: CSSProperties = {
  fontSize: "var(--type-label-size)",
  lineHeight: 1.6,
  color: "var(--ink-faint)",
  maxWidth: "280px",
};
