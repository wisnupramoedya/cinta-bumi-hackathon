import React from "react";
import CintaBumiShare from "../../components/CintaBumiShare";
import ImageBanner from "../../components/ImageBanner";
import ImageHorizontalScroll from "../../components/ImageHorizontalScroll";
import Line from "../../components/Line";
import PosterBanner from "../../components/PosterBanner";
import RewardsProgressStep from "../../components/RewardsProgressStep";

const images = [
  {
    src: "/images/cinta-bumi/rewards/tumbler-none.svg",
  },
  {
    src: "/images/cinta-bumi/rewards/rp-none.svg",
  },
  {
    src: "/images/cinta-bumi/rewards/composter-none.svg",
  },
];

export default function RewardsPage() {
  return (
    <div>
      <ImageBanner />
      <div className="px-3">
        <RewardsProgressStep />
        <Line className="h-3" />
        <ImageHorizontalScroll images={images} height={340} />
        <Line className="h-3" />
        <PosterBanner />
        <Line className="h-3" />
        <CintaBumiShare />
      </div>
    </div>
  );
}
