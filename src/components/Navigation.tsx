import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo } from 'react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slide: number) => void;
}

const Navigation = memo(function Navigation({ currentSlide, totalSlides, onNavigate }: NavigationProps) {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-8">
      <button
        onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
        className="glassmorphism rounded-full p-3 hover:bg-white/10 hover:scale-110 hover:animate-glow-pulse transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
        }}
      >
        <ChevronLeft className="w-6 h-6" style={{ color: '#00F5FF' }} />
      </button>

      <div className="flex items-center gap-3">
        <div
          className="glassmorphism px-6 py-3 rounded-full mono"
          style={{
            boxShadow: '0 0 20px rgba(123, 104, 238, 0.3)',
          }}
        >
          <span style={{ color: '#7B68EE' }} className="font-bold">
            {currentSlide + 1}
          </span>
          <span className="text-white/50 mx-2">/</span>
          <span className="text-white/70">{totalSlides}</span>
        </div>

        <div className="flex gap-2">
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

      <button
        onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
        disabled={currentSlide === totalSlides - 1}
        className="glassmorphism rounded-full p-3 hover:bg-white/10 hover:scale-110 hover:animate-glow-pulse transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
        }}
      >
        <ChevronRight className="w-6 h-6" style={{ color: '#00F5FF' }} />
      </button>
    </div>
  );
});

export default Navigation;
