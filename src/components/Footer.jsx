import Link from "next/link";
import React from "react";
import { FcServices } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
        <div className="flex px-20 p-15 justify-between">
      <div className=" w-[356] h-[140]">
        <h1 className="text-xl font-bold flex ">
          <FcServices className="text-2xl" />
          SERV<span className="text-amber-400">Conet</span>
        </h1>
        <p className="text-sm px-6 leading-2 mb-3">Cleaning Services company</p>
        
        <p className=" w-[350] h-[75]">Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.</p>

      </div>
      <div className="b w-[95] leading-10">
        <h1 className="font-bold text-lg ">Company</h1>
        <div className="flex flex-col font-semibold">
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Services</Link>
            <Link href={'/'}>Contact</Link>
            </div>
      </div>
      <div className=" w-[105] leading-10">
      <h1 className="font-bold text-lg">Know More</h1>
      <div className="flex flex-col font-semibold">
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Services</Link>
            <Link href={'/'}>Contact</Link>
            </div>
      </div>
      <div className="">
        <h1 className="font-bold text-lg mb-3">Newsletter</h1>
        <div className="flex flex-col ">
        <input type="email" placeholder="Email " className="border mb-3 p-2 rounded focus:outline-none"/>
        <button className="bg-amber-500 text-white w-25 rounded text-lg p-2">Send</button>
        </div>
      </div>
      
      </div>
     
      <div className="flex  flex-col bg-white text-black font-bold mb-8 ">
      <hr className="mt-2 "/>
        
        <p className="flex justify-center mt-2">2025 |SERVConet| All Rights Received.</p>
      </div>
    </div>
  );
};

export default Footer;
