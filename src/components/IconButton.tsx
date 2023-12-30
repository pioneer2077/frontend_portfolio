"use client";
import React from "react";
type Props = {
  icon: React.ReactNode;
  //   onClick: () => void;
  //   hoverAnimation: boolean;
  //   bgColor: string;
  //   color: string;
  text: string;
};
export default function IconButton({
  icon,
  text,
}: //   onClick,
//   hoverAnimation,
//   bgColor,
//   color,
Props) {
  return (
    // <button
    //   onClick={onClick}
    //   className={`rounded-full  p-2 ${
    //     hoverAnimation ? "hover:animate-pulse" : ""
    //   } ${bgColor} ${color}`}
    // >
    //   {icon}
    // </button>
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}
