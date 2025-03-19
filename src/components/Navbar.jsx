"use client"

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FcServices } from "react-icons/fc";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleNavigation = (path) =>{
    console.log(`Navigating to: ${path}`)
    setShowModal(false)
    router.push(path)
  }

  // hide navbar on signup pages
  if (router.pathname === "/signupClient" || router.pathname === "/signupVendor") {
    return null;
  }

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
              <Link href={"/"} className="text-amber-400 ">
                Home
              </Link>
            </div>

            <div className="hover:scale-105 transition duration:300 ease-in">
              <Link href={"/services"}>Services</Link>
            </div>

            <div className="hover:scale-105 transition duration:300 ease-in">
              <Link href={"/About"}>About us</Link>
            </div>
            <div className="hover:scale-105 transition duration:300 ease-in">
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>

          <div className="hover:scale-105 transition duration-100 ease-in">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 text-white p-1 font-bold text-lg bg-amber-400 rounded"
            >
              SignUp
            </button>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-amber-200 p-6 rounded-lg shadow-lg text-center w-1/4">
            <h2 className="text-xl font-bold mb-4 ">Sign Up As</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleNavigation("/signupClient")}
                className="block px-6 py-2 bg-amber-600 text-white rounded w-full"
              >
                Client
              </button>
              <button
                onClick={() => {
                  console.log("Vendor button clicked");
                  handleNavigation("/signupVendor");
                }}
                className="block px-6 py-2 bg-amber-400 text-white rounded  w-full"
              >
                Vendor
              </button>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-white text-black rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
