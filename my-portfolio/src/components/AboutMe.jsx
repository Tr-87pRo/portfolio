import React, { useState } from 'react';

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`about-container ${expanded ? 'expanded' : ''}`}
      aria-expanded={expanded}
    >
      <h2>About Me</h2>
      {!expanded ? (
        <p className="teaser">Passionate React dev. Hover here to learn more!</p>
      ) : (
        <div className="expanded-content">
          <p>
            Hi, I’m Damian. I studied Computer Science at XYZ University and have
            worked on multiple exciting web projects. I love creating smooth,
            interactive UI with React, Vite, and Bootstrap. Outside of coding, I
            enjoy hiking, photography, and exploring new tech trends.
          </p>
          <p>
            My education journey, skills, and projects reflect my passion for
            clean design and impactful code.
          </p>
        </div>
      )}
    </section>
  );
};

export default AboutMe;
