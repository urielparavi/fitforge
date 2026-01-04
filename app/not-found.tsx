'use client';

import Link from 'next/link';
import { Dumbbell, Home, ArrowRight, Activity, Lightbulb, Flame } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 Icon */}
        <div className="flex justify-center mb-8 animate-bounce-in">
          <div className="relative">
            <Dumbbell className="w-32 h-32 text-orange-500 animate-swing" />
            <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-50"></div>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-black mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-black mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          הדף לא נמצא!
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          נראה שהדף הזה עשה <span className="text-orange-400 font-bold">אימון קרדיו</span> וברח מכאן...
          <Activity className="w-5 h-5 inline-block mr-1 text-orange-400" />
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link 
            href="/"
            className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            חזור לדף הבית
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-6 bg-slate-900/50 rounded-2xl border border-orange-500/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <span className="text-orange-400 font-bold flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              טיפ:
            </span>
            בזמן שחזרת לדף הבית, למה לא לעשות 10 שכיבות סמיכה?
            <Flame className="w-5 h-5 text-orange-500" />
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes swing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
