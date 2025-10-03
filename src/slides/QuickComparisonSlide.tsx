import { Flame, Zap } from 'lucide-react';

export default function QuickComparisonSlide() {
  const comparisons = [
    { category: '📦 ЕКОСИСТЕМА', firebase: 'Величезна', convex: 'Маленька' },
    { category: '🎨 ВІЗУАЛ', firebase: 'Console складний', convex: 'Dashboard наочний' },
    { category: '🔐 AUTH', firebase: '1 клік', convex: 'Танці з бубном' },
    { category: '⚡ СТАБІЛЬНІСТЬ', firebase: 'Без сюрпризів', convex: 'Може зламатись' },
    { category: '🔧 ВАЙБ', firebase: 'Перевірений', convex: 'Новий, сирий' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h2
        className="text-6xl font-bold mb-16"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #7B68EE 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        FIREBASE vs CONVEX
      </h2>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-3 gap-8 mb-6">
          <div className="flex items-center justify-center gap-4">
            <Flame
              className="w-12 h-12"
              style={{
                color: '#FF6B35',
                filter: 'drop-shadow(0 0 20px #FF6B35)',
              }}
            />
            <span className="text-3xl font-bold" style={{ color: '#FF6B35' }}>
              FIREBASE
            </span>
          </div>

          <div className="flex items-center justify-center">
            <span
              className="text-4xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #7B68EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              VS
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Zap
              className="w-12 h-12"
              style={{
                color: '#7B68EE',
                filter: 'drop-shadow(0 0 20px #7B68EE)',
              }}
            />
            <span className="text-3xl font-bold" style={{ color: '#7B68EE' }}>
              CONVEX
            </span>
          </div>
        </div>

        <div className="space-y-4">
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
      </div>

    </div>
  );
}
