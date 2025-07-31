import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-screen bg-transparent text-[var(--green)]">
      {" "}
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          href="https://github.com/skywalkersam/the-novel"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/starboy.svg" className="h-8" alt="Starboy Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-green-900">
            {" "}
            The Novel
          </span>
        </a>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <UserButton></UserButton>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-user"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className="block rounded-sm px-3 py-2 hover:text-green-900 md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-sm px-3 py-2 hover:text-green-900 md:p-0"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-sm px-3 py-2 hover:text-green-900 md:p-0"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
