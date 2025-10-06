import { useEffect } from 'react';

export default function TipsSlide() {
  useEffect(() => {
    const brain = document.querySelector('.brain-center');
    
    if (brain) {
      const interval = setInterval(() => {
        const r = Math.random() * 100 + 150; // Більш приглушені кольори
        const g = Math.random() * 100 + 150;
        const b = 255;
        const size = Math.random() * 15 + 20; // Менший розмір
        const opacity = Math.random() * 0.1 + 0.3; // Менша прозорість
        
        (brain as HTMLElement).style.filter = `drop-shadow(0 0 ${size}px rgba(${r}, ${g}, ${b}, ${opacity}))`;
      }, 3000); // Рідше змінюємо колір

      return () => clearInterval(interval);
    }
  }, []);
  const getColorStyles = (color: string) => {
    const colorMap = {
      orange: {
        borderColor: '#FF6B35',
        color: '#FF8C42',
        boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)',
      },
      purple: {
        borderColor: '#7B68EE',
        color: '#B794F6',
        boxShadow: '0 0 20px rgba(123, 104, 238, 0.3)',
      },
      cyan: {
        borderColor: '#00F5FF',
        color: '#00D4FF',
        boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
      },
      green: {
        borderColor: '#39FF14',
        color: '#4FFF28',
        boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)',
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.orange;
  };

  const tips = [
    { text: "Firebase для серйозних проєктів", size: "large", color: "orange", orbit: 1 },
    { text: "Не бійся Security Rules", size: "medium", color: "purple", orbit: 2 },
    { text: "Використовуй AI-помічника", size: "medium", color: "cyan", orbit: 3 },
    { text: "Починай з простого", size: "small", color: "green", orbit: 4 },
    { text: "Документація - твій друг", size: "medium", color: "orange", orbit: 5 },
    { text: "Тестуй на безкоштовному плані", size: "small", color: "purple", orbit: 6 },
    { text: "Convex для експериментів", size: "large", color: "cyan", orbit: 7 },
    { text: "Читай помилки уважно", size: "medium", color: "green", orbit: 8 },
    { text: "Stack Overflow допоможе", size: "small", color: "orange", orbit: 9 },
    { text: "Роби бекапи даних", size: "medium", color: "purple", orbit: 10 },
    { text: "Пиши чистий код", size: "small", color: "cyan", orbit: 11 },
    { text: "Не бійся помилок", size: "medium", color: "green", orbit: 12 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="pt-8 pb-4 relative z-10">
        <h2
          className="text-6xl font-bold mb-4"
          style={{
            background: 'linear-gradient(135deg, #00F5FF 0%, #7B68EE 50%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
          }}
        >
          Що б ми сказали собі в минулому
        </h2>
        
      </div>

      {/* 3D Cloud Container */}
      <div 
        className="cloud-container"
        style={{
          position: 'relative',
          width: '800px',
          height: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          margin: '0 auto',
        }}
      >
        {/* Central Brain */}
        <div 
          className="brain-center"
          style={{
            position: 'absolute',
            fontSize: '8rem',
            zIndex: 10,
            animation: 'brainPulse 3s ease-in-out infinite',
          }}
        >
🧠
        </div>
        
        {/* Orbiting Tips */}
        {tips.map((tip, index) => {
          const duration = [45, 40, 50, 38, 44, 48, 42, 46, 39, 52, 37, 43][index];
          const direction = index % 2 === 0 ? 'normal' : 'reverse';
          
          return (
            <div
              key={index}
              className={`keyword ${tip.size} ${tip.color}`}
              style={{
                position: 'absolute',
                padding: tip.size === 'large' ? '16px 32px' : tip.size === 'medium' ? '12px 24px' : '10px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                fontSize: tip.size === 'large' ? '1.4rem' : tip.size === 'medium' ? '1.1rem' : '0.9rem',
                animation: `orbit${tip.orbit} ${duration}s linear infinite ${direction}`,
                ...getColorStyles(tip.color),
              }}
            >
              {tip.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
