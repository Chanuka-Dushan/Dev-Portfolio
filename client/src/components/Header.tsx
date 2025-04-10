import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-text">John</span>
          <span className="nav__logo-text-highlight">Developer</span>
        </a>
        
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link" onClick={closeMenu}>
                <i className="fas fa-home nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMenu}>
                <i className="fas fa-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={closeMenu}>
                <i className="fas fa-code nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={closeMenu}>
                <i className="fas fa-briefcase nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={closeMenu}>
                <i className="fas fa-envelope nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          
          <button className="nav__close" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="nav__buttons">
          <button className="nav__toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;