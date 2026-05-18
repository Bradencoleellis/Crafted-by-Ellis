"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // For now, just simulate sending
    // Later, we'll connect this to a real email service
    setTimeout(() => {
      setStatus("sent");
      // Reset form
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
        setStatus("idle");
      }, 3000);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "var(--color-beige)",
        padding: "80px 0 60px",
      }}>
        <div className="container-page" style={{ textAlign: "center", maxWidth: "700px" }}>
          <p style={labelStyle}>Contact</p>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}>
            Get in touch
          </h1>
          <p style={{
            fontSize: "18px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
          }}>
            Have a question, feedback, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: "80px 0", background: "var(--color-background)" }}>
        <div className="container-page" style={{ maxWidth: "600px" }}>
          <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}>
            {/* Name */}
            <div>
              <label htmlFor="name" style={labelFormStyle}>
                Name <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" style={labelFormStyle}>
                Email <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
                placeholder="you@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" style={labelFormStyle}>
                Subject
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={inputStyle}
              >
                <option>General Inquiry</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Partnership</option>
                <option>Support</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" style={labelFormStyle}>
                Message <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                placeholder="Tell us what's on your mind..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn-primary"
              style={{
                width: "100%",
                opacity: status === "sending" || status === "sent" ? 0.7 : 1,
              }}
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Message Sent"}
              {status === "error" && "Try Again"}
            </button>

            {status === "sent" && (
              <p style={{
                textAlign: "center",
                color: "var(--color-success)",
                fontSize: "14px",
                fontWeight: 500,
              }}>
                Thanks! We&apos;ll get back to you within 48 hours.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Direct Contact */}
      <section style={{
        padding: "60px 0 96px",
        background: "var(--color-background-secondary)",
        textAlign: "center",
      }}>
        <div className="container-page">
          <h2 style={{
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "16px",
          }}>
            Or reach us directly
          </h2>
          <p style={{
            fontSize: "18px",
            color: "var(--color-text-secondary)",
            marginBottom: "8px",
          }}>
            Email us at:
          </p>
          <a
            href="mailto:braden@craftedbyellis.com"
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--color-accent)",
            }}
          >
            braden@craftedbyellis.com
          </a>
          <p style={{
            marginTop: "24px",
            fontSize: "14px",
            color: "var(--color-text-tertiary)",
          }}>
            We typically respond within 48 hours.
          </p>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--color-accent)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "12px",
};

const labelFormStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 600,
  color: "var(--color-text-primary)",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  fontSize: "16px",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-background)",
  color: "var(--color-text-primary)",
  fontFamily: "inherit",
  transition: "border-color 0.2s ease",
  outline: "none",
};
