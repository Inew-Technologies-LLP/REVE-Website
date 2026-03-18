import Hero from "../components/home/Hero";
import Blog from "../components/home/Blog";
import Bestsellers from "../components/home/Bestsellers";
import Chef from "../components/home/Chef";
import Testimonials from "../components/home/Testimonials";
import Kunafa from "../components/home/Kunafa";
import Gallery from "../components/home/Gallery";
import ContactInfo from "../components/shared/ContactInfo";
import Footer from "../components/shared/Footer";






const Home = () => {
  return (
    <>
      <Hero />
      <Blog />
      <Bestsellers />
      <Chef />
      <Testimonials />
      <Kunafa />
      <Gallery />
      <ContactInfo />
      <Footer />

    </>
  );
};

export default Home;
