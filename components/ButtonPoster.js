import React from "react";
import Link from "next/link";

export default function ButtonPoster({ href, text }) {
  return (
    <Link href={href}>
      <a className="w-5/12 bg-lime-500 rounded-xl p-2 mb-2 flex justify-center">
        <span className="text-sm font-semibold text-white text-center leading-none">
          {text}
        </span>
      </a>
    </Link>
  );
}
