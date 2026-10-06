import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Palette,
  Smartphone,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    items: ['Dart', 'JavaScript', 'TypeScript', 'Python', 'Java', 'PHP'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['Flutter', 'React Native'],
  },
  {
    title: 'Frontend',
    icon: Sparkles,
    items: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Database,
    items: ['FastAPI', 'Node.js', 'REST APIs', 'Firebase'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'Firestore', 'SQL'],
  },
  {
    title: 'Design',
    icon: Palette,
    items: ['Figma', 'Photoshop', 'UI/UX'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    items: ['AWS S3', 'Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch', 'CloudFormation', 'CDK'],
  },
  {
    title: 'Other',
    icon: BriefcaseBusiness,
    items: ['Git/GitHub', 'UML', 'System Design', 'OCR', 'OpenCV', 'Agile'],
  },
];

const experiences = [
  {
    company: 'New Generation Technology (NGT), Buea',
    role: 'Software Developer / Developer Intern',
    duration: 'Approx. 8 months',
    description:
      'Worked on software development, application design, and development using Flutter, Dart, Firebase, Figma, APIs, Git/GitHub, VS Code and Android Studio.',
  },
];

const featuredProjects = [
  {
    name: 'CamDrive',
    type: 'Mobile application • product concept',
    summary:
      'A driver-focused mobile application for road safety, emergency support, maintenance tracking, community features, inspection information, and speed monitoring in Cameroon.',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Geolocator', 'Google Maps', 'just_audio', 'mailer'],
    emphasis: 'Primary case study',
    href: '#camdrive-case-study',
  },
  {
    name: 'Automatic Translation System',
    type: 'Academic final-year project',
    summary:
      'A translation system for Cameroonian local languages to English, focused on text and image-based translation with OCR and language management workflows.',
    tech: ['Flutter', 'FastAPI', 'Python', 'MarianMT', 'PostgreSQL', 'OCR'],
    emphasis: 'Academic project',
    href: '#translation-system',
  },
  {
    name: 'Family Tree Application',
    type: 'React + TypeScript + Tailwind',
    summary:
      'CRUD-based family tree interface with search, sorting, priority management, dashboard elements, and local storage.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Local Storage'],
    emphasis: 'Repository project',
    href: 'https://github.com/Willylinwe/Family-tree.git',
  },
  {
    name: 'Weather Dashboard',
    type: 'HTML, CSS, JavaScript',
    summary:
      'A weather dashboard built with a public weather API for current conditions and basic forecasting views.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    emphasis: 'Learning project',
    href: '#contact',
  },
];

const cloudProjects = [
  'S3 static website',
  'REST CRUD API using API Gateway + Lambda + DynamoDB',
  'AWS AppSync CRUD API',
];

const uiUxWork = [
  {
    title: 'Mobile-first product flows',
    text: 'Designed user flows and interface concepts for drivers, emergency support, and inspection workflows with clarity and accessibility in mind.',
  },
  {
    title: 'Research-informed design',
    text: 'Used Google Forms responses and interviews to shape features, prioritize content, and reduce friction in the app experience.',
  },
  {
    title: 'Design thinking in practice',
    text: 'Focused on stakeholder needs, visual hierarchy, and practical interaction choices that support both usability and product realism.',
  },
];

