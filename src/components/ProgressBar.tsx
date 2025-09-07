import { Sparkles } from 'lucide-react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-20 w-full px-4 max-w-sm sm:max-w-md mx-auto">
      <div className="bg-white/90 backdrop-blur-lg rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg border border-pink-200/50">
        <div className="flex items-center justify-between sm:justify-center sm:space-x-4">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
          
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 sm:flex-initial">
            <span className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap flex-shrink-0">
              {current}/{total}
            </span>
            
            <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1.5 sm:h-2 bg-pink-100 rounded-full overflow-hidden flex-1">
              <div 
                className="h-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            
            <span className="text-xs sm:text-sm font-semibold text-pink-500 whitespace-nowrap flex-shrink-0">
              {Math.round(percentage)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}