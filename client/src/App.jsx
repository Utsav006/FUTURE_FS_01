import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import './index.css';

// Centralized Project Database
const projectsDb = {
  "crisislink": {
    title: "CRISISLINK",
    role: "Lead Developer",
    icon: "🚨",
    shortDesc: "Real-time emergency response platform utilizing Google Gemini AI to triage incidents and provide life-saving protocols.",
    longDesc: "Architected a real-time emergency response platform for the Solution Challenge 2026. Integrated Google Gemini AI to instantly triage incidents and provide context-aware, life-saving protocols to civilian reporters. Developed a full-lifecycle system including a centralized admin dispatch dashboard and a dedicated responder terminal for field agents to upload resolution evidence.",
    tech: ["JavaScript", "Tailwind CSS", "Firebase", "Gemini API"],
    github: "https://github.com/Utsav006/R_Responce.git",
    demo: "https://ais-pre-cn5s3lpftdxbkmdeozig5j-859013543681.asia-southeast1.run.app/" 
  },
  "civicsync": {
    title: "CivicSync",
    role: "Lead Developer",
    icon: "🗳️",
    shortDesc: "AI-powered election assistant tailored for Indian voters, designed to streamline civic engagement.",
    longDesc: "Architected and deployed an AI-powered election assistant tailored for Indian voters. Engineered the frontend architecture to seamlessly integrate and render AI-driven data. Hosted the live application on Vercel, ensuring high availability and fast client-side load times.",
    tech: ["React.js", "Vercel", "AI Integration", "JavaScript"],
    github: "https://github.com/Utsav006/civicsync.git",
    demo: "https://github.com/Utsav006/civicsync.git" 
  },
  "healthbuddy": {
    title: "Health Buddy AI",
    role: "Backend & AI Integrator",
    icon: "🤖",
    shortDesc: "Healthcare chatbot utilizing the Gemini API to provide accurate medical inquiries, securing top ratings at Newbies Hackathon.",
    longDesc: "Architected a healthcare chatbot utilizing the Gemini API to provide accurate, natural language responses to medical inquiries. Collaborated with a team of four to integrate modular backend logic with an intuitive user interface. Secured top project ratings at the Newbies Hackathon at UCER for the innovative application of LLMs in the public health domain.",
    tech: ["Python", "Gemini API", "Backend Logic"],
    github: "https://github.com/Utsav006/HealthBuddy.git",
    demo: null
  },
  "snapshop": {
    title: "SnapShop",
    role: "Full Stack Developer",
    icon: "🛒",
    shortDesc: "High-performance e-commerce MVP handling dynamic product catalogs and real-time state management.",
    longDesc: "Developed a high-performance e-commerce MVP using React and Node.js to handle dynamic product catalogs and user sessions. Optimized frontend state management to facilitate real-time cart updates and complex product filtering. Engineered a robust CRUD architecture to manage product inventory effectively.",
    tech: ["React.js", "Node.js", "CRUD", "State Management"],
    github: "https://github.com/Utsav006/SnapShop.git",
    demo: null
  }
};

