import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import dynamic from 'next/dynamic';
const Particles = dynamic(() => import('@/components/Particles'), { ssr: false });

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Particles in the background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Particles />
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Title />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
