import { useEffect, useRef } from 'react';

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
              <span className="hero__title-name">John</span>{' '}
              <span className="hero__title-role">Developer</span>
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
            <div className="hero__img-container">
              <div className="hero__img-overlay"></div>
              {/* SVG profile illustration */}
              <svg className="hero__img-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <rect width="400" height="400" fill="#1f2937" />
                <circle cx="200" cy="150" r="100" fill="url(#gradient)" opacity="0.5" />
                <path d="M150,120 C150,80 250,80 250,120 C250,150 230,170 200,180 C170,170 150,150 150,120 Z" fill="#111827" />
                <circle cx="170" cy="120" r="10" fill="#ffffff" />
                <circle cx="230" cy="120" r="10" fill="#ffffff" />
                <path d="M180,150 Q200,170 220,150" stroke="#ffffff" strokeWidth="4" fill="none" />
                <path d="M100,200 L300,200 L300,350 L100,350 Z" fill="#111827" />
                <path d="M150,200 L150,350 L250,350 L250,200 Z" fill="#1f2937" />
                <path d="M160,220 L240,220 L240,230 L160,230 Z" fill="#6366f1" />
                <path d="M160,250 L200,250 L200,260 L160,260 Z" fill="#6366f1" />
                <path d="M160,280 L220,280 L220,290 L160,290 Z" fill="#6366f1" />
                <path d="M160,310 L180,310 L180,320 L160,320 Z" fill="#6366f1" />
              </svg>
            </div>
            
            <div className="hero__code">
              <pre>
                <code className="language-javascript">
{`const developer = {
  name: "John Developer",
  skills: ["JavaScript", "React", 
    "Node.js", "Flutter"],
  passion: "Building elegant solutions",
  coffee: status => status === "coding" 
    ? "needed" : "still needed"
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