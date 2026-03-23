import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./scrolltotop";
import ScrollTopButton from "./scrolltotopbutton";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <ScrollTopButton />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
