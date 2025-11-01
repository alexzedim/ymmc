"use client";

import { useEffect, useState } from "react";
import type { Platform } from "./usePlatform";

const PLATFORM_SUFFIXES: Record<Platform, string | null> = {
  "windows": "Setup.exe",
  "macos-intel": "x64.dmg",
  "macos-arm": "arm64.dmg",
  "linux-deb": "amd64.deb",
  "linux-rpm": "x86_64.rpm",
  "unknown": null,
};

interface Release {
  downloadUrl: string | null;
  version: string | null;
  loading: boolean;
}

export function useLatestRelease(platform: Platform): Release {
  const [release, setRelease] = useState<Release>({
    downloadUrl: null,
    version: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchRelease() {
      const suffix = PLATFORM_SUFFIXES[platform];
      
      if (!suffix) {
        setRelease({ downloadUrl: null, version: null, loading: false });
        return;
      }

      try {
        const res = await fetch(
          "https://api.github.com/repos/TheKing-OfTime/YandexMusicModPatcher/releases/latest"
        );
        const data = await res.json();
        const asset = (data.assets || []).find((a: any) =>
          a.name.endsWith(suffix)
        );

        setRelease({
          downloadUrl: asset?.browser_download_url || null,
          version: data.tag_name || null,
          loading: false,
        });
      } catch (error) {
        setRelease({ downloadUrl: null, version: null, loading: false });
      }
    }

    if (platform !== "unknown") {
      fetchRelease();
    } else {
      setRelease({ downloadUrl: null, version: null, loading: false });
    }
  }, [platform]);

  return release;
}
