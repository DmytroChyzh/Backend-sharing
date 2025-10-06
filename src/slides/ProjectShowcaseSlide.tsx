import React from 'react';

const ProjectShowcaseSlide = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Firebase Quote */}
      <div className="relative z-10 w-full pt-20 overflow-hidden">
        <div className="glassmorphism px-8 py-6 rounded-3xl max-w-2xl"
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
              "Firebase - це як надійна стара машина. Не новенька Tesla, але точно довезе."
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="flex flex-col items-center pt-32 max-w-7xl px-8">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Наші <span className="text-purple-400">Проекти</span>
          </h1>
        </div>

        {/* UI Screens Container */}
        <div className="flex justify-center items-start gap-8 mb-8">
          {/* Left Screen - Chatbot */}
          <div className="relative" style={{ width: '980px', height: '500px' }}>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                Чат-бот для автоматизації
              </h3>
            </div>
            
            <div className="relative bg-gray-800 rounded-3xl p-4 border-4 border-purple-500 shadow-2xl shadow-purple-500/25 w-full h-full flex items-center justify-center" style={{ width: '980px', height: '500px' }}>
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
            <div className="mt-3 text-center max-w-4xl">
              <div className="text-xs text-gray-400 space-y-1 mb-3">
                <div>Бекенд: Firebase (Firestore, Auth) + інтеграція з OpenAI API та Claude (Anthropic)</div>
                <div>Фронтенд: Next.js 14 (App Router), TypeScript, Tailwind CSS</div>
                <div>AI-функціонал: аналіз вимог, автоматичні естімейти, голосовий інтерфейс (ElevenLabs, Web Speech API)</div>
                <div>UI/UX: темна/світла/космічна тема, анімації, 3D-модель робота, responsive дизайн</div>
              </div>
            </div>

            {/* Technology Tags for Chatbot */}
            <div className="flex justify-center flex-wrap gap-2 mt-3">
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
                  className="bg-slate-800 border-2 border-purple-500 rounded-xl px-3 py-1 flex items-center space-x-2 text-white hover:bg-purple-600 transition-colors cursor-pointer text-sm"
                >
                  <span className="text-sm">{tech.icon}</span>
                  <span className="font-medium text-xs">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Screen - Manager */}
          <div className="relative" style={{ width: '980px', height: '500px' }}>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                Менеджер для аналітики
              </h3>
            </div>
            
            <div className="relative bg-white rounded-3xl p-4 border-4 border-purple-500 shadow-2xl shadow-purple-500/25 w-full h-full flex items-center justify-center" style={{ width: '980px', height: '500px' }}>
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
            <div className="mt-3 text-center max-w-4xl">
              <div className="text-xs text-gray-400 space-y-1 mb-3">
                <div>Бекенд: Firebase (Firestore, Auth) + інтеграція з OpenAI GPT-3.5-turbo</div>
                <div>Фронтенд: Next.js 14, React 18, TypeScript, Tailwind CSS</div>
                <div>Основні модулі: Dashboard (аналітика + графіки Recharts), AI-Assistant, Project Calculator, Calendar, Chats</div>
                <div>Додаткові тули: jsPDF, PapaParse, XLSX, react-i18next (експорти, мультимовність)</div>
              </div>
            </div>

            {/* Technology Tags for Manager */}
            <div className="flex justify-center flex-wrap gap-2 mt-3">
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
};

export default ProjectShowcaseSlide;
