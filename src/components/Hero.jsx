import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" bg-hero h-[800px] lg:h-[1100px] bg-no-repeat bg-cover bg-center ">
      <div className="container flex justify-around h-full mx-auto ">
        {/* text */}
        <div className="flex flex-col justify-center lg:pl-80">
          {/* pretitle */}
          <div className="flex items-center font-bold uppercase text-black">
            <div className="w-10 h-[5px] bg-red-500 mr-3"></div>Classy Picks
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-extrabold mb-4 text-red-500">
            AUTUMN PRICE DROP<br />
            <span className="font-semibold text-white">WOMENS APPAREL</span>
          </h1>
          <Link
            to={"/"}
            className="self-start font-bold text-2xl text-slate-100 uppercase border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
