import Banner from "../../Banner/Banner";
import Tabline from "../../Tab/Tabline";
import Marque from "../../Marque/Marque";
import Form from "../../Form/Form";
import Apply from "../../Apply/Apply";

const Home = () => {
  return (
    <div>
      <Marque />
      <Banner></Banner>
      <Tabline />
      <Apply></Apply>
      <Form></Form>
    </div>
  );
};

export default Home;