const additionalProjects = [
  { name: 'Python OCR application', tech: ['OpenCV', 'pytesseract', 'pdf2image', 'PySimpleGUI'] },
  { name: 'Todo application', tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'] },
  { name: 'Arduino racing game', tech: ['Arduino', 'Embedded systems'] },
  { name: 'Arduino feeding-bird game', tech: ['Arduino', 'Embedded systems'] },
];

const caseStudyStructure = [
  'Problem',
  'Goal',
  'Research',
  'UX/Design',
  'Architecture',
  'Development',
  'Challenges',
  'Solution',
  'Lessons Learned',
  'Future Improvements',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'theme-dark' : 'theme-light'}>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="#top" className="flex items-center gap-3" aria-label="Home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-slate-950">
                NW
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Nfor Willy
              </span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                aria-label="Toggle color theme"
                onClick={() => setDarkMode((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] transition hover:border-[var(--accent)]"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="mailto:nforwillylh@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-slate-950 transition hover:opacity-90"
              >
                Contact me
                <ArrowRight size={16} />
              </a>
            </div>

            <button
              type="button"
              aria-label="Open navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:bg-[var(--panel)] hover:text-[var(--text)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => setDarkMode((value) => !value)}
                  className="mt-2 flex w-full items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-left text-sm text-[var(--text)]"
                >
                  <span>Theme</span>
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </div>
          )}
        </header>

        <main id="top" className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <section className="grid items-center gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                <Sparkles size={14} />
                Available for opportunities
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                Software Engineer | Mobile & Web Developer
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                I am Nfor Willy Linwe, a software engineer based in Cameroon, with a strong focus on mobile development and a growing interest in product thinking, UI/UX, system design, and cloud technologies.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  View projects
                  <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:nforwillylh@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]"
                >
                  <Mail size={16} />
                  Email me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  Cameroon
                </span>
                <a href="https://github.com/Willylinwe" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--text)]">
                  <Code2 size={16} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/nfor-willy-linwe/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--text)]">
                  <Globe size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)]">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Profile</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                  Open to work
                </span>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Strongest area</p>
                  <p className="mt-2 text-lg font-medium text-[var(--text)]">Mobile development with Flutter</p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Also working with</p>
                  <p className="mt-2 text-lg font-medium text-[var(--text)]">Web development, product, UI/UX, and system design</p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Education</p>
                  <p className="mt-2 text-lg font-medium text-[var(--text)]">B.Eng Computer Engineering, University of Buea</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">Final-year project defended, awaiting graduation</p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-12">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">About</p>
                <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Building thoughtful digital experiences</h2>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-6">
                <p className="text-base leading-8 text-[var(--muted)]">
                  I am an early-career software engineer with a practical focus on mobile and web development. My work combines product thinking, clean interfaces, and implementation discipline, with a strong interest in UI/UX and system design.
                </p>
                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                  I have worked on real development tasks in mobile application design and implementation, and I continue to build projects that reflect product problem-solving, user needs, and engineering fundamentals.
                </p>
              </div>

              <div className="rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Focus</p>
                    <p className="mt-2 text-lg font-medium text-[var(--text)]">Flutter & mobile products</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Interest</p>
                    <p className="mt-2 text-lg font-medium text-[var(--text)]">UI/UX & product development</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Learning</p>
                    <p className="mt-2 text-lg font-medium text-[var(--text)]">Cloud & system design</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Goal</p>
                    <p className="mt-2 text-lg font-medium text-[var(--text)]">Build meaningful software</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="py-12">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Experience</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Professional experience</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((item) => (
                <div key={item.company} className="rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xl font-semibold text-[var(--text)]">{item.company}</p>
                      <p className="mt-2 text-base text-[var(--muted)]">{item.role}</p>
                    </div>
                    <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="py-12">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Featured projects</p>
                <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Evidence of work and learning</h2>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {featuredProjects.map((project) => (
                <article key={project.name} className="flex h-full flex-col rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                      {project.emphasis}
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{project.type}</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-[var(--text)]">{project.name}</h3>
                    <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] transition hover:border-white hover:bg-white hover:text-black">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <p className="mt-4 flex-1 text-base leading-7 text-[var(--muted)]">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-xs text-[var(--muted)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="camdrive-case-study" className="py-12">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Detailed case study</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">CamDrive</h2>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8">
              <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
                CamDrive is a driver-focused mobile application designed to improve road safety and support drivers in Cameroon with essential guidance, emergency assistance, maintenance information, maps, and inspection-related knowledge.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {caseStudyStructure.map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{item}</p>
                    <p className="mt-3 text-base font-medium text-[var(--text)]">
                      {item === 'Problem' && 'Drivers needed safer, clearer access to road guidance and emergency support.'}
                      {item === 'Goal' && 'Design a usable mobile product that supports safer driving decisions in everyday scenarios.'}
                      {item === 'Research' && '30 Google Forms responses and 5 interviews informed the product direction.'}
                      {item === 'UX/Design' && 'User flows and interface concepts designed in Figma for drivers, police, emergency and inspection stakeholders.'}
                      {item === 'Architecture' && 'Mobile app structure aligned with user roles, map access, maintenance records and emergency communication.'}
                      {item === 'Development' && 'Flutter and Dart were used to build the product experience and data-driven flows.'}
                      {item === 'Challenges' && 'Balancing real-world road safety needs with simplicity, trust and usability.'}
                      {item === 'Solution' && 'A clear, driver-centric experience with safety, maintenance and emergency support features.'}
                      {item === 'Lessons Learned' && 'Research quality and stakeholder context strongly influence product decisions.'}
                      {item === 'Future Improvements' && 'Expanded feature validation, production-ready backend integration, and stronger analytics.'}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">Stakeholders</h3>
                  <ul className="mt-4 space-y-2 text-[var(--muted)]">
                    <li>• Drivers</li>
                    <li>• Police</li>
                    <li>• Admin</li>
                    <li>• Inspection Center</li>
                    <li>• Emergency Center</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">Core technologies</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {['Flutter', 'Dart', 'Firebase Authentication', 'Firestore', 'Geolocator', 'Google Maps', 'just_audio', 'mailer', 'Figma'].map((item) => (
                      <li key={item} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--muted)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="translation-system" className="py-12">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Academic final-year project</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Automatic Translation System</h2>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8">
              <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
                This project focused on translation from Cameroonian local languages into English and explored how machine translation, OCR, and language management features could be combined in a practical workflow for users and administrators.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
                  <h3 className="text-xl font-semibold text-[var(--text)]">Features</h3>
                  <ul className="mt-4 space-y-2 text-[var(--muted)]">
                    <li>• Text translation</li>
                    <li>• Image and file upload</li>
                    <li>• OCR extraction</li>
                    <li>• Translation processing</li>
                    <li>• Custom keyboard for special characters</li>
                    <li>• Language management</li>
                    <li>• Translation requests</li>
                    <li>• Glossary management</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
                  <h3 className="text-xl font-semibold text-[var(--text)]">Actors and stack</h3>
                  <ul className="mt-4 space-y-2 text-[var(--muted)]">
                    <li>• Actors: User and Administrator</li>
                    <li>• Flutter</li>
                    <li>• FastAPI</li>
                    <li>• Python</li>
                    <li>• MarianMT / NMT</li>
                    <li>• PostgreSQL</li>
                    <li>• OCR</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">UI/UX work</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Product thinking and interface design</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {uiUxWork.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-6">
                  <p className="text-lg font-semibold text-[var(--text)]">{item.title}</p>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-12">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Other projects</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Additional learning and technical experiments</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {additionalProjects.map((item) => (
                <div key={item.name} className="rounded-[22px] border border-[var(--border)] bg-[var(--panel)] p-5">
                  <p className="text-lg font-semibold text-[var(--text)]">{item.name}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="py-12">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Skills</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">A realistic toolkit</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.title} className="rounded-[22px] border border-[var(--border)] bg-[var(--panel)] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--text)]">
                        <Icon size={18} />
                      </span>
                      <h3 className="text-lg font-semibold text-[var(--text)]">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--muted)]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="py-12">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">AWS / Cloud learning</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Hands-on learning and practice</h2>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8">
              <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
                I am learning AWS and working toward a Solutions Architect path. My work is currently focused on practical, hands-on project experience rather than professional architecture delivery.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['S3', 'Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch', 'CloudFormation', 'CDK', 'Node.js', 'Python'].map((item) => (
                  <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {cloudProjects.map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm text-[var(--muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="education" className="py-12">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Education</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Academic foundation</h2>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xl font-semibold text-[var(--text)]">B.Eng Computer Engineering</p>
                  <p className="mt-2 text-[var(--muted)]">University of Buea, Faculty of Engineering and Technology</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  <GraduationCap size={14} />
                  2021 – ongoing
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
                I started my degree in 2021, defended my final-year project, and am currently awaiting graduation. This academic journey strengthened my foundation in engineering, system thinking, and practical software design.
              </p>
            </div>
          </section>

          <section id="contact" className="py-12">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Contact</p>
                  <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Let’s build something useful</h2>
                </div>
                <a href="mailto:nforwillylh@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90">
                  <Mail size={16} />
                  nforwillylh@gmail.com
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <a href="mailto:nforwillylh@gmail.com" className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm text-[var(--muted)] transition hover:border-[var(--accent)]">
                  Email
                </a>
                <a href="https://github.com/Willylinwe" target="_blank" rel="noreferrer" className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm text-[var(--muted)] transition hover:border-[var(--accent)]">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/nfor-willy-linwe/" target="_blank" rel="noreferrer" className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm text-[var(--muted)] transition hover:border-[var(--accent)]">
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>© 2026 Nfor Willy Linwe</p>
            <p>Software Engineer | Mobile & Web Developer</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;