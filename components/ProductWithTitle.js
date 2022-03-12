import React from "react";

export default function ProductWithTitle({ title, children }) {
  return (
    <div>
      <p className="text-sm font-bold">{title}</p>
    </div>
  );
}
