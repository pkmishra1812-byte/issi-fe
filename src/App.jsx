// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import OurCompanyPage from "./pages/OurCompanyPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import OurOfferingPage from "./pages/OurOfferingPage";
import TeaPage from "./pages/TeaPage";
import SpicesPage from "./pages/SpicesPage";
import BabyCarePage from "./pages/BabyCarePage";
import BabyCareProductPage from "./pages/BabyCareProductPage";
import BabyCareAccessoriesPage from "./pages/BabyCareAccessoriesPage";
import GreenTeaPage from "./pages/GreenTeaPage";
import WhiteTeaPage from "./pages/WhiteTeaPage";
import BlackTeaPage from "./pages/BlackTeaPage";
import CTCTeaPage from "./pages/CTCTeaPage";
import CardamomTeaPage from "./pages/CardamomTeaPage";
import ProcessTeaPage from "./pages/ProcessTeaPage";
import TeaAccessoriesPage from "./pages/TeaAccessoriesPage";
import KitchenProductsPage from "./pages/KitchenProductsPage";
import SoyaPage from "./pages/SoyaPage";
import OilPage from "./pages/OilPage";
import GrainsPage from "./pages/GrainsPage";
import BeautyProductsPage from "./pages/BeautyProductsPage";
import FemaleBeautyPage from "./pages/FemaleBeautyPage";
import MaleBeautyPage from "./pages/MaleBeautyPage";
import WholeSpicesPage from "./pages/WholeSpicesPage";
import GroundSpicesPage from "./pages/GroundSpicesPage";
import SpiceBlendsPage from "./pages/SpiceBlendsPage";
import BabyMassageOilPage from "./pages/BabyMassageOilPage";
import BabyPowderPage from "./pages/BabyPowderPage";
import BabyWashPage from "./pages/BabyWashPage";
import WholesalePage from "./pages/WholesalePage";
import BlogPage from "./pages/BlogPage";
import NewsPage from "./pages/NewsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import PoliciesPage from "./pages/PoliciesPage";
import FAQPage from "./pages/FAQPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-company" element={<OurCompanyPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/our-offering" element={<OurOfferingPage />} />
          <Route path="/our-offering/tea" element={<TeaPage />} />
          <Route path="/our-offering/kitchen-products" element={<KitchenProductsPage />} />
          <Route path="/our-offering/kitchen-products/spices" element={<SpicesPage />} />
          <Route path="/our-offering/kitchen-products/soya" element={<SoyaPage />} />
          <Route path="/our-offering/kitchen-products/oil" element={<OilPage />} />
          <Route path="/our-offering/kitchen-products/grains" element={<GrainsPage />} />
          <Route path="/our-offering/baby-care" element={<BabyCarePage />} />
          <Route path="/our-offering/baby-care/product" element={<BabyCareProductPage />} />
          <Route path="/our-offering/baby-care/accessories" element={<BabyCareAccessoriesPage />} />
          <Route path="/our-offering/baby-care/product/massage-oil" element={<BabyMassageOilPage />} />
          <Route path="/our-offering/baby-care/product/baby-powder" element={<BabyPowderPage />} />
          <Route path="/our-offering/baby-care/product/baby-wash" element={<BabyWashPage />} />
          <Route path="/our-offering/beauty-products" element={<BeautyProductsPage />} />
          <Route path="/our-offering/beauty-products/female" element={<FemaleBeautyPage />} />
          <Route path="/our-offering/beauty-products/male" element={<MaleBeautyPage />} />
          <Route path="/our-offering/tea/green-tea" element={<GreenTeaPage />} />
          <Route path="/our-offering/tea/white-tea" element={<WhiteTeaPage />} />
          <Route path="/our-offering/tea/black-tea" element={<BlackTeaPage />} />
          <Route path="/our-offering/tea/ctc-tea" element={<CTCTeaPage />} />
          <Route path="/our-offering/tea/cardamom-tea" element={<CardamomTeaPage />} />
          <Route path="/our-offering/tea/process-tea" element={<ProcessTeaPage />} />
          <Route path="/our-offering/tea/accessories" element={<TeaAccessoriesPage />} />
          <Route path="/our-offering/spices/whole-spices" element={<WholeSpicesPage />} />
          <Route path="/our-offering/spices/ground-spices" element={<GroundSpicesPage />} />
          <Route path="/our-offering/spices/spice-blends" element={<SpiceBlendsPage />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
