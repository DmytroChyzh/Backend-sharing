export default function ConvexSetupSlide() {
  const steps = [
    { emoji: '🌐', title: 'Реєстрація', desc: 'Convex.dev - створити акаунт' },
    { emoji: '📦', title: 'Install', desc: 'npm install convex', isCode: true },
    { emoji: '⚡', title: 'Init', desc: 'npx convex dev' },
    { emoji: '📝', title: 'Function', desc: 'Створити mutation/query' },
    { emoji: '🔗', title: 'Frontend', desc: 'Викликати з додатку' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="max-w-8xl w-full grid grid-cols-2 gap-16">
        <div className="h-full flex flex-col">
          <h2
            className="text-5xl font-bold mb-12"
            style={{
              background: 'linear-gradient(135deg, #7B68EE 0%, #00F5FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CONVEX: ПЕРШІ КРОКИ
          </h2>

          <div className="space-y-6 relative flex-1" style={{ height: '600px', overflowY: 'auto' }}>
            <div
              className="absolute left-8 top-0 bottom-0 w-1"
              style={{
                background: 'linear-gradient(180deg, #7B68EE 0%, #00F5FF 100%)',
                boxShadow: '0 0 10px rgba(123, 104, 238, 0.5)',
              }}
            />

            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 relative">
                <div
                  className="glassmorphism w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                  style={{
                    border: '2px solid #7B68EE',
                    boxShadow: '0 0 20px rgba(123, 104, 238, 0.4)',
                  }}
                >
                  <span className="text-3xl">{step.emoji}</span>
                </div>

                <div
                  className="glassmorphism flex-1 p-6 rounded-2xl"
                  style={{
                    border: '1px solid rgba(123, 104, 238, 0.3)',
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#A855F7' }}>
                    {step.title}
                  </h3>
                  <p className="text-lg text-white/70">{step.desc}</p>
                  {step.isCode && (
                    <div
                      className="mt-3 p-3 rounded-lg mono text-sm"
                      style={{
                        background: 'rgba(123, 104, 238, 0.1)',
                        border: '1px solid rgba(123, 104, 238, 0.3)',
                        color: '#00F5FF',
                      }}
                    >
                      {step.desc}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end">
          <div
            className="glassmorphism p-6 rounded-3xl w-full"
            style={{
              border: '2px solid #7B68EE',
              boxShadow: '0 0 30px rgba(123, 104, 238, 0.3)',
              height: '828px',
            }}
          >
            <video
              src="/videos/convex.mp4"
              controls
              preload="metadata"
              autoPlay={false}
              muted={false}
              playsInline
              className="w-full h-full object-contain"
              style={{
                backgroundColor: '#000',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
