import { useState, useEffect } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <nav className="nav container">
        <div className="nav__logo">
          <span className="nav__logo-code">&lt;/</span>
          <span className="nav__logo-text">DevPortfolio</span>
          <span className="nav__logo-code">&gt;</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={() => setShowMenu(false)}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={() => setShowMenu(false)}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={() => setShowMenu(false)}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={() => setShowMenu(false)}>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={() => setShowMenu(false)}>
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="/resume.pdf" 
                className="button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;