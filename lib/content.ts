/* ──────────────────────────────────────────────────────────────────────
   Single source of truth: content from Syed Saadat Ahmad's résumé.
   ────────────────────────────────────────────────────────────────────── */

export const profile = {
  name: "Syed Saadat Ahmad",
  shortName: "Saadat Ahmad",
  role: "Full-Stack Engineer",
  location: "New Delhi, India",
  email: "s.saadat.ahmad@gmail.com",
  phone: "+91 74510 77808",
  resume: "/SyedSaadatAhmad-Resume.pdf",
  current: { label: "Recklabs", href: "https://recklabs.com" },
  intro:
    "I am a full-stack engineer that builds software products and the infrastructure beneath them.",
  about: [
    "Computer Engineering undergrad at Aligarh Muslim University (B.Tech, '27). I never learned to pick a side of the stack, which is how I end up writing the interface, the API, and the deploy script for the same feature.",
    "Lately that's meant owning the web and distribution layer for a privacy-first desktop AI product at Recklabs, hardening E2E test pipelines at Telecrm, and (for something different) flying an imaging payload on a university nanosatellite.",
  ],
} as const;

export const nav = [
  { label: "Home", href: "#top", id: "top" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const socials = [
  { label: "GitHub", short: "GH", href: "https://github.com/Saadat-Ahmad" },
  { label: "LinkedIn", short: "IN", href: "https://www.linkedin.com/in/syedsaadatahmad/" },
  { label: "Twitter / X", short: "X", href: "https://twitter.com/saadatahmad_" },
  { label: "Instagram", short: "IG", href: "https://instagram.com/saadatahmad_" },
] as const;

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Recklabs",
    location: "Remote • Noida, India",
    period: "Jun 2026 - Present",
    current: true,
    summary:
      "Owning the full-stack web, licensing, and distribution layers for an MVP-stage, privacy-first desktop AI product — an MCP platform that wires custom connectors into Claude Desktop.",
    bullets: [
      "Built the marketing site and product portal as a server-rendered FastAPI + Jinja2 app on PostgreSQL, with SQLAlchemy models, Alembic migrations, and JWT + bcrypt auth.",
      "Built a tamper-proof, compiled licensing/entitlement layer for software licensing.",
      "Engineered on-demand installer builds: user selections at login compile per user into a custom Windows .exe via GitHub Actions (Inno Setup), with auth-gated delivery.",
      "Hardened distribution by compiling Python to native binaries (.pyd/.exe) with Nuitka for tamper resistance; containerised with Docker Compose and deployed to a VPS behind Nginx.",
    ],
    stack: ["FastAPI", "Jinja2", "PostgreSQL", "MCP", "Nuitka", "Docker", "Nginx"],
  },
  {
    role: "Software Developer",
    company: "Telecrm",
    location: "Aligarh, India",
    period: "Aug 2025 - Jun 2026",
    summary:
      "Hardened E2E test automation and CI/CD across every release in an Agile team on 14-day sprints.",
    bullets: [
      "Expanded automated E2E regression suites (Puppeteer, Jasmine, FFmpeg, Allure, AWS S3) and wired them into the CI/CD pipeline.",
      "Ran the test pipelines end-to-end: triaged failures, chased down flaky tests, and kept every release cycle green.",
      "Wired test-case history into Allure Reports so the team could read release trends and catch failures at a glance.",
    ],
    stack: ["Puppeteer", "Jasmine", "Allure", "FFmpeg", "AWS S3", "CI/CD"],
  },
  {
    role: "Satellite Payload Designer",
    company: "SS AMU SAT",
    location: "Aligarh, India",
    period: "Jul 2024 - Jan 2026",
    summary:
      "Implemented the imaging payload for a university nanosatellite, alongside faculty, industry engineers and ISRO scientists.",
    bullets: [
      "Worked in a 30+ member interdisciplinary team to develop the nanosatellite.",
      "Implemented and tested the imaging payload on a Raspberry Pi Compute Module 4: driver integration, capture pipeline, on-board storage.",
      "Configured CAN-bus communication between the payload and multiple satellite subsystems and sensors.",
      "Designed geolocation-driven automation to trigger image acquisition based on orbital position.",
    ],
    stack: ["Raspberry Pi CM4", "CAN bus", "Python", "Embedded"],
  },
  {
    role: "Backend Web Developer",
    company: "Orbitalink Pvt. Ltd.",
    location: "Aligarh, India",
    period: "May 2025 - Jul 2025",
    summary:
      "Built backend APIs and CI/CD, and led a migration off Flask + SQLite onto Next.js + PostgreSQL.",
    bullets: [
      "Designed and deployed a CI/CD pipeline with GitHub Actions: separate production and development workflows.",
      "Built internal REST APIs for authentication, session management, role-based admin privileges, and third-party integrations.",
      "Moved the data layer onto PostgreSQL, clearing SQLite's single-writer bottleneck so the app could take real concurrent load.",
    ],
    stack: ["GitHub Actions", "REST APIs", "Next.js", "PostgreSQL", "Flask"],
  },
];

