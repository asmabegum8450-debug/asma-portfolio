// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import './App.css';

// function App() {
//   return (
//     <div className="App" style={{
//       backgroundImage: 'url(/sections-background.jpg)',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundAttachment: 'fixed',
//       minHeight: '100vh'
//     }}>
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="nav-container">
//           <h1 className="nav-logo">Mohd</h1>
//           <ul className="nav-menu">
//             <li><a href="#about">About</a></li>
//             <li><a href="#experience">Work Experience</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#resume">Resume</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h2 className="hero-greeting">Hi I'm</h2>
//           <h1 className="hero-name">Mohd Ramzan</h1>
//           <div className="hero-title">
//             <span style={{ color: '#ffffff' }}>I'm a </span>
//             <TypeAnimation
//               sequence={[
//                 "Developer",
//                 2000,
//                 "Student",
//                 2000,
//                 "Software Engineer",
//                 2000,
//                 "Music Producer",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               style={{ fontWeight: 700, color: '#ffffff' }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* All sections */}
//       <div className="sections-wrapper">
//         {/* About Section */}
//         <section id="about" className="about">
//           <h2 className="section-title">About Me</h2>
//           <div className="about-content">
//             <div className="about-image">
//               <div className="profile-circle">
//                 <img src="/profile.jpg" alt="Mohd" />
//               </div>
//             </div>
//             <div className="about-text">
//               <p>
//                 I'm Mohd Ramzan and I'm a Computer Science major undergrad at the Allen School at the University of Washington. I enjoy problem solving and have a passion for building backend services, learning cool algorithms, and writing solid code. Currently, I'm studying CS with a Math minor.
//               </p>
//               <p>
//                 For fun, I like to produce music, play soccer, code and watch movies. I've recently gotten into signal processing and ML in the audio field related to music production! I also just like going new places and exploring.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Work Experience Section */}
//         <section id="experience" className="experience">
//           <h2 className="section-title">Work Experience</h2>
//           <div className="experience-list">
            
//             <div className="experience-item">
//               <div className="experience-header">
//                 <h3>Capital One | Software Engineering Intern</h3>
//                 <p className="experience-date">June 2025 – August 2025</p>
//               </div>
//               <p className="experience-description">
//                 Halved processing times by writing asynchronous streaming and functional code in Scala and Akka to enable multithreaded computation and load balancing based on demand. Designed and implemented internal facing APIs that reduced code redundancy in the company by providing a unified bond trading backend. Optimized bond trader workflow by tracking monthly balances and targets in their native application. Leveraged agile processes to incorporate end user feedback into designs on a weekly release schedule.
//               </p>
//             </div>

//             <div className="experience-item">
//               <div className="experience-header">
//                 <h3>Quad | Software Developer Intern</h3>
//                 <p className="experience-date">June 2024 – August 2024</p>
//               </div>
//               <p className="experience-description">
//                 Shortened customer onboarding time by efficiently mapping external print codes to internal print codes. Prevented the loss of customer data by rewriting book order entry forms to have auto-save functionality.
//               </p>
//             </div>

//             <div className="experience-item">
//               <div className="experience-header">
//                 <h3>Paul G. Allen School of Computer Science & Engineering | Undergraduate Teaching Assistant</h3>
//                 <p className="experience-date">Sept 2024 – Present</p>
//               </div>
//               <p className="experience-description">
//                 TA CSE 123, the 600 student, final intro series CS course, teaching students about OOP, linked lists, binary trees & recursion. Teach & help plan 1-hour sections 2x weekly to 21 students, hold office hours to debug code, grade approx. 20 assignments per week.
//               </p>
//             </div>

//             <div className="experience-item">
//               <div className="experience-header">
//                 <h3>Makeability Lab | Undergraduate Research Intern</h3>
//                 <p className="experience-date">Sept 2024 – Present</p>
//               </div>
//               <p className="experience-description">
//                 Working under Professor Jon Froehlich & Lead Engineer Michael Saugstad on Project Sidewalk, a web app which collects computer vision labels from over 10,000 users, which Google Maps uses for route creation. Maintain the app and its related APIs. Full stack dev in JavaScript, Scala (Slick framework) & PostgreSQL, now mainly resolving backend tickets & pushing to production weekly. Developed features to simplify users' experience labeling sidewalks. Created APIs for tables collecting complex user data.
//               </p>
//             </div>

