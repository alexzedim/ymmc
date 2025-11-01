"use client";

import { useState } from "react";
import { Link } from "@heroui/react";
import { LINKS } from "../constants";

export function BoostyButton() {
  const [imageSrc, setImageSrc] = useState(LINKS.BOOSTY_IMAGE_LOCAL);

  const handleImageError = () => {
    // Fallback to remote image if local fails
    if (imageSrc === LINKS.BOOSTY_IMAGE_LOCAL) {
      setImageSrc(LINKS.BOOSTY_IMAGE_REMOTE);
    }
  };

  return (
    <Link
      href={LINKS.BOOSTY_DONATE}
      isExternal
      className="transition-all hover:scale-105 hover:opacity-90 flex items-center"
    >
      <img
        src={imageSrc}
        alt="Support on Boosty"
        className="h-[68px] w-auto rounded-2xl shadow-lg"
        onError={handleImageError}
      />
    </Link>
  );
}
