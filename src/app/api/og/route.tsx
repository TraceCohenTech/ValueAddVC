import { ImageResponse } from "next/og";

export const runtime = "edge";
export const preferredRegion = "iad1"; // Virginia - closest to most US users
export const revalidate = 86400; // Cache for 24 hours

export async function GET() {
  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0e14",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 212, 255, 0.3), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(124, 58, 237, 0.2), transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: "linear-gradient(135deg, #00d4ff, #7c3aed, #10b981)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 36,
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            VC
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Value Add VC
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #10b981 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 20,
          }}
        >
          The VC Tools Hub
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Fund Benchmarking • Unicorn Tracker • SPV Calculator • Founder DD • VC Prompts
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 50,
          }}
        >
          {[
            { value: "9", label: "Tools" },
            { value: "$1.6T+", label: "Tracked" },
            { value: "900+", label: "Funds" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  fontWeight: "bold",
                  color: "#00d4ff",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 18, color: "#6b7280" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );

  return imageResponse;
}
