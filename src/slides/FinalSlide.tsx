import React, { useState, useEffect } from 'react';

export default function FinalSlide() {
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  
  // Список всіх картинок з папки memes (тільки існуючі файли)
  const memes = [
    { src: '/images/memes/1meme.jpeg', alt: 'Мем про бекенд 1' },
    { src: '/images/memes/2meme.png', alt: 'Мем про бекенд 2' },
    { src: '/images/memes/3mem3.png', alt: 'Мем про бекенд 3' },
    { src: '/images/memes/5mem.png', alt: 'Мем про бекенд 4' },
    { src: '/images/memes/photo_2025-10-06_14-07-19.jpg', alt: 'Мем про бекенд 5' },
    { src: '/images/memes/photo_2025-10-06_14-07-30.jpg', alt: 'Мем про бекенд 6' },
    { src: '/images/memes/photo_2025-10-06_14-07-39.jpg', alt: 'Мем про бекенд 7' },
    { src: '/images/memes/photo_2025-10-06_14-07-47.jpg', alt: 'Мем про бекенд 8' },
    { src: '/images/memes/photo_2025-10-06_14-10-32.jpg', alt: 'Мем про бекенд 9' },
    { src: '/images/memes/photo_2025-10-06_14-11-17.jpg', alt: 'Мем про бекенд 10' },
    // Додавайте сюди нові картинки
  ];

  // Зміна мемів кожні 10 секунд
  useEffect(() => {
    console.log('Завантаження мемів:', memes);
    console.log('Поточний мем:', currentMemeIndex, memes[currentMemeIndex]?.src);
    
    const interval = setInterval(() => {
      setCurrentMemeIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % memes.length;
        console.log('Переключення з мему', prevIndex, 'на мем', nextIndex);
        return nextIndex;
      });
    }, 6000); // 6 секунд

    return () => clearInterval(interval);
  }, [memes.length, currentMemeIndex, memes]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-auto">
      {/* Картка з мемами - верхня частина */}
      {memes.length > 0 && (
        <div className="absolute top-4 md:top-20 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-sm md:max-w-lg px-4 flex justify-center">
          <div
            className="glassmorphism rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            style={{
              border: '2px solid rgba(139, 92, 246, 0.4)',
              background: 'rgba(139, 92, 246, 0.15)',
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
              animation: 'slideInDown 1s ease-out 0.3s both',
              padding: '16px md:28px',
              display: 'inline-block',
            }}
          >
            <div className="relative">
              <img 
                key={currentMemeIndex}
                src={memes[currentMemeIndex]?.src} 
                alt={memes[currentMemeIndex]?.alt || 'Мем про бекенд'}
                className="block rounded-xl transition-all duration-500 hover:scale-105"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out',
                  maxWidth: '100%',
                  maxHeight: window.innerWidth < 768 ? '200px' : '350px',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  console.error('Помилка завантаження мему:', memes[currentMemeIndex]?.src);
                  // Просто приховуємо зображення, не показуємо заглушку
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Мем успішно завантажено:', memes[currentMemeIndex]?.src);
                }}
                onClick={(e) => {
                  // Додаємо інтерактивність - можна клікнути на картинку
                  const img = e.currentTarget;
                  if (img.style.transform === 'scale(1.2)') {
                    img.style.transform = 'scale(1)';
                  } else {
                    img.style.transform = 'scale(1.2)';
                  }
                }}
              />
              
              {/* Індикатор поточного мему */}
              {memes.length > 1 && (
                <div className="absolute bottom-2 right-2 flex gap-1">
                  {memes.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMemeIndex 
                          ? 'bg-purple-400' 
                          : 'bg-gray-500 bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Заголовок - центрований */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-4xl px-4 flex flex-col items-center" style={{ marginTop: '20px' }}>
        <h2
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-2 md:mb-4"
          style={{
            background: 'linear-gradient(135deg, #00F5FF 0%, #7B68EE 50%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'titleGlow 3s ease-in-out infinite',
            textTransform: 'uppercase',
          }}
        >
          Бекенд - це не страшно.
        </h2>
        <h3
          className="text-sm md:text-xl lg:text-3xl font-medium text-center"
          style={{
            color: '#E0E0E0',
            textTransform: 'uppercase',
          }}
        >
          Це просто ще один інструмент у вашому арсеналі.
        </h3>
      </div>

      {/* Картка збіру - нижче */}
      <div className="absolute bottom-20 md:bottom-40 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-lg md:max-w-xl px-4">
        <div
          className="glassmorphism p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6"
          style={{
            border: '2px solid rgba(255, 107, 53, 0.4)',
            background: 'rgba(255, 107, 53, 0.1)',
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.3)',
            animation: 'slideInUp 1s ease-out 0.5s both',
            maxWidth: '600px',
          }}
        >
          {/* Зображення збіру - тільки на десктопі */}
          <div className="hidden md:flex flex-shrink-0">
            <img 
              src="/images/zbir-png.png" 
              alt="QR код для збіру" 
              className="w-40 h-40 object-contain"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))',
              }}
            />
          </div>
          
          {/* Кнопка для мобільних - тільки на мобільних */}
          <div className="md:hidden flex-shrink-0">
            <a
              href="https://send.monobank.ua/jar/9mMDfEJ5ve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
              }}
            >
              Підтримати збір 💝
            </a>
          </div>
          
          {/* Текст */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm md:text-xl font-bold mb-2" style={{ color: '#FF6B35' }}>
              Якщо сподобалась презентація, підтримайте збір на Сіткомет ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}