export default function FinalSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Заголовок - центрований */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h2
          className="text-6xl font-bold text-center mb-4"
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
          className="text-3xl font-medium text-center"
          style={{
            color: '#E0E0E0',
            textTransform: 'uppercase',
          }}
        >
          Це просто ще один інструмент у вашому арсеналі.
        </h3>
      </div>

      {/* Картка збіру - нижче */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="glassmorphism p-6 rounded-2xl flex items-center gap-6"
          style={{
            border: '2px solid rgba(255, 107, 53, 0.4)',
            background: 'rgba(255, 107, 53, 0.1)',
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.3)',
            animation: 'slideInUp 1s ease-out 0.5s both',
            maxWidth: '600px',
          }}
        >
          {/* Зображення збіру */}
          <div className="flex-shrink-0">
            <img 
              src="/images/zbir-png.png" 
              alt="QR код для збіру" 
              className="w-56 h-56 object-contain"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))',
              }}
            />
          </div>
          
          {/* Текст */}
          <div className="flex-1 text-left">
            <p className="text-xl font-bold mb-2" style={{ color: '#FF6B35' }}>
              Якщо сподобалась презентація, підтримайте збір на Сіткомет ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
