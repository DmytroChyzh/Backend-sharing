import { memo } from 'react';

const FirebaseProjectsSlide = memo(function FirebaseProjectsSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h2
        className="text-5xl font-bold mb-16"
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        ЩО МИ ЗРОБИЛИ НА FIREBASE
      </h2>

      <div className="grid grid-cols-2 gap-12 max-w-6xl w-full mb-12">
        <div
          className="glassmorphism-3d p-10 rounded-3xl hover:scale-105 hover:animate-glow-pulse transition-all duration-300 card-3d animate-scale-in"
          style={{
            border: '2px solid #8B5CF6',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
            animationDelay: '0.1s',
          }}
        >
          <div className="text-6xl mb-6 text-center hover:scale-125 transition-transform duration-300 cursor-pointer morph-icon">📱</div>
          <h3 className="text-4xl font-bold mb-4 text-center hover:scale-105 transition-transform duration-200" style={{ color: '#A855F7' }}>
            CHATBOT
          </h3>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#8B5CF6', opacity: 0.3 }}
          />
          <p className="text-2xl text-center text-white/80 mb-8">
            Cieden AI Estimator
          </p>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#8B5CF6', opacity: 0.3 }}
          />

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['🔥 Firebase', '🤖 OpenAI', '⚛️ Next.js', '🎨 3D Robot'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-bold hover:scale-110 hover:animate-glow-pulse transition-all duration-200 cursor-pointer animate-slide-in-up"
                style={{
                  background: 'rgba(139, 92, 246, 0.2)',
                  border: '1px solid rgba(139, 92, 246, 0.5)',
                  boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
                  animationDelay: `${0.5 + i * 0.1}s`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://chatbot-navy-xi-51.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="glassmorphism p-4 rounded-2xl text-center mono block hover:scale-105 hover:animate-glow-pulse transition-all duration-300 cursor-pointer"
            style={{
              border: '1px solid #8B5CF6',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
            }}
          >
            <p className="text-sm text-white/70 mb-2">🔗</p>
            <p className="text-xs break-all" style={{ color: '#00F5FF' }}>
              chatbot-navy-xi-51.vercel.app
            </p>
            <p className="text-xs text-white/50 mt-1">Натисніть для переходу</p>
          </a>
        </div>

        <div
          className="glassmorphism-3d p-10 rounded-3xl hover:scale-105 hover:animate-glow-pulse transition-all duration-300 card-3d animate-scale-in"
          style={{
            border: '2px solid #8B5CF6',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
            animationDelay: '0.3s',
          }}
        >
          <div className="text-6xl mb-6 text-center hover:scale-125 transition-transform duration-300 cursor-pointer morph-icon">🎯</div>
          <h3 className="text-4xl font-bold mb-4 text-center hover:scale-105 transition-transform duration-200" style={{ color: '#A855F7' }}>
            CIEDEN MANAGER
          </h3>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#8B5CF6', opacity: 0.3 }}
          />
          <p className="text-2xl text-center text-white/80 mb-8">
            Platform для менеджерів
          </p>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#8B5CF6', opacity: 0.3 }}
          />

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['🔥 Firebase', '🤖 GPT-3.5', '📊 Dashboard', '📅 Calendar'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-bold hover:scale-110 hover:animate-glow-pulse transition-all duration-200 cursor-pointer animate-slide-in-up"
                style={{
                  background: 'rgba(139, 92, 246, 0.2)',
                  border: '1px solid rgba(139, 92, 246, 0.5)',
                  boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
                  animationDelay: `${0.7 + i * 0.1}s`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://ciedenmanager.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="glassmorphism p-4 rounded-2xl text-center mono block hover:scale-105 hover:animate-glow-pulse transition-all duration-300 cursor-pointer"
            style={{
              border: '1px solid #8B5CF6',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
            }}
          >
            <p className="text-sm text-white/70 mb-2">🔗</p>
            <p className="text-xs break-all" style={{ color: '#00F5FF' }}>
              ciedenmanager.vercel.app
            </p>
            <p className="text-xs text-white/50 mt-1">Натисніть для переходу</p>
          </a>
        </div>
      </div>


      <div className="mt-12 flex flex-col items-center">
        <div
          className="glassmorphism px-8 py-6 rounded-3xl max-w-2xl"
          style={{
            border: '2px solid rgba(139, 92, 246, 0.4)',
            background: 'rgba(139, 92, 246, 0.15)',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
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
    </div>
  );
});

export default FirebaseProjectsSlide;
