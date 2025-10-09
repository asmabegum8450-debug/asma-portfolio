import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Mohd</h1>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Work Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: 'url(/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2 className="hero-greeting">Hi I'm</h2>
          <h1 className="hero-name">Mohd Ramzan</h1>
          <div className="hero-title">
            <TypeAnimation
              sequence={[
                "I'm a Software Engineer",
                2000,
                "I'm a Developer",
                2000,
                "I'm a Student",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </section>

      {/* All sections with colorful background */}
      <div className="sections-wrapper" style={{
        backgroundImage: 'url(/sections-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* About Section */}
        <section id="about" className="about">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="profile-circle">
                <img src="/profile.jpg" alt="Mohd" />
              </div>
            </div>
            <div className="about-text">
              <p>
                I'm Mohd Ramzan and I'm a Computer Science & Mathematics student at the University of Washington Seattle, Paul G. Allen School of Computer Science. I'm passionate about building innovative full-stack solutions and exploring AI/ML technologies.
              </p>
              <p>
                I have experience as a Software Development Intern at Xiaomi India and The Verse, where I built scalable systems serving thousands of users. I'm also an Undergraduate Research Intern and Teaching Assistant, helping over 600 students learn computer science.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section - COMBINED WITH RESEARCH */}
        <section id="experience" className="experience">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-list">
            
            <div className="experience-item">
              <div className="experience-header">
                <h3>The Verse | Software Development Intern</h3>
                <p className="experience-date">June 2024 – Sept 2024</p>
              </div>
              <p className="experience-description">
                Developed a MERN webapp in Agile environment, primarily through creating & deploying a Node.js backend with MongoDB. Architected database with scalability and security focus, enabling safe support for 1100+ users. Developed a frontend audio frequency modulation system with React. Created a secure JWT authentication/authorization pipeline and managed frontend & backend production environment.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Xiaomi India | Software Development Engineer Intern</h3>
                <p className="experience-date">June 2023 – Sept 2023</p>
              </div>
              <p className="experience-description">
                Saved the team $50,000+ in query costs per year by building a full-stack query system to help on-call devs handle tickets more efficiently. Designed and implemented a system to harvest, store, and render over 1.1 million new records per week. Built RESTful APIs using Java (Spring Boot) with asynchronous job queues for high-throughput data handling.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Bangladesh University of Engineering and Technology | Undergraduate Teaching Assistant</h3>
                <p className="experience-date">Mar 2023 – Dec 2023</p>
              </div>
              <p className="experience-description">
                TA CSE 107, the 600 student, final intro series CS course, teaching students about OOP, linked lists, binary trees & recursion. Teach & help plan 1-hour sections 2x weekly to 21 students, hold office hours to debug code, grade approx. 20 assignments per week.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>IAC Lab Bangladesh University of Engineering and Technology | Undergraduate Research Intern</h3>
                <p className="experience-date">Jan 2023 – Dec 2023</p>
              </div>
              <p className="experience-description">
                Working under Professor Dr. Anindya Iqbal & Lead Engineer Dr. Sadia Sharmin on Project Rotary, a web app which collects computer vision labels from over 10,000 users, which Google Maps uses for route creation. Full stack dev in JavaScript, Scala (Slick framework) & PostgreSQL, now mainly resolving backend tickets & pushing to production weekly.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Bangladesh University of Engineering and Technology Underwater Robotics | Software Lead</h3>
                <p className="experience-date">Jan 2023 – June 2023</p>
              </div>
              <p className="experience-description">
                Oversaw software development in Python & Godot for the 2023-2024 season. Led 10-member software team & helped manage 40+ member org. Using Python & PyTorch, created a CV project to detect and classify organisms for the 2023 BDET ML competition, placing 2nd nationally.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>BitCrew | Co-Founder, Co-Director</h3>
                <p className="experience-date">Jan 2023 – Aug 2023</p>
              </div>
              <p className="experience-description">
                Started & managed a 16 staff member charitable organization that taught over 250 students Python and Java. Created 48 hours of content in both languages and built up to high-level concepts like data structures and OOP. Raised over $7,000 for multiple partner charities.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Bangladesh University of Engineering and Technology | Undergraduate Research Assistant</h3>
                <p className="experience-date">Oct 2023 – Dec 2023</p>
              </div>
              <p className="experience-description">
                Studied average-case behavior of randomized Quicksort under input distributions common in Bangladeshi e-commerce datasets. Developed analytical bounds using probabilistic recurrence relations and verified them through empirical simulations in Python. Extended analysis to hybrid sorting algorithms.
              </p>
            </div>

          </div>
        </section>

        {/* Projects Section - CLICKABLE */}
        <section id="projects" className="projects">
          <h2 className="section-title">Projects</h2>
          <p className="projects-subtitle">Feel free to click on one!</p>
          <div className="experience-list">
            
            <a href="https://github.com/moramz/producers-forte-main" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Producers-Forte | Audio Processing ML</h3>
                  <p className="experience-date">Sep 2024 – Nov 2024</p>
                </div>
                <p className="experience-description">
                  Built & trained deep CNNs with PyTorch to predict traits about songs, helping producers create similar sounds. Created a Flask server for the app. Wrote frontend in React. Containerized the application with Docker. Created/managed dataset of over 10,000 songs.
                </p>
              </div>
            </a>

            <a href="https://github.com/mohdramzz/bhaghini24" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Bhaghini | Full Stack E-Commerce Platform</h3>
                  <p className="experience-date">Nov 2024 – Feb 2025</p>
                </div>
                <p className="experience-description">
                  Built full-stack e-commerce site showcasing Bengali heritage clothing using React and Spring Boot. Implemented user login with JWT, product search, cart, checkout. Added shop creation for sellers with image uploads.
                </p>
              </div>
            </a>

            <a href="https://github.com/moramz/mos_personal_web" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Personal Website</h3>
                  <p className="experience-date">May 2025 – Jun 2025</p>
                </div>
                <p className="experience-description">
                  Built a responsive portfolio website using React showcasing my professional experience, projects, and technical skills. Implemented dynamic UI features including animated text transitions with TypeAnimation library, smooth scrolling navigation, and a modern gradient-based design system. Structured the application with reusable React components and CSS styling to create an engaging user experience.
                </p>
              </div>
            </a>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Campus Maps</h3>
                <p className="experience-date">Apr 2025 – Jun 2025</p>
              </div>
              <p className="experience-description">
                Built Java and React-based GUI displaying shortest path between UW campus buildings. Applied CSE 331 data structures & algorithms.
              </p>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-list">
            <div className="skill-category">
              <h3>💻 Languages</h3>
              <p>Java, Python, JavaScript, Scala, TypeScript, C, C++</p>
            </div>
            <div className="skill-category">
              <h3>🗄️ Backend/Database</h3>
              <p>Node.js, Express, Flask, Spring Boot, Slick, MongoDB, PostgreSQL, MySQL</p>
            </div>
            <div className="skill-category">
              <h3>🌐 Web Development</h3>
              <p>React, HTML5/CSS, REST APIs, Docker</p>
            </div>
            <div className="skill-category">
              <h3>🤖 Machine Learning</h3>
              <p>PyTorch, Pandas, NumPy</p>
            </div>
            <div className="skill-category">
              <h3>🛠️ Developer Tools</h3>
              <p>Git, AWS, Kubernetes, Heroku, Shell, Linux</p>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="resume">
          <h2 className="section-title">My Resume</h2>
          <p>
            You can access my most updated resume{' '}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <p>Email: ranmohd@uw.edu</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <p>Phone: 1 206-538-7992</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <a href="https://www.linkedin.com/in/mohd-ramzan-89b430268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📸</span>
              <a href="https://www.instagram.com/ramzanmohd_/?igsh=MWRpamh0OWR3bXRpNA%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <a href="https://github.com/moramz" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🐦</span>
              <a href="https://x.com/MohdRamzan_" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;