import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ReasonCardProps {
  reason: string;
  number: number;
  isVisible: boolean;
  onNext: () => void;
}

export default function ReasonCard({ reason, number, isVisible, onNext }: ReasonCardProps) {
  const [animationStage, setAnimationStage] = useState<'hidden' | 'card' | 'content' | 'button'>('hidden');

  useEffect(() => {
    if (isVisible) {
      setAnimationStage('card');
      const timer1 = setTimeout(() => setAnimationStage('content'), 300);
      const timer2 = setTimeout(() => setAnimationStage('button'), 600);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setAnimationStage('hidden');
    }
  }, [isVisible]);

  return (
    <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto w-full px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-rose-300/20 to-pink-400/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl"></div>
      
      {/* Main card */}
      <div className={`
        relative bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 
        shadow-xl sm:shadow-2xl border border-pink-200/50
        transition-all duration-500 ease-out transform
        ${animationStage !== 'hidden' 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-6'
        }
      `}>
        {/* Header with number */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Причина #{number}
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400" />
          </div>
        </div>

        {/* Reason text */}
        <div className={`
          transition-all duration-500 ease-out delay-150 transform
          ${animationStage === 'content' || animationStage === 'button' 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
          }
        `}>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-6 sm:mb-8 min-h-[2.5rem] sm:min-h-[3rem] px-2">
            {reason}
          </p>
        </div>

        {/* Next button */}
        <div className={`
          flex justify-center transition-all duration-500 ease-out delay-300 transform
          ${animationStage === 'button' 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
          }
        `}>
          <button
            onClick={onNext}
            className="group flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" fill="currentColor" />
            <span>{number < 100 ? 'Следующая причина' : 'Завершить'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}