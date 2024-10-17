import BannerSection from "./BannerSection";
import FeaturedFacilities from "./FeaturedFacilities/FeaturedFacilities";
import Footer from "./Footer/Footer";
import HowItWorksSection from "./HowItWorks/HowItWorksSection";
import PartnersSection from "./PartnersSection/PartnersSection";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <BannerSection />
      {/* featured facilities */}
      <FeaturedFacilities />
      {/* How it works */}
      <HowItWorksSection />
      {/* Testimonial */}
      <Testimonial />
      {/* Our Partners */}
      <PartnersSection />
      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Home;
