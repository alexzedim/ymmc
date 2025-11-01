import { StatBadge } from "./StatBadge";
import { STATS } from "../constants";

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  return (
    <footer className="border-t border-white/20 dark:border-white/10 py-6 backdrop-blur-sm bg-white/5 dark:bg-black/5">
      <div className="container mx-auto px-6">
        <div className="flex gap-6 justify-between items-center flex-wrap">
          <p
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Not affiliated with Yandex. Made with opensource and ❤️ by Artem |
            TheKingOfTime & community.
          </p>

          <div className="flex gap-3 items-center flex-wrap">
            <StatBadge {...STATS.STARS} isDark={isDark} />
            <StatBadge {...STATS.DOWNLOADS} isDark={isDark} />
            <StatBadge {...STATS.FEATURES} isDark={isDark} />
          </div>
        </div>
      </div>
    </footer>
  );
}
