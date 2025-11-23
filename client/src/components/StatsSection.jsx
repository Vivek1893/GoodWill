// import React from "react";

// const StatsSection = () => {
//   const stats = [
//     {
//       value: "1.2k+",
//       label: "Happy Clients",
//     },
//     {
//       value: "25k+",
//       label: "Website Visitors",
//     },
//     {
//       value: "98%",
//       label: "Satisfaction Rate",
//     },
//     {
//       value: "350+",
//       label: "Completed Projects",
//     },
//   ];

//   return (
//     <section className="w-full py-12 bg-[#F9FAFB]">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
//         {stats.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition"
//           >
//             <h2 className="text-3xl font-bold text-gray-900">{item.value}</h2>
//             <p className="text-gray-600 mt-1 text-sm">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;




import React, { useState, useEffect } from 'react';
import { getVisitorCount, incrementVisitorCount } from '../utils/visitorApi';

/**
 * StatsSection Component
 * Displays 4 statistics cards: Happy Clients, Website Visitors (dynamic), Satisfaction Rate, Completed Projects
 * Website Visitors count is fetched from backend and updates in real-time
 */
const StatsSection = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Format number with k+ suffix for thousands
  const formatNumber = (num) => {
    if (num === null || num === undefined) return '---';
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k+`;
    }
    return `${num}+`;
  };

  // Check if user can increment (24-hour anti-refresh protection)
  const canIncrement = () => {
    const lastVisitKey = 'visitor_last_increment';
    const lastVisitTime = localStorage.getItem(lastVisitKey);
    
    if (!lastVisitTime) {
      return true; // First visit
    }

    const lastVisit = parseInt(lastVisitTime, 10);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    // Check if 24 hours have passed since last increment
    return (now - lastVisit) >= twentyFourHours;
  };

  // Mark that user has incremented
  const markIncremented = () => {
    localStorage.setItem('visitor_last_increment', Date.now().toString());
  };

  useEffect(() => {
    const initializeVisitorCount = async () => {
      try {
        // Check if we should increment
        if (canIncrement()) {
          // Increment count on backend
          const newCount = await incrementVisitorCount();
          if (newCount !== null) {
            setVisitorCount(newCount);
            markIncremented(); // Mark that we've incremented
          }
        } else {
          // Just fetch the current count without incrementing
          const currentCount = await getVisitorCount();
          if (currentCount !== null) {
            setVisitorCount(currentCount);
          }
        }
      } catch (error) {
        console.error('Error initializing visitor count:', error);
        // Try to fetch count even if increment fails
        const currentCount = await getVisitorCount();
        if (currentCount !== null) {
          setVisitorCount(currentCount);
        }
      } finally {
        setIsLoading(false);
      }
    };

    initializeVisitorCount();

    // Poll for updates every 30 seconds to show real-time updates
    const interval = setInterval(async () => {
      const currentCount = await getVisitorCount();
      if (currentCount !== null) {
        setVisitorCount(currentCount);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Stats data - static values for 3 cards, dynamic for Website Visitors
  const stats = [
    {
      value: '500+',
      label: 'Happy Clients',
      isStatic: true,
    },
    {
      value: formatNumber(visitorCount),
      label: 'Website Visitors',
      isStatic: false,
      isLoading: isLoading,
    },
    {
      value: '95%',
      label: 'Satisfaction Rate',
      isStatic: true,
    },
    {
      value: '50+',
      label: 'Completed Projects',
      isStatic: true,
    },
  ];

  return (
    <section className="w-full bg-white pt-4 md:pt-6 lg:pt-8 pb-0 -mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
        {/* 4-Column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-4 md:p-5 lg:p-6 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {/* Large Blue Number */}
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                {stat.isLoading && !stat.isStatic ? (
                  <span className="inline-block animate-pulse">---</span>
                ) : (
                  stat.value
                )}
              </div>
              
              {/* Gray Label Text */}
              <div className="text-gray-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

