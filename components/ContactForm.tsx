"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

const EMPTY = {
  name: "",
  email: "",
  subject: "General enquiry",
  message: "",
  // Honeypot. Hidden from people, tempting to bots. Never sent by a real user.
  company: "",
};

/**
 * The contact form. It posts to /api/contact, which sends the mail.
 *
 * This previously faked the send with a timer and always reported success, so
 * messages were discarded while the sender was told they had arrived. The rule
 * now: success is only shown when the endpoint confirms it. Any failure keeps
 * the text the person typed in the fields and offers the direct email address,
 * because the worst outcome is someone losing what they wrote.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(
          typeof result.error === "string"
            ? result.error
            : "Something went wrong. Please email braden@craftedbyellis.com.",
        );
        setStatus("error");
        return;
      }

      // Only clear the fields once the send is confirmed.
      setFormData(EMPTY);
      setStatus("sent");
    } catch {
      setError(
        "Could not reach the server. Check your connection, or email braden@craftedbyellis.com.",
      );
      setStatus("error");
    }
  };

  const busy = status === "sending";

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "22px", maxWidth: "560px" }}>
      <div>
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input-field"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input-field"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" style={labelStyle}>
          Subject
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="input-field"
        >
          <option>General enquiry</option>
          <option>Bug report</option>
          <option>Feature request</option>
          <option>Renew+ support</option>
          <option>Crafted Co</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="input-field"
          style={{ resize: "vertical", minHeight: "150px" }}
          placeholder="What is on your mind?"
        />
      </div>

      {/* Honeypot. Hidden from sighted users and from screen readers, and taken
          out of the tab order, so no real person can fill it in by accident.
          Not display:none — some bots skip those. */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="company">Company (leave this empty)</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>

      <button type="submit" disabled={busy} className="btn-primary" style={{ opacity: busy ? 0.7 : 1 }}>
        {status === "sending" ? "Sending…" : status === "error" ? "Try again" : "Send message"}
      </button>

      {/* aria-live so the outcome is announced rather than only shown. */}
      <p role="status" aria-live="polite" style={statusStyle}>
        {status === "sent" && "Thanks — your message is on its way. I will get back to you within 48 hours."}
        {status === "error" && error}
      </p>
    </form>
  );
}

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "var(--type-micro-size)",
  fontWeight: 600,
  letterSpacing: "var(--type-micro-track)",
  textTransform: "uppercase",
  color: "var(--ink-label)",
  marginBottom: "10px",
};

const statusStyle: CSSProperties = {
  minHeight: "1.4em",
  fontSize: "var(--type-label-size)",
  lineHeight: 1.6,
  color: "var(--ink-body)",
};
