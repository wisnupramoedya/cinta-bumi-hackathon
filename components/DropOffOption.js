import React from "react";
import Image from "next/image";
import Select from "react-select";

const options = [
  {
    name: "Blibli Mitra Kebon Sirih",
    address: "Jl. Kebon Sirih 1 no. 1",
    range: 2.6,
    time: "10:00 - 19:00",
  },
  {
    name: "JNE Tanah Abang",
    address: "Jl. Tanah Abang 1 no. 1",
    range: 4.2,
    time: "09:00 - 17:00",
  },
  {
    name: "Alfamart Gondangdia",
    address: "Stasiun Gondangdia, Jl. Wahid Hasyim 1 no. 1",
    range: 4.2,
    time: "08:00 - 21:00",
  },
];

const formatOptionLabel = ({ name, address, range, time }) => (
  <div className="flex flex-col">
    <div className="font-bold text-base">{name}</div>
    <div className="text-xs">
      <div>{address}</div>
      <div>
        {range} km | {time}
      </div>
    </div>
  </div>
);

export default function DropOffOption() {
  return (
    <div className="flex flex-col">
      <Image
        alt="Peta Donasi"
        src="/images/cinta-bumi/donate/map.svg"
        width={344}
        height={275}
      />
      <div className="w-full my-1">
        <label className="inline-block text-sm text-blibli" htmlFor="color">
          Pilih lokasi drop off kamu
        </label>
        <div className="relative flex w-full">
          <Select
            className="block w-full bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none hover:border-gray-400"
            defaultValue={options[0]}
            options={options}
            formatOptionLabel={formatOptionLabel}
          />
        </div>
      </div>
    </div>
  );
}
