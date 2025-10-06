export default function ConvexProjectsSlide() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* BMW Quote */}
      <div className="relative z-10 w-full pt-20 overflow-hidden">
        <div className="glassmorphism px-8 py-6 rounded-3xl max-w-2xl animate-move-left-to-right"
          style={{
            border: '2px solid rgba(139, 92, 246, 0.4)',
            background: 'rgba(139, 92, 246, 0.15)',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
            animation: 'moveLeftToRight 32s ease-in-out infinite',
          }}
        >
          <div className="flex items-center gap-4">
            <div 
              className="text-5xl flex-shrink-0"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))'
              }}
            >
              🚗
            </div>
            <p className="text-xl italic leading-relaxed font-medium" style={{ color: '#E9D5FF' }}>
              "Convex - це як BMW. Швидко, красиво, але постійно в сервісі."
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="flex flex-col items-center pt-32 max-w-7xl px-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              ЩО МИ ЗРОБИЛИ НА <span className="text-purple-400">CONVEX</span>
            </h1>
          </div>

          {/* UI Screens Container */}
          <div className="flex justify-center items-start gap-8 mb-8">
            {/* Left Screen - AIVI */}
            <div className="relative" style={{ width: '980px', height: '500px' }}>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">
                  AIVI - Beauty AI Assistant
                </h3>
              </div>
              
              <div className="relative bg-gray-800 rounded-3xl p-4 border-4 border-purple-500 shadow-2xl shadow-purple-500/25 w-full h-full flex items-center justify-center" style={{ width: '980px', height: '500px' }}>
                {/* Screen glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-transparent blur-xl" />
                
                {/* AIVI Screenshot */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden cursor-pointer group">
                  <a href="https://aivi-two.vercel.app/landing" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/aivi.png" 
                      alt="AIVI Screenshot"
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                </div>
              </div>
              
              {/* Description for AIVI */}
              <div className="mt-3 text-center max-w-4xl">
                <div className="text-xs text-gray-400 space-y-1 mb-3">
                  <div>Бекенд: Convex (Realtime DB, збереження профілів, рекомендацій, прогресу, перекладів, налаштувань мов) + Clerk (автентифікація) + інтеграція з OpenAI API</div>
                  <div>Фронтенд: Next.js 14 (App Router), TypeScript, Tailwind CSS, Radix UI</div>
                  <div>AI-функціонал: персональні skincare-рекомендації на основі типу шкіри, трекінг результатів у часі, AI-консультації з історією</div>
                  <div>UI/UX: сучасна тема (згенерована через TweakCN), адаптивний дизайн, мультимовність, realtime оновлення прогресу</div>
                  <div>Що зберігали в Convex: Профілі користувачів, AI-рекомендації та історія консультацій, Переклади інтерфейсу та контенту, Налаштування мов для кожного користувача, Трекінг прогресу та результатів</div>
                </div>
              </div>

              {/* Technology Tags for AIVI */}
              <div className="flex justify-center flex-wrap gap-2 mt-3">
                {[
                  { name: 'Convex', icon: '🟣' },
                  { name: 'Clerk', icon: '🔐' },
                  { name: 'OpenAI', icon: '🤖' },
                  { name: 'Radix UI', icon: '🎨' },
                  { name: 'Lucide React', icon: '🎯' },
                  { name: 'React Markdown', icon: '📝' },
                  { name: 'TweakCN', icon: '🎭' }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 border-2 border-purple-500 rounded-xl px-3 py-1 flex items-center space-x-2 text-white hover:bg-purple-600 transition-colors cursor-pointer text-sm"
                  >
                    <span className="text-sm">{tech.icon}</span>
                    <span className="font-medium text-xs">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Screen - Theme Forge */}
            <div className="relative" style={{ width: '980px', height: '500px' }}>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">
                  THEME FORGE - Tool для дизайнерів
                </h3>
              </div>
              
              <div className="relative bg-white rounded-3xl p-4 border-4 border-purple-500 shadow-2xl shadow-purple-500/25 w-full h-full flex items-center justify-center" style={{ width: '980px', height: '500px' }}>
                {/* Screen glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-transparent blur-xl" />
                
                {/* Theme Forge Screenshot */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden cursor-pointer group">
                  <a href="https://theme-forge.vercel.app/components" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/ThemeForge.png" 
                      alt="Theme Forge Screenshot"
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                </div>
              </div>
              
              {/* Description for Theme Forge */}
              <div className="mt-3 text-center max-w-4xl">
                <div className="text-xs text-gray-400 space-y-1 mb-3">
                  <div>Бекенд: Convex (Realtime DB, збереження тем, користувацькі бібліотеки) + Clerk (автентифікація)</div>
                  <div>Фронтенд: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui</div>
                  <div>Функціонал: візуальний customizer для тем, інтеграція з Google Fonts API, експорт компонентів у JSX/Tailwind код, синхронізація між пристроями</div>
                  <div>UI/UX: dashboard-стиль, превʼю компонентів у реальному часі, дизайн-дружній інтерфейс</div>
                  <div>Що зберігали в Convex: Користувацькі теми та налаштування, Бібліотеки компонентів, Експортовані конфігурації, Синхронізація між пристроями</div>
                </div>
              </div>

              {/* Technology Tags for Theme Forge */}
              <div className="flex justify-center flex-wrap gap-2 mt-3">
                {[
                  { name: 'Convex', icon: '🟣' },
                  { name: 'Clerk', icon: '🔐' },
                  { name: 'shadcn/ui', icon: '🎨' },
                  { name: 'Google Fonts API', icon: '🔤' },
                  { name: 'Lucide React', icon: '🎯' },
                  { name: 'Prism.js', icon: '💎' }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 border-2 border-purple-500 rounded-xl px-3 py-1 flex items-center space-x-2 text-white hover:bg-purple-600 transition-colors cursor-pointer text-sm"
                  >
                    <span className="text-sm">{tech.icon}</span>
                    <span className="font-medium text-xs">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}



