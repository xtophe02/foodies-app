"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navlink({ href, children }) {
  const path = usePathname();
  return (
    <>
      <Link
        className={`font-medium ${
          path.startsWith(href) ? "font-extrabold" : "text-gray-600"
        } hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
