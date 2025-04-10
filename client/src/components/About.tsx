const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section__header" data-aos="fade-up">
          <h2 className="section__title">About <span>Me</span></h2>
          <div className="section__subtitle-line"></div>
        </div>
        
        <div className="about__container">
          <div className="about__img" data-aos="fade-right">
            <div className="about__img-container">
              {/* SVG profile illustration */}
              <svg className="about__img-svg" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#4ade80" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="#1f2937" />
                <rect width="300" height="400" x="50" y="50" fill="#111827" rx="10" />
                <circle cx="200" cy="150" r="70" fill="url(#aboutGradient)" opacity="0.7" />
                <rect width="200" height="20" x="100" y="250" fill="#374151" rx="5" />
                <rect width="150" height="20" x="100" y="280" fill="#374151" rx="5" />
                <rect width="180" height="20" x="100" y="310" fill="#374151" rx="5" />
                <rect width="100" height="20" x="100" y="340" fill="#374151" rx="5" />
                <rect width="200" height="20" x="100" y="370" fill="#374151" rx="5" />
                <circle cx="150" cy="150" r="10" fill="#ffffff" />
                <circle cx="250" cy="150" r="10" fill="#ffffff" />
                <path d="M170,180 Q200,210 230,180" stroke="#ffffff" strokeWidth="5" fill="none" />
              </svg>
            </div>
            
            <div className="about__experience">
              <p>5+ Years Experience</p>
            </div>
          </div>
          
          <div className="about__content" data-aos="fade-left">
            <h3 className="about__subtitle">Fullstack Developer & Mobile App Specialist</h3>
            <p className="about__description">
              I'm a passionate developer with expertise in building fullstack web applications and cross-platform mobile apps. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I create solutions that are not only functional but also intuitive and engaging.
            </p>
            <p className="about__description">
              My journey in tech began 5 years ago, and since then, I've worked with startups and established companies to deliver robust digital products. I'm constantly learning new technologies and methodologies to stay at the forefront of development practices.
            </p>
            
            <div className="about__info">
              <div className="about__box">
                <div className="about__icon-container">
                  <i className="fas fa-code about__icon"></i>
                </div>
                <div>
                  <h4>Web Development</h4>
                  <p>React, Node.js, Express</p>
                </div>
              </div>
              
              <div className="about__box">
                <div className="about__icon-container about__icon-container--secondary">
                  <i className="fas fa-mobile-alt about__icon"></i>
                </div>
                <div>
                  <h4>Mobile Development</h4>
                  <p>Flutter, React Native</p>
                </div>
              </div>
              
              <div className="about__box">
                <div className="about__icon-container about__icon-container--accent">
                  <i className="fas fa-database about__icon"></i>
                </div>
                <div>
                  <h4>Database Management</h4>
                  <p>MongoDB, PostgreSQL</p>
                </div>
              </div>
              
              <div className="about__box">
                <div className="about__icon-container about__icon-container--purple">
                  <i className="fas fa-cloud about__icon"></i>
                </div>
                <div>
                  <h4>Cloud Services</h4>
                  <p>AWS, Firebase, Heroku</p>
                </div>
              </div>
            </div>
            
            <a href="/resume.pdf" className="button" download>
              <span>Download CV</span>
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;