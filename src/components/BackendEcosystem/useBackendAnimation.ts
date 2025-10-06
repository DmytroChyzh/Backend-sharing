import { useEffect, useRef, useCallback } from 'react';
import { backends, Backend, COLLISION_INTERVAL, LOGO_SIZE } from './backendData';

export const useBackendAnimation = (
  logoContainerRef: React.RefObject<HTMLDivElement>,
  detailCardRef: React.RefObject<HTMLDivElement>,
  ambientGlowRef: React.RefObject<HTMLDivElement>
) => {
  const animationFrameRef = useRef<number>();
  const collisionIntervalRef = useRef<NodeJS.Timeout>();
  const currentIndexRef = useRef(0);
  const isCollidingRef = useRef(false);
  const backendsRef = useRef<Backend[]>([]);

  // Initialize backends with random positions
  const initializeBackends = useCallback(() => {
    backendsRef.current = backends.map(backend => ({
      ...backend,
      x: Math.random() * (window.innerWidth - LOGO_SIZE),
      y: Math.random() * (window.innerHeight - LOGO_SIZE),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      rotation: 0,
      isColliding: false
    }));
  }, []);

  // Create floating logos
  const createFloatingLogos = useCallback(() => {
    if (!logoContainerRef.current) return;

    // Clear existing logos
    logoContainerRef.current.innerHTML = '';

    backendsRef.current.forEach((backend, index) => {
      const logo = document.createElement('div');
      logo.className = 'floating-logo';
      logo.textContent = backend.emoji;
      logo.style.color = backend.color;
      logo.dataset.index = index.toString();
      backend.element = logo;
      
      // Initial position - random across screen
      logo.style.opacity = '0';
      logo.style.transform = `translate(${backend.x}px, ${backend.y}px) scale(0.5)`;
      
      logoContainerRef.current!.appendChild(logo);
      
      // Fade in with staggered delay
      setTimeout(() => {
        if (logo.parentNode) {
          logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          logo.style.opacity = '1';
          logo.style.transform = `translate(${backend.x}px, ${backend.y}px) scale(1)`;
          
          // Remove transition after animation
          setTimeout(() => {
            logo.style.transition = '';
          }, 500);
        }
      }, index * 100);
    });
  }, [logoContainerRef]);

  // Update card content
  const updateCard = useCallback((backend: Backend) => {
    const detailCard = detailCardRef.current;
    const ambientGlow = ambientGlowRef.current;
    
    if (!detailCard || !ambientGlow) return;

    // Find card content elements
    const cardLogo = detailCard.querySelector('.card-logo');
    const cardTitle = detailCard.querySelector('.card-title');
    const cardDescription = detailCard.querySelector('.card-description');
    const cardFeatures = detailCard.querySelector('.card-features');
    const cardTags = detailCard.querySelector('.card-tags');
    const cardStats = detailCard.querySelector('.card-stats');

    // Animate content change
    const cardContent = detailCard.querySelector('.card-content') as HTMLElement;
    if (cardContent) {
      cardContent.style.animation = 'none';
      setTimeout(() => {
        cardContent.style.animation = 'contentSlide 0.5s ease-out';
      }, 10);
    }

    // Update content
    if (cardLogo) cardLogo.textContent = backend.emoji;
    if (cardTitle) cardTitle.textContent = backend.name.toUpperCase();
    if (cardDescription) cardDescription.textContent = backend.description;
    
    // Update features
    if (cardFeatures) {
      const featuresHTML = backend.features.map(f => `<li>${f}</li>`).join('');
      cardFeatures.innerHTML = featuresHTML;
    }
    
    // Update tags
    if (cardTags) {
      const tagsHTML = backend.tags.map(t => `<span class="tag">${t}</span>`).join('');
      cardTags.innerHTML = tagsHTML;
    }
    
    // Update stats
    if (cardStats) {
      const statsHTML = backend.stats.map(s => `<div class="stat">${s}</div>`).join('');
      cardStats.innerHTML = statsHTML;
    }

    // Update card border color & glow
    detailCard.style.borderColor = backend.color + '40';
    detailCard.style.boxShadow = `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px ${backend.color}40`;
    
    // Update ambient glow
    ambientGlow.style.background = `radial-gradient(circle, ${backend.color}30, transparent 70%)`;
  }, [detailCardRef, ambientGlowRef]);

  // Sleep utility function
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Collision sequence
  const collisionSequence = useCallback(async () => {
    if (isCollidingRef.current) return;
    isCollidingRef.current = true;

    const backend = backendsRef.current[currentIndexRef.current];
    console.log(`Показуємо бекенд ${currentIndexRef.current}: ${backend?.name}`);
    
    if (!backend || !backend.element) {
      isCollidingRef.current = false;
      return;
    }

    backend.isColliding = true;

    // PHASE 1: Activation (0.5s)
    backendsRef.current.forEach((b, i) => {
      if (b.element) {
        if (i === currentIndexRef.current) {
          b.element.classList.add('active');
        } else {
          b.element.classList.add('dimmed');
        }
      }
    });

    await sleep(500);

    // PHASE 2: Fly to card (1s)
    const detailCard = detailCardRef.current;
    if (!detailCard) {
      isCollidingRef.current = false;
      return;
    }

    const cardRect = detailCard.getBoundingClientRect();
    const targetX = cardRect.left + cardRect.width / 2 - LOGO_SIZE / 2;
    const targetY = cardRect.top + cardRect.height / 2 - LOGO_SIZE / 2;

    backend.element.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
    backend.element.style.transform = `translate(${targetX}px, ${targetY}px) scale(1.5)`;

    // Create trail particles
    let trailInterval = setInterval(() => {
      if (backend.isColliding && logoContainerRef.current && backend.element) {
        const trail = document.createElement('div');
        trail.className = 'trail-particle';
        trail.textContent = backend.emoji;
        trail.style.color = backend.color;
        trail.style.left = backend.element.style.left;
        trail.style.top = backend.element.style.top;
        trail.style.transform = backend.element.style.transform;
        trail.style.opacity = '0.6';
        logoContainerRef.current.appendChild(trail);
        setTimeout(() => trail.remove(), 500);
      }
    }, 50);

    await sleep(1000);
    clearInterval(trailInterval);

    // PHASE 3: Collision Impact (0.3s)
    detailCard.style.animation = 'none';
    setTimeout(() => {
      detailCard.style.animation = 'shake 0.1s';
    }, 10);

    // Create ripple waves
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.color = backend.color;
        detailCard.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }, i * 150);
    }

    // Create burst particles
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.className = 'burst-particle';
        particle.style.background = backend.color;
        const angle = (Math.PI * 2 * i) / 25;
        const distance = 100 + Math.random() * 100;
        particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
        particle.style.left = targetX + LOGO_SIZE / 2 + 'px';
        particle.style.top = targetY + LOGO_SIZE / 2 + 'px';
        if (logoContainerRef.current) {
          logoContainerRef.current.appendChild(particle);
          setTimeout(() => particle.remove(), 800);
        }
      }, i * 10);
    }

    await sleep(300);

    // PHASE 4: Update Card Content (0.7s)
    updateCard(backend);

    await sleep(700);

    // PHASE 5: Return to floating (0.8s)
    if (backend.element) {
      backend.element.style.transition = 'all 0.8s ease-out';
      backend.element.style.transform = `translate(${backend.x}px, ${backend.y}px) scale(1)`;

      await sleep(800);

      // Reset everything
      backend.element.style.transition = '';
      backend.element.classList.remove('active');
      backendsRef.current.forEach(b => {
        if (b.element) b.element.classList.remove('dimmed');
      });
      backend.isColliding = false;
      isCollidingRef.current = false;

      // Move to next backend
      currentIndexRef.current = (currentIndexRef.current + 1) % backendsRef.current.length;
      console.log(`Переключення на наступний бекенд: ${currentIndexRef.current}`);
    }
  }, [detailCardRef, logoContainerRef, updateCard]);

  // Main animation loop - DVD screensaver style
  const animate = useCallback(() => {
    backendsRef.current.forEach((backend) => {
      if (backend.isColliding || !backend.element) return;
      
      // Update position
      backend.x += backend.vx;
      backend.y += backend.vy;
      
      // Bounce off walls
      if (backend.x <= 0 || backend.x >= window.innerWidth - LOGO_SIZE) {
        backend.vx *= -1;
        backend.x = Math.max(0, Math.min(window.innerWidth - LOGO_SIZE, backend.x));
      }
      
      if (backend.y <= 0 || backend.y >= window.innerHeight - LOGO_SIZE) {
        backend.vy *= -1;
        backend.y = Math.max(0, Math.min(window.innerHeight - LOGO_SIZE, backend.y));
      }
      
      // Breathing effect (subtle scale pulse)
      const breathe = 1 + 0.05 * Math.sin(Date.now() / 1000 * 2);
      
      // Apply transform
      backend.element.style.transform = `
        translate(${backend.x}px, ${backend.y}px)
        scale(${breathe})
      `;
      
      // Glow effect (pulsing)
      const glowIntensity = 20 + 10 * Math.sin(Date.now() / 1000 * 3);
      backend.element.style.filter = 
        `drop-shadow(0 0 ${glowIntensity}px ${backend.color})`;
    });
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  // Initialize everything
  useEffect(() => {
    initializeBackends();
    createFloatingLogos();
    
    console.log(`Ініціалізовано ${backendsRef.current.length} бекендів:`, backendsRef.current.map(b => b.name));
    
    // Start animation
    animate();
    
    // Show first backend
    if (backendsRef.current[0]) {
      console.log('Показуємо перший бекенд:', backendsRef.current[0].name);
      updateCard(backendsRef.current[0]);
    }
    
    // Start collision sequence after 2 seconds, but start with second backend
    const startCollisionTimeout = setTimeout(() => {
      currentIndexRef.current = 1; // Починаємо з другого бекенду
      collisionIntervalRef.current = setInterval(collisionSequence, COLLISION_INTERVAL);
      collisionSequence();
    }, 2000);

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (collisionIntervalRef.current) {
        clearInterval(collisionIntervalRef.current);
      }
      clearTimeout(startCollisionTimeout);
    };
  }, [initializeBackends, createFloatingLogos, animate, updateCard, collisionSequence]);

  return {
    backends: backendsRef.current,
    currentIndex: currentIndexRef.current
  };
};
