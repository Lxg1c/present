import { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 1000);
    const timer2 = setTimeout(() => setShowButton(true), 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 flex items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts />
      
      {/* Background decorations - адаптивные размеры */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-pink-300/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-rose-300/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-2 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-yellow-300/20 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-pink-400/15 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-pulse delay-3000"></div>
      </div>

      <div className="text-center z-20 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        {/* Main title */}
        <div className={`transition-all duration-2000 transform ${
          showMessage ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="flex sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-4">
            <Gift className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-500" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 bg-clip-text text-transparent font-dancing leading-tight">
              С Днём Рождения!
            </h1>
            <Gift className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-500" />
          </div>
          
          <div className="mb-6 sm:mb-8">
            <div className="flex sm:flex-row items-center justify-center mb-3 sm:mb-4 gap-2 sm:gap-3">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 font-dancing">
                Любимая моя!
              </h2>
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400" />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-4 sm:mb-6 px-2">
              Сегодня тебе исполняется 19 лет и мне показалось что просто подарить тебе какую-то материальную вещь не интересно, так что я решил, что сделаю что-то милое руками.<br className="hidden sm:block"/>
              Надеюсь тебе понравиться :)
            </p>
            
            <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-pink-200/50 mx-auto max-w-2xl">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Я написал <span className="font-bold text-pink-500">100 причин/комплиментов</span>,
                которые больше всего мне в тебе нравиться и то как ты много для меня значишь. Каждая из них искренняя, каждая — из самого сердца.
                <br className="hidden sm:block"/>
                Нажимай на кнопочку и читай
              </p>
            </div>
          </div>
        </div>

        {/* Start button */}
        <div className={`transition-all duration-1500 delay-1000 transform ${
          showButton ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <button
            onClick={onStart}
            className="group justify-center relative inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-600 hover:via-rose-500 hover:to-pink-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full text-base sm:text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 sm:hover:scale-110 shadow-lg sm:shadow-xl hover:shadow-pink-500/25 w-full sm:w-auto"
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform group-hover:scale-125" fill="currentColor" />
            <span className="text-sm sm:text-base md:text-lg">Начать путешествие</span>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform group-hover:rotate-12" />
            
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
          
          <p className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm animate-pulse">
            Нажми, чтобы узнать, как сильно я тебя люблю ❤️
          </p>
        </div>
      </div>
    </div>
  );
}