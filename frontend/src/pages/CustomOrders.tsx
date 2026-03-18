import CustomHero from "../components/customorders/CustomHero";
import WhatWeCreate from "../components/customorders/WhatWeCreate";
import ImageGallery from "../components/customorders/CustomGallery";
import CustomProcess from "../components/customorders/CustomProcess";
import Footer from "../components/shared/Footer";
import ContactInfo from "../components/shared/ContactInfo";

export default function CustomOrders() {
  return (
    <>
      
      <CustomHero />
      <WhatWeCreate />
      <CustomProcess />
       <ImageGallery />
      <ContactInfo />
      <Footer />
    </>
  );
}
