import { Link } from "react-router-dom";

const Tabline = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2  transition cursor-pointer">
        <div className=" flex justify-around border-r-2  font-semibold text-white   bg-[rgb(208,109,2)]">

          <Link to={"/"} className="md:px-4 px-2  transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85]  hover:text-black  duration-300  border-r-2  ">
            Home
          </Link>
          <Link to={"/programs"} className="md:px-4 px-2  transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] hover:text-black  duration-300  border-r-2">
            Programs
          </Link>
          <Link to={"/service"} className="md:px-4 px-2  transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] hover:text-black  duration-300  border-r-2">
            Student Service
          </Link>
          <Link to={"/contacts"} className="md:px-4 px-2  transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] hover:text-black  duration-300  border-r-2">
            Contacts Us
          </Link>
          <Link  className="md:px-4 px-2  transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] hover:text-black duration-300  ">
            Apply Here
          </Link>
        </div>

        <div className="bg-[#F18B1C]"></div>
      </div>
    </div>
  );
};

export default Tabline;
