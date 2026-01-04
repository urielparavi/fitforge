'use client';

import { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b border-orange-500/20 bg-slate-950/80 backdrop-blur-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Dumbbell className="w-10 h-10 text-orange-500 group-hover:rotate-180 transition-transform duration-500" />
              <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                FitForge
              </h1>
              <p className="text-xs text-orange-300/70 font-medium">ליצור את הכושר שלך</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold hover:text-orange-400 transition-colors">אודות</a>
            <a href="#services" className="text-sm font-semibold hover:text-orange-400 transition-colors">שירותים</a>
            <a href="#pricing" className="text-sm font-semibold hover:text-orange-400 transition-colors">מחירים</a>
            <a href="#testimonials" className="text-sm font-semibold hover:text-orange-400 transition-colors">המלצות</a>
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105">
              אימון ניסיון חינם
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-orange-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-orange-500/20 bg-slate-950/95 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-4">
            <a href="#about" className="block text-lg font-semibold hover:text-orange-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>אודות</a>
            <a href="#services" className="block text-lg font-semibold hover:text-orange-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>שירותים</a>
            <a href="#pricing" className="block text-lg font-semibold hover:text-orange-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>מחירים</a>
            <a href="#testimonials" className="block text-lg font-semibold hover:text-orange-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>המלצות</a>
            <a href="#contact" className="block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-center hover:shadow-lg hover:shadow-orange-500/50 transition-all" onClick={() => setMobileMenuOpen(false)}>
              אימון ניסיון חינם
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
