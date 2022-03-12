import React from "react";

export default function SelectForm({ list }) {
  return (
    <div className="w-full">
      <label className="inline-block text-sm text-blibli" htmlFor="color">
        Lokasi kamu
      </label>
      <div className="relative flex w-full">
        <select className="block w-full py-3 pl-4 pr-8 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none hover:border-gray-400">
          <option disabled>Select...</option>
          {list.map((el, index) => (
            <option key={index} value={el.value}>
              {el.text}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
