"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchFormReset() {
  const router = useRouter();

  //   const reset = () => {
  //     const form = document.querySelector(".search-form")!;

  //     if (form instanceof HTMLFormElement) form.reset();
  //   };

  const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form;
    form?.reset();
    // Navigate to clear ?query=... from the URL
    router.push("/search");
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/search" className="search-btn text-green-950">
        <X className="size-6" />
      </Link>
    </button>
  );
}
