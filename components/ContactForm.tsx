'use client';

import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

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

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [ref, inView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'weight-loss'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onSubmitSuccess();
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      goal: 'weight-loss'
    });
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 space-y-4 transition-all duration-[800ms] ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold uppercase tracking-wider inline-block">
            התחל היום
          </span>
          <h2 className="text-4xl md:text-5xl font-black">קבל <span className="text-orange-400">אימון ניסיון</span> חינם</h2>
          <p className="text-slate-400 text-lg">
            השאר פרטים ונחזור אליך תוך 24 שעות
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`bg-slate-900/50 p-8 rounded-2xl border border-orange-500/20 transition-all duration-[800ms] ease-out delay-150 ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[15px] scale-[0.98]'}`}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">שם מלא</label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-orange-500/20 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="איך קוראים לך?"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">אימייל</label>
              <input 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-orange-500/20 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">טלפון</label>
            <input 
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 bg-slate-800 border border-orange-500/20 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              placeholder="050-1234567"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">מה המטרה שלך?</label>
            <select 
              value={formData.goal}
              onChange={(e) => setFormData({...formData, goal: e.target.value})}
              className="w-full px-4 py-3 pl-10 bg-slate-800 border border-orange-500/20 rounded-xl focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCw2TDgsMTBMMTIsNiIgc3Ryb2tlPSIjZmI5MjNjIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-[position:left_1rem_center] bg-no-repeat"
            >
              <option value="weight-loss">ירידה במשקל</option>
              <option value="muscle-gain">בניית שריר</option>
              <option value="strength">הגברת כוח</option>
              <option value="fitness">שיפור כושר</option>
              <option value="athletic">יכולות אתלטיות</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            שלח בקשה - אימון חינם
          </button>
        </form>
      </div>
    </section>
  );
}
