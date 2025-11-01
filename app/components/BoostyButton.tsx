"use client";

import { useState, useEffect } from "react";
import { Link } from "@heroui/react";
import { LINKS } from "../constants";

export function BoostyButton() {
  const [imageSrc, setImageSrc] = useState<string>(LINKS.BOOSTY_IMAGE_REMOTE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Try to load local image first
    const img = new Image();
    img.onload = () => {
      setImageSrc(LINKS.BOOSTY_IMAGE_LOCAL);
      setIsLoading(false);
    };
    img.onerror = () => {
      // Local image failed, use remote as fallback
      setImageSrc(LINKS.BOOSTY_IMAGE_REMOTE);
      setIsLoading(false);
    };
    img.src = LINKS.BOOSTY_IMAGE_LOCAL;
  }, []);

  return (
    <Link
      href={LINKS.BOOSTY_DONATE}
      isExternal
      className="transition-all hover:scale-105 hover:opacity-90 flex items-center"
    >
      <img
        src={imageSrc}
        alt=""
        className="h-[68px] w-auto rounded-2xl shadow-lg"
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}
      />
    </Link>
  );
}
