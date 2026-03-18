import bgImage from "../../assets/testimonials.png";

export default function OrderPayment() {
  return (
    <section className="relative w-full overflow-hidden min-h-[670px]">

      {/* Background */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 15%" }}
      />

      {/* ================= DESKTOP LAYOUT (UNCHANGED) ================= */}
      <div className="relative hidden lg:block w-[1440px] h-[670px] mx-auto">

        {/* Heading & Text */}
        <div
          className="absolute text-white"
          style={{
            top: "100px",
            left: "50px",
            right: "819px",
          }}
        >
          <h2 className="text-[48px] font-dancing font-bold mb-6">
            Order Confirmation & Payment
          </h2>

          <div className="text-white text-lg font-medium font-['Quicksand'] leading-7">
            To book an order, we require a 50% advance payment.
            The remaining 50% is payable at the time of pickup.
            <br />
            This helps us schedule and prepare each order with the attention it requires.
          </div>
        </div>

        {/* Map */}
        <div
          className="absolute overflow-hidden rounded-md shadow-lg"
          style={{
            top: "90px",
            right: "100px",
            width: "600px",
            height: "446px",
          }}
        >
          <iframe
            title="Reve Patisserie Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.333156073595!2d73.88838108991695!3d18.54396345204723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16445395fa7%3A0x6e06b7706a86bad1!2sREVE%20PATISSERIE%20-%20cloud%20kicthen!5e0!3m2!1sen!2sin!4v1771147348635!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* ================= MOBILE & TABLET LAYOUT ================= */}
      <div className="relative lg:hidden max-w-[1440px] mx-auto px-6 sm:px-10 py-16 text-white">

        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-dancing font-bold mb-6">
            Order Confirmation & Payment
          </h2>

          <div className="text-base sm:text-lg font-medium font-['Quicksand'] leading-7">
            To book an order, we require a 50% advance payment.
            The remaining 50% is payable at the time of pickup.
            <br />
            This helps us schedule and prepare each order with the attention it requires.
          </div>
        </div>

        {/* Responsive Map */}
        <div className="w-full h-[320px] sm:h-[400px] overflow-hidden shadow-lg">
          <iframe
            title="Reve Patisserie Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.333156073595!2d73.88838108991695!3d18.54396345204723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16445395fa7%3A0x6e06b7706a86bad1!2sREVE%20PATISSERIE%20-%20cloud%20kicthen!5e0!3m2!1sen!2sin!4v1771147348635!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}