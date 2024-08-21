import React from "react";

const Tabline = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2  transition cursor-pointer">

        <div className=" flex justify-around border-r-2 font-semibold text-white   bg-[rgb(208,109,2)]">
        <button className="px-4 hover:text-black transition-colors duration-300  border-r-2  ">Home</button>
        <button className="px-4 hover:text-black transition-colors duration-300  border-r-2">Programs</button>
        <button className="px-4 hover:text-black transition-colors duration-300  border-r-2">Student Service</button>
        <button className="px-4 hover:text-black transition-colors duration-300  border-r-2">Contacts Us</button>
        <button className="px-4 hover:text-black transition-colors duration-300  ">Apply Here</button>
        </div>

        <div className="bg-[#F18B1C]"></div>
      </div>
    </div>
  );
};

export default Tabline;
