import React from "react";

export default function ProductWithTitle({ id, title, children }) {
  return (
    <div id={id}>
      <p className="text-sm font-bold">{title}</p>
      {children}
    </div>
  );
}
