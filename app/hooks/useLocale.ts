"use client";

import { useEffect, useState } from "react";

export function useLocale() {
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.toLowerCase();
      // Check if browser language starts with 'ru' (ru, ru-RU, etc.)
      if (browserLang.startsWith("ru")) {
        setLocale("ru");
      }
    }
  }, []);

  return locale;
}
