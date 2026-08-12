"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

// NOTE: this form does not send anything. The submit handler simulates a send
// with a timer and then reports success, which is how it arrived — the redesign
// did not change the behaviour, only the styling. It needs a real endpoint
// (a route handler plus a mail provider) before it can be trusted, because
// right now every message typed into it is silently discarded.
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General enquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "General enquiry", message: "" });
        setStatus("idle");
      }, 3000);
    }, 1000);
  };

  const busy = status === "sending" || status === "sent";

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

      <button type="submit" disabled={busy} className="btn-primary" style={{ opacity: busy ? 0.7 : 1 }}>
        {status === "idle" && "Send message"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "Message sent"}
        {status === "error" && "Try again"}
      </button>

      {/* aria-live so the outcome is announced rather than only shown. */}
      <p role="status" aria-live="polite" style={statusStyle}>
        {status === "sent" ? "Thanks — I will get back to you within 48 hours." : ""}
      </p>
    </form>
  );
}

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "10.5px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--ink-label)",
  marginBottom: "10px",
};

const statusStyle: CSSProperties = {
  minHeight: "1.4em",
  fontSize: "13.5px",
  lineHeight: 1.55,
  color: "var(--ink-body)",
};
