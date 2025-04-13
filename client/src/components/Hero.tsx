import { useEffect, useRef } from 'react';
import DeveloperPhoto from './DeveloperPhoto';
import '../styles/developer-photo.css';

const Hero = () => {
  const typingTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const typingText = typingTextRef.current;
    if (typingText) {
      const text = typingText.innerText;
      typingText.innerText = '';
      let index = 0;

      // Use an arrow function instead of a named function declaration
      const typeWriter = () => {
        if (index < text.length) {
          typingText.innerText += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
        }
      };

      // Start the typing effect
      typeWriter();
    }
  }, []);

  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero__container">
          <div className="hero__content" data-aos="fade-right">
            <span className="hero__subtitle">Hello World! I'm</span>
            <h1 className="hero__title">
              <span className="hero__title-name">Dushan</span>{' '}
              <span className="hero__title-role">Chanuka</span>
            </h1>
            <div className="hero__title-line"></div>
            <h3 className="hero__profession" ref={typingTextRef}>
              Fullstack & Mobile Developer
            </h3>
            <p className="hero__description">
              I craft scalable web applications and engaging mobile experiences with a focus on clean, efficient code and exceptional user experiences.
            </p>
            <div className="hero__buttons">
              <a href="#projects" className="button">
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="button button--ghost">
                <span>Contact Me</span>
              </a>
            </div>
            
            <div className="hero__social">
              <a href="#" className="hero__social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="hero__social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hero__social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hero__social-link" aria-label="DEV.to">
                <i className="fab fa-dev"></i>
              </a>
            </div>
          </div>
          
          <div className="hero__img" data-aos="fade-left">
            {/* Animated Developer Photo */}
            <DeveloperPhoto />
            
            <div className="hero__code">
              <pre>
                <code className="language-javascript">
{`const developer = {
  name: "Dushan Chanuka",
  title: "Fullstack & Mobile Developer",
  skills: ["JavaScript", "React", 
    "Node.js", "Flutter"],
  passion: "Building elegant solutions",
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;