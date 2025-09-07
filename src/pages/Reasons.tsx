import { useState, useEffect } from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';
import ProgressBar from '..//components/ProgressBar';
import ReasonCard from '../components/ReasonCard';
import { reasons } from '../data/reasons';


interface ReasonsProps {
  onBack: () => void;
}

export default function Reasons({ onBack }: ReasonsProps) {
  const [currentReason, setCurrentReason] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [isComplete, setIsComplete] = useState(true);

  useEffect(() => {
    setShowCard(true);
  }, [currentReason]);

  const handleNext = () => {
    if (currentReason < reasons.length - 1) {
      setShowCard(false);
      setTimeout(() => {
        setCurrentReason(currentReason + 1);
      }, 500);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentReason(0);
    setIsComplete(false);
    setShowCard(false);
    setTimeout(() => setShowCard(true), 100);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 flex items-center justify-center relative overflow-hidden px-4 py-8">
        <FloatingHearts />
        
        <div className="text-center z-20 max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 via-rose-300/30 to-pink-400/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
            
            {/* Main completion card */}
            <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl sm:shadow-2xl border border-pink-200/50">
              <div className="mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 flex items-center">
                    <Heart className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-pink-500 mx-auto mb-4 sm:mb-6" fill="currentColor" />
                    <p className="text-lg sm:text-lg md:text-xl   font-semibold text-pink-700">
                    С Днём Рождения, солнце!<br/>
                  </p>
                  <Heart className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-pink-500 mx-auto mb-4 sm:mb-6" fill="currentColor" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Желаю тебе счастья, здоровья и всех твоих мечт! 🎂✨ Ты добьешься больших высот в жизни, заработаешь много денег и все у тебя будет хорошо.
                  <br className="hidden sm:block"/>
                  Просто продолжай светить и заниматься тем что тебе искренне нравиться :) 
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Каждый день с тобой — это новая причина влюбляться в тебя снова и снова.
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                  <span className="text-sm sm:text-base">Прочитать ещё раз</span>
                </button>
                
                <button
                  onClick={onBack}
                  className="flex items-center justify-center space-x-2 bg-white/80 hover:bg-white text-pink-600 border-2 border-pink-300 hover:border-pink-400 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Вернуться в начало</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 relative overflow-hidden">
      <FloatingHearts />
      <ProgressBar current={currentReason + 1} total={reasons.length} />
      
      {/* Back button - адаптивное позиционирование */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center space-x-2 bg-white/90 hover:bg-white text-pink-600 border border-pink-200 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-lg text-sm sm:text-base"
      >
        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">Назад</span>
      </button>
      
      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 py-16 sm:py-20">
        <ReasonCard
          reason={reasons[currentReason]}
          number={currentReason + 1}
          isVisible={showCard}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}