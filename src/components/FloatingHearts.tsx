import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartProps {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
}

const FloatingHeart = ({ left, animationDuration, delay, size }: HeartProps) => {
  return (
    <div
      className="absolute text-pink-400 opacity-70 pointer-events-none will-change-transform"
      style={{
        left: `${left}%`,
        animation: `floatUp ${animationDuration}s ease-in-out ${delay}s infinite both`,
        width: `${size}px`,
        height: `${size}px`,
        filter: 'drop-shadow(0 2px 4px rgba(244, 114, 182, 0.3))',
      }}
    >
      <Heart className="w-full h-full" fill="currentColor" />
    </div>
  );
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: HeartProps[] = [];
      const heartCount = Math.floor(window.innerWidth / 50); // Адаптивное количество
      
      for (let i = 0; i < heartCount; i++) {
        newHearts.push({
          id: i + Date.now(),
          left: Math.random() * 100,
          animationDuration: Math.random() * 4 + 6, // 6-10 секунд
          delay: Math.random() * 3,
          size: Math.random() * 20 + 16, // 16-36px
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    
    // Перегенерируем при изменении размера окна
    const handleResize = () => generateHearts();
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(generateHearts, 15000); // Реже перегенерация

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(140vh) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          5% {
            opacity: 0.7;
            transform: translateY(110vh) rotate(5deg) scale(1);
          }
          15% {
            transform: translateY(90vh) rotate(-3deg) scale(1.05);
          }
          30% {
            transform: translateY(60vh) rotate(8deg) scale(1);
          }
          50% {
            transform: translateY(30vh) rotate(-5deg) scale(0.95);
          }
          70% {
            transform: translateY(0vh) rotate(2deg) scale(0.9);
            opacity: 0.7;
          }
          85% {
            transform: translateY(-15vh) rotate(-1deg) scale(0.85);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-30vh) rotate(-10deg) scale(0.8);
            opacity: 0;
          }
        }

        /* Плавная анимация для всех сердечек */
        .will-change-transform {
          will-change: transform, opacity;
        }

        /* Оптимизация анимации */
        @media (prefers-reduced-motion: no-preference) {
          .will-change-transform {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
        }
      `}</style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {hearts.map((heart) => (
          <FloatingHeart key={heart.id} {...heart} />
        ))}
      </div>
    </>
  );
}