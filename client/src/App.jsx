// App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "leaflet/dist/leaflet.css";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Lazy load pages for better performance and code splitting
// Home page - load immediately (above the fold)
import Home from "./pages/Home";

// ✅ Lazy load other pages
const Aboutus = lazy(() => import("./pages/Aboutus"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));

// ✅ Lazy load service subpages
const ACP = lazy(() => import("./pages/services/ACP"));
const Aluminum_Windows = lazy(() => import("./pages/services/Aluminum_Windows"));
const MS_Structure = lazy(() => import("./pages/services/MS_Structure"));
const Railings = lazy(() => import("./pages/services/Railings"));
const Skylight = lazy(() => import("./pages/services/Skylight"));
const Stone_Cladding = lazy(() => import("./pages/services/Stone_Cladding"));
const Structural_Glazing = lazy(() => import("./pages/services/Structural_Glazing"));
const Tensile_Fabrics = lazy(() => import("./pages/services/Tensile_Fabrics"));

const Project_list = lazy(() => import("./pages/projects/Project_list"));
const Detail_project = lazy(() => import("./pages/projects/Detail_project.jsx"));
const ProjectDetailDynamic = lazy(() => import("./pages/projects/ProjectDetailDynamic.jsx"));

// ✅ Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);




function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        {/* Navbar */}
        <Navbar />

        {/* Page Routes with Suspense for lazy loading */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />

            {/* Sub-services */}
            <Route path="/services/ACP" element={<ACP />} />
            <Route path="/services/Aluminum_Windows" element={<Aluminum_Windows />} />
            <Route path="/services/MS_Structure" element={<MS_Structure />} />
            <Route path="/services/Railings" element={<Railings />} />
            <Route path="/services/Skylight" element={<Skylight />} />
            <Route path="/services/Stone_Cladding" element={<Stone_Cladding />} />
            <Route path="/services/Structural_Glazing" element={<Structural_Glazing />} />
            <Route path="/services/Tensile_Fabrics" element={<Tensile_Fabrics />} />

            {/* Project pages */}
            <Route path="/projects/Detail_project" element={<Detail_project />} />
            <Route path="/projects/Project_list" element={<Project_list />} />
            <Route path="/projects/detail/:projectId" element={<ProjectDetailDynamic />} />
          </Routes>
        </Suspense>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
