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
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="max-w-8xl w-full grid grid-cols-2 gap-16">
        <div className="h-full flex flex-col">
          <h2
            className="text-5xl font-bold mb-12"
            style={{ color: '#FF6B35' }}
          >
            FIREBASE: ПЕРШІ КРОКИ
          </h2>

          <div className="space-y-6 relative flex-1" style={{ height: '600px', overflowY: 'auto' }}>
            <div
              className="absolute left-8 top-0 bottom-0 w-1"
              style={{
                background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C42 100%)',
                boxShadow: '0 0 10px rgba(255, 107, 53, 0.5)',
              }}
            />

            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 relative">
                <div
                  className="glassmorphism w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                  style={{
                    border: '2px solid #FF6B35',
                    boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)',
                  }}
                >
                  <span className="text-3xl">{step.emoji}</span>
                </div>

                <div
                  className="glassmorphism flex-1 p-6 rounded-2xl"
                  style={{
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#FF8C42' }}>
                    {step.title}
                  </h3>
                  <p
                    className={`text-lg ${step.isCode ? 'mono' : ''}`}
                    style={{ color: step.isCode ? '#00F5FF' : '#ffffff90' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-center h-full">
          <div
            className="glassmorphism rounded-3xl w-full flex flex-col"
            style={{
              border: '2px solid #00F5FF',
              boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
              height: '828px',
              paddingBottom: '50px'
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
