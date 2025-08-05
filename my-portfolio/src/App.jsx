import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaBootstrap,
  FaPhp,
  FaHtml5,
  FaNodeJs,
  FaLaravel,
  FaFigma,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaSteam,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiPwa,
  SiMysql,
} from 'react-icons/si';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A weather forecasting app using real-time API data. Displays current conditions and weekly forecasts.',
    imageUrl: '/weather.png',
    link: 'https://github.com/Tr-87pRo/HELP_ME',
  },
  {
    id: 2,
    title: 'Coffee Webpage',
    description: 'A modern coffee shop landing page with a stylish UI and shopping cart. Built with React and Redux.',
    imageUrl: '/cafe3.jpg',
    link: 'https://github.com/Akrzemka/projekt-kafejka2',
  },
  {
    id: 3,
    title: 'Polls App',
    description: 'An interactive polls and voting platform with login system, results tracking, and live updates.',
    imageUrl: '/icon_144.png',
    link: 'https://vote.maventplan.pl/',
  },
];



const aboutTimeline = [
  {
    year: '2021',
    title: 'First Steps in Web Dev',
    full:
      'I started exploring HTML, CSS, and JavaScript after joining SCI. I followed online tutorials and built some simple websites to get the hang of it.',
  },
  {
    year: '2022',
    title: 'First Internship',
    full:
      'I started working with Laravel and React, which opened up a whole new world. React’s component system made sense to me, and I really enjoyed building with it.',
  },
  {
    year: '2023–24',
    title: 'School Projects',
    full:
      'During this time, I built several school projects and helped out with small freelance gigs. I made websites like online stores, portfolios, and simple dashboards. Every project helped me learn how to organize my code better, try new tools, and just get more comfortable building real stuff.',
  },
  {
    year: '2025–Now',
    title: 'Hobby became a passion',
    full:
      'I went on Erasmus in Valencia and had more time to dive deep into web dev. I started treating it more seriously and spent a lot of time learning and building for fun.',
  },
];

