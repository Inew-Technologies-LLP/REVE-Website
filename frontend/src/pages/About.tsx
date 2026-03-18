import AboutHero from "../components/about/AboutHero";
import AboutAction from "../components/about/AboutAction";
import AboutChef from "../components/about/AboutChef";
import AboutPrinciples from "../components/about/AboutPrinciples";
import AboutGallery from "../components/about/AboutGallery";
import WhatWeDo from "../components/about/WhatWeDo";
import ContactInfo from "../components/shared/ContactInfo";

import Footer from "../components/shared/Footer";

export default function About() {
  return (
    <>
    
      <AboutHero />
      <AboutAction />
      <AboutChef />
      <AboutPrinciples />
      <AboutGallery />
      <WhatWeDo />
      <ContactInfo />
      <Footer />
    </>
  );
}
