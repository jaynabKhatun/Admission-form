import { IoStarOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
const Box3 = () => {
  return (
    <div className=" ">
      <div className="rounded-3xl p-4 bg-purple-950  ">
        <div className="md:flex  rounded-3xl  h-auto border  shadow-lg  p-4  lg:max-w-3xl md:max-w-2xl mx-auto   text-white">
          {/* 1st col */}

          <div className=" lg:ml-6 flex md:flex-col  justify-between  lg:text-4xl   md:p-6  ">
            <h1 className=" ">Pakistan</h1>
            <h1 className="text-2xl">VS</h1>
            <h1>England</h1>
          </div>

          {/* 2 */}
          <div className="md:w-48 md:p-4 px-2 flex justify-center items-center  font-semibold mt-4">
            <div className="md:p-4 rounded-md  bg-purple-900/50">
              <div className=" px-6  ">
                <h1 >Starts At</h1>
                <h1 className="text-center">10 PM</h1>
              </div>
            </div>
          </div>

          {/* 4rd col */}
          <div className=" md:w-48 md:p-4 font-bold mt-4 ">
            <div className="flex md:flex-col flex-row   md:gap-6 gap-2     ">
              <div className="md:p-7 p-4 rounded-md  bg-purple-900/50 md:w-full w-1/3">
                <div className="flex justify-between items-center ">
                  <h1>T1</h1>
                  <h1>2.5</h1>
                </div>
              </div>
              <div className=" md:p-7 p-4 rounded-md  bg-purple-900/50 md:w-full w-1/3">
                <div className="flex justify-between items-center">
                  <h1>X</h1>
                  <h1>25</h1>
                </div>
              </div>
              <div className="md:p-7 p-4 rounded-md  bg-purple-900/50 md:w-full w-1/3">
                <div className="flex justify-between items-center">
                  <h1>T2</h1>
                  <h1>1.3</h1>
                </div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className=" md:w-36  p-4  md:text-5xl  ">
            <div className="  flex md:flex-col md:gap-28 gap-2  ">
              <div className="p-5 rounded-2xl bg-purple-900/50 items-center flex justify-center md:w-full w-1/2  ">
                <IoStarOutline className="" />
              </div>

              <div className="p-5 rounded-2xl bg-purple-900/50 items-center flex justify-center md:w-full w-1/2  ">
                <BsBarChartLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box3;
