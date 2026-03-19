import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Cakes from "../pages/Cakes";
import CustomOrders from "../pages/CustomOrders";
import Chocolates from "../pages/Chocolates";
import Workshops from "../pages/Workshops";
import Contact from "../pages/Contact";
import Hamper from "../pages/Hamper";

import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/custom-orders" element={<CustomOrders />} />
      <Route path="/chocolates" element={<Chocolates />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/hamper" element={<Hamper />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard/>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;