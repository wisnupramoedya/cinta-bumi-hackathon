import React from "react";
import StepProgress from "./StepProgress";

export default function RewardsProgressStep() {
  return (
    <div className="bg-cintabumi flex flex-col rounded-lg">
      <div className="bg-lime-500 flex justify-center rounded-lg">
        <div className="text-white text-center">
          <span>Penggiat • 102XP</span>
        </div>
      </div>
      <div className="my-4 mx-8">
        <StepProgress />
      </div>
      <div className="text-black text-xs flex justify-center my-3">
        <div className="w-3/4">
          Terima kasih telah menyumbang <span className="font-bold">102 </span>
          kemasan. Kamu telah turut membantu:
          <ul className="list-disc list-inside">
            <li>
              Tanam <span className="font-bold">10</span> pohon
            </li>
            <li>
              Hemat <span className="font-bold">40</span> KW energi
            </li>
            <li>
              Hemat <span className="font-bold">310</span> liter air{" "}
            </li>
            <li>
              Selamatkan <span className="font-bold">10</span> m<sup>3</sup>{" "}
              lahan tempat pembuangan sampah
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
