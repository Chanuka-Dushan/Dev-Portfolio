const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section__header" data-aos="fade-up">
          <h2 className="section__title">Technical <span>Skills</span></h2>
          <div className="section__subtitle-line"></div>
          <p className="section__description">
            My technical toolkit encompasses both frontend and backend technologies, enabling me to build complete, end-to-end solutions.
          </p>
        </div>
        
        <div className="skills__container">
          {/* Frontend Skills */}
          <div className="skills__card" data-aos="fade-up" data-aos-delay="100">
            <div className="skills__header">
              <div className="skills__icon-container">
                <i className="fas fa-laptop-code skills__icon"></i>
              </div>
              <h3 className="skills__subtitle">Frontend Development</h3>
            </div>
            
            <div className="skills__list">
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">React.js</h4>
                  <span className="skills__percentage">90%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">JavaScript (ES6+)</h4>
                  <span className="skills__percentage">95%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">CSS/SASS</h4>
                  <span className="skills__percentage">85%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">Tailwind CSS</h4>
                  <span className="skills__percentage">90%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">TypeScript</h4>
                  <span className="skills__percentage">80%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="skills__card" data-aos="fade-up" data-aos-delay="200">
            <div className="skills__header">
              <div className="skills__icon-container skills__icon-container--secondary">
                <i className="fas fa-server skills__icon"></i>
              </div>
              <h3 className="skills__subtitle">Backend Development</h3>
            </div>
            
            <div className="skills__list">
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">Node.js</h4>
                  <span className="skills__percentage skills__percentage--secondary">85%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--secondary" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">Express.js</h4>
                  <span className="skills__percentage skills__percentage--secondary">90%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--secondary" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">MongoDB</h4>
                  <span className="skills__percentage skills__percentage--secondary">85%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--secondary" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">PostgreSQL</h4>
                  <span className="skills__percentage skills__percentage--secondary">75%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--secondary" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">RESTful APIs</h4>
                  <span className="skills__percentage skills__percentage--secondary">95%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--secondary" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Development Skills */}
          <div className="skills__card" data-aos="fade-up" data-aos-delay="300">
            <div className="skills__header">
              <div className="skills__icon-container skills__icon-container--accent">
                <i className="fas fa-mobile-alt skills__icon"></i>
              </div>
              <h3 className="skills__subtitle">Mobile Development</h3>
            </div>
            
            <div className="skills__list">
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">Flutter</h4>
                  <span className="skills__percentage skills__percentage--accent">85%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--accent" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">React Native</h4>
                  <span className="skills__percentage skills__percentage--accent">80%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--accent" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">iOS Development</h4>
                  <span className="skills__percentage skills__percentage--accent">65%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--accent" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div className="skills__item">
                <div className="skills__titles">
                  <h4 className="skills__name">Android Development</h4>
                  <span className="skills__percentage skills__percentage--accent">70%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__progress skills__progress--accent" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;