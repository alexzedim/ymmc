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
                <Chip size="sm" color="warning" variant="flat">
                  {version}
                </Chip>
              )}
            </div>
            <div className="flex gap-4 items-center">
              <Button
                as={Link}
                href="https://github.com/TheKing-OfTime/YandexMusicModClient"
                isExternal
                variant="light"
                className={isDark ? "text-white" : "text-gray-900"}
              >
                GitHub
              </Button>
              <Button
                as={Link}
                href="https://discord.gg/HGNKDxwHEH"
                isExternal
                color="secondary"
                variant="flat"
                className={isDark ? "text-white" : "text-gray-900"}
              >
                Discord
              </Button>
              <ThemeSwitcher onThemeChange={setIsDark} />
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-6 pt-32 pb-20 flex items-center justify-center">
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
                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-md border border-purple-400/40 shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
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

                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-md border border-pink-400/40 shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105">
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

                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md border border-blue-400/40 shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
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
