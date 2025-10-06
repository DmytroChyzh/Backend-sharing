import { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [easterEggActive, setEasterEggActive] = useState(false);

  const handleCanvasClick = () => {
    setEasterEggActive(true);
    setTimeout(() => setEasterEggActive(false), 3000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      originalSize: number;
      type: string;
    }> = [];

    // Create different types of particles
    const particleTypes = ['normal', 'glow', 'sparkle', 'pulse'];
    
    const particleCount = easterEggActive ? 200 : 100;
    
    for (let i = 0; i < particleCount; i++) {
      const originalSize = easterEggActive ? Math.random() * 5 + 2 : Math.random() * 3 + 1;
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: originalSize,
        speedX: easterEggActive ? (Math.random() - 0.5) * 2 : (Math.random() - 0.5) * 0.8,
        speedY: easterEggActive ? (Math.random() - 0.5) * 2 : (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.7 + 0.3,
        pulseSpeed: easterEggActive ? Math.random() * 0.1 + 0.05 : Math.random() * 0.03 + 0.01,
        originalSize: originalSize,
        type: type,
      });
    }

    function drawGrid() {
      if (!ctx || !canvas || canvas.width === 0 || canvas.height === 0) return;
      
      // Parallax effect based on time
      const time = Date.now() * 0.0001;
      const offsetX = Math.sin(time) * 10;
      const offsetY = Math.cos(time) * 10;
      
      ctx.strokeStyle = 'rgba(123, 104, 238, 0.05)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      for (let x = offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    function drawParticles() {
      if (!ctx || !canvas || canvas.width === 0 || canvas.height === 0) return;
      const time = Date.now() * 0.001;
      
      particles.forEach((particle) => {
        // Different effects based on particle type
        switch (particle.type) {
          case 'glow':
            particle.size = Math.max(0.1, particle.originalSize + Math.sin(time * particle.pulseSpeed * 2) * 1);
            break;
          case 'sparkle':
            particle.size = Math.max(0.1, particle.originalSize + Math.sin(time * particle.pulseSpeed * 3) * 0.8);
            break;
          case 'pulse':
            particle.size = Math.max(0.1, particle.originalSize + Math.sin(time * particle.pulseSpeed * 1.5) * 1.5);
            break;
          default:
            particle.size = Math.max(0.1, particle.originalSize + Math.sin(time * particle.pulseSpeed) * 0.5);
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Different colors and effects for different particle types
        switch (particle.type) {
          case 'glow':
            ctx.fillStyle = `rgba(123, 104, 238, ${particle.opacity})`;
            ctx.shadowColor = 'rgba(123, 104, 238, 0.5)';
            ctx.shadowBlur = 15;
            break;
          case 'sparkle':
            ctx.fillStyle = `rgba(255, 107, 53, ${particle.opacity})`;
            ctx.shadowColor = 'rgba(255, 107, 53, 0.5)';
            ctx.shadowBlur = 12;
            break;
          case 'pulse':
            ctx.fillStyle = `rgba(57, 255, 20, ${particle.opacity})`;
            ctx.shadowColor = 'rgba(57, 255, 20, 0.5)';
            ctx.shadowBlur = 20;
            break;
          default:
            ctx.fillStyle = `rgba(0, 245, 255, ${particle.opacity})`;
            ctx.shadowColor = 'rgba(0, 245, 255, 0.3)';
            ctx.shadowBlur = 10;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas || canvas.width === 0 || canvas.height === 0) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [easterEggActive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-pointer"
      onClick={handleCanvasClick}
      style={{ 
        background: easterEggActive 
          ? 'linear-gradient(135deg, #1a0a1f 0%, #2a1a3a 50%, #1a0a1f 100%)'
          : 'linear-gradient(135deg, #0a0a0f 0%, #121218 50%, #0a0a0f 100%)'
      }}
    />
  );
}
