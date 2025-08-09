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
      <div className="flex items-center justify-center h-screen bg-white text-white z-50">
        <div className="flex items-center text-6xl font-mono">
          {/* Left angle with animation */}
          <span className="text-yellow-500 drop-shadow-2xl animate-move-left">&lt;</span>

        <div className="flex flex-col relative justify-center items-center rounded-full h-10 w-10 drop-shadow-2xl border-1 border-amber-500  bg-yellow-500">
          {/* Crown - positioned above */}
          <h1 className="absolute -top-10 opacity-90 fade-in delay-4 text-5xl font-bold text-yellow-500 drop-shadow-lg shadow-lime-600">
            ♕
          </h1>
          {/* Cross - centered */}
          <h1 className="text-4xl font-bold animate-pulse text-white fade-in delay-1 drop-shadow-lg">
            ✝
          </h1>
        </div>
          {/* Right angle with animation */}
          <span className="text-yellow-500 drop-shadow-2xl animate-move-right">&gt;</span>
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
