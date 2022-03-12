import React from "react";
import StepProgress from "./StepProgress";

export default function RewardsProgressStep() {
  return (
    <div className="bg-cintabumi flex flex-col rounded-lg">
      <div className="bg-lime-500 flex justify-center rounded-lg">
        <div className="text-white text-center">
          <span>Peluang • 58XP</span>
        </div>
      </div>
      <div className="my-4 mx-8">
        <StepProgress />
      </div>
      <div className="text-black text-xs flex justify-center my-3">
        <div className="w-3/4">
          Terima kasih telah menyumbang <span className="font-bold">58 </span>
          kemasan. Kamu telah turut membantu:
          <ul className="list-disc list-inside">
            <li>
              Tanam <span className="font-bold">5</span> pohon
            </li>
            <li>
              Hemat <span className="font-bold">20</span> KW energi
            </li>
            <li>
              Hemat <span className="font-bold">155</span> liter air{" "}
            </li>
            <li>
              Selamatkan <span className="font-bold">5</span> m<sup>3</sup>{" "}
              lahan tempat pembuangan sampah
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
