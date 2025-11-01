"use client";

import { VibeBackground } from "./components/VibeBackground";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { useYandexMusicVersion } from "./hooks/useYandexMusicVersion";
import { useTimeBasedTheme } from "./hooks/useTimeBasedTheme";

export default function Home() {
  const { isDark, setIsDark } = useTimeBasedTheme();
  const { version } = useYandexMusicVersion();

  return (
    <>
      <VibeBackground isDark={isDark} />
      <div className="h-screen flex flex-col relative">
        <Header isDark={isDark} version={version} onThemeChange={setIsDark} />

        <HeroSection isDark={isDark} />

        <Footer isDark={isDark} />
      </div>
    </>
  );
}
