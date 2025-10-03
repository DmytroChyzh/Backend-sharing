import { useRef } from 'react';
import { useBackendAnimation } from './useBackendAnimation';
import './BackendEcosystem.css';

export default function BackendEcosystem() {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const detailCardRef = useRef<HTMLDivElement>(null);
  const ambientGlowRef = useRef<HTMLDivElement>(null);

  useBackendAnimation(logoContainerRef, detailCardRef, ambientGlowRef);

  return (
    <div className="slide-16-container">
      {/* Animated grid background */}
      <div className="grid-background"></div>
      
      {/* Header */}
      <div className="header">
        <h1 className="header-title">Є й інші варіанти, але ми їх не юзали</h1>
      </div>

      {/* Main content area */}
      <div className="animation-container">
        {/* Ambient glow around card */}
        <div className="card-ambient-glow" ref={ambientGlowRef}></div>
        
        {/* Central detail card */}
        <div className="detail-card" ref={detailCardRef}>
          <div className="card-content">
            <div className="card-logo">🐘</div>
            <h2 className="card-title">SUPABASE</h2>
            <div className="card-divider"></div>
            <p className="card-description">
              Open-source Firebase з PostgreSQL всередині. Realtime + auth з коробки.
            </p>
            <ul className="card-features">
              <li>PostgreSQL database</li>
              <li>Realtime subscriptions</li>
              <li>Built-in authentication</li>
            </ul>
            <div className="card-tags">
              <span className="tag">#OpenSource</span>
              <span className="tag">#PostgreSQL</span>
              <span className="tag">#Realtime</span>
            </div>
            <div className="card-stats">
              <div className="stat">⭐ 60k+ Stars</div>
              <div className="stat">💰 Free tier</div>
              <div className="stat">🌐 supabase.com</div>
              <div className="stat">📦 Self-hosted</div>
            </div>
          </div>
        </div>

        {/* Floating logos container */}
        <div className="logo-container" ref={logoContainerRef}></div>
      </div>

      {/* Small CTA card */}
      <div className="cta-section">
        <h2>❓ ХТОСЬ ЮЗАВ ЦІ ТУЛИ?</h2>
        <p>Поділіться досвідом!</p>
      </div>
    </div>
  );
}
