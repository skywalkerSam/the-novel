"use client";

import type { JSX } from "react";
import Image from "next/image";

export default function NextLogo(): JSX.Element {
  return (
    <div>
      <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
        <Image
          className="m-1 transition-opacity hover:opacity-80 dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </a>
    </div>
  );
}
