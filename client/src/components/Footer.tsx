const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__content">
            <h3 className="footer__title">John Developer</h3>
            <p className="footer__description">
              Fullstack & Mobile Developer specialized in creating elegant, efficient, and user-friendly applications.
            </p>
            
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="footer__content">
            <h3 className="footer__title">Explore</h3>
            <ul className="footer__links">
              <li><a href="#home" className="footer__link">Home</a></li>
              <li><a href="#about" className="footer__link">About</a></li>
              <li><a href="#skills" className="footer__link">Skills</a></li>
              <li><a href="#projects" className="footer__link">Projects</a></li>
              <li><a href="#contact" className="footer__link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer__content">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Web Development</a></li>
              <li><a href="#" className="footer__link">Mobile App Development</a></li>
              <li><a href="#" className="footer__link">UI/UX Design</a></li>
              <li><a href="#" className="footer__link">Backend Development</a></li>
              <li><a href="#" className="footer__link">Consulting</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer__copy">
          <p>© {new Date().getFullYear()} John Developer. All rights reserved.</p>
        </div>
      </div>
      
      {/* Back to top button */}
      <a href="#home" className="back-to-top" id="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </a>
    </footer>
  );
};

export default Footer;