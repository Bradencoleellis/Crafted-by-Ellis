import Link from "next/link";
import EllisLogo from "./EllisLogo";

export default function Footer() {
  return (
    <footer style={{
      background: "#0A0806",
      borderTop: "1px solid rgba(246,242,234,0.07)",
      padding: "64px 0 32px",
      marginTop: "auto",
    }}>
      <div className="container-page">
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px",
          marginBottom: "56px",
        }}>
          <div>
            <div style={{ marginBottom: "18px" }}>
              <EllisLogo size={28} href="/" onLight={false} />
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text-tertiary)", lineHeight: 1.6, maxWidth: "260px" }}>
              A studio making apps and games with care. Built in New Zealand.
            </p>
          </div>

          <div>
            <h4 style={colHead}>Products</h4>
            <ul style={list}>
              <li><Link href="/apps" className="footer-link">Apps</Link></li>
              <li><Link href="/renewplus" className="footer-link">Renew+</Link></li>
              <li><Link href="/games" className="footer-link">Games</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={colHead}>Studio</h4>
            <ul style={list}>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={colHead}>Legal</h4>
            <ul style={list}>
              <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(246,242,234,0.07)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ fontSize: "13px", color: "var(--color-text-tertiary)" }}>
            © {new Date().getFullYear()} Crafted by Ellis. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "var(--color-text-tertiary)" }}>
            Made in New Zealand 🇳🇿
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

const colHead: React.CSSProperties = {
  fontSize: "11px", fontWeight: 600, marginBottom: "16px",
  color: "rgba(246,242,234,0.55)", textTransform: "uppercase", letterSpacing: "0.1em",
};
const list: React.CSSProperties = {
  listStyle: "none", padding: 0, margin: 0,
  display: "flex", flexDirection: "column", gap: "10px",
};
