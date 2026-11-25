import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = `${siteConfig.name} — Neobrutalist Component Library`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fffbf5",
        padding: "56px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          border: "5px solid #000000",
          boxShadow: "12px 12px 0px 0px #000000",
          padding: "52px",
        }}
      >
        {/* Top Row: Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffe566",
              border: "3px solid #000000",
              boxShadow: "4px 4px 0px 0px #000000",
              padding: "10px 20px",
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "0.06em",
              color: "#000000",
            }}
          >
            47 COMPONENTS • 6 PRESETS + THEME BUILDER
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ff8a00",
              border: "3px solid #000000",
              boxShadow: "4px 4px 0px 0px #000000",
              padding: "10px 20px",
              fontSize: "22px",
              fontWeight: 900,
              color: "#000000",
            }}
          >
            {siteConfig.version.toUpperCase()}
          </div>
        </div>

        {/* Center: Logo + Title + Description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="96"
              height="96"
              fill="none"
            >
              <rect
                x="7"
                y="7"
                width="23"
                height="23"
                fill="#ffe566"
                stroke="#000000"
                strokeWidth="2.5"
              />
              <rect
                x="2"
                y="2"
                width="23"
                height="23"
                fill="#ff8a00"
                stroke="#000000"
                strokeWidth="2.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 6.5H19.5V15.5H11.5V20.5H7.5V6.5ZM11.5 9.75V12.25H15.75V9.75H11.5Z"
                fill="#000000"
              />
            </svg>

            <div
              style={{
                display: "flex",
                fontSize: "88px",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#000000",
                lineHeight: 1,
              }}
            >
              {siteConfig.name.toUpperCase()}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "30px",
              fontWeight: 600,
              color: "#404040",
              lineHeight: 1.4,
              maxWidth: "920px",
            }}
          >
            Build bold Neobrutalist interfaces faster. Pull ready-to-use
            shadcn/ui components and customize themes live.
          </div>
        </div>

        {/* Bottom Row: CLI pill + stack label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5efe6",
              border: "3px solid #000000",
              boxShadow: "4px 4px 0px 0px #000000",
              padding: "12px 18px",
              fontSize: "17px",
              fontWeight: 700,
              color: "#000000",
              whiteSpace: "nowrap",
            }}
          >
            npx shadcn@latest add {siteConfig.url}/r/button.json
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "0.05em",
              color: "#000000",
              whiteSpace: "nowrap",
            }}
          >
            NEXT.JS • REACT
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
