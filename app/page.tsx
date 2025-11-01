"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
} from "@heroui/react";
import { VibeBackground } from "./components/VibeBackground";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useYandexMusicVersion } from "./hooks/useYandexMusicVersion";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const { version } = useYandexMusicVersion();

  return (
    <>
      <VibeBackground isDark={isDark} />
      <div className="h-screen flex flex-col relative">
        {/* Header */}
        <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                YMMC
              </span>
              {version && (
                <Chip 
                  size="sm" 
                  color="warning" 
                  variant="flat"
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {version}
                </Chip>
              )}
            </div>
            <div className="flex gap-3 items-center">
              <Link
                href="https://github.com/TheKing-OfTime/YandexMusicModClient"
                isExternal
                className="px-4 py-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 backdrop-blur-sm transition-all flex items-center gap-2 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className={isDark ? "text-white" : "text-gray-900"}>GitHub</span>
              </Link>
              <Link
                href="https://discord.gg/HGNKDxwHEH"
                isExternal
                className="px-4 py-2 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-all flex items-center gap-2 text-sm font-medium"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="text-white">Discord</span>
              </Link>
              <ThemeSwitcher onThemeChange={setIsDark} />
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-6 pt-24 pb-20 flex flex-col items-center justify-start gap-12">
          {/* Hero Title */}
          <div className="text-center space-y-4 mt-16">
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
              href="https://github.com/TheKing-OfTime/YandexMusicModPatcher"
              isExternal
              size="lg"
              className="px-14 py-5 text-lg font-medium bg-[#ffcc00] text-black hover:bg-[#ffdb4d] active:bg-[#e6b800] transition-all shadow-lg hover:shadow-xl rounded-full"
            >
              Download
            </Button>

            {/* Donate Button - Boosty Image */}
            <Link
              href="https://boosty.to/thekingoftime/donate"
              isExternal
              className="transition-all hover:scale-105 hover:opacity-90 flex items-center"
            >
              <img
                src="https://github.com/user-attachments/assets/7b341f16-6513-4138-a3c5-b5892b062f63"
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
        </main>

        {/* Footer */}
        <footer className="border-t border-white/20 dark:border-white/10 py-6 backdrop-blur-sm bg-white/5 dark:bg-black/5">
          <div className="container mx-auto px-6">
            <div className="flex gap-6 justify-between items-center flex-wrap">
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Not affiliated with Yandex. Made with opensource and ❤️  by Artem | TheKingOfTime
                & community.
              </p>

              <div className="flex gap-3 items-center flex-wrap">
                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/15 to-purple-600/15 backdrop-blur-md border border-purple-400/25 shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                  <span className="text-xl drop-shadow-lg">⭐</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-base font-bold drop-shadow-sm ${
                        isDark ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      514+
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      stars
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/15 to-pink-600/15 backdrop-blur-md border border-pink-400/25 shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105">
                  <span className="text-xl drop-shadow-lg">📥</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-base font-bold drop-shadow-sm ${
                        isDark ? "text-pink-300" : "text-pink-700"
                      }`}
                    >
                      10K+
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      downloads
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-blue-600/15 backdrop-blur-md border border-blue-400/25 shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
                  <span className="text-xl drop-shadow-lg">✨</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-base font-bold drop-shadow-sm ${
                        isDark ? "text-blue-300" : "text-blue-700"
                      }`}
                    >
                      15+
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      features
                    </span>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
