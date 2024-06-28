import Footer from "../homepage/Footer";
import HeroSection from "../homepage/HeroSection";
import Navbar from "../homepage/Navbar";
import OurPartners from "../homepage/OurPartners";
import SectionFour from "../homepage/SectionFour";
import SectionThree from "../homepage/SectionThree";
import SectionTwo from "../homepage/SectionTwo";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionFour />
      <SectionThree />
      <OurPartners />
      <Footer />
    </div>
  );
};

export default HomePage;
