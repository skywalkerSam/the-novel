"use client";

import Image from "next/image";
import "~/styles/starboy-logo.css";

export default function StarboyLogo() {
  return (
    <div className="flex flex-row items-center justify-center">
      <a
        href="https://github.com/skywalkerSam/skywalkerSam.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/starboy.svg"
          alt="Starboy Logo"
          width={300}
          height={300}
          className="starboy-logo"
          priority
        ></Image>
      </a>
    </div>
  );
}
