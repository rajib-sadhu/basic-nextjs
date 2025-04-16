"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Next App</h1>
      <ul className="flex gap-5 items-center text-xl">
        <li>
          <Link
            href="/"
            className={pathName == "/" ? "text-red-400 underline" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/data-fetch"
            className={
              pathName == "/data-fetch" ? "text-red-400 underline" : ""
            }
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathName == "/about" ? "text-red-400 underline" : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
