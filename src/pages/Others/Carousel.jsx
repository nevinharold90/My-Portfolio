import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// 💡 SENIOR TIP: Move the sub-component OUTSIDE the parent. 
// Now React can properly diff the DOM and animate your transitions smoothly.
const Card = ({ p, emphasis = "side", onClick, ariaHidden = false, navigate }) => {
  const handleClick = () => {
    if (onClick) return onClick();
    if (p?.slug) navigate(`/projects/${p.slug}`);
  };

  return (
    <button
      onClick={handleClick}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : 0}
      className={[
        "hover:bg-gray-100 hover:shadow-2xl cursor-pointer transition all duration-500 h-full w-72 sm:w-80 md:w-130 text-left bg-white rounded-3xl p-5 shadow-lg border border-black/5",
        "flex flex-col overflow-hidden",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
        emphasis === "center"
          ? "scale-100 opacity-100 blur-0"
          : "scale-95 opacity-60 blur-sm hover:opacity-80",
      ].join(" ")}
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{p.title}</h3>
      <p className="mt-3 text-gray-700 line-clamp-5 md:line-clamp-6">{p.description}</p>

      <div className="mt-auto pt-4 flex items-center gap-3">
        {p.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.target || "_self"}
            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            onClick={(e) => e.stopPropagation()} 
            className="inline-flex items-center px-5 py-1.5 rounded-full border border-gray-200 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </button>
  );
};

export default function Carousel({ projects = [] }) {
  const navigate = useNavigate();
  const count = projects.length;
  const [index, setIndex] = useState(0);

  if (!count) return null;

  const wrap = (n) => ((n % count) + count) % count;
  const prev = () => setIndex((i) => wrap(i - 1));
  const next = () => setIndex((i) => wrap(i + 1));

  const { leftIdx, centerIdx, rightIdx } = useMemo(
    () => ({
      leftIdx: wrap(index - 1),
      centerIdx: index,
      rightIdx: wrap(index + 1),
    }),
    [index, count]
  );

  // 💡 State to track if the user is hovering over any card
  const [isHovered, setIsHovered] = useState(false);

return (
    <div className="relative w-full flex flex-col items-center">
      
      {/* 💡 THE MAGIC OVERLAY LAYER: 
          When a card is hovered, this invisible full-width layer fades in a dark background. 
          Pointer-events-none ensures users can still click right through it to the arrows or background elements. */}
      <div 
        className={`absolute -inset-x-4 -inset-y-10 bg-black/40 rounded-3xl transition-opacity duration-500 pointer-events-none z-10 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`} 
      />

      <div className="relative mt-6 w-full max-w-6xl h-[420px] sm:h-[460px]">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full border border-black/10 bg-white shadow hover:bg-black hover:text-white transition z-20 cursor-pointer"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full border border-black/10 bg-white shadow hover:bg-black hover:text-white transition z-20 cursor-pointer"
        >
          ›
        </button>

        {/* Shuffling Cards Container */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-6 px-12">
          <div className="hidden sm:block">
            <Card p={projects[leftIdx]} emphasis="side" onClick={prev} navigate={navigate} setIsHovered={setIsHovered} ariaHidden />
          </div>

          <div>
            <Card p={projects[centerIdx]} emphasis="center" navigate={navigate} setIsHovered={setIsHovered} />
          </div>

          <div className="hidden sm:block">
            <Card p={projects[rightIdx]} emphasis="side" onClick={next} navigate={navigate} setIsHovered={setIsHovered} ariaHidden />
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      {count > 1 && (
        <div className="mt-3 flex gap-2 z-20">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition cursor-pointer ${
                i === index ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}