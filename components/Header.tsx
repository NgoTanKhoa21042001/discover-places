import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-3 px-5 z-30 shadow-sm">
      <Link href={"/"} className="flex gap-3 items-center">
        <Image src="/logo.png" alt="" width={50} height={50} />
        <h2 className="text-[25px] text-red-500 tracking-widest">DISCOVER</h2>
      </Link>
      <ul className="flex gap-8 items-center">
        <li className="text-[18px] hover:text-red-500 cursor-pointer">Home</li>
        <li className="text-[18px] hover:text-red-500 cursor-pointer">
          About Us
        </li>
        <li className="text-[18px] hover:text-red-500 cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;
