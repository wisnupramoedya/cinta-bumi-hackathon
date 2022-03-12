import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faBagShopping,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { useStoreCounter } from "../store/counter";

export default function CountDonation() {
  const count = useStoreCounter((state) => state.count);
  const addCount = useStoreCounter((state) => state.addCount);
  const removeCount = useStoreCounter((state) => state.removeCount);

  return (
    <div className="bg-cintabumi flex flex-col rounded-lg">
      <div className="bg-lime-500 flex justify-center rounded-lg">
        <div className="text-white text-center">
          <span>Kemasan yang mau kamu sumbang</span>
        </div>
      </div>
      <div className="flex justify-around my-3">
        <div className="flex flex-col space-y-2">
          <div className="flex text-emerald-700">
            <FontAwesomeIcon icon={faBox} className="text-2xl mr-2" />
            <p className="text-base">Kardus</p>
          </div>
          <div className="flex text-emerald-700">
            <FontAwesomeIcon icon={faBagShopping} className="text-2xl mr-2" />
            <p className="text-base">Plastik</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-1">
            <button
              onClick={addCount}
              className="bg-lime-500 rounded-md px-2 py-1"
            >
              <FontAwesomeIcon icon={faPlus} className="text-emerald-700" />
            </button>
            <input
              type="text"
              className="rounded-md px-2 py-1 w-9 drop-shadow-lg"
              value={count}
            />
            <button
              onClick={removeCount}
              className="bg-lime-500 rounded-md px-2 py-1"
            >
              <FontAwesomeIcon icon={faMinus} className="text-emerald-700" />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="form-check form-switch">
              <input
                className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
