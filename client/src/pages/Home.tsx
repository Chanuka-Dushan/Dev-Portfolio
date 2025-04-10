import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Add AOS and hljs to Window interface
declare global {
  interface Window {
    AOS?: {
      init: (options: any) => void;
    };
    hljs?: {
      highlightBlock: (element: Element) => void;
    };
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize AOS animation library
    const aosInitializer = setTimeout(() => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    }, 500);

    // Initialize code highlighting
    const highlightInitializer = setTimeout(() => {
      if (window.hljs) {
        document.querySelectorAll('pre code').forEach((block) => {
          window.hljs?.highlightBlock(block);
        });
      }
    }, 500);

    // Scroll sections active link
    const scrollActive = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionLink?.classList.add('active-link');
        } else {
          sectionLink?.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    // Clean up event listeners and timeouts
    return () => {
      window.removeEventListener('scroll', scrollActive);
      clearTimeout(aosInitializer);
      clearTimeout(highlightInitializer);
    };
  }, []);

  return (
    <div className="portfolio">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}