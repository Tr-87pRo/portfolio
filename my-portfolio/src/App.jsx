import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function App() {
  return (
    <>
      <Navbar />

      <header
        id="home"
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          minHeight: '80vh',
          paddingTop: '56px',
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                       url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover`,
        }}
      >
        <motion.div
          className="container"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="display-4 fw-bold mb-3"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            Hello, I'm <span className="text-info">Damian</span>
          </h1>
          <p
            className="lead mb-4"
            style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6)' }}
          >
            React Developer & Web Enthusiast
          </p>
          <motion.a
  href="#projects"
  className="btn btn-lg fw-semibold"
  whileHover={{
    scale: 1.05,
    boxShadow: '0 0 10px #0dcaf0, 0 0 20px #0dcaf0',
  }}
  whileTap={{ scale: 0.95 }}
  style={{
    color: '#0dcaf0',
    border: '1px solid #0dcaf0',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    padding: '10px 24px',
    transition: 'all 0.3s ease',
  }}
>
  See My Work
</motion.a>

        </motion.div>
      </header>

      <motion.section
        id="projects"
        className="py-5 bg-light"
        style={{ scrollMarginTop: '100px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="mb-5 text-center fw-bold">Projects</h2>
          <div className="row g-4">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="col-md-4"
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                }}
              >
                <div className="card h-100 shadow-sm border-0 rounded">
                  <img
                    src={`https://picsum.photos/seed/project${project}/400/200`}
                    className="card-img-top rounded-top"
                    alt={`Project ${project}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Project {project}</h5>
                    <p className="card-text">
                      This is a cool project description showcasing skills and
                      technologies.
                    </p>
                    <a href="#" className="btn btn-outline-info">
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="py-5 bg-secondary text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">About Me</h2>
          <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
            I’m Damian, a passionate React developer building amazing web
            experiences. I love crafting clean, responsive, and interactive
            user interfaces that delight users.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-5 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Contact</h2>
          <p className="lead">
            Feel free to reach out via email at{' '}
            <a href="mailto:damian@example.com" className="text-info">
              damian@example.com
            </a>
          </p>
        </div>
      </motion.section>

      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Damian Portfolio
      </footer>
    </>
  );
}

export default App;
