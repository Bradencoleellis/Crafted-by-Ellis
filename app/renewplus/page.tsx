import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Renew+ | Crafted by Ellis",
  description: "Renew+ is a premium iOS lifestyle app for goals, journaling, meal planning, finance tracking, and intentional living.",
};

export default function RenewPlusPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "var(--color-background)",
        padding: "80px 0 100px",
        position: "relative",
        overflow: "hidden",
      }} className="grid-bg">
        {/* Ambient orb */}
        <div style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(154,74,42,0.10) 0%, transparent 65%)",
          pointerEvents: "none",
          animation: "orb-drift-2 20s ease-in-out infinite",
        }} />

        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}>
            {/* Copy */}
            <div>
              <div className="label-chip">iOS App</div>
              <h1 style={{
                fontSize: "clamp(40px, 5vw, 60px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "20px",
                color: "var(--color-text-primary)",
              }}>
                Renew+
              </h1>
              <p style={{
                fontSize: "17px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "440px",
              }}>
                Your premium lifestyle companion. Track goals, journal daily, plan meals, manage finances, and build the life you want, all in one beautifully designed app.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="#" className="btn-primary">
                  Download on iOS
                </a>
                <Link href="#features" className="btn-secondary">
                  See Features
                </Link>
              </div>
            </div>

            {/* App icon */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{
                width: "160px",
                height: "160px",
                borderRadius: "38px",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(154,74,42,0.15)",
                position: "relative",
                flexShrink: 0,
              }}>
                <Image src="/AppIcon.png" alt="Renew+" fill style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              text-align: center;
              gap: 48px !important;
            }
          }
        `}</style>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: "96px 0", background: "var(--color-background-secondary)" }}>
        <div className="container-page">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="label-chip">Features</div>
            <h2 style={sectionHeadingStyle}>Everything you need to renew</h2>
            <p style={sectionSubStyle}>
              Six powerful modules working together to help you live intentionally.
            </p>
          </div>

          <div className="features-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}>
            <FeatureCard icon={<GoalIcon />} title="Goal Tracking" description="Set meaningful goals with AI-powered planning. Track progress and stay accountable." />
            <FeatureCard icon={<JournalIcon />} title="Daily Journaling" description="Beautiful book-shelf journal with page-turn animations. Reflect and grow." />
            <FeatureCard icon={<MealIcon />} title="Meal Planning" description="Plan meals, save recipes, generate shopping lists, and track your pantry." />
            <FeatureCard icon={<FinanceIcon />} title="Finance Tracking" description="Budget, savings goals, subscriptions, and tax calculations across 7 regions." />
            <FeatureCard icon={<FamilyIcon />} title="Family & Community" description="Share with partners, connect with friends, build accountability together." />
            <FeatureCard icon={<CalendarIcon />} title="Smart Calendar" description="See goals, bills, and journal entries in one unified calendar view." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "96px 0", background: "var(--color-background)" }} className="grid-bg">
        <div className="container-page">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="label-chip">Pricing</div>
            <h2 style={sectionHeadingStyle}>Choose your plan</h2>
            <p style={sectionSubStyle}>
              Start free with Spark. Upgrade anytime for more features.
            </p>
          </div>

          <div className="pricing-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}>
            <PricingCard
              tier="Spark"
              price="Free"
              description="Get started with the essentials"
              features={[
                "2 active goals",
                "3 recipes per category (unlimited storage)",
                "1 week meal planning",
                "1 piggy bank",
                "Unlimited journaling",
                "Unlimited finance tracking",
                "Unlimited shopping lists & pantry",
              ]}
            />
            <PricingCard
              tier="Rise"
              price="$4.99"
              period="/ month"
              description="Unlock more power"
              featured
              features={[
                "10 active goals",
                "Unlimited recipes",
                "Multi-week meal planning",
                "3 piggy banks",
                "2 household members",
                "5 AI goal generations / month",
                "15 AI recipe scans / month",
                "15 receipt scans / month",
                "Finance partner linking",
                "Everything in Spark",
              ]}
            />
            <PricingCard
              tier="Thrive"
              price="$10.99"
              period="/ month"
              trial="1 month free trial"
              description="The complete experience"
              features={[
                "25 active goals",
                "Unlimited recipes",
                "Unlimited meal planning",
                "10 piggy banks",
                "5 household members",
                "15 AI goal generations / month",
                "30 AI recipe scans / month",
                "30 receipt scans / month",
                "Priority support",
                "Beta features & early access",
                "Everything in Rise",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "96px 0", background: "var(--color-background-secondary)" }}>
        <div className="container-page" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="label-chip">FAQ</div>
            <h2 style={sectionHeadingStyle}>Common questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <FAQItem question="Is Renew+ free to use?" answer="Yes! Renew+ is free to download and use with the Spark tier. Rise and Thrive subscriptions are available for users who want to unlock more features." />
            <FAQItem question="What devices does Renew+ support?" answer="Renew+ launches on iOS (iPhone and iPad). An Android version is in development and will follow." />
            <FAQItem question="Is my data private and secure?" answer="Absolutely. Your data is encrypted and stored securely with Firebase. We never sell your data to third parties. See our Privacy Policy for full details." />
            <FAQItem question="Can I cancel my subscription anytime?" answer="Yes. You can cancel your subscription anytime through your Apple ID settings. You'll keep premium access until the end of your billing period." />
            <FAQItem question="Does Renew+ work offline?" answer="Most features work offline. Your data syncs automatically when you're back online so nothing is ever lost." />
          </div>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "40px" }}>
            <Link href="/renewplus/privacy" style={{ fontSize: "13px", color: "var(--color-text-tertiary)", textDecoration: "underline" }}>
              Privacy Policy
            </Link>
            <Link href="/renewplus/terms" style={{ fontSize: "13px", color: "var(--color-text-tertiary)", textDecoration: "underline" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "96px 0",
        background: "var(--color-background)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(154,74,42,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>
            Join <span style={{ color: "var(--rust)" }}>Renew+</span> today
          </h2>
          <p style={{
            fontSize: "17px",
            color: "var(--color-text-secondary)",
            marginBottom: "36px",
            maxWidth: "400px",
            margin: "0 auto 36px",
          }}>
            Free to download. Premium when you&apos;re ready.
          </p>
          <a href="#" className="btn-primary">
            Download on iOS
          </a>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card" style={{ padding: "28px" }}>
      <div style={{
        width: "44px",
        height: "44px",
        background: "rgba(154,74,42,0.1)",
        border: "1px solid rgba(154,74,42,0.2)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "18px",
        color: "var(--color-accent)",
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "8px", letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{description}</p>
    </div>
  );
}

function PricingCard({ tier, price, period, trial, description, features, featured = false }: {
  tier: string; price: string; period?: string; trial?: string; description: string; features: string[]; featured?: boolean;
}) {
  return (
    <div className={featured ? "" : "glass-card"} style={{
      padding: "32px",
      borderRadius: "var(--radius-md)",
      position: "relative",
      ...(featured ? {
        background: "rgba(154,74,42,0.06)",
        border: "1px solid rgba(154,74,42,0.35)",
        boxShadow: "0 0 40px rgba(154,74,42,0.08)",
      } : {}),
    }}>
      {featured && (
        <div style={{
          position: "absolute",
          top: "-12px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "var(--color-accent)",
          color: "#09090B",
          padding: "4px 14px",
          borderRadius: "var(--radius-full)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}>
          Most Popular
        </div>
      )}
      <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "4px" }}>{tier}</h3>
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "4px" }}>
        <p style={{ fontSize: "28px", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.02em", margin: 0 }}>{price}</p>
        {period && <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", fontWeight: 500 }}>{period}</span>}
      </div>
      {trial && <p style={{ fontSize: "11px", color: "var(--rust)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: "var(--font-jetbrains-mono), monospace", marginBottom: "6px" }}>{trial}</p>}
      <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "24px" }}>{description}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
        {features.map((f, i) => (
          <li key={i} style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "rgba(154,74,42,0.12)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: "10px",
              color: "var(--color-accent)",
              fontWeight: 700,
            }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="glass-card" style={{ padding: "20px 24px", cursor: "pointer" }}>
      <summary style={{
        fontSize: "15px",
        fontWeight: 600,
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      }}>
        {question}
        <span style={{ fontSize: "18px", color: "var(--color-accent)", flexShrink: 0 }}>+</span>
      </summary>
      <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.65, marginTop: "12px" }}>
        {answer}
      </p>
    </details>
  );
}

/* SVG icons */
function GoalIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>; }
function JournalIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>; }
function MealIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>; }
function FinanceIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>; }
function FamilyIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>; }
function CalendarIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>; }

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: 800,
  letterSpacing: "-0.03em",
  marginBottom: "16px",
  lineHeight: 1.15,
};

const sectionSubStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "var(--color-text-secondary)",
  maxWidth: "520px",
  margin: "0 auto",
  lineHeight: 1.7,
};
