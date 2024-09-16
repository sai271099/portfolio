import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div>
      <Title />
      <About />
      <Work />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}