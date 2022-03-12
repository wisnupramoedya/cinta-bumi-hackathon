import Image from "next/image";
import React from "react";

export default function ImageBanner() {
  return (
    <div className="w-full h-24 relative">
      <Image
        src="/images/cinta-bumi/banner.svg"
        layout="fill"
        objectFit="contain"
        alt="Banner Cinta Bumi"
      />
    </div>
  );
}
