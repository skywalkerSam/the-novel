"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form")!;

    if (form instanceof HTMLFormElement) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/search" className="search-btn text-green-950">
        <X className="size-5" />
      </Link>
    </button>
  );
};
export default SearchFormReset;
