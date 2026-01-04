import { Dumbbell, ChevronRight, Zap, Target, Users, Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-orange-500/20 bg-gradient-to-b from-slate-950 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Dumbbell className="w-10 h-10 text-orange-500 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">FitForge</h3>
                <p className="text-xs text-orange-300/70 font-medium">ליצור את הכושר שלך</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              שילוב ייחודי של חדר כושר וקליסטניקס לתוצאות מקסימליות. המקום שבו אתה בונה את הגרסה הטובה ביותר של עצמך.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-orange-500/20 hover:border-orange-500" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-orange-500/20 hover:border-orange-500" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-orange-500/20 hover:border-orange-500" aria-label="WhatsApp">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-6 text-orange-400">קישורים מהירים</h4>
            <div className="space-y-3">
              <a href="#about" className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                אודות
              </a>
              <a href="#services" className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                שירותים
              </a>
              <a href="#pricing" className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                מחירים
              </a>
              <a href="#testimonials" className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                המלצות
              </a>
              <a href="#contact" className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                צור קשר
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-lg mb-6 text-orange-400">השירותים שלנו</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-orange-500" />
                אימוני כוח
              </p>
              <p className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-500" />
                קליסטניקס
              </p>
              <p className="flex items-center gap-2">
                <Target className="w-4 h-4 text-orange-500" />
                הרזיה ועיצוב
              </p>
              <p className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-500" />
                אימוני קבוצה
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-lg mb-6 text-orange-400">צור קשר</h4>
            <div className="space-y-4">
              <a href="mailto:info@fitforge.co.il" className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors group">
                <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">אימייל</div>
                  <div className="text-sm font-semibold">info@fitforge.co.il</div>
                </div>
              </a>
              <a href="tel:0501234567" className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors group">
                <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">טלפון</div>
                  <div className="text-sm font-semibold">050-123-4567</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center border border-orange-500/20">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">מיקום</div>
                  <div className="text-sm font-semibold">תל אביב, ישראל</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 FitForge. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-orange-400 transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-orange-400 transition-colors">מדיניות פרטיות</a>
              <a href="#" className="hover:text-orange-400 transition-colors">נגישות</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
}
