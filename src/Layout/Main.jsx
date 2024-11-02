import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";
import Marque from "../Pages/Marque/Marque";
import Tabline from "../Pages/Tab/Tabline";
import Apply from "../Pages/Apply/Apply";
import Form from "../Pages/Form/Form";
import Box from "../Pages/Box/Box";
import Example from "../Pages/Example/Example";
import Box2 from "../Pages/Box2/Box2";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Marque />
      <Banner></Banner>
      <Tabline />
      <Apply></Apply>
      <Form></Form>
      <Footer />
      <Box />
      <Example />
      <Box2 />
    </div>
  );
};

export default Main;
