import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const wallets = [
  {
    title: "Blipay",
    text: "Rp0",
  },
  {
    title: "PayLater",
    text: "Aktifkan",
  },
  {
    title: "Rewards",
    text: "160 poin",
  },
];

export default function WalletAccount() {
  return (
    <div className="bg-white flex space-x-1 justify-around py-3 px-4">
      {wallets.map((el, index) => (
        <div key={index} className="flex flex-col justify-center px-2">
          <div className="text-slate-400 mb-2">
            <FontAwesomeIcon icon={faWallet} className="text-sm mr-1" />
            <span className="text-xs">{el.title}</span>
          </div>
          <div className="font-semibold text-center">{el.text}</div>
        </div>
      ))}
    </div>
  );
}
