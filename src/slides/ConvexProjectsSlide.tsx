export default function ConvexProjectsSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h2
        className="text-5xl font-bold mb-16"
        style={{
          background: 'linear-gradient(135deg, #7B68EE 0%, #00F5FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(123, 104, 238, 0.3)',
        }}
      >
        ЩО МИ ЗРОБИЛИ НА CONVEX
      </h2>

      <div className="grid grid-cols-2 gap-12 max-w-6xl w-full">
        <a
          href="https://aivi-two.vercel.app/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="glassmorphism p-10 rounded-3xl hover:scale-105 hover:animate-glow-pulse transition-all duration-300 cursor-pointer block"
          style={{
            border: '2px solid #7B68EE',
            boxShadow: '0 0 30px rgba(123, 104, 238, 0.3)',
          }}
        >
          <div className="text-6xl mb-6 text-center hover:scale-125 transition-transform duration-300">💄</div>
          <h3 className="text-4xl font-bold mb-4 text-center hover:scale-105 transition-transform duration-200" style={{ color: '#A855F7' }}>
            AIVI
          </h3>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#7B68EE', opacity: 0.3 }}
          />
          <p className="text-2xl text-center text-white/80 mb-8">
            Beauty AI Assistant
          </p>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#7B68EE', opacity: 0.3 }}
          />

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['🟣 Convex', '🔐 Clerk', '🤖 OpenAI'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-bold hover:scale-110 hover:animate-glow-pulse transition-all duration-200 cursor-pointer"
                style={{
                  background: 'rgba(123, 104, 238, 0.2)',
                  border: '1px solid rgba(123, 104, 238, 0.5)',
                  boxShadow: '0 0 10px rgba(123, 104, 238, 0.3)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>


          <div
            className="glassmorphism p-4 rounded-2xl text-center mono"
            style={{
              border: '1px solid #7B68EE',
              boxShadow: '0 0 20px rgba(123, 104, 238, 0.3)',
            }}
          >
            <p className="text-sm text-white/70 mb-2">🔗</p>
            <p className="text-xs break-all" style={{ color: '#00F5FF' }}>
              aivi-two.vercel.app/landing
            </p>
            <p className="text-xs text-white/50 mt-1">Натисніть для переходу</p>
          </div>
        </a>

        <a
          href="https://theme-forge.vercel.app/components"
          target="_blank"
          rel="noopener noreferrer"
          className="glassmorphism p-10 rounded-3xl hover:scale-105 hover:animate-glow-pulse transition-all duration-300 cursor-pointer block"
          style={{
            border: '2px solid #7B68EE',
            boxShadow: '0 0 30px rgba(123, 104, 238, 0.3)',
          }}
        >
          <div className="text-6xl mb-6 text-center hover:scale-125 transition-transform duration-300">🎨</div>
          <h3 className="text-4xl font-bold mb-4 text-center hover:scale-105 transition-transform duration-200" style={{ color: '#A855F7' }}>
            THEME FORGE
          </h3>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#7B68EE', opacity: 0.3 }}
          />
          <p className="text-2xl text-center text-white/80 mb-8">
            Tool для дизайнерів
          </p>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#7B68EE', opacity: 0.3 }}
          />

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['🟣 Convex', '🔐 Clerk'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-bold hover:scale-110 hover:animate-glow-pulse transition-all duration-200 cursor-pointer"
                style={{
                  background: 'rgba(123, 104, 238, 0.2)',
                  border: '1px solid rgba(123, 104, 238, 0.5)',
                  boxShadow: '0 0 10px rgba(123, 104, 238, 0.3)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>


          <div
            className="glassmorphism p-4 rounded-2xl text-center mono"
            style={{
              border: '1px solid #7B68EE',
              boxShadow: '0 0 20px rgba(123, 104, 238, 0.3)',
            }}
          >
            <p className="text-sm text-white/70 mb-2">🔗</p>
            <p className="text-xs break-all" style={{ color: '#00F5FF' }}>
              theme-forge.vercel.app/components
            </p>
            <p className="text-xs text-white/50 mt-1">Натисніть для переходу</p>
          </div>
        </a>
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
              "Convex - це як BMW. Швидко, красиво, але постійно в сервісі."
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}



