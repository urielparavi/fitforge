'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Flame } from 'lucide-react';

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

const pricingPlans = [
  {
    name: 'Basis',
    price: '₪399',
    period: 'לחודש',
    features: [
      '2 אימונים אישיים בשבוע',
      'תכנית אימונים מותאמת',
      'תמיכה בווטסאפ',
      'מעקב התקדמות',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '₪649',
    period: 'לחודש',
    features: [
      '3 אימונים אישיים בשבוע',
      'תכנית אימונים ותזונה',
      'תמיכה 24/7',
      'מעקב התקדמות מתקדם',
      'ייעוץ תזונה',
      'גישה לאפליקציה',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '₪899',
    period: 'לחודש',
    features: [
      '4 אימונים אישיים בשבוע',
      'תכנית מקיפה ומותאמת',
      'תמיכה VIP 24/7',
      'מעקב מתקדם עם AI',
      'תפריט תזונה שבועי',
      'עיסוי ספורט חודשי',
      'גישה למתקן 24/7',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [ref, inView] = useInView();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 space-y-4 transition-all duration-[800ms] ease-out ${
            inView
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-[15px] scale-[0.98]'
          }`}
        >
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold uppercase tracking-wider inline-block">
            מחירים
          </span>
          <h2 className="text-4xl md:text-5xl font-black">
            בחר את <span className="text-orange-400">החבילה</span> שלך
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            תכניות גמישות שמתאימות לכל תקציב ומטרה
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-[800ms] ease-out delay-150 ${
            inView
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-[15px] scale-[0.98]'
          }`}
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all hover:-translate-y-2 flex flex-col ${
                plan.popular
                  ? 'border-orange-500 bg-gradient-to-b from-orange-500/10 to-transparent shadow-2xl shadow-orange-500/20'
                  : 'border-orange-500/20 bg-slate-900/50 hover:border-orange-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-sm font-bold flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  הכי פופולרי
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-black text-orange-400">
                    {plan.price}
                  </span>
                  <span className="text-slate-400">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                בחר תוכנית
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