//             <div className="experience-item">
//               <div className="experience-header">
//                 <h3>University of Washington | Undergraduate Research Assistant</h3>
//                 <p className="experience-date">Jan 2025 – Mar 2025</p>
//               </div>
//               <p className="experience-description">
//                 Co-authored paper regarding strategies to help developers create more accessible data visualizations for the blind. Worked with PhD student Ather Sharif & Dr. Jacob Wobbrock. Submitted paper to Assets 2025 & awaiting publishing. Conducted literature reviews, helped design and analyze interviews & surveys, contributed to paper writing.
//               </p>
//             </div>

//             <div className="experience-item">
//               <div className="experience-header">
//                 <h3>University of Washington Underwater Robotics | Software Lead</h3>
//                 <p className="experience-date">Sept 2024 – Mar 2025</p>
//               </div>
//               <p className="experience-description">
//                 Oversaw software development in Python & Godot for the 2024-2025 season. Architected & developed code on Linux, leading autonomous motion development. Led 10-member software team & helped manage 40+ member org. Using Python & PyTorch, created a CV project to detect and classify organisms for the 2024 MATE ML competition, placing 2nd nationally.
//               </p>
//             </div>

//             <div className="experience-item">
//               <div className="experience-header">
//                 <h3>BitCrew | Co-Founder</h3>
//                 <p className="experience-date">Jan 2023 – Aug 2023</p>
//               </div>
//               <p className="experience-description">
//                 Started & managed a 16 member charitable organization that taught over 250 students Python and Java. Created long-term roadmaps and 48 hours of content covering both languages, building up to advanced topics like data structures and OOP. Raised over $7,000 for multiple partner charities.
//               </p>
//             </div>

//           </div>
//         </section>

//         {/* Projects Section - CLICKABLE */}
//         <section id="projects" className="projects">
//           <h2 className="section-title">Projects</h2>
//           <p className="projects-subtitle">Feel free to click on one!</p>
//           <div className="experience-list">
            
//             <a href="https://github.com/moramz/producers-forte-main" target="_blank" rel="noopener noreferrer" className="project-link">
//               <div className="experience-item">
//                 <div className="experience-header">
//                   <h3>Producers-Forte | Audio Processing ML</h3>
//                   <p className="experience-date">Sep 2024 – Nov 2024</p>
//                 </div>
//                 <p className="experience-description">
//                   Built & trained deep CNNs with PyTorch to predict traits about songs, helping producers create similar sounds. Created a Flask server for the app. Wrote frontend in React. Containerized the application with Docker. Created/managed dataset of over 10,000 songs.
//                 </p>
//               </div>
//             </a>

//             <a href="https://github.com/mohdramzz/bhaghini24" target="_blank" rel="noopener noreferrer" className="project-link">
//               <div className="experience-item">
//                 <div className="experience-header">
//                   <h3>Bhaghini | Full Stack E-Commerce Platform</h3>
//                   <p className="experience-date">Nov 2024 – Feb 2025</p>
//                 </div>
//                 <p className="experience-description">
//                   Built full-stack e-commerce site showcasing Bengali heritage clothing using React and Spring Boot. Implemented user login with JWT, product search, cart, checkout. Added shop creation for sellers with image uploads.
//                 </p>
//               </div>
//             </a>

//             <a href="https://github.com/moramz/mos_personal_web" target="_blank" rel="noopener noreferrer" className="project-link">
//               <div className="experience-item">
//                 <div className="experience-header">
//                   <h3>Personal Website</h3>
//                   <p className="experience-date">May 2025 – Jun 2025</p>
//                 </div>
//                 <p className="experience-description">
//                   Built a responsive portfolio website using React showcasing my professional experience, projects, and technical skills. Implemented dynamic UI features including animated text transitions with TypeAnimation library, smooth scrolling navigation, and a modern gradient-based design system. Structured the application with reusable React components and CSS styling to create an engaging user experience.
//                 </p>
//               </div>
//             </a>

//             <div className="experience-item">
//               <div className="experience-header">
//                 <h3>Campus Maps</h3>
//                 <p className="experience-date">Apr 2025 – Jun 2025</p>
//               </div>
//               <p className="experience-description">
//                 Built Java and React-based GUI displaying shortest path between UW campus buildings. Applied CSE 331 data structures & algorithms.
//               </p>
//             </div>

