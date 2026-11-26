// Content is kept separate from the layout for easy updates.
export const profile = {
  name: "Mouaz Alhorani",
  role: "Full-Stack Software Developer",
  specialty: "Banking platforms & automation",
  email: "mouazalhorani@gmail.com",
  phone: "+963 992 738 933",
  whatsapp: "https://wa.me/963992738933",
  telegram: "https://t.me/Mouaz153",
  github: "https://github.com/MouazAlhorani",
  linkedin: "https://www.linkedin.com/in/mouaz-alhorani/",
  cv: `${import.meta.env.BASE_URL}Mouaz_Alhorani_CV.pdf`,
  bio: "I build software that makes complex operations simpler. From Laravel applications to the infrastructure behind them, I turn everyday business challenges into dependable, production-ready systems.",
};
export const skills = [
  {
    category: "Application development",
    icon: "code",
    description: "From business requirements to working software.",
    items: [
      "PHP",
      "Laravel",
      "REST APIs",
      "Livewire",
      "React",
      "Tailwind CSS",
      "Flutter",
      "Dart",
      "Java",
    ],
  },
  {
    category: "Data & integrations",
    icon: "database",
    description: "Connecting systems. Making data useful.",
    items: [
      "MySQL / MariaDB",
      "MongoDB",
      "SQL",
      "Redis",
      "Active Directory / LDAP",
      "Microsoft Exchange",
      "Firebase Cloud Messaging",
    ],
  },
  {
    category: "Infrastructure & security",
    icon: "shield",
    description: "Built to run reliably in the real world.",
    items: [
      "Linux",
      "Nginx",
      "VMware vCenter",
      "Role-based access control",
      "Two-factor authentication",
      "Audit logging",
      "Disaster recovery",
      "Infrastructure monitoring",
    ],
  },
];
export const projects = [
  {
    id: "shams",
    number: "01",
    category: "Enterprise platform",
    title: "SHAMS banking platform",
    description:
      "One connected workspace for banking teams. I independently designed and built the initial platform, integrated core banking systems, and took it into production.",
    outcome: "Used by 200+ staff across 19 branches and the head office.",
    tech: ["Laravel", "Livewire", "SQL", "MongoDB", "LDAP"],
    details: [
      {
        title: "The challenge",
        text: "Bring reporting, approvals, customer records, and recurring banking operations into a shared internal platform.",
      },
      {
        title: "What I built",
        text: "A multi-source reporting engine, a configurable builder used for 300+ production screens, and customer archiving within a centralized archive of 70,000+ customer and transaction documents.",
      },
      {
        title: "Controls that matter",
        text: "Granular permissions across 30+ roles, two-factor authentication for sensitive operations, maker-checker approvals for 7+ services, and audit logging for 10,000+ daily platform events.",
      },
      {
        title: "Measured impact",
        text: "33,000+ report generation requests in 14 months across six departments. A scheduler runs 20+ recurring production jobs, saving an estimated 2+ hours of manual work daily.",
      },
    ],
  },
  {
    id: "infrastructure",
    number: "02",
    category: "Infrastructure & operations",
    title: "Behind the platform",
    description:
      "Provisioned the SHAMS virtual machine environment, set up disaster recovery, and built monitoring to keep teams informed when infrastructure needs attention.",
    outcome: "Monitoring for 30+ VMs, with twice-daily health checks.",
    tech: ["Linux", "Nginx", "VMware", "Database replication"],
    details: [
      {
        title: "Production ownership",
        text: "Provisioned virtual machines and managed production deployments and incident troubleshooting for the banking platform.",
      },
      {
        title: "Recovery & visibility",
        text: "Set up disaster recovery with continuous database synchronization. Built monitoring for 30+ VMs, with twice-daily health checks and alerts for outages and high disk or memory usage.",
      },
      {
        title: "Architecture planning",
        text: "Planned separation of application and database components to support a future move toward high availability.",
      },
    ],
  },
  {
    id: "cross-platform",
    number: "03",
    category: "Mobile & desktop",
    title: "Security across devices",
    description:
      "A cross-platform application for Android and Windows, built with Flutter and Riverpod, with local encryption and biometric authentication.",
    outcome: "A shared application foundation for mobile and desktop.",
    tech: ["Flutter", "Dart", "Riverpod", "Cryptography"],
    details: [
      {
        title: "Cross-platform development",
        text: "Built an Android and Windows application using Flutter, with Riverpod for state management.",
      },
      {
        title: "Local security",
        text: "Implemented local encryption and biometric authentication to protect access to application data.",
      },
    ],
  },
];
export const experience = [
  {
    period: "2024 — Present",
    role: "Core Banking Administrator",
    company: "First MicroFinance Bank · Syria",
    description:
      "Designed, built, and deployed SHAMS. Own platform architecture, enterprise integrations, production deployments, and incident troubleshooting.",
    current: true,
  },
  {
    period: "2020 — 2024",
    role: "Systems Operations Officer",
    company: "Takamol Company",
    description:
      "Operated and monitored data center infrastructure with VMware vCenter, and built tools to automate recurring IT tasks.",
  },
  {
    period: "2019 — 2020",
    role: "Help Desk",
    company: "Takamol Company",
    description: "Supported users and day-to-day IT operations.",
  },
  {
    period: "2017 — 2021",
    role: "Technician",
    company: "Syrian Telecom",
    description: "Shift-based technical role, alongside the positions above.",
  },
];
