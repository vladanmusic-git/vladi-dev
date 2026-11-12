import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Vladi Mijatovic, AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  let photo = "";
  try {
    const buf = await readFile(
      join(process.cwd(), "public/images/vladi-headshot.png"),
    );
    photo = `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    photo = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* ambient glows */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 560,
            height: 560,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.45), transparent 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -120,
            width: 560,
            height: 560,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.32), transparent 60%)",
            display: "flex",
          }}
        />

        {/* top row: monogram + url */}
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
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
              color: "#05060a",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            VM
          </div>
          <div style={{ display: "flex", color: "#8b93a7", fontSize: 26 }}>
            vladii.com
          </div>
        </div>

        {/* main row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
            <div
              style={{
                display: "flex",
                color: "#22d3ee",
                fontSize: 26,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              AI Developer
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                fontWeight: 800,
                color: "#e9ebf5",
                lineHeight: 1.05,
                marginTop: 16,
              }}
            >
              Vladi Mijatovic
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                color: "#a78bfa",
                marginTop: 20,
              }}
            >
              AI agents, Claude and OpenAI API, React Native and Expo apps.
            </div>
          </div>

          {photo ? (
            <div
              style={{
                display: "flex",
                padding: 4,
                borderRadius: 28,
                background: "linear-gradient(140deg, #8b5cf6, #22d3ee)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                width={280}
                height={300}
                style={{ borderRadius: 24, objectFit: "cover" }}
                alt=""
              />
            </div>
          ) : null}
        </div>

        {/* bottom strip */}
        <div style={{ display: "flex", color: "#5c6478", fontSize: 24 }}>
          Builds the AI toolchain, not just uses it.
        </div>
      </div>
    ),
    { ...size },
  );
}
