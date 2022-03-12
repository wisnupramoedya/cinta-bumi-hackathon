import ButtonConfirmation from "../../components/ButtonConfirmation";
import CountDonation from "../../components/CountDonation";
import DropOffSelectForm from "../../components/DropOffSelectForm";
import ImageBanner from "../../components/ImageBanner";
import SelectForm from "../../components/SelectForm";
import { useStoreDropOff } from "../../store/dropOff";
import Line from "../../components/Line";
import DropOffOption from "../../components/DropOffOption";
import PickUpOption from "../../components/PickUpOption";
import BESOption from "../../components/BESOption";

const locations = [
  {
    value: 1,
    text: "Jl. Budi Kemuliaan no. 1",
  },
  {
    value: 2,
    text: "Jl. Pegangsaan Barat no. 32",
  },
];

export default function DonatePage() {
  const dropOffs = useStoreDropOff((state) => state.drop_offs);

  const activeDropOffValue = () => {
    let item = dropOffs.find((item) => item.active === true);
    return item ? item.value : -1;
  };

  return (
    <div>
      <ImageBanner />
      <CountDonation />
      <div className="px-3">
        <SelectForm list={locations} />
        <DropOffSelectForm />
        <Line className="h-1" />
        {
          {
            1: <DropOffOption />,
            2: <PickUpOption />,
            3: <BESOption />,
          }[activeDropOffValue()]
        }
        <Line className="h-3" />
        <ButtonConfirmation />
      </div>
    </div>
  );
}
