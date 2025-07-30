import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-screen bg-transparent text-[var(--green)]">
      {" "}
      {/* dark:bg-gray-900 */}
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
          <button
            type="button"
            className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            {/* <span className="sr-only">Open user menu</span> */}
            {/* <img
              className="h-8 w-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            ></img> */}
            <UserButton></UserButton>
          </button>
          {/* <!-- Dropdown menu --> */}
          {/* <div
            className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow-sm dark:divide-gray-600 dark:bg-gray-700"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm  ">
                Bonnie Green
              </span>
              <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700  dark:text-gray-200 dark:hover:bg-gray-600 "
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700  dark:text-gray-200 dark:hover:bg-gray-600 "
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700  dark:text-gray-200 dark:hover:bg-gray-600 "
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700  dark:text-gray-200 dark:hover:bg-gray-600 "
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div> */}
          {/* <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500  focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-user"
        >
          <ul className="L mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
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
            {/* <li>
              <Link
                href="#"
                className="block rounded-sm px-3 py-2 hover:text-green-900 md:p-0"
              >
                You
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 hover:text-green-900 md:p-0"
              >
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
