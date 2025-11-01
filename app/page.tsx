"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { VibeBackground } from "./components/VibeBackground";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useYandexMusicVersion } from "./hooks/useYandexMusicVersion";
import { LINKS, COLORS } from "./constants";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const { version } = useYandexMusicVersion();

  return (
    <>
      <VibeBackground isDark={isDark} />
      <div className="h-screen flex flex-col relative">
        <Header isDark={isDark} version={version} onThemeChange={setIsDark} />

        <main className="flex-1 container mx-auto px-6 flex flex-col items-center justify-between">
          <div className="flex-1" />
          
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-12">
          {/* Hero Title */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent uppercase">
              Yandex Music Mod Client
            </h1>
            <p className={`text-2xl font-caveat ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`} style={{ fontFamily: "var(--font-caveat)" }}>
              Enhance your Yandex Music experience with powerful features
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-6 items-center flex-wrap justify-center">
            {/* Download Button - Yandex Yellow Style */}
            <Button
              as={Link}
              href={LINKS.PATCHER_DOWNLOAD}
              isExternal
              size="lg"
              style={{
                backgroundColor: COLORS.YANDEX_YELLOW,
              }}
              className="px-14 py-5 text-lg font-medium text-black hover:opacity-90 active:opacity-80 transition-all shadow-lg hover:shadow-xl rounded-full"
            >
              Download
            </Button>

            {/* Donate Button - Boosty Image */}
            <Link
              href={LINKS.BOOSTY_DONATE}
              isExternal
              className="transition-all hover:scale-105 hover:opacity-90 flex items-center"
            >
              <img
                src={LINKS.BOOSTY_IMAGE}
                alt="Support on Boosty"
                className="h-[68px] w-auto rounded-2xl shadow-lg"
              />
            </Link>
          </div>

          {/* Legal Warning */}
          <p className={`text-sm text-center max-w-2xl ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}>
            ⚠️ This modification does NOT provide free access to Yandex Music features. An active subscription is still required to use the service.
          </p>
          </div>
          
          <div className="flex-1" />
        </main>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}
