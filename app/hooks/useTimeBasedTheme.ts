"use client";

import { useEffect, useState } from "react";

function getDefaultTheme(): boolean {
  if (typeof window === "undefined") return true;
  
  const hour = new Date().getHours();
  // Light theme (false) between 11:00-17:00, dark theme (true) otherwise
  return hour < 11 || hour >= 17;
}

export function useTimeBasedTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(getDefaultTheme());
  }, []);

  return { isDark, setIsDark };
}
