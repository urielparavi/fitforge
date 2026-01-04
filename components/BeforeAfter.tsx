'use client';

import { useState, useEffect, useRef } from 'react';

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

const beforeAfter = [
  {
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
    name: "אורי - 3 חודשים",
    stats: "-12 ק״ג | +5 ק״ג שריר"
  },
  {
    before: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
    name: "מיכל - 6 חודשים",
    stats: "-18 ק״ג | גוף חטוב"
  }
];

export default function BeforeAfter() {
  const [ref, inView] = useInView();

  return (
    <section className="relative py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 space-y-4 transition-all duration-[800ms] ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold uppercase tracking-wider inline-block">
            תוצאות אמיתיות
          </span>
          <h2 className="text-4xl md:text-5xl font-black">השינוי ה<span className="text-orange-400">אמיתי</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            לקוחות שלנו משיגים תוצאות מדהימות
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-[800ms] ease-out delay-150 ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          {beforeAfter.map((item, index) => (
            <div key={index} className="group">
              <div className="relative rounded-2xl overflow-hidden border-4 border-orange-500/30 hover:border-orange-500 transition-colors">
                <div className="grid grid-cols-2 divide-x-4 divide-orange-500/30">
                  <div className="relative overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-slate-950/80 backdrop-blur-sm rounded-full text-xs font-bold">
                      לפני
                    </div>
                    <img 
                      src={item.before}
                      alt="תמונת לפני - FitForge"
                      className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-orange-500 rounded-full text-xs font-bold">
                      אחרי
                    </div>
                    <img 
                      src={item.after}
                      alt="תמונת אחרי - FitForge"
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                <p className="text-orange-400 font-semibold">{item.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
