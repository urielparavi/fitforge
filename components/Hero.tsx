'use client';

import { Flame, CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <Flame className="w-4 h-4" />
                המהפכה שלך מתחילה כאן
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="block text-white">ליצור את</span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
                הכושר שלך
              </span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              שילוב ייחודי של <span className="text-orange-400 font-bold">אימוני כוח בחדר הכושר</span> ו<span className="text-orange-400 font-bold">קליסטניקס</span> לתוצאות מקסימליות. בנה את הגוף שתמיד חלמת עליו.
            </p>

            <div className="flex flex-wrap gap-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-400" />
                <span>תוצאות מוכחות</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-400" />
                <span>תכנית אישית</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-400" />
                <span>תמיכה מלאה</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-2"
              >
                התחל עכשיו - אימון חינם
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#pricing" 
                className="px-8 py-4 border-2 border-orange-500 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all"
              >
                צפה במחירים
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-orange-500/20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div>
                <div className="text-3xl font-black text-orange-400">500+</div>
                <div className="text-sm text-slate-400">לקוחות מרוצים</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-400">1000+</div>
                <div className="text-sm text-slate-400">קילו שהורדו</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-400">98%</div>
                <div className="text-sm text-slate-400">שביעות רצון</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop"
              alt="מאמן כושר אישי - FitForge"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-orange-500/30"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-orange-500/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">התקדמות ממוצעת</div>
                  <div className="text-2xl font-black text-orange-400">-8.5 ק״ג</div>
                  <div className="text-xs text-slate-500">ב-8 שבועות</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
