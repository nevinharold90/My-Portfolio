import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/** Usage: <TriCarousel projects={projects} />
 * projects = [{ title, description, image?, linkLabel?, linkHref? }, ...]
 */
export default function Carousel({ projects = [] }) {

    const navigate = useNavigate();
    
    const goToDetail = () => {
        // navigate to a detail page, e.g. /projects/rentago
        navigate(`/projects/${p.slug}`);
    };



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
            onClick={goToDetail}
            aria-hidden={ariaHidden}
            tabIndex={ariaHidden ? -1 : 0}
            className={[
                "hover:scale-105 transition duration-300 h-full w-72 sm:w-80 md:w-130 text-left bg-white rounded-3xl p-5 shadow-lg border border-black/5",
                "flex flex-col overflow-hidden",
                "transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
                emphasis === "center"
                ? "scale-100 opacity-100 blur-0"
                : "scale-95 opacity-60 blur-sm hover:opacity-80",
            ].join(" ")}
            >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{p.title}</h3>
            <p className="mt-3 text-gray-700 line-clamp-5 md:line-clamp-6">{p.description}</p>

            <div className="mt-auto pt-4 flex items-center gap-3 ">
                {p.links?.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target={link.target || "_self"}
                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()} // prevents card navigation
                    className="inline-flex items-center px-5 py-1.5 rounded-full border hover:bg-black hover:text-white transition"
                >
                    {link.label}
                </a>
                ))}
            </div>
        </button>
    );


    return (
        <div className="relative w-full flex flex-col items-center">
            {/* TRACK with fixed height */}
            <div className="relative mt-6 w-full max-w-6xl h-[420px] sm:h-[460px] ">
                {/* arrows pinned to track edges, centered vertically */}
                <button
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center
                            rounded-full border border-black/10 bg-white shadow
                            hover:bg-black hover:text-white transition z-10"
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center
                            rounded-full border border-black/10 bg-white shadow
                            hover:bg-black hover:text-white transition z-10"
                >
                    ›
                </button>

                {/* cards row centered inside fixed-height track */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-6 px-12">
                    {/* left (prev) — blurred */}
                    <div className="hidden sm:block">
                        <Card p={projects[leftIdx]} emphasis="side" onClick={prev} ariaHidden />
                    </div>

                    {/* center (current) — sharp */}
                    <div>
                        <Card p={projects[centerIdx]} emphasis="center" onClick={() => {}} />
                    </div>

                    {/* right (next) — blurred */}
                    <div className="hidden sm:block">
                        <Card p={projects[rightIdx]} emphasis="side" onClick={next} ariaHidden />
                    </div>
                </div>
            </div>

            {/* dots under the fixed-height track */}
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
