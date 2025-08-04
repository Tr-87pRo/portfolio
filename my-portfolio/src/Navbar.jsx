import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const glowTextStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#0dcaf0',
    transition: 'text-shadow 0.3s ease-in-out',
  };

  const glowTextHover = {
    textShadow: '0 0 8px #0dcaf0, 0 0 16px #0dcaf0',
  };

  const glowLinkStyle = {
    color: 'white',
    transition: 'text-shadow 0.3s ease-in-out',
  };

  const glowLinkHover = {
    textShadow: '0 0 6px #0dcaf0',
  };

  const [hovered, setHovered] = useState({
    brand: false,
    home: false,
    projects: false,
    about: false,
    contact: false,
  });

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        scrolled ? 'bg-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          style={{
            ...glowTextStyle,
            ...(hovered.brand ? glowTextHover : {}),
          }}
          onMouseEnter={() => setHovered((prev) => ({ ...prev, brand: true }))}
          onMouseLeave={() => setHovered((prev) => ({ ...prev, brand: false }))}
        >
          Damian
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center">
            {['home', 'projects', 'about', 'contact'].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  className="nav-link"
                  href={`#${section}`}
                  style={{
                    ...glowLinkStyle,
                    ...(hovered[section] ? glowLinkHover : {}),
                  }}
                  onMouseEnter={() =>
                    setHovered((prev) => ({ ...prev, [section]: true }))
                  }
                  onMouseLeave={() =>
                    setHovered((prev) => ({ ...prev, [section]: false }))
                  }
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
