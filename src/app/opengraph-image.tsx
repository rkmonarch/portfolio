import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/data";

export const alt = `${site.name} speaking at Solana Summit`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/solana-summit.png"));
  const src = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "#fcfcfc",
          color: "#111",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={300}
          height={300}
          style={{ borderRadius: 24, objectFit: "cover" }}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div
            style={{ marginTop: 24, fontSize: 34, lineHeight: 1.3, color: "#555" }}
          >
            Software engineer building products across markets, crypto, and AI.
          </div>
          <div style={{ marginTop: 40, fontSize: 26, color: "#888" }}>
            rkmonarch.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
