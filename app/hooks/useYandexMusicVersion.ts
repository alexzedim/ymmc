"use client";

import { useEffect, useState } from "react";

export function useYandexMusicVersion() {
  const [version, setVersion] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVersion() {
      try {
        const response = await fetch(
          "https://music-desktop-application.s3.yandex.net/stable/latest.yml"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch version");
        }

        const yamlText = await response.text();
        
        // Parse version from YAML (format: "version: 5.x.x")
        const versionMatch = yamlText.match(/version:\s*([^\s]+)/);
        
        if (versionMatch && versionMatch[1]) {
          setVersion(`v${versionMatch[1]}`);
        }
      } catch (error) {
        console.error("Error fetching Yandex Music version:", error);
        setVersion("");
      } finally {
        setLoading(false);
      }
    }

    fetchVersion();
  }, []);

  return { version, loading };
}
