import {
  faCartShopping,
  faCircleCheck,
  faHouse,
  faList,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const iconNavs = [
  {
    icon: faHouse,
    text: "Beranda",
    path: "/",
  },
  {
    icon: faList,
    text: "Kategori",
    path: "/categories",
  },
  {
    icon: faCartShopping,
    text: "Keranjang",
    path: "/cart",
  },
  {
    icon: faCircleCheck,
    text: "Official Store",
    path: "/official-store",
  },
  {
    icon: faUser,
    text: "Akun",
    path: "/account",
  },
];

export default function BottomNav() {
  const router = useRouter();

  return (
    <nav className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
      <div className="flex justify-between">
        {iconNavs.map((el, index) => (
          <Link key={index} href={el.path}>
            <a
              className={`w-full focus:text-blibli hover:text-blibli justify-center inline-block text-center pt-2 pb-1 ${
                router.pathname == el.path ? "text-blibli" : "text-gray-500"
              }`}
            >
              <FontAwesomeIcon icon={el.icon} className="text-xl" />
              <span className="block text-xs">{el.text}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