//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="skills">
//           <h2 className="section-title">Skills</h2>
//           <div className="skills-list">
//             <div className="skill-category">
//               <h3>💻 Languages</h3>
//               <p>Java, Python, JavaScript, Scala, TypeScript, C, C++</p>
//             </div>
//             <div className="skill-category">
//               <h3>🗄️ Backend/Database</h3>
//               <p>Node.js, Express, Flask, Spring Boot, Slick, MongoDB, PostgreSQL, MySQL</p>
//             </div>
//             <div className="skill-category">
//               <h3>🌐 Web Development</h3>
//               <p>React, HTML5/CSS, REST APIs, Docker</p>
//             </div>
//             <div className="skill-category">
//               <h3>🤖 Machine Learning</h3>
//               <p>PyTorch, Pandas, NumPy</p>
//             </div>
//             <div className="skill-category">
//               <h3>🛠️ Developer Tools</h3>
//               <p>Git, AWS, Kubernetes, Heroku, Shell, Linux</p>
//             </div>
//           </div>
//         </section>

//         {/* Resume Section */}
//         <section id="resume" className="resume">
//           <h2 className="section-title">My Resume</h2>
//           <p>
//             You can access my most updated resume{' '}
//             <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>
//           </p>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="contact">
//           <h2 className="section-title">Contact Me</h2>
//           <div className="contact-grid">
//             <div className="contact-item">
//               <span className="contact-icon">📧</span>
//               <p>Email: ranmohd@uw.edu</p>
//             </div>
//             <div className="contact-item">
//               <span className="contact-icon">📱</span>
//               <p>Phone: 1 206-538-7992</p>
//             </div>
//             <div className="contact-item">
//               <span className="contact-icon">💼</span>
//               <a href="https://www.linkedin.com/in/mohd-ramzan-89b430268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//             </div>
//             <div className="contact-item">
//               <span className="contact-icon">📸</span>
//               <a href="https://www.instagram.com/ramzanmohd_/?igsh=MWRpamh0OWR3bXRpNA%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
//             </div>
//             <div className="contact-item">
//               <span className="contact-icon">💻</span>
//               <a href="https://github.com/moramz" target="_blank" rel="noopener noreferrer">GitHub</a>
//             </div>
//             <div className="contact-item">
//               <span className="contact-icon">🐦</span>
//               <a href="https://x.com/MohdRamzan_" target="_blank" rel="noopener noreferrer">Twitter</a>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default App;




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
          <h1 className="nav-logo">Asma</h1>
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
          <h1 className="hero-name">Asma Begum</h1>
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
                "Researcher",
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
                <img src="/profile.jpg" alt="Asma" />
              </div>
            </div>
            <div className="about-text">
              <p>
                I'm Asma Begum and I'm a Computer Science major undergrad at the Allen School at the University of Washington. I enjoy problem solving and have a passion for building scalable backend systems, developing full-stack applications, and writing clean, efficient code. Currently, I'm studying CS with a Math minor.
              </p>
              <p>
                I'm passionate about creating developer tools and improving accessibility in technology. I've worked on projects ranging from VS Code extensions to web platforms that help millions of users. When I'm not coding, I enjoy exploring new places and learning about emerging technologies.
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
                <h3>Visa | Software Development Engineer Intern</h3>
                <p className="experience-date">June 2025 – August 2025</p>
              </div>
              <p className="experience-description">
                Built a TypeScript-based internal developer tool integrated with VS Code to assist engineers in generating and validating production service code, adopted by 20+ internal developers. Designed API integrations with internal validation services to automatically test generated code, reducing manual review cycles by 30%. Collaborated with engineers and product stakeholders across 3 teams to gather requirements, iterate on features, and conduct user testing. Shipped production-ready tooling supporting Open VisaNet development, improving developer workflows used in systems handling.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>The Verse | Software Development Intern</h3>
                <p className="experience-date">June 2024 – August 2024</p>
              </div>
              <p className="experience-description">
                Developed a MERN webapp in Agile environment, primarily though creating & deploying a Node.js backend with MongoDB. Architected database with scalability and security focus, enabling safe support for 1100+ users. Developed a frontend audio frequency modulation system with React. Implemented frontend features & refactored existing webapp. Created a secure JWT authentication/authorization pipeline and managed frontend & backend production environment.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Paul G. Allen School of Computer Science & Engineering | Undergraduate Teaching Assistant</h3>
                <p className="experience-date">Sept 2024 – Present</p>
              </div>
              <p className="experience-description">
                Supporting instruction for CSE 123, introductory computer science course, assisting students with Java programming concepts including object-oriented design, recursion, and tree-based data structures. Built and maintained Python-based tooling to automate grading workflows, improving turnaround time and scaling evaluation for hundreds of weekly submissions.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Makeability Lab | Undergraduate Research Intern</h3>
                <p className="experience-date">Sept 2024 – Present</p>
              </div>
              <p className="experience-description">
                Conduct research under Professor Jon Froelich & Lead Engineer Michael Saugstad on Project Sidewalk, a web platform collecting large-scale computer vision labels used by Google Maps for accessibility-aware route generation. Maintain core services and APIs. Perform full-stack development using JavaScript, Scala (Slick framework) & PostgreSQL, primarily addressing backend issues and deploying weekly production updates. Built features improving the sidewalk labeling workflow and implemented APIs for storing and querying complex, structured user data.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>University of Washington | Undergraduate Research Assistant</h3>
                <p className="experience-date">Jan 2025 – Mar 2025</p>
              </div>
              <p className="experience-description">
                Co-authored a research paper on techniques for improving accessibility of data visualizations for blind users with PhD student Ather Sharif & Dr. Jacob Wobbrock. Submitted to ASSETS 2025 and currently under review. Performed literature reviews, assisted in interview and survey design, analyzed collected data, and contributed to academic writing and revisions.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Husky Coding Project | Software Lead</h3>
                <p className="experience-date">Sept 2024 – Mar 2025</p>
              </div>
              <p className="experience-description">
                Led backend and infrastructure development in Python for student-run software projects, architecting services on Linux and guiding system design decisions. Led a 10-member engineering team and coordinated with a 40+ member organization. Designed and implemented a data-driven project involving model training and evaluation in Python, delivering a production-ready solution presented to external partners.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>CodeBit | Co-Founder, Co-Director</h3>
                <p className="experience-date">Jan 2023 – Aug 2023</p>
              </div>
              <p className="experience-description">
                Launched and led a student-run nonprofit focused on expanding access to programming education, organizing and mentoring a multi-disciplinary team of instructors and volunteers. Planned and delivered a structured curriculum in Python and Java, creating 52 hours of instructional material and securing over $7,000 in funding for multiple partner charities.
              </p>
            </div>

          </div>
        </section>

        {/* Projects Section - CLICKABLE */}
        <section id="projects" className="projects">
          <h2 className="section-title">Projects</h2>
          <p className="projects-subtitle">Feel free to click on one!</p>
          <div className="experience-list">
            
            <a href="https://github.com/asmabegum8450-debug/BraveCat" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>BraveCat | iOS Color-Matching Game</h3>
                  <p className="experience-date">Sept 2024 – Nov 2024</p>
                </div>
                <p className="experience-description">
                  Developed & published iOS mobile game using Swift and SpriteKit with color-matching whack-a-mole gameplay mechanics. Designed core game logic handling user input, collision detection, and state transitions across multiple gameplay scenes. Structured assets and application flow within Xcode, producing a complete, runnable iOS app with clean separation of game components.
                </p>
              </div>
            </a>

            <a href="https://github.com/asmabegum8450-debug/database-design-project" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>StudyPro | Database Design & Schema</h3>
                  <p className="experience-date">Nov 2024 – Feb 2025</p>
                </div>
                <p className="experience-description">
                  Designed a normalized relational database to model tutoring sessions, students, tutors, and subjects for a university learning center. Created ER diagrams and implemented schemas, ingesting real-world CSV datasets to populate and validate database integrity. Wrote SQL queries to analyze attendance trends, session history, and tutor utilization, enabling accurate reporting and insights.
                </p>
              </div>
            </a>

            <a href="https://github.com/asmabegum8450-debug/asma-portfolio" target="_blank" rel="noopener noreferrer" className="project-link">
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
              <p>Java, Python, JavaScript, C, C++, Scala, TypeScript, PostgreSQL, MySQL, DynamoDB, MongoDB, C#, HTML5/CSS</p>
            </div>
            <div className="skill-category">
              <h3>🗄️ Backend/Database</h3>
              <p>Node.js, Express, Flask, Slick, MongoDB, PostgreSQL, MySQL, DynamoDB</p>
            </div>
            <div className="skill-category">
              <h3>🌐 Web Development</h3>
              <p>React, HTML5/CSS, REST APIs, Docker</p>
            </div>
            <div className="skill-category">
              <h3>🤖 Machine Learning</h3>
              <p>PyTorch, OpenCV, Pandas, NumPy</p>
            </div>
            <div className="skill-category">
              <h3>🛠️ Developer Tools</h3>
              <p>Git, Docker, AWS, Kubernetes, Azure, Heroku, CRON, Shell, Linux, OOP</p>
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
              <p>Email: asmabegum8450@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <p>Phone: 917-460-6254</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <a href="https://www.linkedin.com/in/asma-begum-305931312/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📸</span>
              <a href="https://www.instagram.com/asmabegum8450/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <a href="https://github.com/asmabegum8450-debug" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🐦</span>
              <a href="https://x.com/asmabegum8450" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;