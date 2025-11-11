import React, { useState } from "react";
import {
  FaTools,
  FaBroom,
  FaLeaf,
  FaCloudSun,
  FaRecycle,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaExpand,
  FaInfoCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const shivenarise = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const designImages = [
    "/project_detail_img/images/SHIVEN ARISE.webp",
    "/project_detail_img/SHIVEN ARISE11.webp",
    "/project_detail_img/images/SHIVEN ARISE.webp",
  ];

  const features = [
    {
      icon: <FaTools />,
      title: "EASY INSTALLATION",
      description: "Quick setup process with minimal tools required",
    },
    {
      icon: <FaBroom />,
      title: "EASY CLEANING",
      description: "Non-porous surface resists stains and wipes clean easily",
    },
    {
      icon: <FaLeaf />,
      title: "MAINTENANCE FREE",
      description: "No periodic treatments or special care needed",
    },
    {
      icon: <FaCloudSun />,
      title: "WEATHER PROOF",
      description: "Withstands extreme temperatures and conditions",
    },
    {
      icon: <FaRecycle />,
      title: "100% RECYCLABLE",
      description: "Environmentally friendly and sustainable material",
    },
    {
      icon: <FaShieldAlt />,
      title: "CORROSION RESISTANCE",
      description: "Special coating prevents rust and deterioration",
    },
  ];

  const openImageModal = (img) => {
    setSelectedImage(img);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Title Section */}
      <div className="w-full font-sans text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl mt-20 font-bold tracking-tight text-gray-900 mb-2"
        >
          SHIVEN <span className="text-blue-600">ARISE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg mb-6"
        >
          Premium architectural solutions with unmatched durability and elegance
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"
        ></motion.div>
      </div>

      {/* Project Image + Info */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-20">
        {/* Left: Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg mb-4 cursor-pointer"
            onClick={() =>
              openImageModal("/project_detail_img/images/SHIVEN ARISE.webp")
            }
          >
            <img
              src="/project_detail_img/images/SHIVEN ARISE.webp"
              alt="Godrej Platinum"
              className="w-full h-180 object-cover transition-all duration-300 hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md">
              <FaExpand className="text-gray-700 text-sm" />
            </div>
          </motion.div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-3">
            {designImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => openImageModal(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-24 object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Info Panel Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 flex justify-between items-center">
            <h5 className="text-xl  font-semibold">PROJECT DETAILS</h5>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-md transition-colors"
            >
              {showInfo ? (
                <>
                  <span className="mr-1">Less</span>
                  <FaChevronUp size={12} />
                </>
              ) : (
                <>
                  <span className="mr-1">More</span>
                  <FaChevronDown size={12} />
                </>
              )}
            </button>
          </div>

          {/* Basic Info */}
          <div className="p-5 border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-500 text-sm">Name</h5>
                  <p className="text-gray-900 font-semibold">Godrej Platinum</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-500 text-sm">
                    Location
                  </h5>
                  <p className="text-gray-900">Mumbai, India</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-500 text-sm">Client</h5>
                  <p className="text-gray-900">Godrej & Boyce MFG. Co. Ltd.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-500 text-sm">
                    Architect
                  </h5>
                  <p className="text-gray-900">T. Khareghat & Associates</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-500 text-sm">Type</h5>
                  <p className="text-gray-900">Residential</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-500 text-sm">
                    Total Area
                  </h5>
                  <p className="text-gray-900">60,000 Sqm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Detailed Info */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 space-y-5">
                  <div>
                    <h5 className="font-medium text-gray-500 text-sm mb-2">
                      Consultant
                    </h5>
                    <p className="text-gray-900">Saicone</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-500 text-sm mb-2">
                      Floors
                    </h5>
                    <p className="text-gray-900">28</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-700 mb-2 flex items-center">
                      <FaInfoCircle className="mr-2 text-blue-500" />
                      Scope of Work
                    </h5>
                    <ul className="list-disc ml-5 space-y-1 text-gray-700">
                      <li>Unitized & Strip Glazing</li>
                      <li>ACP Cladding</li>
                      <li>Revolving Door</li>
                      <li>MS Structure</li>
                      <li>Aluminium Louvers</li>
                      <li>Dry Stone Cladding</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Design Gallery */}
      {/* <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-gray-900 mb-4"
          >
            Design <span className="text-blue-600">Gallery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Explore the architectural excellence of Godrej Platinum through our visual portfolio
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer"
                onClick={() => openImageModal(img)}
              >
                <img
                  src={img}
                  alt={`Design ${i + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4">
                  <span className="text-white font-medium">Design {i + 1}</span>
                  <div className="bg-white/20 p-2 rounded-full">
                    <FaExpand className="text-white text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Features Section */}
      <div className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-gray-900 mb-4"
          >
            Product <span className="text-blue-600">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Engineered for excellence with premium materials and innovative
            design
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <div className="text-blue-600 text-xl">{feature.icon}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default shivenarise;
