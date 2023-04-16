import Link from "next/link";
import React from "react";

interface NavitemsProps {
  href: string;
  label: string;
  pathIcon: string;
}

const Navitems = ({ href, label, pathIcon }: NavitemsProps) => {
  const active = href === window.location.pathname;
  const link =
    "flex gap-1 p-1 transition ease-in-out duration-500" +
    (active ? " bg-white text-blue-900 rounded-l-lg" : "");
  return (
    <Link className={link} href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={pathIcon} />
      </svg>
      {label}
    </Link>
  );
};

export default Navitems;
