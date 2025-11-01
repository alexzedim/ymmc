"use client";

import { Button, Link } from "@heroui/react";
import { BoostyButton } from "./BoostyButton";
import { LINKS, COLORS } from "../constants";
import { useLocale } from "../hooks/useLocale";
import { usePlatform } from "../hooks/usePlatform";
import { useLatestRelease } from "../hooks/useLatestRelease";

interface HeroSectionProps {
  isDark: boolean;
}

const subtitles = {
  en: "Enhance your Yandex Music experience with powerful features",
  ru: "Улучшите свой опыт использования Яндекс Музыки с мощными функциями",
};

const warnings = {
  en: "⚠️ This modification does NOT provide free access to Yandex Music features. An active subscription is still required to use the service.",
  ru: "⚠️ Эта модификация НЕ предоставляет бесплатный доступ к функциям Яндекс Музыки. Активная подписка по-прежнему необходима для использования сервиса.",
};

const downloadButton = {
  en: "Download",
  ru: "Скачать",
};

export function HeroSection({ isDark }: HeroSectionProps) {
  const locale = useLocale();
  const platform = usePlatform();
  const { downloadUrl, loading } = useLatestRelease(platform);

  const downloadHref = downloadUrl || LINKS.PATCHER_DOWNLOAD;

  return (
    <main className="flex-1 container mx-auto px-6 flex flex-col items-center justify-between">
      <div className="flex-1" />

      {/* Hero Content */}
      <div className="flex flex-col items-center gap-12">
        {/* Hero Title */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent uppercase">
            Yandex Music Mod Client
          </h1>
          <p
            className={`text-2xl font-caveat ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            {subtitles[locale as keyof typeof subtitles] || subtitles.en}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 items-center flex-wrap justify-center">
          {/* Download Button - Yandex Yellow Style */}
          <Button
            as={Link}
            href={downloadHref}
            isExternal
            size="lg"
            isLoading={loading}
            style={{
              backgroundColor: COLORS.YANDEX_YELLOW,
            }}
            className="px-14 py-5 text-lg font-medium text-black hover:opacity-90 active:opacity-80 transition-all shadow-lg hover:shadow-xl rounded-full"
          >
            {downloadButton[locale as keyof typeof downloadButton] || downloadButton.en}
          </Button>

          {/* Donate Button - Boosty Image */}
          <BoostyButton />
        </div>

        {/* Legal Warning */}
        <p
          className={`text-sm text-center max-w-2xl ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {warnings[locale as keyof typeof warnings] || warnings.en}
        </p>
      </div>

      <div className="flex-1" />
    </main>
  );
}
