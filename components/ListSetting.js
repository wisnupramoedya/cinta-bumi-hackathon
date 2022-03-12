import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";

const settings = [
  {
    name: "Profil",
    path: "/path",
  },
  {
    name: "Daftar Pesanan",
    path: "/path",
  },
  {
    name: "Pengembalian",
    path: "/path",
  },
  {
    name: "Cinta Bumi XP",
    path: "/cinta-bumi/rewards",
  },
  {
    name: "Chat",
    path: "/path",
  },
  {
    name: "Wishlist",
    path: "/path",
  },
  {
    name: "Pembayaran Rutin",
    path: "/path",
  },
  {
    name: "Voucher",
    path: "/path",
  },
  {
    name: "Ulasan",
    path: "/path",
  },
  {
    name: "Diskusi Produk",
    path: "/path",
  },
  {
    name: "Buku Alamat",
    path: "/path",
  },
  {
    name: "Pusat Resolusi",
    path: "/path",
  },
  {
    name: "Seller Favorit",
    path: "/path",
  },
  {
    name: "Langganan",
    path: "/path",
  },
];

export default function ListSetting() {
  return (
    <div className="flex flex-col py-3 px-4 bg-white space-y-4">
      {settings.map((el, index) => (
        <Link key={index} href={el.path}>
          <a>
            <div className="flex justify-between">
              <span>{el.name}</span>
              <FontAwesomeIcon icon={faAngleRight} className="text-slate-400" />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
