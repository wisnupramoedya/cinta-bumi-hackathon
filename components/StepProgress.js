import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const stepValue = [
  {
    value: 0,
    player: "Pemula",
    title: "Langkahmu sudah tepat!",
    text: "Kamu tergerak untuk mencintai bumi dan sadar akan pentingnya gaya hidup cinta lingkungan. Kamu sudah mengambil langkah pertamamu.",
  },
  {
    value: 100,
    player: "Penggiat",
    title: "Pertahankan konsistensimu!",
    text: "Kamu telah melakukan langkah positif secara konsisten. Gaya hidup cinta Bumi sudah menjadi bagian dari hidupmu.",
  },
  {
    value: 500,
    player: "Penggerak",
    title: "Influencer Cinta Bumi",
    text: "Konsistensimu dalam gaya hidup cinta Bumi telah menginspirasi teman-teman kamu juga untuk mencintai Bumi.",
  },
  {
    value: 1000,
    player: "Panutan",
    title: "Role Model!",
    text: "Keseriusan dan ketekunanmu mencintai Bumi dan menginspirasi sesama telah membawa perubahan yang sangat positif. Selamat!",
  },
];

export default function StepProgress() {
  return (
    <div className="pt-8">
      <ProgressBar
        percent={(58 / 100) * 25}
        filledBackground="rgb(132 204 22)"
        unfilledBackground="rgb(209 213 219)"
        height={5}
      >
        {stepValue.map((el, index) => (
          <Step key={index} transition="scale">
            {({ accomplished }) => (
              <div className="relative bg-blue-50">
                <div className="absolute -translate-x-4 -translate-y-full">
                  <div
                    key={index}
                    className="text-xs text-lime-500 font-semibold flex flex-col items-center p-1"
                  >
                    <div>{el.value} XP</div>
                    <div>{el.player}</div>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faCircle}
                  className={`${
                    accomplished ? "text-lime-500" : "text-gray-300"
                  }`}
                />
              </div>
            )}
          </Step>
        ))}
      </ProgressBar>
    </div>
  );
}
