import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import herobg from "../../public/images/hero-bg.png";
import formbg from "../../public/images/hero-3.png";
import { VscCallIncoming } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { TiLocation } from "react-icons/ti";

const Hero = () => {
  const [images, setImages] = useState([])
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    fetch('/api/images')
    .then((res)=>res.json())
    .then((data)=>setImages(data))
  },[])

  useEffect(()=> {
    if (images.length === 0)return
    const interval = setInterval(()=>{
      setCurrentImage((prev)=> (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <div>
      <div
        className="relative h-[500] bg-cover bg-center flex"
        style={{
          backgroundImage: `url(${herobg.src})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0">

        {/* content */}
        <div className="px-15 py-30 max-w-2xl ">
          <h5 className="">Quality services</h5>
          <h1 className="font-bold text-4xl mb-2">
            Specialized, Efficient, and thorough service
          </h1>
          <p className="mb-4">
            We provide Performing tasks using the least amount of time, energy,
            and money{" "}
          </p>

          <div className="mt-10 text-white font-semibold cursor-pointer">
            <Link
              href={"signup"}
              className=" px-5 py-3 rounded bg-amber-600" >
              Get Started Now
            </Link>
            
            <Link
              href={"/"}
              className="border m-3 p-3 rounded bg-amber-400"
            >
              View all Services
            </Link>
          </div>
          </div>
        </div>
      </div>

      <div className="px-25 mt-10 ">
        <div className="flex justify-between items-center p-4 ">
          <div className=" w-100 ">
            <h6>Affordable Solutions</h6>
            <p className="text-3xl font-bold mb-3">
              High-Quality and Friendly Service at Fair Prices
            </p>
            <p className="mb-8 text-sm">
              We provide comprehensive services tailored to your needs.
            </p>
            <Link
              href={"/service"}
              className="bg-amber-500 px-5 p-3 rounded text-white font-semibold"
            >
              Get one now
            </Link>
          </div>

          <div className="w-1/2 flex justify-center transition-opacity duration-1000 ease-in-out">
          {images.length > 0 && (
            <Image
              src={images[currentImage]}
              width={400}
              height={300}
              alt="Service Image"
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
        </div>
        <hr className="font-bold text-2xl mb-4 mt-5" />
      </div>

      <div
        className="relative h-[500] bg-cover bg-center"
        style={{
          backgroundImage: `url(${formbg.src})`,
        }}
      >
        <div className="text-black p-20 flex justify-between px-25 space-x-15">
          <div className="w-[50%] space-y-5 ">
            <h1 className="text-3xl font-semibold mb-5">Find us</h1>
            <div className="flex items-center px-4 bg-amber-400 rounded shadow hover:scale-110 transition duration:500 ease-in">
              <VscCallIncoming className="border p-2 rounded-full w-10 h-10 bg-amber-700 text-white" />
              <div className="p-2">
                <p className="font-semibold"> Call Us</p>
                <p>+08 255 201 888</p>
              </div>
            </div>

            <div className="flex items-center px-4 bg-amber-400 rounded shadow hover:scale-110 transition duration:500 ease-initial">
              <TfiEmail className="border p-2 rounded-full w-10 h-10 bg-amber-700 text-white" />
              <div className="p-2 ">
                <p className="font-semibold"> Email Now</p>
                <p>serveconet@email.com</p>
              </div>
            </div>

            <div className="flex items-center px-4 bg-amber-400 rounded shadow hover:scale-110 transition duration:300 ease-in">
              <TiLocation className="border p-2 rounded-full w-10 h-10 bg-amber-700 text-white" />
              <div className="p-2">
                <p className="font-semibold"> Address</p>
                <p>serveconet Avenue </p>
              </div>
            </div>
          </div>
          <div className="w-1/2  ">
            <div className="leading-7">
              <p>Contact info</p>
              <h1 className="text-3xl font-bold mb-3">Keep In Touch</h1>
              <p className="mb-4">
                We prioritize responding to your inquiries promptly to ensure
                you receive the assistance you need in a timely manner
              </p>
            </div>
            <form action="" className="flex flex-col w-full text-black">
              <input
                type="text"
                placeholder="Name"
                className="p-2 border border-amber-100
                shadow mb-3.5 rounded focus:outline-amber-700 "
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-amber-100
                shadow mb-3.5 rounded focus:outline-amber-700 "
              />
              <input
                type="text"
                placeholder="Message "
                className="p-2 border border-amber-100
                shadow mb-3.5 rounded focus:outline-amber-700 "
              />
            </form>
            <button className="bg-amber-400 text-white w-25 rounded text-xl p-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
