import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Bootstrap.',
    imageUrl:
      'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'Online store built with React, Redux, and Stripe.',
    imageUrl:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A full-stack blog platform with user authentication.',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  },
];

const aboutTimeline = [
  {
    year: '2019',
    title: 'First Steps in Web Dev',
    full: 'Dove into frontend development through online tutorials. Built small projects to learn the basics and gained confidence with layout and styling.',
  },
  {
    year: '2021',
    title: 'React Changed Everything',
    full: 'Learned React, hooks, component trees, and routing. Built complex UIs and learned to manage state effectively. React became my daily tool.',
  },
  {
    year: '2022',
    title: 'Freelancing Experience',
    full: 'Worked on portfolio sites, business dashboards, and landing pages. Learned project structure, deadlines, and client collaboration.',
  },
  {
    year: '2023–Now',
    title: 'Expanding My Stack',
    full: 'I’m constantly learning — deploying with Netlify/Vercel, using animations with Framer Motion, and building full-stack apps with APIs.',
  },
];

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
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
          <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Hello, I'm <span className="text-info">Damian</span>
          </h1>
          <p className="lead mb-4" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6)' }}>
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

      {/* Projects Section */}
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
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {projects.map(({ id, title, description, imageUrl }) => (
              <motion.div
                key={id}
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 25px rgba(13, 202, 240, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{
                  flex: '1 1 calc(33.33% - 1rem)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  minWidth: '280px',
                  maxWidth: '400px',
                  boxSizing: 'border-box',
                }}
              >
                <div className="h-100">
                  <img
                    src={imageUrl}
                    alt={title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px',
                    }}
                  />
                  <div className="p-3">
                    <h5 className="fw-bold">{title}</h5>
                    <p style={{ fontSize: '0.95rem' }}>{description}</p>
                    <a href="#" className="btn btn-outline-info btn-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Me Timeline Section */}
      <motion.section
        id="about"
        className="py-5 bg-secondary text-white position-relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container position-relative">
          <h2 className="fw-bold mb-5 text-center position-relative z-2 bg-secondary px-3 d-inline-block">
            About Me
          </h2>

          {aboutTimeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className="row mb-5 align-items-start position-relative"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {isLeft ? (
                  <>
                    <div className="col-md-5 text-md-end pe-md-5">
                      <div className="p-4 bg-dark rounded shadow-sm position-relative z-2">
                        <h5 className="text-info fw-bold mb-2">
                          {item.year} — {item.title}
                        </h5>
                        <p className="mb-0">{item.full}</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center position-relative">
                      <span
                        className="bg-info rounded-circle position-absolute"
                        style={{
                          width: '16px',
                          height: '16px',
                          top: '20px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          boxShadow: '0 0 10px #0dcaf0',
                          zIndex: 3,
                        }}
                      />
                    </div>
                    <div className="col-md-5"></div>
                  </>
                ) : (
                  <>
                    <div className="col-md-5"></div>
                    <div className="col-md-2 d-flex justify-content-center position-relative">
                      <span
                        className="bg-info rounded-circle position-absolute"
                        style={{
                          width: '16px',
                          height: '16px',
                          top: '20px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          boxShadow: '0 0 10px #0dcaf0',
                          zIndex: 3,
                        }}
                      />
                    </div>
                    <div className="col-md-5 ps-md-5">
                      <div className="p-4 bg-dark rounded shadow-sm position-relative z-2">
                        <h5 className="text-info fw-bold mb-2">
                          {item.year} — {item.title}
                        </h5>
                        <p className="mb-0">{item.full}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Tech Stack Section (Below About Me, Above Contact) */}
      <section className="py-4 bg-secondary text-center">
        <code
          style={{
            display: 'inline-block',
            background: '#1e1e2f',
            color: '#0dcaf0',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontFamily: 'monospace',
            boxShadow: '0 0 15px rgba(13, 202, 240, 0.4)',
          }}
        >
          {'{ React, JavaScript, Tailwind, Bootstrap, Git, Framer Motion }'}
        </code>
      </section>

      {/* Contact Section */}
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
            <a href="mailto:damianopeplinki+contact@gmail.com" className="text-info">
              damianopeplinki+contact@gmail.com
            </a>
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Damian Pepliński. All rights reserved.
      </footer>
    </>
  );
}

export default App;
