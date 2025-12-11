"use client";

import { useState } from "react";
import { X } from "lucide-react";

import dynamic from "next/dynamic";

const WelcomeCard = dynamic(() => import("./WelcomeCard"), {
  ssr: false,
});

export default function FirstTimeModal() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("certus-visited");
    }
    return false;
  });

  const handleClose = () => {
    localStorage.setItem("certus-visited", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-2xl w-full">
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <X size={20} />
        </button>

        <WelcomeCard onGetStarted={handleClose} />
      </div>
    </div>
  );
}
