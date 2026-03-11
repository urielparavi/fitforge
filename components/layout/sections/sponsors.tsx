"use client";

import React from "react";

const brands = [
  "Nike",
  "Adidas",
  "Under Armour",
  "Reebok",
  "New Balance",
  "Puma",
  "Gymshark",
];

const BrandList = () => (
  <>
    {brands.map((name) => (
      <div
        key={name}
        className="flex items-center px-6 py-2 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] transition-all duration-300 whitespace-nowrap"
      >
        <span className="font-bold text-sm tracking-widest uppercase text-foreground">
          {name}
        </span>
      </div>
    ))}
  </>
);

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="container py-12 border-y border-border">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <p className="text-base font-semibold tracking-widest uppercase shimmer-text">
          מותגי כושר שאנחנו עובדים איתם
        </p>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
      <div
        dir="ltr"
        className="group flex overflow-hidden gap-[var(--gap)]"
        style={
          {
            "--gap": "3rem",
            "--duration": "30s",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
          <BrandList />
        </div>
        <div
          aria-hidden
          className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]"
        >
          <BrandList />
        </div>
      </div>
    </section>
  );
};
