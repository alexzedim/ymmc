"use client";

import { StatBadge } from "./StatBadge";
import { STATS } from "../constants";
import { useLocale } from "../hooks/useLocale";

interface FooterProps {
  isDark: boolean;
}

const footerTexts = {
  en: "Not affiliated with Yandex. Made with opensource and ❤️ by Artem | TheKingOfTime & community.",
  ru: "Не связано с Яндексом. Сделано с открытым исходным кодом и ❤️ Артёмом | TheKingOfTime и сообществом.",
};

export function Footer({ isDark }: FooterProps) {
  const locale = useLocale();
  return (
    <footer className="border-t border-white/20 dark:border-white/10 py-6 backdrop-blur-sm bg-white/5 dark:bg-black/5">
      <div className="container mx-auto px-6">
        <div className="flex gap-6 justify-between items-center flex-wrap">
          <p
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {footerTexts[locale as keyof typeof footerTexts] || footerTexts.en}
          </p>

          <div className="flex gap-3 items-center flex-wrap">
            <StatBadge {...STATS.STARS} isDark={isDark} locale={locale} />
            <StatBadge {...STATS.DOWNLOADS} isDark={isDark} locale={locale} />
            <StatBadge {...STATS.FEATURES} isDark={isDark} locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  );
}
