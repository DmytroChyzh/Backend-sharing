import { Flame, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function QuickComparisonSlide() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  
  const comparisons = [
    { category: '📦 ЕКОСИСТЕМА', firebase: 'Величезна', convex: 'Маленька' },
    { category: '🎨 ВІЗУАЛ', firebase: 'Console складний', convex: 'Dashboard наочний' },
    { category: '🔐 AUTH', firebase: '1 клік', convex: 'Танці з бубном' },
    { category: '⚡ СТАБІЛЬНІСТЬ', firebase: 'Без сюрпризів', convex: 'Може зламатись' },
    { category: '🔧 ВАЙБ', firebase: 'Перевірений', convex: 'Новий, сирий' },
  ];

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-8 md:pt-16 pb-8 px-4 md:px-8">
      <style>{`
        @media (max-width: 768px) {
          .accordion-container {
            max-height: none !important;
            overflow: visible !important;
          }
          .accordion-item {
            margin-bottom: 8px !important;
          }
        }
      `}</style>
      <div className="w-full max-w-6xl">
        {/* Header - Always visible */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <Flame
              className="w-10 h-10 md:w-16 md:h-16"
              style={{
                color: '#FF6B35',
                filter: 'drop-shadow(0 0 20px #FF6B35)',
              }}
            />
            <span className="text-lg md:text-3xl lg:text-5xl font-bold" style={{ color: '#FF6B35' }}>
              FIREBASE
            </span>
          </div>

          <div className="flex items-center justify-center">
            <span
              className="text-2xl md:text-4xl lg:text-6xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #7B68EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              VS
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-4">
            <Zap
              className="w-10 h-10 md:w-16 md:h-16"
              style={{
                color: '#7B68EE',
                filter: 'drop-shadow(0 0 20px #7B68EE)',
              }}
            />
            <span className="text-lg md:text-3xl lg:text-5xl font-bold" style={{ color: '#7B68EE' }}>
              CONVEX
            </span>
          </div>
        </div>

        {/* Desktop/Tablet View - Grid Layout */}
        <div className="hidden md:block space-y-4">
          {comparisons.map((comp, index) => (
            <div
              key={index}
              className="glassmorphism-3d rounded-2xl overflow-hidden hover:scale-105 hover:animate-glow-pulse transition-all duration-300 animate-slide-in-up card-3d"
              style={{
                boxShadow: '0 0 20px rgba(123, 104, 238, 0.2)',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="grid grid-cols-3 items-center p-6">
                <div
                  className="text-xl text-center p-4 rounded-xl hover:scale-110 transition-transform duration-200"
                  style={{
                    background: 'rgba(255, 107, 53, 0.1)',
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                  }}
                >
                  {comp.firebase}
                </div>

                <div className="text-2xl font-bold text-center text-white/90 hover:scale-110 transition-transform duration-200">
                  {comp.category}
                </div>

                <div
                  className="text-xl text-center p-4 rounded-xl hover:scale-110 transition-transform duration-200"
                  style={{
                    background: 'rgba(123, 104, 238, 0.1)',
                    border: '1px solid rgba(123, 104, 238, 0.3)',
                  }}
                >
                  {comp.convex}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Accordion Layout */}
        <div className="md:hidden space-y-2 accordion-container">
          {comparisons.map((comp, index) => (
            <div
              key={index}
              className="glassmorphism-3d rounded-2xl overflow-hidden transition-all duration-300 animate-slide-in-up accordion-item"
              style={{
                boxShadow: '0 0 20px rgba(123, 104, 238, 0.2)',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full p-3 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <div className="text-base font-bold text-center text-white/90 flex-1">
                  {comp.category}
                </div>
                {expandedItems.has(index) ? (
                  <ChevronUp className="w-4 h-4 text-white/70" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/70" />
                )}
              </button>

              {/* Accordion Content */}
              {expandedItems.has(index) && (
                <div className="px-3 pb-3 space-y-2 animate-slide-in-up">
                  <div
                    className="text-center p-2 rounded-xl"
                    style={{
                      background: 'rgba(255, 107, 53, 0.1)',
                      border: '1px solid rgba(255, 107, 53, 0.3)',
                    }}
                  >
                    <div className="text-xs font-semibold mb-1" style={{ color: '#FF6B35' }}>
                      FIREBASE
                    </div>
                    <div className="text-sm">{comp.firebase}</div>
                  </div>

                  <div
                    className="text-center p-2 rounded-xl"
                    style={{
                      background: 'rgba(123, 104, 238, 0.1)',
                      border: '1px solid rgba(123, 104, 238, 0.3)',
                    }}
                  >
                    <div className="text-xs font-semibold mb-1" style={{ color: '#7B68EE' }}>
                      CONVEX
                    </div>
                    <div className="text-sm">{comp.convex}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
