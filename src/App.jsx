import { useEffect, useState } from 'react';
import MatrixRain from './components/MatrixRain.jsx';
import Typewriter from './components/Typewriter.jsx';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiFastapi,
  SiFlask,
  SiGooglecloud,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiJenkins,
  SiGithubactions,
  SiGrafana,
  SiPrometheus,
} from 'react-icons/si';
import { FiCode, FiCloud, FiServer, FiShare2, FiChevronDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTrophy, FaBrain } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';

function App() {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const name = 'Monish';
  const role = 'Software Engineer';
  const intro =
    "I build scalable microservices and distributed systems, focusing on reliability and performance. Skilled in data structures, algorithms, and both low-level and high-level design.";

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/monish-prabhu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/monish-prabhu/' },
    { label: 'Leetcode', href: 'https://leetcode.com/u/monish123/' },
  ];

  const skills = [
    { name: 'Python', icon: SiPython },
    { name: 'C#', icon: FiCode },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: '.NET', icon: SiDotnet },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Flask', icon: SiFlask },
    { name: 'Azure', icon: FiCloud },
    { name: 'GCP', icon: SiGooglecloud },
    { name: 'REST APIs', icon: FiServer },
    { name: 'SQL', icon: TbSql },
    { name: 'Postgres', icon: SiPostgresql },
    { name: 'React', icon: SiReact },
    { name: 'Redux Toolkit', icon: SiRedux },
    { name: 'CI/CD', icon: SiJenkins },
    { name: 'Jenkins', icon: SiJenkins },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Microservices', icon: FiShare2 },
    { name: 'Generative AI', icon: FaBrain },
    { name: 'Grafana', icon: SiGrafana },
    { name: 'Prometheus', icon: SiPrometheus },
  ];

  const socialIconByLabel = {
    GitHub: FaGithub,
    LinkedIn: FaLinkedin,
    Leetcode: FaTrophy,
  };

  const socialIconColorByLabel = {
    GitHub: '#ffffff',
    LinkedIn: '#0A66C2',
    Leetcode: '#FFA116',
  };

  // Title animation removed per request; document.title remains as set in index.html

  // Show a floating down-arrow on small screens if skills are below the fold
  useEffect(() => {
    function updateVisibility() {
      const skillsEl = document.getElementById('skills');
      if (!skillsEl) return;
      const isSmallScreen = window.innerWidth <= 768;
      if (!isSmallScreen) {
        setShowScrollHint(false);
        return;
      }
      const rect = skillsEl.getBoundingClientRect();
      const shouldShow = rect.top > window.innerHeight - 80; // needs scroll to reach
      setShowScrollHint(shouldShow);
    }
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => {
      window.removeEventListener('resize', updateVisibility);
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  return (
    <main className="container">
      <MatrixRain />
      <header>
        <h1 className="headline"><span className="greeting">Hi, I'm {name}</span><span className="caret" aria-hidden="true">_</span></h1>
        <h3 className="subtitle">Software Engineer @ Maersk, Ex-Wells Fargo</h3>
      </header>

      <section aria-label="About" className="section fade-in">
        <p className="intro">
          <span className="reserve" aria-hidden="true">{intro}</span>
          <span className="typewriter-overlay">
            <Typewriter text={intro} speed={10} startDelay={80} />
          </span>
        </p>
      </section>

      <section aria-label="Social links" className="section fade-in" style={{ animationDelay: '120ms' }}>
        <ul className="links" role="list">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a className="link-button" href={link.href} target="_blank" rel="noreferrer">
                {(() => {
                  const Icon = socialIconByLabel[link.label] || FiShare2;
                  const color = socialIconColorByLabel[link.label] || 'currentColor';
                  return <Icon aria-hidden="true" style={{ marginRight: 8, color }} />;
                })()}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" aria-label="Primary skills" className="section fade-in" style={{ animationDelay: '240ms' }}>
        <h2 className="section-title">Primary skills</h2>
        <ul className="skills grid" role="list">
          {skills.map(({ name, icon: Icon }) => (
            <li key={name} className="skill-chip icon-chip">
              <Icon aria-hidden="true" style={{ color: ({
                'Python': '#3776AB',
                'C#': '#68217A',
                'JavaScript': '#F7DF1E',
                'TypeScript': '#3178C6',
                '.NET': '#512BD4',
                'FastAPI': '#009688',
                'Flask': '#ffffff',
                'Azure': '#0078D4',
                'GCP': '#4285F4',
                'REST APIs': '#9CA3AF',
                'SQL': '#2F74C0',
                'Postgres': '#4169E1',
                'React': '#61DAFB',
                'Redux Toolkit': '#764ABC',
                'CI/CD': '#D33833',
                'Jenkins': '#D33833',
                'GitHub Actions': '#2088FF',
                'Microservices': '#22C55E',
                'Generative AI': '#10A37F',
                'Grafana': '#F46800',
                'Prometheus': '#E6522C',
              })[name] || 'currentColor' }} />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {name} Prabhu. All rights reserved.</small>
      </footer>

      {showScrollHint && (
        <button
          type="button"
          className="floating-scroll"
          aria-label="Scroll to skills"
          onClick={() => {
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setShowScrollHint(false);
          }}
        >
          <FiChevronDown aria-hidden="true" />
        </button>
      )}
    </main>
  );
}

export default App;
