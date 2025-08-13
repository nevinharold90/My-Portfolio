import React, { useMemo, useState } from "react";

/** Usage: <TriCarousel projects={projects} />
 * projects = [{ title, description, image?, linkLabel?, linkHref? }, ...]
 */
export default function Carousel({ projects = [] }) {
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

  const Card = ({ p, emphasis = "side", onClick, ariaHidden = false }) => (
    <button
      onClick={onClick}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : 0}
      className={[
        "w-72 sm:w-80 md:w-96 text-left bg-white rounded-3xl p-5 shadow-lg border border-black/5",
        "transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
        emphasis === "center"
          ? "scale-100 opacity-100 blur-0"
          : "scale-95 opacity-60 blur-sm hover:opacity-80",
      ].join(" ")}
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{p.title}</h3>
      <p className="mt-3 text-gray-700 line-clamp-4">{p.description}</p>
      <div className="mt-4 flex items-center gap-3">
        {p.linkLabel && (
          <a
            href={p.linkHref || "#"}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center px-3 py-1.5 rounded-full border border-black/10 text-sm hover:bg-black hover:text-white transition"
          >
            {p.linkLabel}
          </a>
        )}
        {p.image && (
          <img
            src={p.image}
            alt={p.title}
            className="ml-auto w-16 h-16 object-cover rounded-xl border border-black/10"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </button>
  );

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative mt-6 flex items-center justify-center gap-4 md:gap-6">
        {/* left (prev) — blurred */}
        <div className="hidden sm:block">
          <Card
            p={projects[leftIdx]}
            emphasis="side"
            onClick={prev}
            ariaHidden={true}
          />
        </div>

        {/* center (current) — sharp */}
        <div>
          <Card
            p={projects[centerIdx]}
            emphasis="center"
            onClick={() => {}}
            ariaHidden={false}
          />
        </div>

        {/* right (next) — blurred */}
        <div className="hidden sm:block">
          <Card
            p={projects[rightIdx]}
            emphasis="side"
            onClick={next}
            ariaHidden={true}
          />
        </div>
      </div>

      {/* arrows */}
      {count > 1 && (
        <div className="mt-4 flex gap-3">
          <button
            aria-label="Previous"
            onClick={prev}
            className="h-10 w-10 grid place-items-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white shadow"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="h-10 w-10 grid place-items-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white shadow"
          >
            ›
          </button>
        </div>
      )}

      {/* dots */}
      {count > 1 && (
        <div className="mt-3 flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
