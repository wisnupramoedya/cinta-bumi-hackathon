import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Link from "next/link";

const favorites = [
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjE2LjQ2MTUiIGN5PSIxNS45OTk5IiByPSIxNC42NjY3IiBmaWxsPSIjREFGM0ZGIi8+CiAgICA8cGF0aCBkPSJNMTIuNDU2MiAxNC42OTk5SDYuNDU2MjJDNC45ODI4OCAxNC42OTk5IDMuNzg5NTUgMTMuNTA2NiAzLjc4OTU1IDEyLjAzMzJWNS45OTcyM0MzLjc4OTU1IDQuNTIzOSA0Ljk4Mjg4IDMuMzMwNTcgNi40NTYyMiAzLjMzMDU3SDEyLjQ1NjJDMTMuOTI5NiAzLjMzMDU3IDE1LjEyMjkgNC41MjM5IDE1LjEyMjkgNS45OTcyM1YxMi4wMzMyQzE1LjEyMjkgMTMuNTA1MiAxMy45Mjk2IDE0LjY5OTkgMTIuNDU2MiAxNC42OTk5WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgogICAgPHBhdGggZD0iTTI2LjQ1NjIgMTQuNjk5OUgyMC40NTYyQzE4Ljk4MjkgMTQuNjk5OSAxNy43ODk2IDEzLjUwNjYgMTcuNzg5NiAxMi4wMzMyVjUuOTk3MjNDMTcuNzg5NiA0LjUyMzkgMTguOTgyOSAzLjMzMDU3IDIwLjQ1NjIgMy4zMzA1N0gyNi40NTYyQzI3LjkyOTYgMy4zMzA1NyAyOS4xMjI5IDQuNTIzOSAyOS4xMjI5IDUuOTk3MjNWMTIuMDMzMkMyOS4xMjI5IDEzLjUwNTIgMjcuOTI5NiAxNC42OTk5IDI2LjQ1NjIgMTQuNjk5OVoiIGZpbGw9IiM2QTUyRUIiLz4KICAgIDxwYXRoIGQ9Ik0xMi40NTYyIDI4LjY2NEg2LjQ1NjIyQzQuOTgyODggMjguNjY0IDMuNzg5NTUgMjcuNDcwNyAzLjc4OTU1IDI1Ljk5NzNWMTkuOTYxM0MzLjc4OTU1IDE4LjQ4OCA0Ljk4Mjg4IDE3LjI5NDcgNi40NTYyMiAxNy4yOTQ3SDEyLjQ1NjJDMTMuOTI5NiAxNy4yOTQ3IDE1LjEyMjkgMTguNDg4IDE1LjEyMjkgMTkuOTYxM1YyNS45OTczQzE1LjEyMjkgMjcuNDcwNyAxMy45Mjk2IDI4LjY2NCAxMi40NTYyIDI4LjY2NFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KICAgIDxwYXRoIGQ9Ik0yNi40NTYyIDI4LjY2NEgyMC40NTYyQzE4Ljk4MjkgMjguNjY0IDE3Ljc4OTYgMjcuNDcwNyAxNy43ODk2IDI1Ljk5NzNWMTkuOTYxM0MxNy43ODk2IDE4LjQ4OCAxOC45ODI5IDE3LjI5NDcgMjAuNDU2MiAxNy4yOTQ3SDI2LjQ1NjJDMjcuOTI5NiAxNy4yOTQ3IDI5LjEyMjkgMTguNDg4IDI5LjEyMjkgMTkuOTYxM1YyNS45OTczQzI5LjEyMjkgMjcuNDcwNyAyNy45Mjk2IDI4LjY2NCAyNi40NTYyIDI4LjY2NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMuODQ1MTgiIHkxPSIzLjUxMTkiIHgyPSIzLjg0NTE4IiB5Mj0iMTQuNzcwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTdFM0ZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC45OTc0IiBzdG9wLWNvbG9yPSIjMDA5NURBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIzLjcwNDY5IiB5MT0iMTcuMjk0OSIgeDI9IjMuNzA0NjkiIHkyPSIyOC44MzU2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMEQyNUEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjk5OTMiIHN0b3AtY29sb3I9IiNGMDlFMTkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjE3LjgwMzYiIHkxPSIxNy42NDgiIHgyPSIxNy44MDM2IiB5Mj0iMjguOTkwMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjIuNTA5NjdlLTA3IiBzdG9wLWNvbG9yPSIjRjc5QTlEIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC45OTcxIiBzdG9wLWNvbG9yPSIjRUYzQjQyIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==",
    name: "Lihat Semua",
    path: "/path",
  },
  {
    src: "https://www.static-src.com/siva/asset///11_2020/digital-aggr.png",
    name: "Tagihan & Isi Ulang",
    path: "/path",
  },
  {
    src: "/images/icon.svg",
    name: "Cinta Bumi",
    path: "/cinta-bumi",
  },
  {
    src: "https://www.static-src.com/siva/asset///11_2020/travel-aggr.png",
    name: "Travel",
    path: "/path",
  },
  {
    src: "https://www.static-src.com/siva/asset///03_2022/FBC.png",
    name: "Festival Cantik",
    path: "/path",
  },
  {
    src: "https://www.static-src.com/siva/asset///03_2022/minyak_murah.png",
    name: "Minyak Murah",
    path: "/path",
  },
  {
    src: "https://www.static-src.com/siva/asset///03_2022/Widget-Logo-WoF-96x96.png",
    name: "Festival Denim",
    path: "/path",
  },
];

export default function FavoriteHorizontalScroll() {
  return (
    <section className="bg-white py-2">
      <ScrollContainer>
        <div className="px-3 space-x-2 flex">
          {favorites.map((el, index) => (
            <div key={index} className="w-14 flex-none">
              <Link href={el.path}>
                <a>
                  <div className="flex justify-center">
                    <img src={el.src} alt={el.name} width={32} height={32} />
                  </div>
                  <div className="text-center text-slate-400 text-xs">
                    {el.name}
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </ScrollContainer>
    </section>
  );
}