const skills = [
  { name: 'JavaScript', icon: <FaJsSquare size={28} color="#f0db4f" /> },
  { name: 'React', icon: <FaReact size={28} color="#61DBFB" /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={28} color="#38B2AC" /> },
  { name: 'Framer', icon: <SiFramer size={28} color="#0055FF" /> },
  { name: 'Git', icon: <FaGitAlt size={28} color="#F1502F" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={28} color="#7952b3" /> },
  { name: 'PHP', icon: <FaPhp size={28} color="#8892BE" /> },
  { name: 'HTML5', icon: <FaHtml5 size={28} color="#e34c26" /> },
  { name: 'Node.js', icon: <FaNodeJs size={28} color="#68A063" /> },
  { name: 'Laravel', icon: <FaLaravel size={28} color="#FF2D20" /> },
  { name: 'PWA', icon: <SiPwa size={28} color="#5A0FC8" /> },
  { name: 'TypeScript', icon: <SiTypescript size={28} color="#007ACC" /> },
  { name: 'Figma', icon: <FaFigma size={28} color="#F24E1E" /> },
  { name: 'MySQL', icon: <SiMysql size={28} color="#00758F" /> },
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
            Hello, I'm{' '}
            <span
              className="text-info glow"
              tabIndex={0}
              aria-label="Damian"
              role="text"
            >
              Damian
            </span>
          </h1>

          {/* Profile Picture Box */}
          <div className="d-flex justify-content-center mb-4">
            <img
              src="Me.jpg"
              alt="Damian's Profile"
              className="rounded-circle shadow"
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                border: '4px solid #0dcaf0',
              }}
            />
          </div>

          <p className="lead mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            A passionate web developer from Poland, constantly learning and creating beautiful web projects.
          </p>

          <button
            className="btn btn-outline-info mt-3 glow-button"
            style={{
              backgroundColor: 'transparent',
              borderWidth: '2px',
              color: '#0dcaf0',
              cursor: 'pointer',
              transition: 'box-shadow 0.3s ease',
            }}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About Me
          </button>
        </motion.div>
      </header>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="mb-5 text-center fw-bold">Projects</h2>
          <div className="row justify-content-center">
           {projects.map(({ id, title, description, imageUrl, link }) => (
  <div key={id} className="col-md-4 mb-4">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <motion.div
        whileHover={{
          y: -10,
          boxShadow: '0 10px 25px rgba(13, 202, 240, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-white rounded shadow-sm h-100"
      >
        <img
          src={imageUrl}
          alt={title}
          className="img-fluid rounded-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="p-3">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </motion.div>
    </a>
  </div>
))}
          </div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        id="about"
        className="py-5 bg-secondary text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">About Me</h2>
          {aboutTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="row mb-5 justify-content-center text-center align-items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div
                className="col-2 d-flex justify-content-center"
                style={{ position: 'relative' }}
              >
                <span
                  className="bg-info rounded-circle"
                  style={{
                    width: '16px',
                    height: '16px',
                    boxShadow: '0 0 10px #0dcaf0',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>
              <div className="col-md-8 col-sm-10">
                <div className="bg-dark p-4 rounded shadow">
                  <h5 className="text-info fw-bold mb-2">
                    {item.year} — {item.title}
                  </h5>
                  <p>{item.full}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-5 bg-dark text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Tech Stack</h2>
          <div className="row justify-content-center">
            {skills.map(({ name, icon }, idx) => (
              <div key={idx} className="col-6 col-md-2 mb-4 text-center">
                <div className="bg-secondary p-3 rounded">
                  {icon}
                  <p className="mt-2 mb-0">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="text-white d-flex justify-content-center align-items-center"
        style={{
          height: '30vh',
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                       url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Contact Me</h2>
          <p className="lead">
            Contact me via email at{' '}
            <a
              href="mailto:damianopeplinki+contact@gmail.com"
              className="text-info glow"
              style={{
                borderBottom: '1px solid #0dcaf0',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              damianopeplinki+contact@gmail.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a
              href="https://github.com/Tr-87pRo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info glow-icon"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.facebook.com/damiana.peplinski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info glow-icon"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/krzemek.trepro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info glow-icon"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://x.com/T87pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info glow-icon"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://discord.com/users/877943581690720266"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info glow-icon"
              aria-label="Discord"
            >
              <FaDiscord size={28} />
            </a>
            <a
              href="https://steamcommunity.com/profiles/76561198876622280/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info glow-icon"
              aria-label="Steam"
            >
              <FaSteam size={28} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Damian Pepliński. All rights reserved.
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .glow {
          transition: text-shadow 0.3s ease;
          outline: none;
          border: none;
          display: inline;
        }

        .glow:hover,
        .glow:focus {
          text-shadow: 0 0 10px #0dcaf0, 0 0 20px #0dcaf0, 0 0 30px #0dcaf0;
          text-decoration: none;
        }

        .glow-button {
          transition: box-shadow 0.3s ease;
          outline: none;
          border: 2px solid #0dcaf0;
          background-color: transparent;
          color: #0dcaf0;
          cursor: pointer;
        }

        .glow-button:hover,
        .glow-button:focus {
          outline: none;
          box-shadow: 0 0 12px 3px #0dcaf0;
          border-color: #0dcaf0;
          color: #0dcaf0;
        }

        .glow-icon {
          transition: text-shadow 0.3s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .glow-icon:hover,
        .glow-icon:focus {
          text-shadow: 0 0 10px #0dcaf0, 0 0 20px #0dcaf0, 0 0 30px #0dcaf0;
          color: #0dcaf0;
          text-decoration: none;
          outline: none;
        }

        a {
          outline: none;
          border: none;
        }

        a:hover,
        a:focus {
          outline: none;
          border: none;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default App;
