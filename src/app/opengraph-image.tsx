import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const runtime = "edge";
export const alt = `${SITE.fullName} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic Open Graph image.
 * No asset file needed — rendered on-the-fly via the edge runtime.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#fafafa",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            {SITE.name.charAt(0)}
          </div>
          <div style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)" }}>
            {SITE.fullName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            {SITE.tagline}
          </div>
          <div style={{ fontSize: "24px", color: "rgba(255,255,255,0.55)" }}>
            AI Systems · Automation · Full-stack Engineering
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "16px",
            color: "rgba(255,255,255,0.4)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
          }}
        >
          <span>{SITE.url.replace("https://", "")}</span>
          <span style={{ fontFamily: "monospace" }}>v2.0</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
