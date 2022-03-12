import ScrollContainer from "react-indiana-drag-scroll";

export default function ImageHorizontalScroll({ images, height }) {
  return (
    <section className="bg-white">
      <ScrollContainer>
        <div className="container flex space-x-2">
          {images.map((el, index) => (
            <img
              key={index}
              className="rounded-lg w-10/12"
              src={el.src}
              height={height}
              alt="image"
            />
          ))}
        </div>
      </ScrollContainer>
    </section>
  );
}
