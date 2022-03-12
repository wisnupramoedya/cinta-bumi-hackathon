import React from "react";
import Link from "next/link";

export default function ButtonConfirmation() {
  return (
    <div className="flex justify-around">
      <Link href="/cinta-bumi">
        <a className="w-2/5 bg-gray-200 rounded-md p-2 mr-1 mb-2 flex justify-center drop-shadow-lg">
          <span className="text-sm font-semibold text-gray-700 text-center leading-none">
            Kembali
          </span>
        </a>
      </Link>
      <Link href="/cinta-bumi/rewards">
        <a className="w-3/5 bg-amber-600 rounded-md p-2 ml-1 mb-2 flex justify-center drop-shadow-lg">
          <span className="text-sm font-semibold text-white text-center leading-none">
            Jadwalkan Penjemputan
          </span>
        </a>
      </Link>
    </div>
  );
}
