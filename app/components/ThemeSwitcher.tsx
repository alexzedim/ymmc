"use client";

import { useState } from "react";
import { useLocale } from "../hooks/useLocale";

interface ThemeSwitcherProps {
  onThemeChange: (isDark: boolean) => void;
}

const themeLabels = {
  dark: {
    en: "Dark",
    ru: "Тёмная",
  },
  light: {
    en: "Light",
    ru: "Светлая",
  },
};

export function ThemeSwitcher({ onThemeChange }: ThemeSwitcherProps) {
  const [isDark, setIsDark] = useState(true);
  const locale = useLocale();

  const handleChange = (value: boolean) => {
    setIsDark(value);
    onThemeChange(value);
  };

  return (
    <div className="flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => handleChange(true)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          isDark
            ? "bg-white/90 dark:bg-white/90 text-gray-900 shadow-sm"
            : "text-gray-700 hover:text-gray-900"
        }`}
      >
        🌙 {themeLabels.dark[locale as keyof typeof themeLabels.dark] || themeLabels.dark.en}
      </button>
      <button
        onClick={() => handleChange(false)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          !isDark
            ? "bg-white/90 dark:bg-white/90 text-gray-900 shadow-sm"
            : "text-gray-700 hover:text-gray-900"
        }`}
      >
        🌞 {themeLabels.light[locale as keyof typeof themeLabels.light] || themeLabels.light.en}
      </button>
    </div>
  );
}
