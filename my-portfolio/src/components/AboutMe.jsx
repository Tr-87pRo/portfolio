import React, { useState } from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: '2019',
    title: 'First Steps in Web Dev',
    short: 'I started exploring HTML, CSS, and JavaScript...',
    full: 'I dove into frontend development through online courses and YouTube tutorials, quickly building small landing pages and interactive widgets.',
  },
  {
    year: '2021',
    title: 'React Changed Everything',
    short: 'Discovered React and started building apps...',
    full: 'React’s component model clicked instantly. I started building reusable UI components, managing state with hooks, and exploring the ecosystem with React Router and Context.',
  },
  {
    year: '2022',
    title: 'Freelance & Real Projects',
    short: 'Built full apps for real people...',
    full: 'I worked with clients to build e-commerce sites, portfolios, and internal dashboards. Every project pushed me to write cleaner, scalable code.',
  },
  {
    year: '2023–Now',
    title: 'Growing as a Developer',
    short: 'Learning Vite, Framer Motion, API integration...',
    full: 'I’m constantly learning — from animations with Framer Motion, to API development and optimization with modern tools. I believe in staying curious.',
  },
];

const AboutMe = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      id="about"
      className="py-5 bg-secondary text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-5 text-center">About Me</h2>

        <div className="position-relative ps-4 d-flex flex-column gap-5">
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '16px',
              top: 0,
              bottom: 0,
              width: '4px',
              backgroundColor: '#0dcaf0',
              borderRadius: '2px',
            }}
          />

          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="position-relative"
            >
              {/* Dot */}
              <span
                className="bg-info rounded-circle d-inline-block"
                style={{
                  width: '16px',
                  height: '16px',
                  position: 'absolute',
                  left: '-26px',
                  top: '6px',
                  boxShadow: '0 0 8px #0dcaf0',
                }}
              />

              {/* Content Block */}
              <div className="ms-3">
                <h5 className="fw-bold mb-1 text-info">{item.year} — {item.title}</h5>
                <p className="mb-1">{item.short}</p>

                {/* Toggleable Detail */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedIndex === idx ? 'auto' : 0, opacity: expandedIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    overflow: 'hidden',
                    fontSize: '0.95rem',
                    color: '#ddd',
                  }}
                >
                  <p className="mb-0">{item.full}</p>
                </motion.div>

                {/* Toggle Button */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="btn btn-sm btn-outline-info mt-2"
                >
                  {expandedIndex === idx ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
