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
    imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'Online store built with React, Redux, and Stripe.',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A full-stack blog platform with user authentication.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  },
];

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

          {/* Custom flex container with gap */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            {projects.map(({ id, title, description, imageUrl }) => (
              <motion.div
                key={id}
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 25px rgba(13, 202, 240, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{
                  flex: '1 1 calc(33.33% - 1rem)', // 3 per row minus gap
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  minWidth: '280px', // prevent too narrow on small screens
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

      {/* About Section */}
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
        &copy; {new Date().getFullYear()} Damian Portfolio
      </footer>
    </>
  );
}

export default App;
