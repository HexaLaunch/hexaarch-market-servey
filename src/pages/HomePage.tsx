import HeroSlider from "../components/home/HeroSlider";
import Reit from "../components/home/Reit";
import Roi from "../components/home/Roi";
import Significance from "../components/home/Significance";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Reit />
      <Roi />
      <Testimonials />
      <Significance />
      <Footer />
    </div>
  );
};

export default HomePage;
