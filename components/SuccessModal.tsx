'use client';

import { X, Flame } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
      
      {/* Modal */}
      <div 
        className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 max-w-md w-full border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center animate-bounce-in">
            <svg 
              className="w-10 h-10 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4 relative z-10">
          <h3 className="text-3xl font-black text-white flex items-center justify-center gap-2">
            תודה רבה!
            <Flame className="w-8 h-8 text-orange-400" />
          </h3>
          <p className="text-lg text-slate-300">
            קיבלנו את הפרטים שלך
          </p>
          <p className="text-slate-400">
            ניצור איתך קשר תוך <span className="text-orange-400 font-bold">24 שעות</span> לתיאום אימון הניסיון החינמי
          </p>

          {/* Action Buttons */}
          <div className="pt-6 space-y-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105 cursor-pointer relative z-20"
            >
              מעולה, תודה!
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 text-slate-400 hover:text-white transition-colors text-sm cursor-pointer relative z-20 hover:bg-slate-800/50 rounded-lg"
            >
              סגור
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer z-20 hover:bg-slate-800/50 p-2 rounded-lg"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      </div>
    </div>
  );
}