// Scroll to top helper for router
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- HOME COMPONENT ---
const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('An error occurred. Is the server running?');
    }
  };

  return (
    <>
      <main>
        {/* Modern Split Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <p className="greeting">Hello, I'm</p>
            <h1>Utsav Singh</h1>
            <h2 className="role">Full-Stack Developer & AI Enthusiast</h2>
            <p className="hero-desc">
              Driven builder architecting scalable, user-centric web applications and integrating advanced LLMs. Concurrently pursuing a B.Tech in CSE at UCER and a BS in Data Science at IIT Madras.
            </p>
            <div className="hero-actions">
              <a href="#portfolio" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
            {/* Social Links */}
            <div style={{ marginTop: '25px', display: 'flex', gap: '20px', fontSize: '0.95rem' }}>
              <a href="https://linkedin.com/in/utsav-singh-2a8701389" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                LinkedIn <span style={{fontSize: '1.2rem'}}>&#8599;</span>
              </a>
              <a href="https://github.com/Utsav006" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                GitHub <span style={{fontSize: '1.2rem'}}>&#8599;</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-backdrop"></div>
            <img src="/profile.png" alt="Utsav Singh" className="profile-img" onError={(e) => {e.target.style.display='none'}} />
            <div className="floating-badge badge-1">React & Node.js</div>
            <div className="floating-badge badge-2">Gemini API & YOLOv8</div>
          </div>
        </section>

        {/* Floating Tech Strip */}
        <div className="tech-strip">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Python & Java</span>
          <span>Gemini API</span>
          <span>YOLOv8</span>
          <span>Firebase</span>
        </div>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio-section">
          <div className="section-header">
            <h2>Technical Deployments</h2>
            <p>Architected Solutions & Open Source Contributions.</p>
          </div>
          <div className="project-grid">
            {Object.entries(projectsDb).map(([id, project]) => (
              <div className="project-card" key={id}>
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p>{project.shortDesc}</p>
                <Link to={`/project/${id}`} className="project-link">View Details &rarr;</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Open Source Section */}
        <section id="resume" className="resume-section">
          <div className="section-header">
            <h2>Experience & Impact</h2>
          </div>
          <div className="resume-grid">
            <div className="resume-card timeline-card">
              <h3>Academic Background</h3>
              <div className="resume-item">
                <span className="year">2023 - Present</span>
                <h4>B.S. in Data Science & Applications</h4>
                <p>Indian Institute of Technology (IIT) Madras</p>
              </div>
              <div className="resume-item">
                <span className="year">2024 - Present</span>
                <h4>B.Tech in Computer Science & Engineering</h4>
                <p>United College of Engineering and Research (UCER)</p>
              </div>
            </div>

            <div className="resume-card skills-card">
              <h3>Open Source & Achievements</h3>
              <div className="resume-item">
                <h4>Competitive Programming</h4>
                <p>Achieved Rank 1866 in TCS CodeVita Season 13, qualifying for subsequent technical rounds.</p>
              </div>
              <div className="resume-item">
                <h4>Open Source & Hackathons</h4>
                <p>Maintained public GitHub repositories for scalable architectures. Secured top ratings at the Newbies Hackathon (Health Buddy) and competed in the Solution Challenge 2026.</p>
              </div>
              <div className="resume-item">
                <h4>Community Engagement</h4>
                <p>Active participant at DevFest Prayagraj 2025 and AWS Student Community Day. Volunteer Lead for "Go Green" campaigns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="contact-section">
           <div className="section-header">
            <h2>Let's Work Together</h2>
            <p>Ready to build quality products.</p>
          </div>
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <textarea name="message" placeholder="Technical Inquiries or Opportunities" rows="5" value={formData.message} onChange={handleInputChange} required />
              <button type="submit" className="btn-primary">Transmit Message</button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </section>
      </main>
    </>
  );
};

// --- PROJECT DETAILS COMPONENT ---
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsDb[id];

  if (!project) {
    return <div className="app-container" style={{paddingTop: '100px', textAlign: 'center'}}><h2>Project Not Found</h2><Link to="/" className="btn-primary">Return Home</Link></div>;
  }

  return (
    <main className="project-detail-main">
      <section className="project-detail-hero">
        <Link to="/" className="back-link">&larr; Back to Portfolio</Link>
        <div className="detail-header">
          <div className="detail-icon">{project.icon}</div>
          <h1>{project.title}</h1>
          <h3 className="detail-role">{project.role}</h3>
        </div>
        
        <div className="detail-content">
          <div className="detail-description">
            <h3>Overview</h3>
            <p>{project.longDesc}</p>
          </div>
          
          <div className="detail-sidebar">
            <div className="tech-stack-box">
              <h3>Technology Stack</h3>
              <div className="skills-container" style={{justifyContent: 'flex-start'}}>
                {project.tech.map(t => <span key={t} className="skill-badge">{t}</span>)}
              </div>
            </div>
            
            <div className="action-links">
              {/* Conditional Rendering: Only display if demo URL exists */}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary block-btn">Live Prototype</a>
              )}
              
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary block-btn">View Source Code</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// --- MAIN APP ROUTER ---
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <header className="navbar">
          <Link to="/" className="logo">
            <span className="accent-dot"></span> Utsav.
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <a href="/#portfolio">Works</a>
            <a href="/#resume">Experience</a>
            <a href="/#contact" className="nav-btn">Hire Me</a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

        <footer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
            <a href="https://linkedin.com/in/utsav-singh-2a8701389" target="_blank" rel="noreferrer" style={{ fontWeight: '600', transition: 'color 0.2s' }}>LinkedIn</a>
            <a href="https://github.com/Utsav006" target="_blank" rel="noreferrer" style={{ fontWeight: '600', transition: 'color 0.2s' }}>GitHub</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Utsav Singh. Engineered for Future Interns.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;