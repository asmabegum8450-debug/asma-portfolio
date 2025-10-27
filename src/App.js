import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url(/sections-background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
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
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-greeting">Hi I'm</h2>
          <h1 className="hero-name">Mohd Ramzan</h1>
          <div className="hero-title">
            <span style={{ color: '#ffffff' }}>I'm a </span>
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Student",
                2000,
                "Software Engineer",
                2000,
                "Music Producer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ fontWeight: 700, color: '#ffffff' }}
            />
          </div>
        </div>
      </section>

      {/* All sections */}
      <div className="sections-wrapper">
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
                I'm Mohd Ramzan and I'm a Computer Science major undergrad at the Allen School at the University of Washington. I enjoy problem solving and have a passion for building backend services, learning cool algorithms, and writing solid code. Currently, I'm studying CS with a Math minor.
              </p>
              <p>
                For fun, I like to produce music, play soccer, code and watch movies. I've recently gotten into signal processing and ML in the audio field related to music production! I also just like going new places and exploring.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="experience">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-list">
            
            <div className="experience-item">
              <div className="experience-header">
                <h3>Capital One | Software Engineering Intern</h3>
                <p className="experience-date">June 2025 – August 2025</p>
              </div>
              <p className="experience-description">
                Halved processing times by writing asynchronous streaming and functional code in Scala and Akka to enable multithreaded computation and load balancing based on demand. Designed and implemented internal facing APIs that reduced code redundancy in the company by providing a unified bond trading backend. Optimized bond trader workflow by tracking monthly balances and targets in their native application. Leveraged agile processes to incorporate end user feedback into designs on a weekly release schedule.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Quad | Software Developer Intern</h3>
                <p className="experience-date">June 2024 – August 2024</p>
              </div>
              <p className="experience-description">
                Shortened customer onboarding time by efficiently mapping external print codes to internal print codes. Prevented the loss of customer data by rewriting book order entry forms to have auto-save functionality.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Paul G. Allen School of Computer Science & Engineering | Undergraduate Teaching Assistant</h3>
                <p className="experience-date">Sept 2024 – Present</p>
              </div>
              <p className="experience-description">
                TA CSE 123, the 600 student, final intro series CS course, teaching students about OOP, linked lists, binary trees & recursion. Teach & help plan 1-hour sections 2x weekly to 21 students, hold office hours to debug code, grade approx. 20 assignments per week.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Makeability Lab | Undergraduate Research Intern</h3>
                <p className="experience-date">Sept 2024 – Present</p>
              </div>
              <p className="experience-description">
                Working under Professor Jon Froehlich & Lead Engineer Michael Saugstad on Project Sidewalk, a web app which collects computer vision labels from over 10,000 users, which Google Maps uses for route creation. Maintain the app and its related APIs. Full stack dev in JavaScript, Scala (Slick framework) & PostgreSQL, now mainly resolving backend tickets & pushing to production weekly. Developed features to simplify users' experience labeling sidewalks. Created APIs for tables collecting complex user data.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>University of Washington | Undergraduate Research Assistant</h3>
                <p className="experience-date">Jan 2025 – Mar 2025</p>
              </div>
              <p className="experience-description">
                Co-authored paper regarding strategies to help developers create more accessible data visualizations for the blind. Worked with PhD student Ather Sharif & Dr. Jacob Wobbrock. Submitted paper to Assets 2025 & awaiting publishing. Conducted literature reviews, helped design and analyze interviews & surveys, contributed to paper writing.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>University of Washington Underwater Robotics | Software Lead</h3>
                <p className="experience-date">Sept 2024 – Mar 2025</p>
              </div>
              <p className="experience-description">
                Oversaw software development in Python & Godot for the 2024-2025 season. Architected & developed code on Linux, leading autonomous motion development. Led 10-member software team & helped manage 40+ member org. Using Python & PyTorch, created a CV project to detect and classify organisms for the 2024 MATE ML competition, placing 2nd nationally.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>BitCrew | Co-Founder</h3>
                <p className="experience-date">Jan 2023 – Aug 2023</p>
              </div>
              <p className="experience-description">
                Started & managed a 16 member charitable organization that taught over 250 students Python and Java. Created long-term roadmaps and 48 hours of content covering both languages, building up to advanced topics like data structures and OOP. Raised over $7,000 for multiple partner charities.
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