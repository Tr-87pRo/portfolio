import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Damian Portfolio</a>
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home" aria-current="page">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        id="home"
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          minHeight: '80vh',
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                       url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover`
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Hello, I'm <span className="text-info">Damian</span>
          </h1>
          <p className="lead mb-4" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6)' }}>
            React Developer & Web Enthusiast
          </p>
          <a
            href="#projects"
            className="btn btn-info btn-lg shadow-lg"
            style={{ transition: 'transform 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            See My Work
          </a>
        </div>
      </header>

      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-5 text-center fw-bold">Projects</h2>
          <div className="row g-4">
            {[1, 2, 3].map((project) => (
              <div key={project} className="col-md-4">
                <div
                  className="card h-100 shadow-sm border-0 rounded"
                  style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <img
                    src={`https://picsum.photos/seed/project${project}/400/200`}
                    className="card-img-top rounded-top"
                    alt={`Project ${project}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Project {project}</h5>
                    <p className="card-text">
                      This is a cool project description showcasing skills and technologies.
                    </p>
                    <a href="#" className="btn btn-outline-info">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-secondary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">About Me</h2>
          <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
            I’m Damian, a passionate React developer building amazing web experiences. I love crafting clean,
            responsive, and interactive user interfaces that delight users.
          </p>
        </div>
      </section>

      <section id="contact" className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Contact</h2>
          <p className="lead">
            Feel free to reach out via email at{' '}
            <a href="mailto:damian@example.com" className="text-info">
              damian@example.com
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Damian Portfolio
      </footer>
    </>
  );
}

export default App;
