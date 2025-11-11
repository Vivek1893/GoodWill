// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { getProjects } from "../../utils/contentful";
// import "../../App.css";

// const Residential = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     getProjects()
//       .then((data) => {
//         console.log("All projects:", data);
//         const completedProjects = data.filter((p) => p.status === "completed");
//         console.log("Completed projects:", completedProjects);
//         setProjects(completedProjects);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error loading projects:", err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.2 } },
//   };

//   const getCardVariants = (index) => {
//     const directions = [
//       { x: -60, y: 0 },
//       { x: 60, y: 0 },
//       { x: 0, y: 60 },
//       { x: 0, y: -60 },
//     ];
//     const dir = directions[index % directions.length];
//     return {
//       hidden: { opacity: 0, ...dir },
//       show: {
//         opacity: 1,
//         x: 0,
//         y: 0,
//         transition: { duration: 0.7, ease: "easeOut" },
//       },
//     };
//   };

//   if (loading) {
//     return (
//       <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading projects...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-600 mb-4">Error loading projects: {error}</p>
//           <p className="text-gray-600">Please check your Contentful configuration.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-50">
//       <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[90vh]">
//         <img src="/project.jpg" alt="Projects" className="w-full h-full object-cover" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {projects.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-600 text-lg">No completed projects found.</p>
//             <p className="text-gray-500">Please add some projects in Contentful with status "completed".</p>
//           </div>
//         ) : (
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {projects.map((project, index) => (
//               <Link key={project.id} to={`/projects/detail/${project.id}`}>
//                 <motion.div
//                   variants={getCardVariants(index)}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   className="bg-white rounded-md p-4 flex flex-col items-center cursor-pointer shadow-xl hover:shadow"
//                 >
//                   <motion.img
//                     src={project.img}
//                     alt={project.name}
//                     className="w-full h-72 object-cover zoom-hover rounded-md"
//                     whileHover={{ scale: 0.9 }}
//                     transition={{ duration: 0.3 }}
//                     onError={(e) => (e.target.src = "/fallback.jpg")}
//                   />
//                   <h3 className="mt-4 text-lg font-semibold text-center">{project.name}</h3>
//                   <div className="w-8 sm:w-10 h-[2px] bg-blue-800 mt-2"></div>
//                 </motion.div>
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Residential;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjects } from "../../utils/contentful";
import "../../App.css";

const Residential = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProjects()
      .then((data) => {
        const completedProjects = data.filter((p) => p.status === "completed");
        setProjects(completedProjects);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading projects: {error}</p>
          <p className="text-gray-600">
            Please check your Contentful configuration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen -mt-5 bg-gray-50">
    {/* Logo Branding - Top Right */}
        <div className="absolute top-25 right-6 z-30">
          <img
            src="/logo.png" 
            alt="The Goodwill Facades Logo"
            className="h-18 md:h-25  w-auto"
          />
        </div>
      {/* Top banner */}
      <div className="relative w-full h-[45vh] sm:h-[60vh] md:h-[75vh]">
        <motion.img
          src="/project.png"
          alt="Projects"
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Project grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No completed projects found.</p>
            <p className="text-gray-500">
              Please add some projects in Contentful with status "completed".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} to={`/projects/detail/${project.id}`}>
                <motion.div
                  className="bg-white rounded-md p-4 flex flex-col items-center cursor-pointer shadow-xl hover:shadow"
                  whileHover={{ scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-98 object-cover rounded-md"
                    loading="lazy"
                    onError={(e) => (e.target.src = "/fallback.jpg")}
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <h3 className="mt-4 text-lg text-[#0B3558] font-semibold text-center">
                    {project.name}
                  </h3>
                  <div className="w-10 sm:w-12 h-[3px] bg-[#F37021] mt-2"></div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Residential;
