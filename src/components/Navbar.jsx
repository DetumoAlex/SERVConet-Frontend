import Link from "next/link";
import React from "react";
import { FcServices } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="text-black ">
      <nav className="p-4 px-10 shadow-amber-400 fixed-0">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold flex ">
          <FcServices className="text-2xl"/>
            SERV<span className="text-amber-700">Conet</span>
          </h1>

          <div className="space-x-10 flex ">
            <div className="hover:scale-105 transition duration:300 ease-in font-bold">
              <Link href={"/home"} className="text-amber-400 ">
                Home
              </Link>
            </div>

            <div className="hover:scale-105 transition duration:300 ease-in">
              <Link href={"/service"}>Service</Link>
            </div>

            <div className="hover:scale-105 transition duration:300 ease-in">
              <Link href={"/about"}>About us</Link>
            </div>
            <div className="hover:scale-105 transition duration:300 ease-in">
              <Link href={"contact"}>Contact</Link>
            </div>
          </div>

          <div className=" hover:scale-105 transition duration:300 ease-in">
            <Link
              href={"/book"}
              className="px-4 text-white p-2 text-lg bg-amber-400 rounded "
            >
              Hello
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
