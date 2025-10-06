export default function ConvexProjectsSlide() {
  return (
    <div className="relative w-full min-h-screen overflow-auto flex flex-col justify-center">
      {/* Main content */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="flex flex-col items-center pt-8 md:pt-16 lg:pt-32 pb-8 md:pb-16 max-w-7xl px-4 md:px-8">
          {/* Title */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              ЩО МИ ЗРОБИЛИ НА <span className="text-purple-400">CONVEX</span>
            </h1>
          </div>

          {/* UI Screens Container - Responsive Layout */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-12 md:gap-16 lg:gap-20 mb-4 md:mb-6 w-full">
            {/* Left Screen - AIVI */}
            <div className="relative w-full lg:w-1/2">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-400 mb-2">
                  AIVI - Beauty AI Assistant
                </h3>
              </div>
              
              <div className="relative bg-gray-800 rounded-3xl p-2 md:p-4 border-4 border-purple-500 shadow-2xl shadow-purple-500/25 w-full aspect-video flex items-center justify-center">
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
              <div className="mt-6 text-center">
                <div className="text-sm md:text-base text-gray-400 space-y-2 mb-6">
                  <div>Бекенд: Convex (Realtime DB, збереження профілів, рекомендацій, прогресу, перекладів, налаштувань мов) + Clerk (автентифікація) + інтеграція з OpenAI API</div>
                  <div>Фронтенд: Next.js 14 (App Router), TypeScript, Tailwind CSS, Radix UI</div>
                  <div className="hidden md:block">AI-функціонал: персональні skincare-рекомендації на основі типу шкіри, трекінг результатів у часі, AI-консультації з історією</div>
                  <div className="hidden md:block">UI/UX: сучасна тема (згенерована через TweakCN), адаптивний дизайн, мультимовність, realtime оновлення прогресу</div>
                </div>
              </div>

              {/* Technology Tags for AIVI */}
              <div className="flex justify-center flex-wrap gap-2 md:gap-3 mt-6">
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
                    className="flex items-center bg-purple-700/20 border border-purple-500/50 rounded-full px-3 md:px-4 py-2 space-x-2 text-purple-300 shadow-lg"
                  >
                    <span className="text-sm md:text-base">{tech.icon}</span>
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Screen - Theme Forge */}
            <div className="relative w-full lg:w-1/2">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400 mb-2">
                  THEME FORGE - Tool для дизайнерів
                </h3>
              </div>
              
              <div className="relative bg-white rounded-3xl p-2 md:p-4 border-4 border-blue-500 shadow-2xl shadow-blue-500/25 w-full aspect-video flex items-center justify-center">
                {/* Screen glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-transparent blur-xl" />
                
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
              <div className="mt-6 text-center">
                <div className="text-sm md:text-base text-gray-400 space-y-2 mb-6">
                  <div>Бекенд: Convex (Realtime DB, збереження тем, користувацькі бібліотеки) + Clerk (автентифікація)</div>
                  <div>Фронтенд: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui</div>
                  <div className="hidden md:block">Функціонал: візуальний customizer для тем, інтеграція з Google Fonts API, експорт компонентів у JSX/Tailwind код, синхронізація між пристроями</div>
                  <div className="hidden md:block">UI/UX: dashboard-стиль, превʼю компонентів у реальному часі, дизайн-дружній інтерфейс</div>
                </div>
              </div>

              {/* Technology Tags for Theme Forge */}
              <div className="flex justify-center flex-wrap gap-2 md:gap-3 mt-6">
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
                    className="flex items-center bg-blue-700/20 border border-blue-500/50 rounded-full px-3 md:px-4 py-2 space-x-2 text-blue-300 shadow-lg"
                  >
                    <span className="text-sm md:text-base">{tech.icon}</span>
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Convex Quote - Bottom */}
      <div className="relative w-full flex justify-center mt-4 md:mt-6 mb-16 md:mb-20 px-8 md:px-16 lg:px-24">
        <div className="glassmorphism px-6 md:px-8 py-4 md:py-6 rounded-3xl max-w-2xl w-full"
          style={{
            border: '2px solid rgba(139, 92, 246, 0.4)',
            background: 'rgba(139, 92, 246, 0.15)',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
            animation: 'slideInDown 1s ease-out 0.3s both',
          }}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div 
              className="text-3xl md:text-4xl flex-shrink-0"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))'
              }}
            >
              🚗
            </div>
            <p className="text-sm md:text-base lg:text-lg italic leading-relaxed font-medium" style={{ color: '#E9D5FF' }}>
              "Convex - це як BMW. Швидко, красиво, але постійно в сервісі."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}