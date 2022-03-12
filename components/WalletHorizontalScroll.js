import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import ScrollContainer from "react-indiana-drag-scroll";

const wallets = [
  {
    name: "Blipay",
    value: "Rp0",
  },
  {
    name: "Voucher",
    value: "Lihat voucher",
  },
  {
    name: "Blibli Rewards",
    value: "160 poin",
  },
  {
    name: "Pay Later",
    value: "Aktifkan",
  },
];

export default function WalletHorizontalScroll() {
  return (
    <section className="bg-white py-2">
      <ScrollContainer>
        <div className="h-16 px-3 space-x-2 flex">
          {wallets.map((el, index) => (
            <div key={index} className="h-16 flex-none">
              <div className="bg-slate-100 rounded-lg p-2 flex flex-col flex-nowrap">
                <div className="text-sm text-gray-500">{el.name}</div>
                <div className="flex flex-row">
                  <FontAwesomeIcon
                    icon={faWallet}
                    className="text-blibli text-base mr-1"
                  />
                  <p className="text-black text-sm">{el.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollContainer>
    </section>
  );
}
