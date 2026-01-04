'use client';

import { useState, useEffect, useRef } from 'react';
import { Dumbbell, Zap, Users, Target, CheckCircle2 } from 'lucide-react';

function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView] as const;
}

const services = [
  {
    icon: Dumbbell,
    title: "אימוני כוח",
    description: "תכנית מותאמת אישית לבניית מסת שריר והגברת כוח",
    features: ["מעקב התקדמות", "תכנית תזונה", "3-4 פגישות שבועיות"]
  },
  {
    icon: Zap,
    title: "קליסטניקס",
    description: "אימון משקל גוף לשליטה מוחלטת בגוף ויכולות אתלטיות",
    features: ["תרגילי ליבה", "גמישות וניידות", "טכניקות מתקדמות"]
  },
  {
    icon: Target,
    title: "הרזיה ועיצוב",
    description: "תכנית מקיפה לירידה במשקל ועיצוב הגוף",
    features: ["הנחיית תזונה", "תכנית קרדיו", "מעקב שבועי"]
  },
  {
    icon: Users,
    title: "אימוני קבוצה",
    description: "אנרגיה של קבוצה עם תשומת לב אישית",
    features: ["קבוצות קטנות", "אווירה תומכת", "מחיר משתלם"]
  }
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 space-y-4 transition-all duration-[800ms] ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold uppercase tracking-wider inline-block">
            השירותים שלנו
          </span>
          <h2 className="text-4xl md:text-5xl font-black">בחר את <span className="text-orange-400">הדרך שלך</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            מגוון תכניות אימון מותאמות לכל מטרה ורמת כושר
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-[800ms] ease-out delay-150 ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-slate-900/50 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 hover:bg-slate-800/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
