import React from "react";
import Banner from "../../Banner/Banner";
import Tabline from "../../Tab/Tabline";
import Marque from "../../Marque/Marque";

const Home = () => {
  return (
    <div>
      <Marque />
      <Banner></Banner>
      <Tabline />
    </div>
  );
};

export default Home;
