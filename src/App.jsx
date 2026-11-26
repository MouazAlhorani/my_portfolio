import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Download,
  Menu,
  X,
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Globe2,
  Code2,
  Database,
  ShieldCheck,
  Check,
  Copy,
  Layers3,
  Server,
  Workflow,
  ChevronDown,
} from "lucide-react";
import { profile, skills, projects, experience } from "./data/portfolioData";
import "./App.css";

function Linkedin({ size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path
        d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"
        strokeLinecap="round"
      />
    </svg>
  );
}
function Github({ size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9 19c-4 1-4-2-6-2m12 5v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.9A5.4 5.4 0 0 0 18.8 5 5 5 0 0 0 18.7 1S17.5.7 15 2.5a13.3 13.3 0 0 0-6 0C6.5.7 5.3 1 5.3 1A5 5 0 0 0 5.2 5a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.2 6.6 6.2 6.9a3.4 3.4 0 0 0-.9 2.5V22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const skillIcons = { code: Code2, database: Database, shield: ShieldCheck };
const contacts = [
  {
    name: "Email",
    detail: "Start a conversation",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    name: "LinkedIn",
    detail: "Let’s connect",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    name: "WhatsApp",
    detail: "Send me a message",
    href: profile.whatsapp,
    icon: MessageCircle,
  },
  {
    name: "Telegram",
    detail: "Reach out directly",
    href: profile.telegram,
    icon: Send,
  },
];
function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  const message = `Hi Mouaz, I'd like to discuss your ${project.title} project and a potential opportunity to work together.`;
  const discussionChannels = [
    {
      name: "WhatsApp",
      detail: "Send a message about this project",
      icon: MessageCircle,
      href: `${profile.whatsapp}?text=${encodeURIComponent(message)}`,
      className: "whatsapp",
    },
    {
      name: "Telegram",
      detail: "@Mouaz153",
      icon: Send,
      href: profile.telegram,
      className: "telegram",
    },
    {
      name: "Email",
      detail: profile.email,
      icon: Mail,
      href: `mailto:${profile.email}?subject=${encodeURIComponent(`Let's talk about ${project.title}`)}&body=${encodeURIComponent(message)}`,
      className: "email",
    },
  ];
  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement;
    element.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previous;
      if (trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-content">
        <button
          className="icon-button dialog-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={22} />
        </button>
        <span className="eyebrow">
          {project.category} / Project {project.number}
        </span>
        <h2 id="project-title">{project.title}</h2>
        <p className="dialog-intro">{project.description}</p>
        {project.details.map((detail) => (
          <div className="detail" key={detail.title}>
            <h3>{detail.title}</h3>
            <p>{detail.text}</p>
          </div>
        ))}
        <div className="tags">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <p className="privacy-note">
          Project overview. Internal systems and source code are not publicly
          accessible.
        </p>
        <details
          className="discussion-options"
          onToggle={(event) => {
            if (event.currentTarget.open) {
              event.currentTarget.scrollIntoView({ block: "nearest" });
            }
          }}
        >
          <summary className="button button-dark">
            Discuss this work <ChevronDown size={17} />
          </summary>
          <div className="discussion-panel">
            <p>
              Let’s connect<span>Choose the way that works for you.</span>
            </p>
            <div className="discussion-channels">
              {discussionChannels.map((channel) => (
                <a
                  key={channel.name}
                  className={`discussion-channel ${channel.className}`}
                  href={channel.href}
                  target={channel.name === "Email" ? undefined : "_blank"}
                  rel={
                    channel.name === "Email" ? undefined : "noopener noreferrer"
                  }
                >
                  <span className="discussion-icon">
                    <channel.icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="discussion-label">
                    <strong>{channel.name}</strong>
                    <small>{channel.detail}</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </details>
      </div>
    </dialog>
  );
}
function AmbientLights({ local = false }) {
  return (
    <div
      className={local ? "visual-particles" : "ambient-lights"}
      aria-hidden="true"
    >
      {Array.from({ length: local ? 18 : 30 }, (_, i) => (
        <i
          key={i}
          style={{
            "--x": `${(i * 37 + 7) % 97}%`,
            "--y": `${(i * 53 + 11) % 94}%`,
            "--delay": `${-(i % 7) * 1.7}s`,
            "--duration": `${7 + (i % 5) * 2}s`,
            "--size": `${i % 5 === 0 ? 3 : 2}px`,
          }}
        />
      ))}
    </div>
  );
}
function PlatformVisual({ onExplore }) {
  const surface = useRef(null);
  function moveSpotlight(event) {
    if (event.pointerType === "touch") return;
    const box = event.currentTarget.getBoundingClientRect();
    surface.current.style.setProperty(
      "--pointer-x",
      `${event.clientX - box.left}px`,
    );
    surface.current.style.setProperty(
      "--pointer-y",
      `${event.clientY - box.top}px`,
    );
  }
  const nodes = [
    {
      position: "report",
      icon: Database,
      title: "Connected data",
      detail: "SQL + MongoDB",
      project: 0,
    },
    {
      position: "secure",
      icon: ShieldCheck,
      title: "Secure by design",
      detail: "30+ access roles",
      project: 0,
    },
    {
      position: "workflow",
      icon: Workflow,
      title: "Less busywork",
      detail: "20+ automated jobs",
      project: 0,
    },
    {
      position: "infra",
      icon: Server,
      title: "Built to keep running",
      detail: "30+ monitored VMs",
      project: 1,
    },
  ];
  return (
    <div
      ref={surface}
      className="platform-visual"
      onPointerMove={moveSpotlight}
      role="group"
      aria-label="Explore the SHAMS platform: connected data, security, automation, and infrastructure"
    >
      <AmbientLights local />
      <div className="visual-spotlight" aria-hidden="true" />
      <div className="visual-topline">
        <span>
          <i /> SYSTEMS, IN SYNC
        </span>
        <span>SHAMS / 01</span>
      </div>
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <svg
        className="node-connections"
        viewBox="0 0 540 480"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M115 110 Q155 215 270 240 M440 145 Q350 155 270 240 M110 355 Q200 330 270 240 M420 365 Q350 330 270 240" />
      </svg>
      {nodes.map((node) => (
        <div
          key={node.position}
          className={`floating-node node-${node.position}`}
        >
          <button
            className="visual-label"
            onClick={() => onExplore(projects[node.project])}
            aria-label={`Explore ${node.title}: ${node.detail}`}
          >
            <span className="node-icon">
              <node.icon size={19} strokeWidth={1.5} />
            </span>
            <span>
              {node.title}
              <small>{node.detail}</small>
            </span>
            <span className="node-indicator" aria-hidden="true" />
          </button>
        </div>
      ))}
      <div className="core-position">
        <div className="core-float">
          <button
            className="platform-core"
            onClick={() => onExplore(projects[0])}
            aria-label="Explore the SHAMS enterprise banking platform"
          >
            <span className="core-symbol">
              <Layers3 size={36} strokeWidth={1.2} />
            </span>
            <strong>SHAMS</strong>
            <span>Enterprise banking platform</span>
            <div className="core-dots" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </button>
        </div>
      </div>
      <div className="visual-bottom">
        <span>
          <span className="status-dot" /> Designed. Built. Deployed.
        </span>
        <span className="visual-hint">
          EXPLORE THE NODES <ArrowUpRight size={13} />
        </span>
      </div>
    </div>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const copyTimer = useRef(null);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <>
      <AmbientLights />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Mouaz Alhorani home">
            mouaz<span className="wordmark-dot">.</span>
            <span className="wordmark-caption">DEVELOPER & BUILDER</span>
          </a>
          <div
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
            id="navigation"
          >
            {[
              ["work", "Selected work"],
              ["about", "About"],
              ["experience", "Experience"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <ArrowUpRight size={16} />
            </a>
          </div>
          <button
            className="icon-button menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> Open to remote & relocation
              opportunities
            </div>
            <p className="intro">
              Hi, I’m Mouaz Alhorani <span className="intro-line" />
            </p>
            <h1>
              Complex systems.
              <br />
              Simple experiences.
              <br />
              <span>Real impact.</span>
            </h1>
            <p className="hero-description">
              Full-stack developer turning complex banking operations into
              software that people rely on. Built from the first line of code to
              production.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a
                className="button button-outline"
                href={profile.cv}
                download="Mouaz_Alhorani_CV.pdf"
              >
                Download CV <Download size={17} />
              </a>
            </div>
            <div className="hero-footnote">
              <MapPin size={14} /> Based in Syria <span /> Building for teams
              everywhere
            </div>
          </div>
          <PlatformVisual onExplore={setActiveProject} />
          <a href="#impact" className="scroll-cue">
            <ArrowDown size={14} /> A little less talk. A little more impact.
          </a>
        </section>
        <section
          className="impact container"
          id="impact"
          aria-label="SHAMS platform impact"
        >
          <div className="impact-intro">
            <span className="eyebrow">SOFTWARE IN ACTION</span>
            <p>
              Built for people.
              <br />
              Proven in production.
            </p>
          </div>
          {[
            ["200+", "Staff using SHAMS"],
            ["19", "Bank branches connected"],
            ["33k+", "Reports generated", "Over 14 months"],
            ["2+ hrs", "Manual work saved daily", "Estimated"],
          ].map(([value, label, note]) => (
            <div className="metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
              <small>{note || "\u00a0"}</small>
            </div>
          ))}
        </section>
        <section className="work-section section-pad" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">01 / SELECTED WORK</span>
                <h2>
                  From challenge
                  <br />
                  to working system<span className="accent-dot">.</span>
                </h2>
              </div>
              <p>
                A closer look at the platforms, infrastructure,
                <br className="desktop-break" /> and applications I’ve built.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`project-card project-${project.id}`}
                >
                  <button
                    className="project-art"
                    onClick={() => setActiveProject(project)}
                    aria-label={`Explore ${project.title}`}
                  >
                    <div className="art-top">
                      <span>
                        {index === 0
                          ? "SHAMS / ENTERPRISE"
                          : index === 1
                            ? "SYSTEMS / INFRASTRUCTURE"
                            : "FLUTTER / CROSS-PLATFORM"}
                      </span>
                      <ArrowUpRight size={19} />
                    </div>
                    {index === 0 ? (
                      <div className="shams-art">
                        <div className="mini-sidebar">
                          <Layers3 size={19} />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="mini-dashboard">
                          <div className="mini-dashboard-heading">
                            A clearer view.<span>One connected platform.</span>
                          </div>
                          <div className="mini-stats">
                            <div>
                              <small>PEOPLE</small>
                              <b>200+</b>
                            </div>
                            <div>
                              <small>BRANCHES</small>
                              <b>19</b>
                            </div>
                            <div>
                              <small>ROLES</small>
                              <b>30+</b>
                            </div>
                          </div>
                          <div className="mini-chart" aria-hidden="true">
                            {[
                              32, 48, 39, 62, 50, 72, 58, 82, 68, 91, 80, 100,
                            ].map((height, i) => (
                              <i key={i} style={{ height: `${height}%` }} />
                            ))}
                          </div>
                          <span className="art-caption">
                            PLATFORM OVERVIEW · ILLUSTRATIVE VISUAL
                          </span>
                        </div>
                      </div>
                    ) : index === 1 ? (
                      <div className="server-art">
                        <div className="server-stack">
                          {[0, 1, 2].map((n) => (
                            <div key={n}>
                              <Server size={22} />
                              <span />
                              <i />
                              <i />
                            </div>
                          ))}
                        </div>
                        <div className="server-caption">
                          <span className="status-dot" /> Monitor. Recover. Keep
                          running.
                        </div>
                      </div>
                    ) : (
                      <div className="devices-art">
                        <div className="desktop-device">
                          <ShieldCheck size={34} strokeWidth={1.3} />
                          <span>Secure by design</span>
                          <div className="device-line" />
                          <div className="device-line short" />
                        </div>
                        <div className="phone-device">
                          <div className="phone-notch" />
                          <ShieldCheck size={27} strokeWidth={1.3} />
                          <span>Protected.</span>
                          <div className="phone-button" />
                        </div>
                        <span className="device-caption">
                          ANDROID + WINDOWS
                        </span>
                      </div>
                    )}
                  </button>
                  <div className="project-copy">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>/{project.number}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-outcome">
                      <span />
                      {project.outcome}
                    </div>
                    <div className="tags">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <button
                      className="text-link"
                      onClick={() => setActiveProject(project)}
                    >
                      Explore project <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note">
              <ShieldCheck size={14} /> Banking work is internal. These
              overviews share the approach and impact, without exposing private
              systems.
            </p>
          </div>
        </section>
        <section id="about" className="about-section section-pad container">
          <div className="about-intro">
            <div>
              <span className="eyebrow">02 / THE PERSON BEHIND THE CODE</span>
              <h2>
                I connect the dots.
                <br />
                Then build the system<span className="accent-dot">.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>{profile.bio}</p>
              <p>
                My background in systems operations means I think beyond
                features: how a system is deployed, how it’s monitored, and how
                it recovers when something goes wrong.
              </p>
              <div className="about-facts">
                <span>
                  <Globe2 size={16} /> Arabic · English (Good)
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} /> Find me on GitHub{" "}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((group) => {
              const Icon = skillIcons[group.icon];
              return (
                <div className="skill-group" key={group.category}>
                  <Icon size={25} strokeWidth={1.5} />
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                  <div className="tags">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section id="experience" className="experience-section section-pad">
          <div className="container experience-layout">
            <div className="experience-heading">
              <span className="eyebrow">03 / EXPERIENCE</span>
              <h2>
                A foundation
                <br />
                built in the field<span className="accent-dot">.</span>
              </h2>
              <p>
                From technical operations to building enterprise software. Every
                role adds another layer.
              </p>
              <a
                href={profile.cv}
                download="Mouaz_Alhorani_CV.pdf"
                className="text-link"
              >
                Get the full CV <Download size={17} />
              </a>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article
                  key={job.role}
                  className={`timeline-item ${job.current ? "current" : ""}`}
                >
                  <span className="timeline-dot" />
                  <div className="job-period">
                    {job.period}
                    {job.current && <span>Current</span>}
                  </div>
                  <h3>{job.role}</h3>
                  <div className="job-company">{job.company}</div>
                  <p>{job.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-top">
              <div>
                <div className="availability">
                  <span className="status-dot" /> Open to the right opportunity
                </div>
                <h2>
                  Good work starts
                  <br />
                  with a conversation<span>.</span>
                </h2>
                <p>
                  Looking for a developer who can build it, connect it,
                  <br className="desktop-break" /> and keep it running? Let’s
                  talk.
                </p>
              </div>
              <a
                className="contact-arrow"
                href={`mailto:${profile.email}`}
                aria-label="Email Mouaz"
              >
                <ArrowUpRight size={66} strokeWidth={1.2} />
              </a>
            </div>
            <div className="contact-grid">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={contact.name === "Email" ? undefined : "_blank"}
                  rel={
                    contact.name === "Email" ? undefined : "noopener noreferrer"
                  }
                >
                  <contact.icon size={22} strokeWidth={1.5} />
                  <div>
                    <strong>{contact.name}</strong>
                    <span>{contact.detail}</span>
                  </div>
                  <ArrowUpRight className="contact-link-arrow" size={19} />
                </a>
              ))}
            </div>
            <div className="email-row">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button
                className="icon-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
              </button>
              <span role="status">
                {copied
                  ? "Email copied!"
                  : copyError
                    ? "Please copy the email address above."
                    : ""}
              </span>
            </div>
            <div className="contact-availability">
              <span>
                <Globe2 size={15} /> Remote worldwide
              </span>
              <span>
                <MapPin size={15} /> Open to relocation
              </span>
              <a href={profile.cv} download="Mouaz_Alhorani_CV.pdf">
                Download CV <Download size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a className="wordmark" href="#home">
          mouaz<span className="wordmark-dot">.</span>
        </a>
        <p>© {new Date().getFullYear()} Mouaz Alhorani. Built with care.</p>
        <a href="#home">
          Back to top <ArrowRight size={15} className="back-arrow" />
        </a>
      </footer>
      {activeProject && (
        <ProjectDialog
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
