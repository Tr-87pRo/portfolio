import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">My Portfolio</a>
        </div>
      </nav>

      <header className="bg-light text-center py-5">
        <h1>Hello, I'm <span className="text-primary">Damian</span></h1>
        <p className="lead">React Developer & Web Enthusiast</p>
        <a href="#projects" className="btn btn-primary mt-3">See My Work</a>
      </header>

      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Project One</h5>
                  <p className="card-text">Cool project description here.</p>
                  <a href="#" className="btn btn-outline-primary">View</a>
                </div>
              </div>
            </div>
            {/* Add more projects here */}
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Damian Portfolio
      </footer>
    </>
  );
}

export default App;
