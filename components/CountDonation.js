import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function CountDonation() {
  return (
    <div className="bg-cintabumi flex flex-col rounded-lg">
      <div className="bg-lime-500 flex justify-center rounded-lg">
        <div className="text-white text-center">
          <span>Kemasan yang mau kamu sumbang</span>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <div className="flex flex-col space-y-2">
          <div className="flex text-emerald-800">
            <FontAwesomeIcon icon={faBox} className="text-2xl mr-2" />
            <p className="text-base">Kardus</p>
          </div>
          <div className="flex text-emerald-800">
            <FontAwesomeIcon icon={faBagShopping} className="text-2xl mr-2" />
            <p className="text-base">Plastik</p>
          </div>
        </div>
      </div>
    </div>
  );
}
