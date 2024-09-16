'use client';
import { useEffect, useState } from 'react';
import styles from './styles/MouseTrack.module.css';

const MouseTrack: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setActive(true);
    const handleMouseLeave = () => setActive(false);

    window.addEventListener('mousemove', handleMouseMove);

    document.querySelectorAll('*').forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('*').forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.cursor} ${active ? styles.active : ''}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
};

export default MouseTrack;
