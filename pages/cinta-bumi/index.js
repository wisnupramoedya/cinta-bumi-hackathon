import React from "react";
import ImageBanner from "../../components/ImageBanner";
import Line from "../../components/Line";
import ImageHorizontalScrollWithLink from "../../components/ImageHorizontalScrollWithLink";
import PosterBanner from "../../components/PosterBanner";
import ProductWithTitle from "../../components/ProductWithTitle";

const images = [
  {
    src: "/images/cinta-bumi/education-2.svg",
    path: "/cinta-bumi/rewards",
  },
  {
    src: "/images/cinta-bumi/education-1.svg",
    path: "#",
  },
  {
    src: "/images/cinta-bumi/education-3.svg",
    path: "#",
  },
];

export default function CintaBumiPage() {
  return (
    <div>
      <ImageBanner />
      <div className="px-3">
        <Line className="h-2" />
        <ImageHorizontalScrollWithLink images={images} />
        <Line className="h-2" />
        <PosterBanner />
        <Line className="h-2" />
        <ProductWithTitle title="Mau bepergian? Jangan lupa bawa ini">
          Test
        </ProductWithTitle>
      </div>
    </div>
  );
}
