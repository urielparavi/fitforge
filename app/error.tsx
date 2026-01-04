'use client';

import { useEffect } from 'react';
import { AlertTriangle, Home, RotateCcw, Dumbbell } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center overflow-hidden relative px-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Error Icon */}
        <div className="flex justify-center mb-8 animate-bounce-in">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center animate-pulse-slow">
              <AlertTriangle className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 bg-red-500 blur-2xl opacity-50"></div>
          </div>
        </div>

        {/* Error Text */}
        <h1 className="text-6xl md:text-7xl font-black mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            אופס!
          </span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-black mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          משהו השתבש
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          נתקלנו בבעיה טכנית. אל דאגה, זה לא אשמתך!
          <br />
          <span className="text-orange-400 font-bold">נסה שוב</span> או חזור לדף הבית.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={() => reset()}
            className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            נסה שוב
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 border-2 border-orange-500 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            חזרה לדף הבית
          </button>
        </div>

        {/* Fun Fact */}
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-orange-500/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-slate-400 flex items-center justify-center gap-2 flex-wrap">
            <Dumbbell className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-bold">טיפ מהיר:</span>
            בזמן שהדף נטען מחדש, למה לא לעשות כמה מתיחות? 🤸‍♂️
          </p>
        </div>

        {/* Developer Error Details */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-right animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <summary className="cursor-pointer text-sm text-slate-400 hover:text-orange-400 transition-colors font-semibold mb-4">
              📋 פרטי שגיאה (למפתחים)
            </summary>
            <div className="mt-4 p-6 bg-slate-950/80 rounded-xl border border-red-500/30 text-left">
              <div className="mb-2 text-xs text-orange-400 font-bold">Error Message:</div>
              <pre className="text-xs text-red-300 overflow-auto whitespace-pre-wrap break-words">
                {error.message}
              </pre>
              {error.digest && (
                <>
                  <div className="mt-4 mb-2 text-xs text-orange-400 font-bold">Error Digest:</div>
                  <pre className="text-xs text-slate-400 overflow-auto">
                    {error.digest}
                  </pre>
                </>
              )}
              {error.stack && (
                <>
                  <div className="mt-4 mb-2 text-xs text-orange-400 font-bold">Stack Trace:</div>
                  <pre className="text-xs text-slate-500 overflow-auto max-h-60 whitespace-pre-wrap break-words">
                    {error.stack}
                  </pre>
                </>
              )}
            </div>
          </details>
        )}
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
      `}</style>
    </div>
  );
}
