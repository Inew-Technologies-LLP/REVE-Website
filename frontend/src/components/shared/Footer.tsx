
import instagram from "../../assets/Instagram.svg";
import facebook from "../../assets/Facebook.svg";
import linkedin from "../../assets/LinkedIn.svg";
import Logo from "../../assets/navlogo.svg";

// NEW LOGOS (use png versions from assets)
import amazonLogo from "../../assets/amazon_png.png";
import linkedinLogo from "../../assets/linkedin_png.png";
import swiggyLogo from "../../assets/swiggy_png.png";
import instagramLogo from "../../assets/instagram_png.png";
import facebookLogo from "../../assets/facebook_png.png";
import zomatoLogo from "../../assets/zomato.png";

import privacyPolicyPdf from "../../assets/privacy-policy.pdf";
import termsPdf from "../../assets/terms-of-service.pdf";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFDEC]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 flex flex-col">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* LEFT SIDE */}
          <div className="max-w-sm">

            <a href="/" className="inline-block">
              <img
                src={Logo}
                alt="Reve Patisserie Logo"
                className="w-[90px] mb-10 sm:w-[100px] h-[60px] sm:h-[65px]"
              />
            </a>

            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Contact:</p>

              <a href="tel:+918530039246" className="text-sm underline">
                +91 85300 39246
              </a>
              <br />

              <a
                href="mailto:orders@revepatisserie.co.in"
                className="text-sm underline"
              >
                orders@revepatisserie.co.in
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6 items-center">
              <a href="https://www.facebook.com/people/R%C3%AAve-Patisserie/100063690340140/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              <a href="https://www.instagram.com/reve_patisserie" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

             

              <a href="https://www.linkedin.com/company/reve-patisserie-pune" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              
            </div>

          </div>

          {/* RIGHT SIDE LOGO LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-10 gap-y-8 text-sm">

            {/* Amazon */}
            <a
              href="https://www.amazon.in/stores/RevePatisserie/page/8A353DD1-941C-4065-A734-04AECFF89645"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={amazonLogo} alt="Amazon" className="w-10 h-10 object-contain" />
              <span className="mt-2">Amazon Store</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/reve-patisserie-pune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10 object-contain" />
              <span className="mt-2">LinkedIn</span>
            </a>

            {/* Swiggy */}
            <a
                href="https://www.swiggy.com/instamart/city/pune/b/reve-patisserie"

              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={swiggyLogo} alt="Swiggy" className="w-10 h-10 object-contain" />
              <span className="mt-2">Swiggy</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/reve_patisserie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={instagramLogo} alt="Instagram" className="w-10 h-10 object-contain" />
              <span className="mt-2">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/R%C3%AAve-Patisserie/100063690340140/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={facebookLogo} alt="Facebook" className="w-10 h-10 object-contain" />
              <span className="mt-2">Facebook</span>
            </a>

            {/* Zomato */}
            <a
              href="https://www.zomato.com/pune/reve-patisserie-kalyani-nagar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={zomatoLogo} alt="Zomato" className="w-10 h-10 object-contain" />
              <span className="mt-2">Zomato</span>
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black my-10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-center sm:text-left">

          <p>© 2024 Rêve Patisserie. All rights reserved.</p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-6">
            <a href={privacyPolicyPdf} target="_blank" rel="noopener noreferrer" className="underline">
              Privacy Policy
            </a>

            <a href={termsPdf} target="_blank" rel="noopener noreferrer" className="underline">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}