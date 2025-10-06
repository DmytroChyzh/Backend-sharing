import React from 'react';

const ProjectShowcaseSlide = () => {
  return (
    <div className="relative w-full min-h-screen overflow-auto flex flex-col justify-center">
      {/* Main content */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="flex flex-col items-center pt-8 md:pt-16 lg:pt-32 pb-8 md:pb-16 max-w-7xl px-4 md:px-8">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            Наші <span className="text-purple-400">Проекти</span>
          </h1>
        </div>

        {/* UI Screens Container - Responsive Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 md:gap-16 lg:gap-20 mb-4 md:mb-6 w-full">
          {/* Left Screen - Chatbot */}
          <div className="relative w-full lg:w-1/2">
            <div className="text-center mb-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-400 mb-2">
                Чат-бот для автоматизації
              </h3>
            </div>
            
            <div className="relative bg-gray-800 rounded-3xl p-2 md:p-4 border-4 border-purple-500 shadow-2xl shadow-purple-500/25 w-full aspect-video flex items-center justify-center">
              {/* Screen glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-transparent blur-xl" />
              
              {/* Chatbot Screenshot */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden cursor-pointer group">
                <a href="https://chatbot-navy-xi-51.vercel.app" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/images/ChatbotCieden.png" 
                    alt="Chatbot Cieden Screenshot"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
            
            {/* Description for Chatbot */}
            <div className="mt-6 text-center">
              <div className="text-sm md:text-base text-gray-400 space-y-2 mb-6">
                <div>Бекенд: Firebase (Firestore, Auth) + інтеграція з OpenAI API та Claude (Anthropic)</div>
                <div>Фронтенд: Next.js 14 (App Router), TypeScript, Tailwind CSS</div>
                <div className="hidden md:block">AI-функціонал: аналіз вимог, автоматичні естімейти, голосовий інтерфейс (ElevenLabs, Web Speech API)</div>
                <div className="hidden md:block">UI/UX: темна/світла/космічна тема, анімації, 3D-модель робота, responsive дизайн</div>
              </div>
            </div>

            {/* Technology Tags for Chatbot */}
            <div className="flex justify-center flex-wrap gap-2 md:gap-3 mt-6">
              {[
                { name: 'Firebase', icon: '🔥' },
                { name: 'OpenAI', icon: '🤖' },
                { name: 'Next.js', icon: '⚡' },
                { name: 'React Three Fiber', icon: '🎮' },
                { name: 'tsparticles', icon: '✨' },
                { name: 'React Markdown', icon: '📝' },
                { name: 'Lucide React', icon: '🎯' },
                { name: 'date-fns', icon: '📅' },
                { name: 'ElevenLabs', icon: '🎤' },
                { name: 'Web Speech API', icon: '🗣️' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border-2 border-purple-500 rounded-xl px-3 md:px-4 py-2 flex items-center space-x-2 text-white hover:bg-purple-600 transition-colors cursor-pointer text-sm md:text-base"
                >
                  <span className="text-sm md:text-base">{tech.icon}</span>
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Screen - Manager */}
          <div className="relative w-full lg:w-1/2">
            <div className="text-center mb-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-400 mb-2">
                Менеджер для аналітики
              </h3>
            </div>
            
            <div className="relative bg-white rounded-3xl p-2 md:p-4 border-4 border-purple-500 shadow-2xl shadow-purple-500/25 w-full aspect-video flex items-center justify-center">
              {/* Screen glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-transparent blur-xl" />
              
              {/* Manager Screenshot */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden cursor-pointer group">
                <a href="https://ciedenmanager.vercel.app" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/images/ManagerDashboard .png" 
                    alt="Manager Dashboard Screenshot"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
            
            {/* Description for Manager */}
            <div className="mt-6 text-center">
              <div className="text-sm md:text-base text-gray-400 space-y-2 mb-6">
                <div>Бекенд: Firebase (Firestore, Auth) + інтеграція з OpenAI GPT-3.5-turbo</div>
                <div>Фронтенд: Next.js 14, React 18, TypeScript, Tailwind CSS</div>
                <div className="hidden md:block">Основні модулі: Dashboard (аналітика + графіки Recharts), AI-Assistant, Project Calculator, Calendar, Chats</div>
                <div className="hidden md:block">Додаткові тули: jsPDF, PapaParse, XLSX, react-i18next (експорти, мультимовність)</div>
              </div>
            </div>

            {/* Technology Tags for Manager */}
            <div className="flex justify-center flex-wrap gap-2 md:gap-3 mt-6">
              {[
                { name: 'Firebase', icon: '🔥' },
                { name: 'OpenAI', icon: '🤖' },
                { name: 'Next.js', icon: '⚡' },
                { name: 'React 18', icon: '⚛️' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'Recharts', icon: '📊' },
                { name: 'jsPDF', icon: '📄' },
                { name: 'PapaParse', icon: '📋' },
                { name: 'XLSX', icon: '📈' },
                { name: 'react-i18next', icon: '🌍' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border-2 border-purple-500 rounded-xl px-3 md:px-4 py-2 flex items-center space-x-2 text-white hover:bg-purple-600 transition-colors cursor-pointer text-sm md:text-base"
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

      {/* Firebase Quote - Bottom */}
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
              "Firebase - це як надійна стара машина. Не новенька Tesla, але точно довезе."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcaseSlide;
