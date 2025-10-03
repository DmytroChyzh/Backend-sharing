import { useEffect } from 'react';

export default function FinalSlide() {
  useEffect(() => {
    const robot = document.querySelector('.robot-container');
    if (robot) {
      const interval = setInterval(() => {
        const colors = ['#FF6B35', '#7B68EE', '#00F5FF', '#39FF14'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        (robot as HTMLElement).style.filter = `drop-shadow(0 0 30px ${randomColor})`;
      }, 2000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Заголовок */}
      <div className="relative z-20 mb-8">
        <h2
          className="text-6xl font-bold text-center"
          style={{
            background: 'linear-gradient(135deg, #00F5FF 0%, #7B68EE 50%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'titleGlow 3s ease-in-out infinite',
          }}
        >
          МІСІЯ ВИКОНАНА! 🤖
        </h2>
      </div>

      {/* Сцена з роботом та комп'ютером */}
      <div className="relative z-10 flex items-center justify-center mb-8">
        {/* Комп'ютер */}
        <div 
          className="computer-container"
          style={{
            position: 'relative',
            marginRight: '100px',
          }}
        >
          <div
            className="text-8xl mb-4"
            style={{
              animation: 'computerGlow 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(0, 245, 255, 0.6))',
            }}
          >
            💻
          </div>
          {/* Екран комп'ютера */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2"
            style={{
              fontSize: '2rem',
              animation: 'screenFlicker 1.5s ease-in-out infinite',
            }}
          >
            ⚡🔥🟣💡
          </div>
        </div>

        {/* Робот що ходить */}
        <div 
          className="robot-container"
          style={{
            fontSize: '6rem',
            animation: 'robotWalk 3s ease-in-out infinite',
            filter: 'drop-shadow(0 0 30px #00F5FF)',
          }}
        >
          🤖
        </div>

        {/* Трава під ногами робота */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          style={{
            width: '200px',
            height: '20px',
            background: 'linear-gradient(90deg, #39FF14 0%, #00F5FF 100%)',
            borderRadius: '10px',
            animation: 'grassGlow 2s ease-in-out infinite',
          }}
        />
      </div>

      {/* Тексти висновків що з'являються */}
      <div className="relative z-20 text-center max-w-4xl">
        <div
          className="glassmorphism p-8 rounded-3xl mb-6"
          style={{
            border: '2px solid rgba(0, 245, 255, 0.4)',
            background: 'rgba(0, 245, 255, 0.1)',
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.3)',
            animation: 'slideInUp 1s ease-out 0.5s both',
          }}
        >
          <h3 className="text-4xl font-bold mb-6" style={{ color: '#00F5FF' }}>
            РОБОТ КОДИТЬ НАШУ ПРЕЗЕНТАЦІЮ! 💻
          </h3>
          <p className="text-xl text-white/90 mb-4">
            Ми показали вам різницю між Firebase та Convex
          </p>
          <p className="text-lg text-white/80">
            Тепер ви знаєте коли використовувати що! 🎯
          </p>
        </div>

        {/* Статистика */}
        <div
          className="glassmorphism p-6 rounded-2xl mb-6"
          style={{
            border: '2px solid rgba(123, 104, 238, 0.4)',
            background: 'rgba(123, 104, 238, 0.1)',
            boxShadow: '0 0 30px rgba(123, 104, 238, 0.3)',
            animation: 'slideInUp 1s ease-out 1s both',
          }}
        >
          <h3 className="text-3xl font-bold mb-4" style={{ color: '#7B68EE' }}>
            ЩО МИ ЗРОБИЛИ: 📊
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">🔥</div>
              <p className="text-lg font-bold">Firebase</p>
              <p className="text-sm text-white/70">2 проєкти</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🟣</div>
              <p className="text-lg font-bold">Convex</p>
              <p className="text-sm text-white/70">2 проєкти</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📚</div>
              <p className="text-lg font-bold">Досвід</p>
              <p className="text-sm text-white/70">Безцінний</p>
            </div>
          </div>
        </div>

        {/* Фінальне повідомлення */}
        <div
          className="glassmorphism p-6 rounded-2xl mb-6"
          style={{
            border: '2px solid rgba(255, 107, 53, 0.4)',
            background: 'rgba(255, 107, 53, 0.1)',
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.3)',
            animation: 'slideInUp 1s ease-out 1.5s both',
          }}
        >
          <p className="text-2xl font-bold mb-2" style={{ color: '#FF6B35' }}>
            БЕКЕНД — НЕ СТРАШНО! 💪
          </p>
          <p className="text-lg text-white/80">
            Робот довів — можна все! 🤖✨
          </p>
        </div>

        {/* Дякування */}
        <div
          className="glassmorphism px-8 py-4 rounded-full"
          style={{
            border: '2px solid rgba(57, 255, 20, 0.4)',
            background: 'rgba(57, 255, 20, 0.1)',
            boxShadow: '0 0 25px rgba(57, 255, 20, 0.3)',
            animation: 'slideInUp 1s ease-out 2s both',
          }}
        >
          <p className="text-3xl font-bold" style={{ color: '#39FF14' }}>
            ДЯКУЄМО! РОБОТ КОДИТЬ ДАЛІ! 🚀
          </p>
          <p className="text-lg text-white/70 mt-1">
            ПИТАННЯ? → Давайте обговоримо! 💬
          </p>
        </div>
      </div>

      {/* Частинки коду що летять */}
      <div className="absolute inset-0 pointer-events-none">
        {['🔥', '🟣', '💻', '⚡', '🎯', '🚀', '📚', '💡'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatUp ${3 + Math.random() * 2}s ease-out infinite ${Math.random() * 2}s`,
              filter: 'drop-shadow(0 0 10px rgba(0, 245, 255, 0.5))',
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
    </div>
  );
}
