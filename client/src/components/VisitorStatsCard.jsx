import React, { useState, useEffect } from 'react';
import { getVisitorCount, incrementVisitorCount } from '../utils/visitorApi';

const VisitorStatsCard = () => {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const registerVisit = async () => {
      // Anti-refresh protection: Check if user has already visited in this session
      const sessionKey = 'visitor_registered';
      const hasVisited = sessionStorage.getItem(sessionKey);

      if (!hasVisited) {
        // Mark as visited in this session
        sessionStorage.setItem(sessionKey, 'true');
        
        // Increment count on backend
        const newCount = await incrementVisitorCount();
        if (newCount !== null) {
          setCount(newCount);
        }
      } else {
        // Just fetch the current count without incrementing
        const currentCount = await getVisitorCount();
        if (currentCount !== null) {
          setCount(currentCount);
        }
      }
      
      setIsLoading(false);
    };

    registerVisit();

    // Poll for updates every 30 seconds to show real-time updates
    const interval = setInterval(async () => {
      const currentCount = await getVisitorCount();
      if (currentCount !== null) {
        setCount(currentCount);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Format number with + suffix for thousands
  const formatCount = (num) => {
    if (num === null) return '---';
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k+`;
    }
    return `${num}+`;
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center min-h-[120px]">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-center">
        <div className="text-1xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
          {formatCount(count)}
        </div>
        <div className="text-gray-600 text-sm md:text-base font-medium">
          Website Visitors
        </div>
      </div>
    </div>
  );
};

export default VisitorStatsCard;

