export default function WhenToChooseSlide() {
  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <div className="min-h-screen flex flex-col items-center justify-center pt-12 md:pt-20 pb-12 md:pb-20 px-6 md:px-12">
        <h2
          className="text-xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ЯКИЙ BACKEND ОБРАТИ?
        </h2>
      
        <p className="text-sm md:text-base lg:text-xl text-white/70 mb-6 md:mb-12 lg:mb-16 text-center px-4">
          МИ ПОКИ СЛІПІ КОШЕНЯТА, АЛЕ ОСЬ ЩО ЗРОЗУМІЛИ
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full">
        {/* Firebase */}
        <div
          className="glassmorphism p-6 md:p-8 lg:p-10 rounded-3xl hover:scale-105 transition-all"
          style={{
            border: '2px solid #FF6B35',
            boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)',
          }}
        >
          <div className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-5 text-center">🔥</div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5 text-center" style={{ color: '#FF6B35' }}>
            FIREBASE
          </h3>
          
          <div
            className="inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 w-full text-center"
            style={{
              background: '#FF6B35',
              color: 'white',
            }}
          >
            НАЙПОПУЛЯРНІШЕ
          </div>

          <div className="space-y-3 text-base md:text-lg text-white/80 mb-4 md:mb-6">
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">🛡️</span>
              <p>Стабільність — проєкт працюватиме завтра так само як сьогодні</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">📅</span>
              <p>Довгостроковість — не доведеться переписувати через півроку</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">🔐</span>
              <p>Auth за хвилину — один клік і автентифікація готова</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">🐛</span>
              <p>Без дебагу - робіть продукт, а не виправляйте баги</p>
            </div>
          </div>

          <div
            className="p-3 md:p-4 rounded-2xl text-center"
            style={{
              background: 'rgba(255, 107, 53, 0.1)',
              border: '1px solid rgba(255, 107, 53, 0.3)',
            }}
          >
            <p className="text-sm md:text-base italic text-white/80">
              "Для тих, хто хоче працювати, а не боротись з інструментом"
            </p>
          </div>
        </div>

        {/* Convex */}
        <div
          className="glassmorphism p-6 md:p-8 lg:p-10 rounded-3xl hover:scale-105 transition-all"
          style={{
            border: '2px solid #8B5CF6',
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
          }}
        >
          <div className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-5 text-center">⚡</div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5 text-center" style={{ color: '#8B5CF6' }}>
            CONVEX
          </h3>
          
          <div
            className="inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 w-full text-center"
            style={{
              background: '#8B5CF6',
              color: 'white',
            }}
          >
            ЕКСПЕРИМЕНТАЛЬНЕ
          </div>

          <div className="space-y-3 text-base md:text-lg text-white/80 mb-4 md:mb-6">
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">👁️</span>
              <p>Візуалізація - Dashboard як Figma для баз даних</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">⚡</span>
              <p>Швидкий старт - підключення за 30 хвилин (якщо повезе)</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">🦸</span>
              <p>Для сміливих - готові до сюрпризів та експериментів</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">⚛️</span>
              <p>Сучасний стек - TypeScript, realtime з коробки</p>
            </div>
          </div>

          <div
            className="p-3 md:p-4 rounded-2xl text-center"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <p className="text-sm md:text-base italic text-white/80">
              "Для тих, хто хоче експериментувати і не боїться несподіванок"
            </p>
          </div>
        </div>

        {/* Localhost */}
        <div
          className="glassmorphism p-6 md:p-8 lg:p-10 rounded-3xl hover:scale-105 transition-all"
          style={{
            border: '2px solid #00F5FF',
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.4)',
          }}
        >
          <div className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-5 text-center">💾</div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5 text-center" style={{ color: '#00F5FF' }}>
            LOCALHOST
          </h3>
          
          <div
            className="inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 w-full text-center"
            style={{
              background: '#00F5FF',
              color: 'black',
            }}
          >
            НАЙПРОСТІШЕ
          </div>

          <div className="space-y-3 text-base md:text-lg text-white/80 mb-4 md:mb-6">
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">🧪</span>
              <p>Для РоС - супер простий проєкт або proof of concept</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">💾</span>
              <p>LocalStorage — зберігайте дані локально без бекенду</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">🧠</span>
              <p>Збережіть нерви — іноді це все що потрібно</p>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <span className="text-lg md:text-xl flex-shrink-0">⚡</span>
              <p>Zero setup - почніть за 5 хвилин без реєстрацій</p>
            </div>
          </div>

          <div
            className="p-3 md:p-4 rounded-2xl text-center"
            style={{
              background: 'rgba(0, 245, 255, 0.1)',
              border: '1px solid rgba(0, 245, 255, 0.3)',
            }}
          >
            <p className="text-sm md:text-base italic text-white/80">
              "Не треба стріляти з гармати по горобцях. Іноді localStorage — це все, що треба"
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
