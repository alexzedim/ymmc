"use client";

import { useState } from "react";
import { VibeBackground } from "./components/VibeBackground";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { useYandexMusicVersion } from "./hooks/useYandexMusicVersion";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
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
