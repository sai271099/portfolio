"use client";
import { useEffect } from 'react';
import 'particles.js'; // Import the particles.js script

// Declare particlesJS globally
declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesComponent = () => {
  useEffect(() => {
    // Ensure particles.js only runs on the client side
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 150, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
          },
          opacity: { value: 0.5, anim: { enable: false } },
          size: { value: 3, random: true },
          line_linked: { enable: true, color: '#ffffff' },
          move: { enable: true, speed: 6 },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 140 },
            bubble: { distance: 400 },
            repulse: { distance: 200 },
          },
        },
        retina_detect: true,
      });
    }
  }, []); // Empty dependency array ensures this effect only runs once after the component is mounted

  return (
    <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}></div>
  );
};

export default ParticlesComponent;
