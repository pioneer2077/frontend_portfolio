"use client";
import React, { useEffect } from "react";
import IconButton from "./IconButton";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export default function Nav() {
  useEffect(() => {
    window.document.body.classList.add("dark");
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
    bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white shadow-lg"
    >
      <IconButton text={"how are you?"} icon={<BsPlus size="32" />} />
      <IconButton
        text={"how are you?"}
        icon={<BsFillLightningFill size="20" />}
      />
      <IconButton text={"how are you?"} icon={<FaPoo size="20" />} />
      <IconButton text={"how are you?"} icon={<BsGearFill size="22" />} />
      <IconButton text={"how are you?"} icon={<FaFire size="28" />} />
    </div>
  );
}
