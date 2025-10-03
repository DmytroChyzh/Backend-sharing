export default function AlternativesSlide() {
  const alternatives = [
    {
      icon: '🐘',
      name: 'SUPABASE',
      desc: 'PostgreSQL + realtime + auth. Типу open-source Firebase',
      badge: 'OPEN-SOURCE FIREBASE',
      color: '#39FF14',
      features: [
        '• PostgreSQL як основа',
        '• Realtime підписки',
        '• Автентифікація з коробки',
        '• Row Level Security'
      ],
      quote: '"Firebase, але з SQL"'
    },
    {
      icon: '📦',
      name: 'POCKETBASE',
      desc: 'One-file backend написаний на Go. Встановив один файл - і працює',
      badge: 'ONE CLICK DEPLOY',
      color: '#00F5FF',
      features: [
        '• Один файл - весь бекенд',
        '• Написаний на Go',
        '• Вбудований admin UI',
        '• Швидкий як блискавка'
      ],
      quote: '"Мінімалізм в дії"'
    },
    {
      icon: '🏗️',
      name: 'APPWRITE',
      desc: 'Self-hosted альтернатива Firebase. Все під твоїм контролем',
      badge: 'FULL CONTROL',
      color: '#8B5CF6',
      features: [
        '• Self-hosted рішення',
        '• Повний контроль даних',
        '• REST та GraphQL API',
        '• Multi-platform SDK'
      ],
      quote: '"Firebase, але на своєму сервері"'
    },
  ];

  // DVD-style квадрати з бекендами
  const bouncingBackends = [
    { 
      icon: '🔥', 
      name: 'FIREBASE', 
      color: '#FF6B35',
      size: 80,
      animation: 'dvdBounce1',
      duration: 8,
      delay: 0
    },
    { 
      icon: '🟣', 
      name: 'CONVEX', 
      color: '#7B68EE',
      size: 80,
      animation: 'dvdBounce2',
      duration: 10,
      delay: 1
    },
    { 
      icon: '🐘', 
      name: 'SUPABASE', 
      color: '#39FF14',
      size: 80,
      animation: 'dvdBounce3',
      duration: 12,
      delay: 2
    },
    { 
      icon: '📦', 
      name: 'POCKETBASE', 
      color: '#00F5FF',
      size: 80,
      animation: 'dvdBounce4',
      duration: 9,
      delay: 3
    },
    { 
      icon: '🏗️', 
      name: 'APPWRITE', 
      color: '#8B5CF6',
      size: 80,
      animation: 'dvdBounce5',
      duration: 11,
      delay: 4
    },
    { 
      icon: '⚡', 
      name: 'LIGHTNING', 
      color: '#FFD700',
      size: 80,
      animation: 'dvdBounce6',
      duration: 13,
      delay: 5
    },
    { 
      icon: '🚀', 
      name: 'ROCKET', 
      color: '#FF1493',
      size: 80,
      animation: 'dvdBounce7',
      duration: 7,
      delay: 6
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* DVD-style квадрати з бекендами */}
      {bouncingBackends.map((backend, index) => (
        <div
          key={index}
          className="absolute glassmorphism rounded-2xl flex flex-col items-center justify-center pointer-events-none"
          style={{
            animation: `${backend.animation} ${backend.duration}s linear infinite ${backend.delay}s`,
            width: `${backend.size}px`,
            height: `${backend.size}px`,
            border: `3px solid ${backend.color}`,
            boxShadow: `0 0 20px ${backend.color}50`,
            background: `rgba(0, 0, 0, 0.7)`,
            zIndex: 1,
          }}
        >
          <div className="text-3xl mb-1">{backend.icon}</div>
          <div 
            className="text-xs font-bold text-center"
            style={{ color: backend.color }}
          >
            {backend.name}
          </div>
        </div>
      ))}

      <div className="pt-8 pb-4 relative z-10">
        <h2
          className="text-6xl font-bold mb-4"
          style={{
            background: 'linear-gradient(135deg, #00F5FF 0%, #39FF14 50%, #8B5CF6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          АНАЛОГИ
        </h2>
        
        <p className="text-xl text-white/70">
          Є й інші варіанти, але ми їх не юзали
        </p>
      </div>


      <div className="flex flex-col items-center relative z-10 pb-8">
        <div
          className="glassmorphism px-8 py-6 rounded-3xl max-w-2xl"
          style={{
            border: '2px solid rgba(0, 245, 255, 0.4)',
            background: 'rgba(0, 245, 255, 0.15)',
            boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
          }}
        >
          <div className="flex items-center gap-4">
            <div 
              className="text-5xl flex-shrink-0"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(0, 245, 255, 0.6))'
              }}
            >
              ❓
            </div>
            <p className="text-xl italic leading-relaxed font-medium" style={{ color: '#E9D5FF' }}>
              "Ми цього не пробували, тому не можемо рекомендувати. Але можливо хтось з вас юзав?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
