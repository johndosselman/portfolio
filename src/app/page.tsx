import Navbar from "@/components/navbar/navbar"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-stone-950 absolute w-full  font-cousine">
      <Navbar/>
      <section className="" style={{backgroundImage: `url('/blocks.jpg')`, backgroundSize: 'cover'}}>
        <div className="m-auto h-screen relative flex flex-col justify-evenly lg:w-large">
        <div>
          <h1 className="select-none text-stone-200 text-7xl font-roboto-light">
            John Dosselman
          </h1>
          <h2 className="select-none text-blue-400 text-7xl font-roboto-light">
            software developer
          </h2>
        </div>
        <div className="text-stone-200 flex flex-col gap-5 max-w-xs">
          <h3 className=" text-xl">THEME</h3>
          
              <Link
                href=""
                className=" px-5 py-2 text-center border border-b-2 border-stone-200 rounded-md hover:text-green-600 hover:border-green-600 transition ease-in-out duration-200"
              >
                Modern
              </Link>
           
              <Link
                href=""
                className="px-5 py-2 text-center border border-b-2 border-stone-200 rounded-md hover:text-green-600 hover:border-green-600 transition ease-in-out duration-200"
              >
                Sleek
              </Link>
            
              <Link
                href=""
                className="px-5 py-2 text-center border border-b-2 border-stone-200 rounded-md hover:text-green-600 hover:border-green-600 transition ease-in-out duration-200"
              >
                Striking
              </Link>
           
          </div>
          </div>
      </section>
      <div className="h-screen"></div>
    </div>
  );
}
