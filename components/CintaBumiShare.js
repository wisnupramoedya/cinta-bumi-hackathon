import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const shareData = {
  title: "Blibli Cinta Bumi",
  text: "Cintai bumi untuk masa depan!",
  url: "https://www.blibli.com",
};

const shareClick = async () => {
  await navigator.share(shareData);
};

export default function CintaBumiShare() {
  return (
    <div
      className="bg-amber-500 flex rounded-lg items-center justify-center cursor-pointer"
      onClick={shareClick}
    >
      <div className="text-lg font-bold text-white p-3">
        Bagikan Aksi Cinta Bumi Kamu
      </div>
      <FontAwesomeIcon icon={faShareNodes} className="text-black text-3xl" />
    </div>
  );
}
