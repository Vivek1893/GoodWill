import React, { useState, useEffect } from 'react';
import { getVisitorCount, incrementVisitorCount } from '../utils/visitorApi';

const VisitorCounter = () => {
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

  if (isLoading) {
    return (
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <span className="animate-pulse">●</span>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full border border-orange-200 shadow-sm">
      <svg
        className="w-4 h-4 text-orange-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      <span className="text-xs sm:text-sm font-semibold text-orange-700">
        <span className="hidden sm:inline">Visitors: </span>
        <span className="text-orange-600 font-bold">
          {count !== null ? count.toLocaleString() : '---'}
        </span>
      </span>
    </div>
  );
};

export default VisitorCounter;

