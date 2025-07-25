// SkillBar.jsx
import React, { useRef, useEffect, useState } from 'react';

const SkillBar = ({ name, percent, color }) => {
  const barRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  return (
    <div ref={barRef} className="mt-10 ">
      <div className="flex justify-between">
        <span className="text-xl font-medium text-gray-700">{name}</span>
        <span className="text-xl text-gray-500">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden hover:scale-105 duration-300">
        <div
          className={`h-6 rounded-full transition-all duration-[1200ms] ease-in-out ${color}`}
          style={{ width: inView ? `${percent}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
