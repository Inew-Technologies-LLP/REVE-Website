import { BrowserRouter } from "react-router-dom";
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
    </BrowserRouter>
  );
}

export default App;
