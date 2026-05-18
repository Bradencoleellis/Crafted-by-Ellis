"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Phase = "home" | "launching" | "app";

export default function PhoneMockup() {
  const [phase, setPhase] = useState<Phase>("home");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("launching"), 2400),
      setTimeout(() => setPhase("app"), 2900),
      setTimeout(() => {
        setPhase("home");
        setTick((t) => t + 1);
      }, 7500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [tick]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* iPhone outer frame */}
      <div style={{
        width: "270px",
        height: "560px",
        background: "linear-gradient(160deg, #2C2C2E 0%, #1C1C1E 40%, #141414 100%)",
        borderRadius: "52px",
        padding: "10px",
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.12),
          0 32px 80px rgba(0,0,0,0.6),
          0 0 60px rgba(255,132,0,0.1),
          inset 0 1px 0 rgba(255,255,255,0.08)
        `,
        position: "relative",
        flexShrink: 0,
      }}>
        {/* Side buttons */}
        <div style={{ position: "absolute", left: "-3px", top: "108px", width: "3px", height: "32px", background: "#3A3A3C", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: "-3px", top: "152px", width: "3px", height: "56px", background: "#3A3A3C", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: "-3px", top: "218px", width: "3px", height: "56px", background: "#3A3A3C", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", right: "-3px", top: "160px", width: "3px", height: "72px", background: "#3A3A3C", borderRadius: "0 2px 2px 0" }} />

        {/* Screen */}
        <div style={{
          width: "100%",
          height: "100%",
          borderRadius: "42px",
          overflow: "hidden",
          position: "relative",
          background: "#000",
        }}>
          {/* Dynamic Island */}
          <div style={{
            position: "absolute",
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "96px",
            height: "28px",
            background: "#000",
            borderRadius: "14px",
            zIndex: 20,
          }} />

          {/* ── HOME SCREEN ── */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 20%, #1a0a00 0%, #0D0D10 50%, #060608 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "52px 20px 24px",
            transition: "opacity 0.4s ease",
            opacity: phase === "app" ? 0 : 1,
            zIndex: phase === "app" ? 1 : 2,
          }}>
            {/* Clock */}
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ fontSize: "52px", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1 }}>
                9:41
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginTop: "6px" }}>
                Sunday, May 17
              </div>
            </div>

            {/* Small placeholder app grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 48px)",
              gap: "10px",
              marginBottom: "20px",
              opacity: 0.45,
            }}>
              {["#3B82F6","#10B981","#8B5CF6","#EF4444","#F59E0B","#06B6D4","#EC4899","#14B8A6"].map((c, i) => (
                <div key={i} style={{ width: 48, height: 48, borderRadius: "13px", background: c }} />
              ))}
            </div>

            {/* Renew+ app icon */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "7px",
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              transform: phase === "launching" ? "scale(1.2)" : "scale(1)",
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: phase === "launching"
                  ? "0 0 0 5px rgba(255,132,0,0.35), 0 0 32px rgba(255,132,0,0.55)"
                  : "0 8px 24px rgba(0,0,0,0.5)",
                transition: "box-shadow 0.3s ease",
                position: "relative",
              }}>
                <Image src="/AppIcon.png" alt="Renew+" fill style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
                Renew+
              </span>
            </div>

            {/* Home indicator */}
            <div style={{
              position: "absolute",
              bottom: "10px",
              width: "100px",
              height: "4px",
              background: "rgba(255,255,255,0.28)",
              borderRadius: "2px",
            }} />
          </div>

          {/* ── LAUNCH FLASH ── */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "#FF8F00",
            opacity: phase === "launching" ? 0.18 : 0,
            transition: "opacity 0.2s ease",
            zIndex: 3,
            pointerEvents: "none",
          }} />

          {/* ── APP SCREEN (real screenshot) ── */}
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: phase === "app" ? 2 : 1,
            opacity: phase === "app" ? 1 : 0,
            transform: phase === "app" ? "scale(1)" : "scale(0.88)",
            transition: "opacity 0.45s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1)",
            overflow: "hidden",
          }}>
            <Image
              src="/app-screenshot.png"
              alt="Renew+ app"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

