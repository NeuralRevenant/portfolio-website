import React, { useEffect, useRef } from 'react';
import './DynamicBackground.scss';

const DynamicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Particle system with reduced count for better performance
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 40));

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = `hsla(${Math.random() * 60 + 180}, 70%, 60%, ${this.opacity})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Optimized animation loop
    const animate = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = 'rgba(13, 13, 13, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections (optimized - fewer connections)
      particles.forEach((particleA, i) => {
        if (i % 2 === 0) { // Only check every other particle for performance
          particles.slice(i + 1).forEach(particleB => {
            const distance = Math.sqrt(
              Math.pow(particleA.x - particleB.x, 2) + 
              Math.pow(particleA.y - particleB.y, 2)
            );

            if (distance < 80) { // Reduced connection distance
              ctx.globalAlpha = (80 - distance) / 80 * 0.15;
              ctx.beginPath();
              ctx.moveTo(particleA.x, particleA.y);
              ctx.lineTo(particleB.x, particleB.y);
              ctx.strokeStyle = '#38b6ff';
              ctx.lineWidth = 0.5;
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          });
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      // Reinitialize particles on resize
      particles = [];
      const newParticleCount = Math.min(30, Math.floor(window.innerWidth / 40));
      for (let i = 0; i < newParticleCount; i++) {
        particles.push(new Particle());
      }
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      particles = [];
    };
  }, []);

  return (
    <div className="dynamic-background">
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default DynamicBackground; 