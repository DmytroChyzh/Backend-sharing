export default function ConvexConsSlide() {
  const cons = [
    {
      title: 'ОНОВЛЕННЯ ЛАМАЮТЬ ВСЕ',
      points: [
        '• Після оновлення SDK перестали працювати старі імпорти',
        '• Усі mutations і queries почали падати через "module not found"',
        '• Відновлення зайняло кілька годин: чистив кеш, перевстановлював SDK',
        '• Прокинувся - а проєкт не працює'
      ],
      quote: '"І це не я зламав, це оновлення"',
    },
    {
      title: 'АУТЕНТИФІКАЦІЯ - ТАНЦІ З БУБНОМ',
      points: [
        '• Треба інтегрувати Clerk або Auth0',
        '• Налаштувати middleware, прокидати токени у функції',
        '• Порівняно з Firebase це виглядає як квест',
        '• У Firebase - один клік. Тут - танці з бубном і три сторонні сервіси'
      ],
      quote: '"У Firebase - один клік. Тут - танці з бубном"',
    },
    {
      title: 'ПОМИЛКИ НЕЗРОЗУМІЛІ',
      points: [
        '• Convex не показує чітких помилок',
        '• Агент у Cursor не завжди може впоратись',
        '• Коли щось ламається - ти не розумієш що, де і чому',
        '• Помилки незрозумілі для вайбкодера'
      ],
      quote: '"Ти не розумієш що, де і чому"',
    },
    {
      title: 'МЕРТВІ ФАЙЛИ MUTATIONS',
      points: [
        '• Файл з mutations перестав працювати після рефакторингу',
        '• SDK просто ігнорував функції, не показував помилки',
        '• Виявилось - забув export default, але знайти це було майже неможливо',
        '• Файл помер - і ти не знаєш як його воскресити'
      ],
      quote: '"Файл помер - і ти не знаєш як його воскресити"',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h2
        className="text-6xl font-bold mb-16"
        style={{
          color: '#FF6B35',
          textShadow: '0 0 30px rgba(255, 107, 53, 0.8)',
        }}
      >
        CONVEX: ЧЕРВОНІ ПРАПОРИ 🚩
      </h2>

      <div className="grid grid-cols-2 gap-8 max-w-7xl w-full">
        {cons.map((con, index) => (
          <div
            key={index}
            className="glassmorphism p-8 rounded-3xl hover:scale-105 transition-all"
            style={{
              border: '2px solid #FF6B35',
              boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)',
              background: 'rgba(255, 107, 53, 0.05)',
            }}
          >
            <div className="text-5xl mb-6 text-center">❌</div>
            <h3
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: '#FF6B35' }}
            >
              {con.title}
            </h3>
            <div
              className="h-0.5 w-full mb-6"
              style={{ background: '#FF6B35' }}
            />
            <div className="space-y-2 text-base text-white/80 mb-6">
              {con.points.map((point, i) => (
                <p key={i} className="leading-relaxed">{point}</p>
              ))}
            </div>
            {con.quote && (
              <div
                className="p-4 rounded-xl mono text-center"
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
    </div>
  );
}
