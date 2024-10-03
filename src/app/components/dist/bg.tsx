import React from "react";
import Image from "next/image";

export const Bg: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full">
      <Image
        src="/bg.jpg" 
        alt="Background"
        layout="fill" 
        objectFit="cover" 
        className="z-0" 
      />
    </div>
  );
};