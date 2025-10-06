import { Flame, Zap } from 'lucide-react';
import { useState, memo } from 'react';

const TitleSlide = memo(function TitleSlide() {
  const [easterEggActive, setEasterEggActive] = useState(false);

  const handleTitleClick = () => {
    setEasterEggActive(true);
    setTimeout(() => setEasterEggActive(false), 2000);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-responsive">
      <div className="flex items-center gap-6 md:gap-12 mb-6 md:mb-8">
        <div className="animate-float hover:scale-110 transition-transform duration-300 cursor-pointer morph-icon">
          <Flame
            className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"
            style={{
              color: '#FF6B35',
              filter: 'drop-shadow(0 0 30px #FF6B35)',
            }}
          />
        </div>
        <div className="animate-float hover:scale-110 transition-transform duration-300 cursor-pointer morph-icon" style={{ animationDelay: '0.5s' }}>
          <Zap
            className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"
            style={{
              color: '#7B68EE',
              filter: 'drop-shadow(0 0 30px #7B68EE)',
            }}
          />
        </div>
      </div>

      <h1
        className={`text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-center animate-slide-in-down hover:scale-105 transition-transform duration-500 cursor-pointer ${
          easterEggActive ? 'rainbow-text easter-egg' : ''
        }`}
        onClick={handleTitleClick}
        style={{
          background: easterEggActive 
            ? undefined 
            : 'linear-gradient(135deg, #FF6B35 0%, #7B68EE 50%, #00F5FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: easterEggActive ? undefined : 'gradient-shift 3s ease infinite',
          textShadow: '0 0 40px rgba(123, 104, 238, 0.5)',
        }}
      >
        CONVEX vs FIREBASE
      </h1>

      <div
        className="h-1 w-32 md:w-48 lg:w-64 mb-8 md:mb-12 animate-slide-in-up shimmer-effect"
        style={{
          background: 'linear-gradient(90deg, #FF6B35 0%, #7B68EE 50%, #00F5FF 100%)',
          boxShadow: '0 0 20px rgba(123, 104, 238, 0.8)',
          animationDelay: '0.3s',
        }}
      />

      <div className="glassmorphism-3d px-6 md:px-12 py-4 md:py-8 rounded-3xl max-w-3xl text-center animate-scale-in hover:animate-glow-pulse transition-all duration-300 card-3d">
        <p className="text-base md:text-xl lg:text-2xl text-white/90 font-medium">
          Досвід дизайнерів, які вайбкодять
        </p>
      </div>

      <div className="absolute bottom-24 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #00F5FF 0%, #7B68EE 100%)',
              animationDelay: `${i * 0.3}s`,
              boxShadow: '0 0 10px rgba(0, 245, 255, 0.8)',
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default TitleSlide;
