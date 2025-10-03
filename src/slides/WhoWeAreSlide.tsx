export default function WhoWeAreSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8" style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glitchIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          20% {
            opacity: 0.5;
            transform: translateX(10px);
          }
          40% {
            opacity: 0.8;
            transform: translateX(-5px);
          }
          60% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes glitchText {
          0%, 90%, 100% {
            transform: translate(0);
          }
          92% {
            transform: translate(-2px, 2px);
          }
          94% {
            transform: translate(2px, -2px);
          }
          96% {
            transform: translate(-1px, 1px);
          }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
      <h2
        className="text-6xl font-bold mb-16"
        style={{
          background: 'linear-gradient(135deg, #00F5FF 0%, #7B68EE 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
        }}
      >
        ВІД NO-CODE ДО БЕКЕНДУ
      </h2>

      <div className="max-w-5xl w-full flex justify-center">
        {/* Terminal Container */}
        <div 
          className="terminal-container"
          style={{
            position: 'relative',
            maxWidth: '900px',
            width: '90%',
            background: 'rgba(18, 18, 24, 0.9)',
            border: '2px solid rgba(0, 245, 255, 0.3)',
            borderRadius: '8px',
            padding: '40px',
            boxShadow: `
              0 0 20px rgba(0, 245, 255, 0.2),
              0 0 40px rgba(0, 245, 255, 0.1),
              inset 0 0 60px rgba(0, 0, 0, 0.3)
            `,
            zIndex: 1
          }}
        >
          {/* Terminal Header with colored dots */}
          <div 
            className="terminal-header"
            style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '30px',
              paddingBottom: '15px',
              borderBottom: '1px solid rgba(0, 245, 255, 0.2)'
            }}
          >
            <div 
              className="terminal-dot dot-red"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#FF073A',
                boxShadow: '0 0 10px #FF073A',
                opacity: 0,
                animation: 'fadeIn 0.3s ease forwards',
                animationDelay: '0.2s'
              }}
            ></div>
            <div 
              className="terminal-dot dot-orange"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#FF6B35',
                boxShadow: '0 0 10px #FF6B35',
                opacity: 0,
                animation: 'fadeIn 0.3s ease forwards',
                animationDelay: '0.4s'
              }}
            ></div>
            <div 
              className="terminal-dot dot-green"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#39FF14',
                boxShadow: '0 0 10px #39FF14',
                opacity: 0,
                animation: 'fadeIn 0.3s ease forwards',
                animationDelay: '0.6s'
              }}
            ></div>
          </div>

          {/* Terminal Content */}
          <div 
            className="terminal-content"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              lineHeight: 1.8
            }}
          >
            {/* Command Line */}
            <div 
              className="command-line line-1"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px',
                opacity: 0,
                animation: 'fadeIn 0.8s ease forwards',
                animationDelay: '0.8s'
              }}
            >
              <span 
                className="prompt"
                style={{
                  color: '#00F5FF',
                  marginRight: '8px',
                  textShadow: '0 0 10px #00F5FF'
                }}
              >$</span>
              <span 
                className="command"
                style={{ color: '#FFFFFF' }}
              >npm run build</span>
              <span 
                className="cursor"
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '18px',
                  background: '#00F5FF',
                  marginLeft: '5px',
                  animation: 'blink 1s step-end infinite',
                  boxShadow: '0 0 10px #00F5FF'
                }}
              ></span>
            </div>

            {/* Output Lines - Sequential Animation */}
            <div 
              className="output-line success line-2"
              style={{
                marginLeft: 0,
                padding: '4px 0',
                color: '#39FF14',
                opacity: 0,
                animation: 'fadeIn 0.8s ease forwards',
                animationDelay: '1.4s'
              }}
            >✓ Compiled successfully</div>
            
            <div 
              className="output-line success line-3"
              style={{
                marginLeft: 0,
                padding: '4px 0',
                color: '#39FF14',
                opacity: 0,
                animation: 'fadeIn 0.8s ease forwards',
                animationDelay: '2.0s'
              }}
            >✓ Created chat UI</div>
            
            <div 
              className="output-line error line-4"
              style={{
                marginLeft: 0,
                padding: '4px 0',
                color: '#FF073A',
                opacity: 0,
                animation: 'fadeIn 0.8s ease forwards',
                animationDelay: '2.6s'
              }}
            >✗ Cannot persist data</div>
            
            <div 
              className="output-line error line-5"
              style={{
                marginLeft: 0,
                padding: '4px 0',
                color: '#FF073A',
                opacity: 0,
                animation: 'fadeIn 0.8s ease forwards',
                animationDelay: '3.2s'
              }}
            >✗ Cannot authenticate users</div>
            
            <div 
              className="output-line error line-6"
              style={{
                marginLeft: 0,
                padding: '4px 0',
                color: '#FF073A',
                opacity: 0,
                animation: 'fadeIn 0.8s ease forwards',
                animationDelay: '3.8s'
              }}
            >✗ Cannot sync between tools</div>

            {/* Big ERROR Block with Glitch Effect */}
            <div 
              className="big-error"
              style={{
                marginTop: '40px',
                padding: '30px',
                background: 'rgba(255, 7, 58, 0.1)',
                border: '2px solid #FF073A',
                borderRadius: '4px',
                textAlign: 'center',
                opacity: 0,
                animation: 'glitchIn 1s ease forwards',
                animationDelay: '4.5s',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div 
                className="error-title"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#FF073A',
                  textShadow: `
                    0 0 10px #FF073A,
                    0 0 20px #FF073A,
                    0 0 30px #FF073A
                  `,
                  marginBottom: '10px',
                  animation: 'glitchText 3s infinite'
                }}
              >ERROR: BACKEND REQUIRED</div>
              <div 
                className="error-subtitle"
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                  color: '#8A8A8F'
                }}
              >System cannot proceed without backend infrastructure</div>
            </div>

            {/* Final Call to Action */}
            <div 
              className="conclusion"
              style={{
                marginTop: '40px',
                textAlign: 'center',
                opacity: 0,
                animation: 'fadeInUp 1.5s ease forwards',
                animationDelay: '6s'
              }}
            >
              <div 
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#00F5FF'
                }}
              >
                <span 
                  style={{
                    display: 'inline-block',
                    marginRight: '10px'
                  }}
                >→</span>ПОРА ВЧИТИСЬ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}