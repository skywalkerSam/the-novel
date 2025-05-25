"use client";

import NextLogo from "~/app/_components/next-logo";
import { ModeToggle } from "~/components/ui/theme-toggle";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-center justify-items-end py-12">
      <div className="mr-2">
        <ModeToggle></ModeToggle>
      </div>
      <footer>
        <div>
          <p className="text-xs">Built w/</p>
          <div className="w-36">
            <NextLogo></NextLogo>
          </div>
          <p className="text-xs">
            &copy; 12025,{" "}
            <a
              href="https://github.com/skywalkerSam/"
              className="hover:text-sky-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              @skywalkerSam
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
