import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { FULL_NAME } from "@/data/contact";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#05070a",
          backgroundImage:
            "linear-gradient(rgba(34,255,156,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,255,156,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#22ff9c", fontSize: 28 }}>
          {t("greeting")}
        </div>
        <div
          style={{
            display: "flex",
            color: "#e6edf3",
            fontSize: 64,
            fontWeight: 700,
            marginTop: 20,
          }}
        >
          {FULL_NAME}
        </div>
        <div style={{ display: "flex", color: "#22d3ee", fontSize: 32, marginTop: 20 }}>
          {t("role")}
        </div>
      </div>
    ),
    size,
  );
}
