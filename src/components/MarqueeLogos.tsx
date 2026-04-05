"use client";

export function MarqueeLogos({
    title = "Sistemas e Marcas Parceiras",
    brands = ["Uniplus", "G-Sinte", "Z-Sinte", "Sinte Integrador"],
    reverse = false,
    darker = false,
}: {
    title?: string;
    brands?: string[];
    reverse?: boolean;
    darker?: boolean;
}) {
    const containerClass = darker
        ? "py-16 bg-sigma-light border-t border-sigma-silver/20 overflow-hidden"
        : "py-12 bg-sigma-light border-y border-sigma-silver/20 overflow-hidden";

    const titleClass = darker
        ? "text-3xl font-bold text-sigma-dark font-display"
        : "text-lg md:text-xl font-medium text-sigma-dark font-display opacity-90";

    // Reverse feature can be extended via globals.css keyframes if needed in the future.
    // We use group-hover on the parent to pause both animations simultaneously.
    const baseMarqueeClass = "whitespace-nowrap flex items-center gap-16 md:gap-24 marquee-content group-hover:[animation-play-state:paused] transition-all duration-300";

    const repeatedBrands = [...brands, ...brands, ...brands];

    return (
        <section className={containerClass}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
                <h3 className={titleClass}>{title}</h3>
            </div>

            <div className="relative flex overflow-x-hidden group">

                {/* Primeiro Div */}
                <div className={`animate-marquee ${baseMarqueeClass}`}>
                    {repeatedBrands.map((brand, i) => (
                        <div
                            key={`first-${i}`}
                            className="flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-[60px]"
                        >
                            <span className="text-2xl font-bold font-display text-sigma-dark/80">{brand}</span>
                        </div>
                    ))}
                </div>

                {/* Segundo Div (Duplicate para o Loop Infinito) */}
                <div
                    className={`absolute top-0 animate-marquee2 ${baseMarqueeClass}`}
                    style={{ left: "100%" }}
                >
                    {repeatedBrands.map((brand, i) => (
                        <div
                            key={`second-${i}`}
                            className="flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-[60px]"
                        >
                            <span className="text-2xl font-bold font-display text-sigma-dark/80">{brand}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
