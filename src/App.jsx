import { useEffect } from 'react';
import MatrixRain from './components/MatrixRain.jsx';
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
import { FiCode, FiCloud, FiServer, FiShare2 } from 'react-icons/fi';
import { TbSql } from 'react-icons/tb';

function App() {
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
    { name: 'Grafana', icon: SiGrafana },
    { name: 'Prometheus', icon: SiPrometheus },
  ];

  // Title animation removed per request; document.title remains as set in index.html

  return (
    <main className="container">
      <MatrixRain />
      <header>
        <h1 className="headline"><span className="greeting">Hi, I'm {name}</span><span className="caret" aria-hidden="true">_</span></h1>
        <h4 className="subtitle">I'm a {role}.</h4>
      </header>

      <section aria-label="About" className="section fade-in">
        <p className="intro">{intro}</p>
      </section>

      <section aria-label="Social links" className="section fade-in" style={{ animationDelay: '120ms' }}>
        <ul className="links" role="list">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a className="link-button" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Primary skills" className="section fade-in" style={{ animationDelay: '240ms' }}>
        <h2 className="section-title">Primary skills</h2>
        <ul className="skills grid" role="list">
          {skills.map(({ name, icon: Icon }) => (
            <li key={name} className="skill-chip icon-chip">
              <Icon aria-hidden="true" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {name}. All rights reserved.</small>
      </footer>
    </main>
  );
}

export default App;
