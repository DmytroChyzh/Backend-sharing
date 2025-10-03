export default function FirebaseProsSlide() {
  const pros = [
    {
      icon: '✅',
      title: 'AUTH В 1 КЛІК',
      desc: [
        '• Google Sign-In, Email/Password',
        '• Підключаєш і воно просто працює',
        '• Не треба нічого додатково налаштовувати',
        '• Натиснув кнопку в консолі - і auth готовий'
      ],
      quote: '"Це магія"',
    },
    {
      icon: '✅',
      title: 'СТАБІЛЬНІСТЬ',
      desc: [
        '• Оновлення не ламають код',
        '• Якщо щось працювало вчора - працюватиме і сьогодні',
        '• Ти можеш спокійно спати',
        '• Не боятись, що завтра все зламається'
      ],
      quote: '"Спокійний сон"',
    },
    {
      icon: '✅',
      title: 'ЕКОСИСТЕМА',
      desc: [
        '• Гугл по будь-якій проблемі знайде 10+ рішень',
        '• Stack Overflow, YouTube туторіали',
        '• Документація - все є',
        '• Хтось вже застрягав до тебе і написав рішення'
      ],
      quote: '"Величезна екосистема"',
    },
    {
      icon: '✅',
      title: 'ВСЕ ПІД РУКОЮ',
      desc: [
        '• Authentication, Database, Storage, Hosting',
        '• Все в одному місці',
        '• Не треба інтегрувати сторонні сервіси',
        '• Zero dependencies'
      ],
      quote: '"Все під рукою"',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h2
        className="text-6xl font-bold mb-16"
        style={{
          background: 'linear-gradient(135deg, #39FF14 0%, #00F5FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        FIREBASE: ПЛЮСИ
      </h2>

      <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
        {pros.map((pro, index) => (
          <div
            key={index}
            className="glassmorphism p-8 rounded-3xl hover:scale-105 transition-all cursor-pointer"
            style={{
              border: '2px solid #39FF14',
              boxShadow: '0 0 30px rgba(57, 255, 20, 0.3)',
            }}
          >
              <div className="text-5xl mb-4 hover:scale-125 transition-transform duration-300">{pro.icon}</div>
              <h3 className="text-3xl font-bold mb-4 hover:scale-105 transition-transform duration-200" style={{ color: '#39FF14' }}>
                {pro.title}
              </h3>
              <div
                className="h-1 w-full mb-6"
                style={{
                  background: 'linear-gradient(90deg, #39FF14 0%, transparent 100%)',
                }}
              />
              <div className="space-y-2 text-base text-white/80 mb-4">
                {pro.desc.map((point, i) => (
                  <p key={i} className="leading-relaxed">{point}</p>
                ))}
              </div>
              {pro.quote && (
                <div
                  className="p-3 rounded-xl mono text-center"
                  style={{
                    background: 'rgba(57, 255, 20, 0.1)',
                    border: '1px solid rgba(57, 255, 20, 0.3)',
                    color: '#39FF14',
                  }}
                >
                  {pro.quote}
                </div>
              )}
            </div>
          ))}
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#39FF14', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#00F5FF', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <line
          x1="30%"
          y1="30%"
          x2="70%"
          y2="30%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
        <line
          x1="30%"
          y1="70%"
          x2="70%"
          y2="70%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
        <line
          x1="30%"
          y1="30%"
          x2="30%"
          y2="70%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
        <line
          x1="70%"
          y1="30%"
          x2="70%"
          y2="70%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
