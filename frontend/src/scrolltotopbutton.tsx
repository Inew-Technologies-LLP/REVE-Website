import { useEffect, useState } from "react";
import scrollTopImg from "../src/assets/scrolltotop.svg";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <img
      src={scrollTopImg}
      alt="Scroll To Top"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 
                 cursor-pointer 
                 w-[40px] h-[60px] 
                 hover:scale-110 
                 transition-transform duration-300"
    />
  );
}
