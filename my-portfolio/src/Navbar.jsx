import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      setScrolled(headerBottom <= 56); // 56 = navbar height approx
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const glowTextStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#0dcaf0',
    textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
    transition: 'text-shadow 0.3s ease-in-out',
  };

  const glowTextHover = {
    textShadow: '0 0 8px #0dcaf0, 0 0 16px #0dcaf0',
  };

  const glowLinkStyle = {
    color: 'white',
    textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
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
    <>
      {/* Invisible header ref to measure scroll */}
      <div
        ref={headerRef}
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '80vh',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <nav
        className="navbar fixed-top navbar-expand-lg shadow-sm"
        style={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          transition: 'background-color 0.6s ease',
          padding: '0.75rem 1.5rem',
          zIndex: 1030,
          borderBottom: '0 !important',
          boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.8)' : 'none',
        }}
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
    </>
  );
};

export default Navbar;
