import engirise from "@/assets/project-engirise.jpg";
import ownprep from "@/assets/project-ownprep.jpg";
import agent from "@/assets/project-agent.jpg";
import petrolynks from "@/assets/project-petrolynks.jpg";

export const profile = {
  name: "Vikas Nagpure",
  role: "Full Stack Developer",
  tagline: "Crafting cinematic web experiences with the MERN stack & Next.js.",
  email: "vikasnagpure03@gmail.com",
  phone: "+91 7821802035",
  github: "https://github.com/CodeVikas/",
  linkedin: "https://linkedin.com/in/vikas-nagpure/",
  summary:
    "Proficient MERN stack developer with experience in building dynamic web applications, scalable REST APIs, and secure JWT authentication. Skilled in React, Next.js, Node.js, MongoDB, Express, and Redux.",
};

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Material UI", "React Query"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth"],
  },
  {
    label: "Tooling",
    items: ["Git / GitHub", "Vercel", "Netlify", "AWS", "GCP", "Postman"],
  },
  {
    label: "AI Stack",
    items: ["GitHub Copilot", "Cursor", "Claude", "ChatGPT", "Bolt"],
  },
];

export const experiences = [
  {
    company: "Dignisys Limited",
    role: "Full Stack Developer",
    period: "Nov 2025 — Present",
    location: "Navi Mumbai, MH",
    points: [
      "Built scalable Full-Stack apps using Next.js & Node.js with SSR/SSG.",
      "Developed REST APIs with JWT auth and role-based access control.",
      "Integrated SMTP and payment gateways for real business workflows.",
      "Deployed via CI/CD on Vercel, Netlify and Hostinger.",
    ],
  },
  {
    company: "Betasys AI Pvt Ltd",
    role: "MERN Stack Developer",
    period: "Oct 2024 — Nov 2025",
    location: "Nagpur, MH",
    points: [
      "Designed and deployed full-stack apps using the MERN stack.",
      "Implemented JWT auth and role-based dashboards.",
      "Built dynamic REST APIs and managed state with Redux Toolkit.",
      "Applied SEO best practices including SSR and structured data.",
    ],
  },
  {
    company: "HDSOFT Technologies",
    role: "Full Stack Developer",
    period: "Aug 2023 — Sep 2024",
    location: "Nagpur, MH",
    points: [
      "Collaborated on building features for SPA products.",
      "Developed dynamic, responsive UIs with React + Node.",
      "Optimized data flow with Redux & Context API.",
    ],
  },
];

export const projects = [
  {
    name: "Engirise",
    tag: "Industrial • Multi-region",
    image: engirise,
    description:
      "Scalable industrial product platform with dynamic listings, role-based admin panel and SEO-optimized pages.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Node", "MongoDB"],
    link: "https://engirise.in",
  },
  {
    name: "OwnPrep",
    tag: "EdTech • Multi-role",
    image: ownprep,
    description:
      "Full-stack edu platform for students, faculty, institutes & recruiters with secure OTP login and HR panel.",
    stack: ["React", "Node", "MongoDB", "MSG91"],
    link: "https://ownprep.com",
  },
  {
    name: "Agent Portal",
    tag: "File & Content Management",
    image: agent,
    description:
      "Role-based file management with vendor docs, mail module, blog & banner system with admin activity logs.",
    stack: ["React", "Tailwind", "Node", "MongoDB"],
    link: "https://portal.gcmspos.com/login/",
  },
  {
    name: "Petrolynks",
    tag: "Analytics Dashboard",
    image: petrolynks,
    description:
      "Real-time data visualization with Google Analytics powering KPI dashboards across corporation stores.",
    stack: ["React", "Redux", "Tailwind"],
    link: "https://petrolynks.com/",
  },
];
