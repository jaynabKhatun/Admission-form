import banner from "../../../public/assets/logo/7869021.jpg";
const Banner = () => {
  return (
    <div className="gird  grid-cols-1 flex lg:grid-cols-2 ">
      <div className="  md:w-1/3 ">
        <img width={300} height={300} src={banner} alt="school logo" />
      </div>


      <div
        className=" h-auto w-full bg-center  md:bg-[length:1000px_300px] bg-[length:500px_200px] bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/banner/3.jpg)`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
