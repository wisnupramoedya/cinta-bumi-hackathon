import React from "react";

export default function PickUpOption() {
  return (
    <div className="w-full my-1">
      <label className="inline-block text-sm text-blibli" htmlFor="color">
        Kapan kardus/plastikmu siap kami jemput?
      </label>
      <div className="relative flex w-full">
        <input
          type="date"
          className="block w-full py-3 pl-4 pr-8 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none hover:border-gray-400"
        ></input>
      </div>
    </div>
  );
}
