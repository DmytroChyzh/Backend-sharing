export default function FirebaseConsSlide() {
  const cons = [
    {
      title: 'SECURITY RULES',
      points: [
        '• Логіка правил не очевидна',
        '• Особливо з вкладеними структурами', 
        '• Помилки не завжди зрозумілі',
        '• Тестувати треба довго'
      ],
      quote: '"Думав, що зрозумів правила - виявилось, що ні. І так кілька разів."',
    },
    {
      title: 'CONSOLE',
      points: [
        '• Порівняно з Convex Dashboard перевантажено',
        '• Не одразу зрозуміло, де що знаходиться',
        '• Структура даних не так наочна',
        '• Не дуже інтуїтивний'
      ],
      quote: '"Порівняно з іншими dashboard виглядає заплутано"',
    },
    {
      title: 'МІГРАЦІЯ',
      points: [
        '• Нема чітких гайдів для міграції',
        '• Якщо захочеш перейти на інший бекенд',
        '• Буде складно перейти',
        '• Ти як би прив\'язаний до Firebase'
      ],
      quote: '"Прив\'язаний назавжди, і вийти з нього - це завдання"',
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-12 md:pt-20 pb-12 md:pb-20 px-6 md:px-12">
      <h2
        className="text-xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16 text-center"
        style={{
          color: '#FF6B35',
          textShadow: '0 0 30px rgba(255, 107, 53, 0.8)',
        }}
      >
        FIREBASE: ЧЕРВОНІ ПРАПОРИ 🚩
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full">
        {cons.map((con, index) => (
          <div
            key={index}
            className="glassmorphism p-6 md:p-8 lg:p-10 rounded-3xl hover:scale-105 transition-all"
            style={{
              border: '2px solid #FF6B35',
              boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)',
              background: 'rgba(255, 107, 53, 0.05)',
            }}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-center">❌</div>
            <h3
              className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center"
              style={{ color: '#FF6B35' }}
            >
              {con.title}
            </h3>
            <div
              className="h-0.5 w-full mb-4 md:mb-6"
              style={{ background: '#FF6B35' }}
            />
            <div className="space-y-3 text-sm md:text-base text-white/80 mb-4 md:mb-6">
              {con.points.map((point, i) => (
                <p key={i} className="leading-relaxed">{point}</p>
              ))}
            </div>
            {con.quote && (
              <div
                className="p-3 md:p-4 rounded-xl mono text-center text-sm md:text-base"
                style={{
                  background: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  color: '#FF8C42',
                }}
              >
                {con.quote}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(255, 107, 53, 0.1) 50px,
            rgba(255, 107, 53, 0.1) 51px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(255, 107, 53, 0.1) 50px,
            rgba(255, 107, 53, 0.1) 51px
          )`
        }} />
      </div>
    </div>
  );
}
