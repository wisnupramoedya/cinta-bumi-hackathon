import ScrollContainer from "react-indiana-drag-scroll";
import Link from "next/link";

export default function ImageHorizontalScrollWithLink({ images }) {
  return (
    <section className="bg-white">
      <ScrollContainer>
        <div className="flex space-x-2">
          {images.map((el, index) => (
            <div key={index} className="h-40 flex-none rounded-lg">
              <Link href={el.path}>
                <a>
                  <img src={el.src} className="object-cover h-40" alt="image" />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </ScrollContainer>
    </section>
  );
}
