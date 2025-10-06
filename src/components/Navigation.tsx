import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo } from 'react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slide: number) => void;
}

const Navigation = memo(function Navigation({ currentSlide, totalSlides, onNavigate }: NavigationProps) {
  return (
    <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-4 md:gap-8 px-4">
      {/* Left Navigation Button */}
      <button
        onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
        className="touch-button glassmorphism rounded-full p-2 md:p-3 hover:bg-white/10 hover:scale-110 hover:animate-glow-pulse transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95"
        style={{
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
        }}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#00F5FF' }} />
      </button>

      {/* Center Content */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Slide Counter */}
        <div
          className="glassmorphism px-4 py-2 md:px-6 md:py-3 rounded-full mono"
          style={{
            boxShadow: '0 0 20px rgba(123, 104, 238, 0.3)',
          }}
        >
          <span style={{ color: '#7B68EE' }} className="font-bold text-sm md:text-base">
            {currentSlide + 1}
          </span>
          <span className="text-white/50 mx-1 md:mx-2 text-sm md:text-base">/</span>
          <span className="text-white/70 text-sm md:text-base">{totalSlides}</span>
        </div>

        {/* Navigation Dots - Hidden on mobile */}
        <div className="hidden md:flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                index === currentSlide ? 'animate-glow-pulse' : 'hover:bg-white/40'
              }`}
              style={{
                background:
                  index === currentSlide
                    ? 'linear-gradient(135deg, #7B68EE 0%, #00F5FF 100%)'
                    : 'rgba(255, 255, 255, 0.2)',
                boxShadow: index === currentSlide ? '0 0 10px rgba(123, 104, 238, 0.8)' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
        disabled={currentSlide === totalSlides - 1}
        className="touch-button glassmorphism rounded-full p-2 md:p-3 hover:bg-white/10 hover:scale-110 hover:animate-glow-pulse transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95"
        style={{
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
        }}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#00F5FF' }} />
      </button>
    </div>
  );
});

export default Navigation;
