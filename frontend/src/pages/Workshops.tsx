import WorkshopsHero from "../components/workshops/WorkshopsHero";
import Workshopstypes from "../components/workshops/WorkshopsTypes";
import WorkshopsOrganisations from "../components/workshops/WorkshopsOrganisations";
import WhoCanAttend from "../components/workshops/WhoCanAttend";
import ImageGallery from "../components/workshops/ImageGallery";
import ContactInfo from "../components/shared/ContactInfo";
import Footer from "../components/shared/Footer";

export default function Workshops() {
  return (
    <>
      <WorkshopsHero />
      <Workshopstypes />
      <WorkshopsOrganisations />
      <WhoCanAttend />
      <ImageGallery />
      <ContactInfo />
      <Footer />
    </>
  );
}
