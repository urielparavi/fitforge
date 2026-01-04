'use client';

import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

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

const testimonials = [
  {
    name: "דני כהן",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop",
    rating: 5,
    text: "FitForge שינה את החיים שלי! ירדתי 15 ק״ג ב-3 חודשים והרגשתי חזק יותר מתמיד. השילוב של חדר כושר וקליסטניקס פשוט מושלם!",
    result: "-15 ק״ג בשלושה חודשים"
  },
  {
    name: "שרה לוי",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "המאמן הכי מקצועי שפגשתי! תוכנית מותאמת אישית, תמיכה מלאה, ותוצאות מדהימות. מרגישה בטוחה ועצמאית בכל אימון.",
    result: "הגעתי לשיא כושר אישי"
  },
  {
    name: "מיכאל אברהם",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "אחרי שנים של ניסיונות כושלים, FitForge עזר לי לבנות שגרת אימונים שאני ממש נהנה ממנה. התוצאות מדברות בעד עצמן!",
    result: "+8 ק״ג מסת שריר"
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section id="testimonials" className="relative py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 space-y-4 transition-all duration-[800ms] ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold uppercase tracking-wider inline-block">
            המלצות
          </span>
          <h2 className="text-4xl md:text-5xl font-black">מה <span className="text-orange-400">הלקוחות</span> אומרים</h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-[800ms] ease-out delay-150 ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 bg-slate-900/50 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{testimonial.text}</p>
              <div className="pt-4 border-t border-orange-500/20">
                <p className="text-orange-400 font-semibold text-sm">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
