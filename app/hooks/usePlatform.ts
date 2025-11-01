"use client";

import { useEffect, useState } from "react";

export type Platform = "windows" | "macos-intel" | "macos-arm" | "linux-deb" | "linux-rpm" | "unknown";

async function detectMacArchitecture(): Promise<"arm64" | "x64" | null> {
  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();

  if (!platform.includes("mac")) {
    return null;
  }

  if ((navigator as any).userAgentData && (navigator as any).userAgentData.getHighEntropyValues) {
    try {
      const uaData = await (navigator as any).userAgentData.getHighEntropyValues(["architecture"]);
      if (uaData.architecture === "arm") return "arm64";
      if (uaData.architecture === "x86") return "x64";
    } catch (err) {}
  }

  if (ua.includes("arm") || ua.includes("apple")) {
    return "arm64";
  }
  if (ua.includes("intel") || ua.includes("x86_64") || ua.includes("x86")) {
    return "x64";
  }

  return null;
}

export function usePlatform() {
  const [platform, setPlatform] = useState<Platform>("unknown");

  useEffect(() => {
    async function detectPlatform() {
      if (typeof window === "undefined") return;

      const ua = navigator.userAgent.toLowerCase();
      const platformStr = navigator.platform.toLowerCase();

      if (platformStr.includes("win")) {
        setPlatform("windows");
      } else if (platformStr.includes("mac") || ua.includes("mac")) {
        const arch = await detectMacArchitecture();
        if (arch === "arm64") {
          setPlatform("macos-arm");
        } else if (arch === "x64") {
          setPlatform("macos-intel");
        } else {
          setPlatform("unknown");
        }
      } else if (platformStr.includes("linux")) {
        if (ua.includes("arm") || ua.includes("aarch64")) {
          setPlatform("unknown");
        } else if (ua.includes("x86_64") || ua.includes("amd64")) {
          setPlatform("linux-deb");
        } else {
          setPlatform("linux-rpm");
        }
      }
    }

    detectPlatform();
  }, []);

  return platform;
}
