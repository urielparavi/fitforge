'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Dumbbell, Zap, Target } from 'lucide-react';

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

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="relative py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-[800ms] ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          <div className="relative h-[500px] rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop"
              alt="מאמן כושר מקצועי FitForge"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg font-semibold">״המאמן הכי מקצועי שפגשתי!״</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold uppercase tracking-wider">
                אודות המאמן
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              שילוב מושלם של <span className="text-orange-400">כוח</span> ו<span className="text-orange-400">זריזות</span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              FitForge מציע גישה ייחודית לאימונים - שילוב של אימוני כוח מסורתיים בחדר הכושר עם אימוני קליסטניקס מתקדמים. זו לא סתם אימון, זו <span className="text-orange-400 font-bold">יצירת הגוף</span> שלך מחדש.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">אימוני כוח בחדר כושר</h3>
                  <p className="text-slate-400 text-sm">בניית מסת שריר, הגברת כוח ועיצוב הגוף עם ציוד מקצועי</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">קליסטניקס מתקדם</h3>
                  <p className="text-slate-400 text-sm">שליטה מוחלטת בגוף, גמישות, איזון ויכולות אתלטיות</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">תכנית מותאמת אישית</h3>
                  <p className="text-slate-400 text-sm">כל אימון מותאם לרמה, למטרות ולצרכים האישיים שלך</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
