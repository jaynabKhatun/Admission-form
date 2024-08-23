import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";
import Marque from "../Pages/Marque/Marque";
import Tabline from "../Pages/Tab/Tabline";
import Apply from "../Pages/Apply/Apply";
import Form from "../Pages/Form/Form";

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
    </div>
  );
};

export default Main;
