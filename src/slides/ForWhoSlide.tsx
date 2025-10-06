export default function ForWhoSlide() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-8 md:pt-16 pb-8 px-4 md:px-8">
      <h2
        className="text-xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-12 text-center"
        style={{
          background: 'linear-gradient(135deg, #39FF14 0%, #00F5FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(57, 255, 20, 0.3)',
        }}
      >
        ЦЕ ДЛЯ ТЕБЕ, ЯКЩО ТИ...
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-7xl w-full mb-6 md:mb-8 lg:mb-12">
        <div
          className="glassmorphism p-3 md:p-6 lg:p-8 rounded-3xl hover:scale-105 transition-transform"
          style={{
            border: '2px solid #00F5FF',
            boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
          }}
        >
          <div className="text-2xl md:text-4xl lg:text-6xl mb-3 md:mb-6 text-center">📐</div>
          <h3
            className="text-base md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 text-center"
            style={{ color: '#00F5FF' }}
          >
            ДИЗАЙНЕР
          </h3>
          <div
            className="h-1 w-full mb-3 md:mb-6"
            style={{ background: '#00F5FF', opacity: 0.3 }}
          />
          <p className="text-xs md:text-base text-center text-white/80">
            Хочеш вайбкодити
            <br />
            більше ніж прототипи
          </p>
        </div>

        <div
          className="glassmorphism p-3 md:p-6 lg:p-8 rounded-3xl hover:scale-105 transition-transform"
          style={{
            border: '2px solid #39FF14',
            boxShadow: '0 0 30px rgba(57, 255, 20, 0.3)',
          }}
        >
          <div className="text-2xl md:text-4xl lg:text-6xl mb-3 md:mb-6 text-center">📊</div>
          <h3
            className="text-base md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 text-center"
            style={{ color: '#39FF14' }}
          >
            PM
          </h3>
          <div
            className="h-1 w-full mb-3 md:mb-6"
            style={{ background: '#39FF14', opacity: 0.3 }}
          />
          <p className="text-xs md:text-base text-center text-white/80">
            Хочеш розуміти
            <br />
            технічні можливості
          </p>
        </div>

        <div
          className="glassmorphism p-3 md:p-6 lg:p-8 rounded-3xl hover:scale-105 transition-transform"
          style={{
            border: '2px solid #7B68EE',
            boxShadow: '0 0 30px rgba(123, 104, 238, 0.3)',
          }}
        >
          <div className="text-2xl md:text-4xl lg:text-6xl mb-3 md:mb-6 text-center">🚀</div>
          <h3
            className="text-base md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 text-center"
            style={{ color: '#7B68EE' }}
          >
            AI Engineer
          </h3>
          <div
            className="h-1 w-full mb-3 md:mb-6"
            style={{ background: '#7B68EE', opacity: 0.3 }}
          />
          <p className="text-xs md:text-base text-center text-white/80">
            Робиш MVP
            <br />
            без девелопера
          </p>
        </div>
      </div>


    </div>
  );
}