export type Project = {
  slug: string;
  title: string;
  window: string;
  tagline: string;
  image: string;
  year: string;
  tags: string[];
  links: { label: string; href: string }[];
  overview: string;
  highlights: { n: string; title: string; body: string }[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "ncrypt",
    title: "nCrypt",
    window: "~/ncrypt/ciphers",
    tagline: "Create, share and apply your own custom encryption schemes.",
    image: "/ncrypt.jpg",
    year: "2024",
    tags: ["Flask", "SQLite", "Python", "Security"],
    links: [
      { label: "Live", href: "https://saadatahmad.pythonanywhere.com" },
      { label: "About", href: "/work/ncrypt" },
    ],
    overview:
      "nCrypt is a Flask web platform for designing your own encryption schemes and trading them with friends, until a few people share a private language no one else can read. Stack classic ciphers and encodings like Caesar and Base64, or roll your own.",
    highlights: [
      { n: "01", title: "RESTful core", body: "Clean REST APIs over SQLite data models for users and schemes." },
      { n: "02", title: "Secure by default", body: "Werkzeug-powered password hashing and end-to-end HTTPS." },
      { n: "03", title: "Shipped", body: "Deployed on PythonAnywhere with HTTPS termination." },
    ],
    features: [
      "Compose schemes from classic and custom cipher primitives",
      "Share codes privately with chosen recipients",
      "Account system with hashed credentials",
    ],
  },
  {
    slug: "jannseva",
    title: "JannSeva",
    window: "~/jannseva/health",
    tagline: "AI healthcare for rural India, in 120+ regional dialects.",
    image: "/jannseva.png",
    year: "2024",
    tags: ["AI / NLP", "Twilio", "Weather APIs", "OTP"],
    links: [
      { label: "GitHub", href: "https://github.com/Saadat-Ahmad/JannSeva" },
      { label: "About", href: "/work/jannseva" },
    ],
    overview:
      "JannSeva is a health-support platform built for rural India. It answers questions in the user's own dialect, keeps track of their medical history, and pulls in hyper-local weather and air-quality data so the advice actually fits where they live.",
    highlights: [
      { n: "01", title: "120+ dialects", body: "Integrated NLP responds in the user's regional language." },
      { n: "02", title: "Hyper-local", body: "Weather and air-quality APIs generate location-specific health insight." },
      { n: "03", title: "Accessible auth", body: "OTP login via Twilio for low-tech, first-time smartphone users." },
    ],
    features: [
      "Conversational health guidance in native dialects",
      "Personal medical-history record",
      "Region-aware insights from environmental data",
    ],
  },
  {
    slug: "envision",
    title: "EnVision",
    window: "~/envision/a11y",
    tagline: "A browser extension that re-tunes the web for colour-blind users.",
    image: "/envision.png",
    year: "2023",
    tags: ["Chrome Extension", "Accessibility", "JavaScript"],
    links: [
      { label: "GitHub", href: "https://github.com/Saadat-Ahmad/envision-chrome-extension" },
      { label: "About", href: "/work/envision" },
    ],
    overview:
      "EnVision re-tunes the colours on any webpage so colour-blind users can actually tell them apart, nudging hue and contrast (daltonisation) without touching the design the site intended.",
    highlights: [
      { n: "01", title: "Daltonisation", body: "Analyses page colours and remaps them for colour-vision deficiencies." },
      { n: "02", title: "Non-destructive", body: "Adjusts clarity while preserving each site's intended look." },
      { n: "03", title: "Any page", body: "Works across the open web as a lightweight browser extension." },
    ],
    features: [
      "Per-page hue and contrast adjustment",
      "Targeted at common colour-vision deficiencies",
      "Subtle, design-preserving corrections",
    ],
  },
];

export type SkillGroup = { label: string; items: { name: string; logo: string | null }[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", logo: "python" },
      { name: "C", logo: "c" },
      { name: "C++", logo: "cplusplus" },
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: "react" },
      { name: "React Native", logo: "react" },
      { name: "Next.js", logo: "nextdotjs" },
      { name: "Angular", logo: "angular" },
      { name: "HTML / CSS", logo: "html5" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI", logo: "fastapi" },
      { name: "Flask", logo: "flask" },
      { name: "Django", logo: "django" },
      { name: "Node.js", logo: "nodedotjs" },
      { name: "REST APIs", logo: null },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "SQLite", logo: "sqlite" },
      { name: "MySQL", logo: "mysql" },
      { name: "MongoDB", logo: "mongodb" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", logo: "docker" },
      { name: "Docker Compose", logo: "docker" },
      { name: "GitHub Actions", logo: "githubactions" },
      { name: "Bitbucket", logo: "bitbucket" },
      { name: "Nginx", logo: "nginx" },
      { name: "CI / CD", logo: null },
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Engineering",
  school: "Z.H. College of Engineering & Technology",
  university: "Aligarh Muslim University",
  period: "Expected 2027",
} as const;

/* Hero stats ledger. Counts derive from the arrays above so they never drift. */
export const stats = [
  { value: String(experiences.length).padStart(2, "0"), label: "Roles" },
  { value: String(projects.length).padStart(2, "0"), label: "Projects" },
  { value: "2027", label: "Grad. year" },
] as const;
