import React from "react";
import ButtonPoster from "./ButtonPoster";

export default function PosterBanner() {
  return (
    <div className="container bg-[url('/images/cinta-bumi/poster.svg')] flex flex-col justify-center rounded-lg">
      <span className="text-sm font-bold text-center text-emerald-800 px-9 my-1">
        Yuk bersama Blibli merawat Bumi kita dan dapatkan Reward
      </span>
      <div className="flex justify-around">
        <ButtonPoster
          href="/cinta-bumi/#products"
          text="Beli Produk Ramah Lingkungan"
        />
        <ButtonPoster href="/cinta-bumi/donate" text="Sumbang Kemasanmu" />
      </div>
    </div>
  );
}
