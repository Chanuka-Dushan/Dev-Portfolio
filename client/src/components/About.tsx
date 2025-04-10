const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section__header" data-aos="fade-up">
          <h2 className="section__title">About <span>Me</span></h2>
          <div className="section__subtitle-line"></div>
          <p className="section__description">
            I am a passionate and experienced fullstack and mobile developer with a focus on creating elegant, efficient, and user-friendly applications.
          </p>
        </div>
        
        <div className="about__container">
          <div className="about__content" data-aos="fade-right">
            <p className="about__description">
              With over 5 years of experience in software development, I specialize in building responsive web applications and cross-platform mobile apps that deliver exceptional user experiences. My approach combines clean code, intuitive design, and modern development practices to create solutions that exceed client expectations.
            </p>
            
            <div className="about__info">
              <div className="about__box" data-aos="zoom-in" data-aos-delay="100">
                <i className="fas fa-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">5+ Years</span>
              </div>
              
              <div className="about__box" data-aos="zoom-in" data-aos-delay="200">
                <i className="fas fa-briefcase about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">20+ Projects</span>
              </div>
              
              <div className="about__box" data-aos="zoom-in" data-aos-delay="300">
                <i className="fas fa-headset about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
              </div>
            </div>
            
            <div className="about__btn-container">
              <a href="#contact" className="button">
                <span>Hire Me</span>
                <i className="fas fa-paper-plane"></i>
              </a>
              <a href="#" className="button button--ghost">
                <span>Download CV</span>
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
          
          <div className="about__img" data-aos="fade-left">
            <div className="about__achievements">
              <div className="about__achievement" data-aos="zoom-in" data-aos-delay="100">
                <h3 className="about__achievement-title">Frontend Development</h3>
                <p className="about__achievement-description">
                  I build beautiful, responsive user interfaces using modern frameworks and libraries like React, Vue, and Angular.
                </p>
              </div>
              
              <div className="about__achievement" data-aos="zoom-in" data-aos-delay="200">
                <h3 className="about__achievement-title">Backend Development</h3>
                <p className="about__achievement-description">
                  I develop robust and scalable server-side applications using Node.js, Express, Django, and other backend technologies.
                </p>
              </div>
              
              <div className="about__achievement" data-aos="zoom-in" data-aos-delay="300">
                <h3 className="about__achievement-title">Mobile App Development</h3>
                <p className="about__achievement-description">
                  I create cross-platform mobile applications using React Native and Flutter that provide native-like experiences.
                </p>
              </div>
              
              <div className="about__achievement" data-aos="zoom-in" data-aos-delay="400">
                <h3 className="about__achievement-title">UI/UX Design</h3>
                <p className="about__achievement-description">
                  I design intuitive and engaging user interfaces that focus on usability, accessibility, and aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;