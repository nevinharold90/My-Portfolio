import React, { useEffect, useState } from 'react';

const LoadingEffect = ({ children, delay = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setFadeIn(true), 50);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-white z-50">
        <div className="flex items-center text-6xl font-mono">
          {/* Left angle with animation */}
          <span className="text-cyan-400 animate-move-left">&lt;</span>

          {/* Spinning circle */}
          <div className="mx-4 animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-400 shadow-[0_0_20px_4px_rgba(0,255,255,0.5)]"></div>

          {/* Right angle with animation */}
          <span className="text-cyan-400 animate-move-right">&gt;</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`transition-opacity duration-5000 ease-in-out ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default LoadingEffect;
