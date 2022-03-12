import BottomNav from "../../components/BottomNav";
import Line from "../../components/Line";
import ListSetting from "../../components/ListSetting";
import MemberBadge from "../../components/MemberBadge";
import WalletAccount from "../../components/WalletAccount";

export default function AccountPage() {
  return (
    <>
      <div className="pb-14 bg-gray-200">
        <MemberBadge />
        <Line className="h-2" />
        <WalletAccount />
        <Line className="h-2" />
        <ListSetting />
      </div>
      <BottomNav />
    </>
  );
}
