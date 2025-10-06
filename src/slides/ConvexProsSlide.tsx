export default function ConvexProsSlide() {
  const pros = [
    {
      icon: '✅',
      title: 'ВІЗУАЛЬНИЙ DASHBOARD',
      desc: [
        '• Видно структуру бази й даних у реалтаймі',
        '• Легко дивитися всі запущені queries і mutations',
        '• Структура проєкту логічна - окремі папки'
      ],
      quote: '"Як Figma для баз даних"',
    },
    {
      icon: '✅',
      title: 'TYPESCRIPT З КОРОБКИ',
      desc: [
        '• Не треба нічого налаштовувати',
        '• Автокомпліт працює',
        '• Типізація допомагає (коли не ламається)'
      ],
      quote: '"Type-safe з самого початку"',
    },
    {
      icon: '✅',
      title: 'REALTIME БЕЗ КОДУ',
      desc: [
        '• Підписався на дані - вони оновлюються самі',
        '• Не треба писати складний код',
        '• Як у Figma - бачиш зміни інших миттєво'
      ],
      quote: '"Figma multiplayer для даних"',
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <div className="min-h-screen flex flex-col items-center justify-center pt-12 md:pt-20 pb-12 md:pb-20 px-6 md:px-12">
        <h2
          className="text-xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16"
          style={{
            background: 'linear-gradient(135deg, #39FF14 0%, #00F5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CONVEX: ПЛЮСИ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-7xl w-full">
        {pros.map((pro, index) => (
          <div
            key={index}
            className="glassmorphism p-6 md:p-8 lg:p-10 rounded-3xl hover:scale-105 transition-all cursor-pointer"
            style={{
              border: '2px solid #39FF14',
              boxShadow: '0 0 30px rgba(57, 255, 20, 0.3)',
            }}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-5 hover:scale-125 transition-transform duration-300">{pro.icon}</div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5 hover:scale-105 transition-transform duration-200" style={{ color: '#39FF14' }}>
              {pro.title}
            </h3>
            <div
              className="h-1 w-full mb-5 md:mb-6"
              style={{
                background: 'linear-gradient(90deg, #39FF14 0%, transparent 100%)',
              }}
            />
            <div className="space-y-3 text-base md:text-lg text-white/80 mb-4 md:mb-5">
              {pro.desc.map((point, i) => (
                <p key={i} className="leading-relaxed">{point}</p>
              ))}
            </div>
            {pro.quote && (
              <div
                className="p-3 md:p-4 rounded-xl mono text-center"
                style={{
                  background: 'rgba(57, 255, 20, 0.1)',
                  border: '1px solid rgba(57, 255, 20, 0.3)',
                  color: '#39FF14',
                }}
              >
                <p className="text-base md:text-lg">{pro.quote}</p>
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
