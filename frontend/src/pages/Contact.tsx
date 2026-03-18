import ContactOrders from "../components/contact/ContactOrders";
import Footer from "../components/shared/Footer";
import ContactInfo from "../components/shared/ContactInfo";
import OrderPayment from "../components/contact/OrderPayment";
import DeliverySection from "../components/contact/DeliverySection";

export default function Contact() {
  return (
    <>
      
      <ContactOrders />
      <OrderPayment />
      <DeliverySection />
      <ContactInfo />
      <Footer />
    </>
  );
}
