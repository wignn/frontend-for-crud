import React from "react";
import Image from "next/image";

export const Bg: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full">
      <Image
        src="https://files.edgestore.dev/93ti9i3vqygrxg8l/myPublicImage/_public/47c2ca68-c36e-45d1-8186-79bb7292814c.jpg" 
        alt="Background"
        layout="fill" 
        objectFit="cover" 
        className="z-0" 
      />
    </div>
  );
};