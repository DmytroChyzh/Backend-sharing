export default function ConvexSetupSlide() {
  const steps = [
    { emoji: '🌐', title: 'Реєстрація', desc: 'Convex.dev - створити акаунт' },
    { emoji: '📦', title: 'Install', desc: 'npm install convex', isCode: true },
    { emoji: '⚡', title: 'Init', desc: 'npx convex dev' },
    { emoji: '📝', title: 'Function', desc: 'Створити mutation/query' },
    { emoji: '🔗', title: 'Frontend', desc: 'Викликати з додатку' },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <div className="min-h-screen flex flex-col items-start justify-center pt-8 md:pt-16 pb-8 px-4 md:px-8">
        <h2
          className="slide-title text-xl md:text-2xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-10 text-left"
          style={{
            background: 'linear-gradient(135deg, #7B68EE 0%, #00F5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CONVEX: ПЕРШІ КРОКИ
        </h2>

        <div className="grid-container max-w-8xl w-full grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-12">
        <div className="h-full flex flex-col">
          <div className="steps-container space-y-3 md:space-y-4 lg:space-y-6 relative flex-1" style={{ height: '600px', overflowY: 'auto' }}>
            <div
              className="timeline-line absolute top-0 bottom-0 w-1"
              style={{
                background: 'linear-gradient(180deg, #7B68EE 0%, #00F5FF 100%)',
                boxShadow: '0 0 10px rgba(123, 104, 238, 0.5)',
                left: 'calc(1.5rem + 2px)',
              }}
            />

            {steps.map((step, index) => (
              <div key={index} className="step-item flex items-start gap-3 md:gap-4 lg:gap-6 relative">
                <div
                  className="step-icon glassmorphism w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                  style={{
                    border: '2px solid #7B68EE',
                    boxShadow: '0 0 20px rgba(123, 104, 238, 0.4)',
                  }}
                >
                  <span className="text-xl md:text-2xl lg:text-3xl">{step.emoji}</span>
                </div>

                <div
                  className="step-content glassmorphism flex-1 p-3 md:p-4 lg:p-6 rounded-2xl"
                  style={{
                    border: '1px solid rgba(123, 104, 238, 0.3)',
                  }}
                >
                  <h3 className="step-title text-base md:text-lg lg:text-2xl font-bold mb-2" style={{ color: '#A855F7' }}>
                    {step.title}
                  </h3>
                  <p className="step-text text-sm md:text-sm lg:text-lg text-white/70">{step.desc}</p>
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
            className="video-container glassmorphism p-6 rounded-3xl w-full"
            style={{
              border: '2px solid #7B68EE',
              boxShadow: '0 0 30px rgba(123, 104, 238, 0.3)',
              height: '100%',
              minHeight: '600px',
            }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/OFXvoKr5-sM?autoplay=1&loop=1&playlist=OFXvoKr5-sM&controls=0&rel=0&modestbranding=1&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&start=0&end=0&vq=hd1080"
              title="Convex Setup Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={false}
              style={{
                backgroundColor: '#000',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
