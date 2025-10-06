export default function ForWhoSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h2
        className="text-6xl font-bold mb-16"
        style={{
          background: 'linear-gradient(135deg, #39FF14 0%, #00F5FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(57, 255, 20, 0.3)',
        }}
      >
        ЦЕ ДЛЯ ТЕБЕ, ЯКЩО ТИ...
      </h2>

      <div className="grid grid-cols-3 gap-8 max-w-7xl w-full mb-16">
        <div
          className="glassmorphism p-8 rounded-3xl hover:scale-105 transition-transform"
          style={{
            border: '2px solid #00F5FF',
            boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
          }}
        >
          <div className="text-6xl mb-6 text-center">📐</div>
          <h3
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#00F5FF' }}
          >
            ДИЗАЙНЕР
          </h3>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#00F5FF', opacity: 0.3 }}
          />
          <p className="text-xl text-center text-white/80">
            Хочеш вайбкодити
            <br />
            більше ніж прототипи
          </p>
        </div>

        <div
          className="glassmorphism p-8 rounded-3xl hover:scale-105 transition-transform"
          style={{
            border: '2px solid #39FF14',
            boxShadow: '0 0 30px rgba(57, 255, 20, 0.3)',
          }}
        >
          <div className="text-6xl mb-6 text-center">📊</div>
          <h3
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#39FF14' }}
          >
            PM
          </h3>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#39FF14', opacity: 0.3 }}
          />
          <p className="text-xl text-center text-white/80">
            Хочеш розуміти
            <br />
            технічні можливості
          </p>
        </div>

        <div
          className="glassmorphism p-8 rounded-3xl hover:scale-105 transition-transform"
          style={{
            border: '2px solid #7B68EE',
            boxShadow: '0 0 30px rgba(123, 104, 238, 0.3)',
          }}
        >
          <div className="text-6xl mb-6 text-center">🚀</div>
          <h3
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#7B68EE' }}
          >
            AI Engineer
          </h3>
          <div
            className="h-1 w-full mb-6"
            style={{ background: '#7B68EE', opacity: 0.3 }}
          />
          <p className="text-xl text-center text-white/80">
            Робиш MVP
            <br />
            без девелопера
          </p>
        </div>
      </div>


    </div>
  );
}
