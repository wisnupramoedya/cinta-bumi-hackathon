import React from "react";
import ImageBanner from "../../components/ImageBanner";
import Line from "../../components/Line";
import ImageHorizontalScrollWithLink from "../../components/ImageHorizontalScrollWithLink";
import PosterBanner from "../../components/PosterBanner";
import ProductWithTitle from "../../components/ProductWithTitle";
import ImageHorizontalScroll from "../../components/ImageHorizontalScroll";
import Image from "next/image";

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

const packages = [
  {
    src: "/images/cinta-bumi/product-1.svg",
  },
  {
    src: "/images/cinta-bumi/product-2.svg",
  },
  {
    src: "/images/cinta-bumi/product-3.svg",
  },
  {
    src: "/images/cinta-bumi/product-1.svg",
  },
  {
    src: "/images/cinta-bumi/product-2.svg",
  },
  {
    src: "/images/cinta-bumi/product-3.svg",
  },
];

const products = [
  {
    src: "/images/cinta-bumi/product-4.svg",
  },
  {
    src: "/images/cinta-bumi/product-5.svg",
  },
  {
    src: "/images/cinta-bumi/product-6.svg",
  },
  {
    src: "/images/cinta-bumi/product-4.svg",
  },
  {
    src: "/images/cinta-bumi/product-5.svg",
  },
  {
    src: "/images/cinta-bumi/product-6.svg",
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
        <ProductWithTitle
          id="package"
          title="Mau bepergian? Jangan lupa bawa ini"
        >
          <ImageHorizontalScroll images={packages} height={157} />
        </ProductWithTitle>
        <Line className="h-2" />
        <ProductWithTitle id="products" title="Olah sampahmu sendiri">
          <ImageHorizontalScroll images={products} height={157} />
        </ProductWithTitle>
        <Line className="h-2" />
      </div>
      <Image
        id="categories"
        src="/images/cinta-bumi/shop-category.svg"
        height={352}
        width={375}
        alt="Banner Cinta Bumi"
      />
    </div>
  );
}
