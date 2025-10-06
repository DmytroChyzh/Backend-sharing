export default function WhenToChooseSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h2
        className="text-6xl font-bold mb-4"
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        ЯКИЙ BACKEND ОБРАТИ?
      </h2>
      
      <p className="text-xl text-white/70 mb-16">
        МИ ПОКИ СЛІПІ КОШЕНЯТА, АЛЕ ОСЬ ЩО ЗРОЗУМІЛИ
      </p>

      <div className="grid grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Firebase */}
        <div
          className="glassmorphism p-8 rounded-3xl hover:scale-105 transition-all"
          style={{
            border: '2px solid #FF6B35',
            boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)',
          }}
        >
          <div className="text-5xl mb-4 text-center">🔥</div>
          <h3 className="text-3xl font-bold mb-4 text-center" style={{ color: '#FF6B35' }}>
            FIREBASE
          </h3>
          
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 w-full text-center"
            style={{
              background: '#FF6B35',
              color: 'white',
            }}
          >
            НАЙПОПУЛЯРНІШЕ
          </div>

          <div className="space-y-4 text-base text-white/80 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🛡️</span>
              <p>Стабільність — проєкт працюватиме завтра так само як сьогодні</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">📅</span>
              <p>Довгостроковість — не доведеться переписувати через півроку</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🔐</span>
              <p>Auth за хвилину — один клік і автентифікація готова</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🐛</span>
              <p>Без дебагу - робіть продукт, а не виправляйте баги</p>
            </div>
          </div>

          <div
            className="p-4 rounded-2xl text-center"
            style={{
              background: 'rgba(255, 107, 53, 0.1)',
              border: '1px solid rgba(255, 107, 53, 0.3)',
            }}
          >
            <p className="text-sm italic text-white/80">
              "Для тих, хто хоче працювати, а не боротись з інструментом"
            </p>
          </div>
        </div>

        {/* Convex */}
        <div
          className="glassmorphism p-8 rounded-3xl hover:scale-105 transition-all"
          style={{
            border: '2px solid #8B5CF6',
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
          }}
        >
          <div className="text-5xl mb-4 text-center">⚡</div>
          <h3 className="text-3xl font-bold mb-4 text-center" style={{ color: '#8B5CF6' }}>
            CONVEX
          </h3>
          
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 w-full text-center"
            style={{
              background: '#8B5CF6',
              color: 'white',
            }}
          >
            ЕКСПЕРИМЕНТАЛЬНЕ
          </div>

          <div className="space-y-4 text-base text-white/80 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">👁️</span>
              <p>Візуалізація - Dashboard як Figma для баз даних</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">⚡</span>
              <p>Швидкий старт - підключення за 30 хвилин (якщо повезе)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🦸</span>
              <p>Для сміливих - готові до сюрпризів та експериментів</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">⚛️</span>
              <p>Сучасний стек - TypeScript, realtime з коробки</p>
            </div>
          </div>

          <div
            className="p-4 rounded-2xl text-center"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <p className="text-sm italic text-white/80">
              "Для тих, хто хоче експериментувати і не боїться несподіванок"
            </p>
          </div>
        </div>

        {/* Localhost */}
        <div
          className="glassmorphism p-8 rounded-3xl hover:scale-105 transition-all"
          style={{
            border: '2px solid #00F5FF',
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.4)',
          }}
        >
          <div className="text-5xl mb-4 text-center">💾</div>
          <h3 className="text-3xl font-bold mb-4 text-center" style={{ color: '#00F5FF' }}>
            LOCALHOST
          </h3>
          
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 w-full text-center"
            style={{
              background: '#00F5FF',
              color: 'black',
            }}
          >
            НАЙПРОСТІШЕ
          </div>

          <div className="space-y-4 text-base text-white/80 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🧪</span>
              <p>Для РоС - супер простий проєкт або proof of concept</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">💾</span>
              <p>LocalStorage — зберігайте дані локально без бекенду</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🧠</span>
              <p>Збережіть нерви — іноді це все що потрібно</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">⚡</span>
              <p>Zero setup - почніть за 5 хвилин без реєстрацій</p>
            </div>
          </div>

          <div
            className="p-4 rounded-2xl text-center"
            style={{
              background: 'rgba(0, 245, 255, 0.1)',
              border: '1px solid rgba(0, 245, 255, 0.3)',
            }}
          >
            <p className="text-sm italic text-white/80">
              "Не треба стріляти з гармати по горобцях. Іноді localStorage — це все, що треба"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
