export default function FirebaseSetupSlide() {
  const steps = [
    { emoji: '🌐', title: 'Firebase Console', desc: 'Створити новий проєкт' },
    { emoji: '⚙️', title: 'Web App', desc: 'Отримати config' },
    { emoji: '📦', title: 'Install', desc: 'npm install firebase', isCode: true },
    { emoji: '🔧', title: 'Init', desc: 'Ініціалізація у проєкті' },
    { emoji: '🗄️', title: 'Firestore', desc: 'Налаштування бази' },
    { emoji: '✍️', title: 'First Write', desc: 'Перший запис/читання' },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-center pt-8 md:pt-16 pb-8 px-4 md:px-8">
      <style>{`
        @media (max-width: 768px) {
          .video-container {
            height: 250px !important;
            min-height: 250px !important;
            padding-bottom: 10px !important;
          }
          .steps-container {
            margin-bottom: 20px !important;
          }
          .timeline-line {
            left: calc(1.5rem + 2px) !important; /* 24px (w-12) + 2px border */
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .video-container {
            height: 200px !important;
            min-height: 200px !important;
            padding-bottom: 8px !important;
          }
          .steps-container {
            margin-bottom: 8px !important;
          }
          .timeline-line {
            left: calc(1.25rem + 2px) !important; /* 20px (w-10/2) + 2px border */
          }
          .step-item {
            margin-bottom: 6px !important;
          }
          .step-icon {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          .step-content {
            padding: 0.5rem !important;
          }
          .step-title {
            font-size: 0.75rem !important;
            margin-bottom: 0.125rem !important;
          }
          .step-text {
            font-size: 0.625rem !important;
          }
          .slide-title {
            font-size: 1.25rem !important;
            margin-bottom: 0.75rem !important;
          }
        }
        
        /* Альбомний режим для планшетів */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .video-container {
            height: 180px !important;
            min-height: 180px !important;
            padding-bottom: 6px !important;
          }
          .steps-container {
            margin-bottom: 6px !important;
          }
          .step-item {
            margin-bottom: 4px !important;
          }
          .step-icon {
            width: 2rem !important;
            height: 2rem !important;
          }
          .step-content {
            padding: 0.375rem !important;
          }
          .step-title {
            font-size: 0.625rem !important;
            margin-bottom: 0.125rem !important;
          }
          .step-text {
            font-size: 0.5rem !important;
          }
          .slide-title {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          .timeline-line {
            left: calc(1rem + 2px) !important; /* 16px (w-8/2) + 2px border */
          }
          .grid-container {
            gap: 0.5rem !important; /* 8px gap */
          }
        }
        @media (min-width: 1024px) {
          .timeline-line {
            left: calc(2rem + 2px) !important; /* 32px (w-16/2) + 2px border */
          }
          .video-container {
            height: 100% !important;
            min-height: 600px !important;
          }
        }
      `}</style>
      <h2
        className="text-xl md:text-2xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-10 text-left slide-title"
        style={{ color: '#FF6B35' }}
      >
        FIREBASE: ПЕРШІ КРОКИ
      </h2>

      <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-12 grid-container">
        <div className="flex flex-col">
          <div className="space-y-3 md:space-y-4 lg:space-y-6 relative flex-1 steps-container">
            <div
              className="absolute top-0 bottom-0 w-1 timeline-line"
              style={{
                background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C42 100%)',
                boxShadow: '0 0 10px rgba(255, 107, 53, 0.5)',
                left: 'calc(1.5rem + 2px)', // 24px (w-12) + 2px border
              }}
            />

            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 lg:gap-6 relative step-item">
                <div
                  className="glassmorphism w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10 step-icon"
                  style={{
                    border: '2px solid #FF6B35',
                    boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)',
                  }}
                >
                  <span className="text-xl md:text-2xl lg:text-3xl">{step.emoji}</span>
                </div>

                <div
                  className="glassmorphism flex-1 p-3 md:p-4 lg:p-6 rounded-2xl step-content"
                  style={{
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                  }}
                >
                  <h3 className="text-base md:text-lg lg:text-2xl font-bold mb-1 md:mb-2 step-title" style={{ color: '#FF8C42' }}>
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm md:text-sm lg:text-lg step-text ${step.isCode ? 'mono' : ''}`}
                    style={{ color: step.isCode ? '#00F5FF' : '#ffffff90' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 lg:mt-0">
          <div
            className="glassmorphism rounded-3xl w-full flex flex-col video-container"
            style={{
              border: '2px solid #00F5FF',
              boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
              height: '100%',
              minHeight: '600px',
              paddingBottom: '20px'
            }}
          >
            <div 
              className="relative w-full rounded-2xl overflow-hidden flex-1"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(0, 245, 255, 0.3)'
              }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7SpdXBie6Cg?autoplay=1&loop=1&playlist=7SpdXBie6Cg&controls=0&rel=0&modestbranding=1&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&start=0&end=0&vq=hd1080"
                title="Firebase Setup Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
                style={{
                  borderRadius: '16px',
                  backgroundColor: '#000'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
