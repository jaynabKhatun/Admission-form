import { IoStarOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
const Box = () => {
  return (
    <div className=" ">
      <div className="rounded-3xl p-4 bg-purple-950  ">

        <div className="md:flex  rounded-3xl  h-auto border  shadow-lg  p-4  md:max-w-4xl mx-auto   text-white">
          {/* 1st col */}

          <div className=" lg:ml-6 flex md:flex-col  justify-between  lg:text-4xl   md:p-6  ">
            <h1 className=" ">Pakistan</h1>
            <h1 className="text-2xl">VS</h1>
            <h1>England</h1>
          </div>

          {/* 2 */}
          <div className="lg:w-48 flex md:flex-col justify-between  md:p-4  px-2   md:text-xl font-mono ">
            
            <div className="md:p-4 rounded-md    bg-purple-900/50">
              <div className="flex justify-between ">
                <h1>356/10 </h1>
                <h1>(50)</h1>
              </div>
            </div>
            <div className="md:p-4  rounded-md   bg-purple-900/50">
              <div className="flex justify-between ">
                <h1>232/7</h1>
                <h1>(40.1)</h1>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="md:w-48 md:p-4 px-2 flex justify-between md:flex-col font-semibold">

            <div className="md:p-4 rounded-md   md:bg-purple-900/50">
              <div className="flex justify-between ">
                <h1>W%</h1>
                <h1>40%</h1>
              </div>
            </div>
            <div className="md:p-4 rounded-md  md:bg-purple-900/50">
              <div className="flex justify-between  ">
                <h1>W%</h1>
                <h1>60%</h1>
              </div>
            </div>
          </div>

          {/* 3rd col */}
          <div className=" md:w-48 p-4 font-bold  ">
            <div className="  grid grid-rows-3 md:gap-6 gap-2    ">

              <div className="px-6 py-5 rounded-md  bg-purple-900/50">
                <div className="flex justify-between ">
                  <h1>T1</h1>
                  <h1>2.5</h1>
                </div>
              </div>
              <div className="px-4 py-5  rounded-md   bg-purple-900/50">
                <div className="flex justify-between ">
                  <h1>X</h1>
                  <h1>25</h1>
                </div>
              </div>
              <div className="px-4 py-5 rounded-md   bg-purple-900/50">
                <div className="flex justify-between ">
                  <h1>T2</h1>
                  <h1>1.3</h1>
                </div>
              </div>
            </div>
          </div>


          {/* 4 */}
          <div className=" md:w-36  p-4  md:text-6xl  ">
            <div className="  flex flex-col md:gap-10 gap-2  ">
              <div className="p-5 rounded-2xl bg-purple-900/50 items-center  ">
                <IoStarOutline />
              </div>
              <div className=" p-5  rounded-2xl items-center bg-purple-900/50  ">
                <BsBarChartLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
