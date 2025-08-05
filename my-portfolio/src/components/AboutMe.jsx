import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
          {/* Vertical Line */}
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

              {/* Content */}
              <div className="ms-3">
                <h5 className="fw-bold mb-1 text-info">
                  {item.year} — {item.title}
                </h5>
                <p className="mb-1">{item.short}</p>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === idx ? 'auto' : 0,
                    opacity: expandedIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    overflow: 'hidden',
                    fontSize: '0.95rem',
                    color: '#ddd',
                  }}
                >
                  <p className="mb-0">{item.full}</p>
                </motion.div>

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
