import HamperHero from "../components/hamper/HamperHero";
import HamperPrinciples from "../components/hamper/HamperPrinciples";
import HamperAbout from "../components/hamper/HamperAbout";
import HamperGallery from "../components/hamper/HamperGallery";
import ContactInfo from "../components/shared/ContactInfo";
import Footer from "../components/shared/Footer";


const Hamper = () => {
  return (
    <>
      <HamperHero />
      <HamperPrinciples />
        <HamperAbout />
        <HamperGallery />
      <ContactInfo />
      <Footer />

    </>
  );
};

export default Hamper;
