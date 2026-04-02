export type Project = {
  title: string;
  description: string;
  stack: string[];
};

export type Education = {
  institution: string;
  qualification: string;
  score: string;
  year: string;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  summary: string;
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Enterprise Role-Based Platform",
    description:
      "Built a multi-role React platform with admin user and role controls, owner-facing page/navigation configuration, and a customer experience generated dynamically from cloud API configurations.",
    stack: ["React", "TypeScript", "REST APIs", "Role-based Access"],
  },
  {
    title: "Data Entry Workflow System",
    description:
      "Developed a high-reliability data entry workflow with strong validations and optimized operator efficiency.",
    stack: ["React", "TypeScript", "Form Validation", "APIs"],
  },
  {
    title: "CRM and ERP Modules",
    description:
      "Contributed to CRM/ERP modules using reusable component architecture and enterprise workflow-focused interfaces.",
    stack: ["React", "TypeScript", "Node.js", "Dashboard UI"],
  },
];

export const professionalSummary =
  "Frontend developer with strong React.js experience in building role-based platforms, configurable dashboards, and cloud API-driven applications. Focused on scalable UI architecture, performance, and practical business workflows.";

export const education: Education[] = [
  {
    institution: "Narayana",
    qualification: "Schooling (MPC)",
    score: "9.8 / 10",
    year: "2017",
  },
  {
    institution: "Narayana Junior College, Nellore",
    qualification: "Intermediate",
    score: "9.88 / 10",
    year: "2019",
  },
  {
    institution: "Nalla Malla Reddy Engineering College (JNTUH Affiliated)",
    qualification: "B.Tech",
    score: "7.4 / 10",
    year: "2023",
  },
];

export const experience: Experience[] = [
  {
    company: "PacketPath",
    role: "Python Intern",
    duration: "6 Months",
    summary: "Worked on Python-based development tasks and gained practical software engineering exposure.",
  },
  {
    company: "The Mechotech LLP",
    role: "React Developer",
    duration: "1 Year",
    summary: "Developed React-based modules with reusable components and API-integrated features.",
  },
  {
    company: "Siyaton Global",
    role: "Front End Developer",
    duration: "Present",
    summary: "Building modern frontend applications with a focus on responsive UI, maintainability, and product delivery.",
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "VS Code",
  "Git",
  "GitHub",
  "Jira",
  "Agile Methodologies",
  "Sprint Planning",
  "Ticket Management",
  "Deadline Management",
  "Node.js",
  "Python",
  "Express",
  "React Native",
  "Tailwind CSS",
  "Cloud APIs",
  "Role-based Access",
  "REST APIs",
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Dhanushsingamala" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhanushsingamala/" },
  { label: "Email", href: "mailto:dhanushsingamala@gmail.com" },
];
