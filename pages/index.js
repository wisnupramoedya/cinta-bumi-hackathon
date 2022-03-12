import BottomNav from "../components/BottomNav";
import ImageHorizontalScroll from "../components/ImageHorizontalScroll";
import Line from "../components/Line";
import SearchBar from "../components/SearchBar";
import WalletHorizontalScroll from "../components/WalletHorizontalScroll";
import FavoriteHorizontalScroll from "../components/FavoriteHorizontalScroll";

const images = [
  {
    src: "https://www.static-src.com/siva/asset//03_2022/OVO-daily-maret-mobile-carousel-10mar-min.jpg",
  },
  {
    src: "https://www.static-src.com/siva/asset//03_2022/home-mobile-kaget-march-10mar.jpg",
  },
];

function Home() {
  return (
    <>
      <div className="py-14">
        <SearchBar />
        <Line className="h-1" />
        <ImageHorizontalScroll images={images} height={171} />
        <div className="bg-white flex justify-end px-3 py-2">
          <p className="text-sm text-blibli font-bold">Lihat semua promo</p>
        </div>
        <WalletHorizontalScroll />
        <Line className="h-1" />
        <FavoriteHorizontalScroll />
      </div>
      <BottomNav />
    </>
  );
}

export default Home;
