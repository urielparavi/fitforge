"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowLeft, CheckCircle2, Flame } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-start justify-center overflow-hidden pt-40 pb-20 rounded-b-[2.5rem]">
      {/* Background image — place your image at /public/hero-bg.jpg */}
      <Image
        src="/hero-bg.jpg"
        alt="FitForge gym"
        fill
        className="object-cover object-[center_20%]"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle animated blobs over the overlay */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-primary/10 rounded-full blur-2xl animate-blob [animation-delay:5s]" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 container">
        <ScrollReveal className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 px-2 py-1.5">
              <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-white flex items-center gap-1">
                <Flame className="size-3 animate-pulse" />
                חדש
              </span>
              <span className="text-sm text-white/90 pl-1">
                המהפכה שלך מתחילה כאן
              </span>
            </div>

            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <h1>ליצור את</h1>
              <h1 className="text-transparent bg-gradient-to-r from-primary to-orange-300 bg-clip-text">
                הכושר שלך
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-lg text-white/80">
              שילוב ייחודי של{" "}
              <span className="font-bold text-white">אימוני כוח בחדר הכושר</span>{" "}
              ו
              <span className="font-bold text-white">קליסטניקס</span>{" "}
              לתוצאות מקסימליות. בנה את הגוף שתמיד חלמת עליו.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center">
              <span className="flex items-center gap-2 text-sm text-white">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                תוצאות מוכחות
              </span>
              <span className="flex items-center gap-2 text-sm text-white">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                תכנית אישית
              </span>
              <span className="flex items-center gap-2 text-sm text-white">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                תמיכה מלאה
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="w-full sm:w-auto gap-2 group glow-btn"
              size="lg"
            >
              קבל אימון ניסיון חינם
              <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              גלה את השירותים
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
