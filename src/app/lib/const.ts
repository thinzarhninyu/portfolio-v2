import { Laptop, Book, Pencil, Search } from "lucide-react";
import { LanguageCode, WorkExp } from "./types";

export const name = "Thinzar Hnin Yu";

export const navigation = [
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Experience",
        href: "#work",
    },
];

export const languages: {
    code: LanguageCode;
    label: string;
    countryCode: string;
}[] = [
        { code: "en", label: "English", countryCode: "gb" },
        { code: "es", label: "Español", countryCode: "es" },
        { code: "de", label: "Deutsch", countryCode: "de" },
        { code: "fr", label: "Français", countryCode: "fr" },
    ];

export const intro: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
}[] = [
        {
            icon: Laptop,
            title: "Developer",
            description: "Building user-friendly, modern web experiences.",
        },
        {
            icon: Book,
            title: "Educator",
            description: "Helping learners master complex technical ideas.",
        },
        {
            icon: Pencil,
            title: "Writer",
            description: "Sharing thoughts on design and technology.",
        },
        {
            icon: Search,
            title: "Explorer",
            description: "Discovering new tools and industry trends.",
        },
    ];

export const workexp: WorkExp[] = [
      {
        company: "Singapore Polytechnic",
        position: "Project INC Developer",
        startDate: "Aug '23",
        endDate: "Aug '24",
    },
    {
        company: "Trinax",
        position: "Software Developer Intern",
        startDate: "Sep '24",
        endDate: "Jan '24",
    },
    {
        company: "Trinax",
        position: "Software Developer (Contract)",
        startDate: "Feb '24",
        endDate: "Jun '25",
    },
    {
        company: "Freelance",
        position: "Software Developer",
        startDate: "May '25",
        endDate: "Present",
    },
]

export const clients = [
    {
        name: "Immigration & Checkpoint Authority",
        logo: "/clients/ica.png",
    },
    {
        name: "National Kidney Foundation (Singapore)",
        logo: "/clients/nkf.png",
    },
    {
        name: "Singtel (Digital For Life '24)",
        logo: "/clients/singtel.png",
    },
    {
        name: "Ministry of Trade & Industry Singapore",
        logo: "/clients/mti.png",
    },
    {
        name: "CIMB (InsureXpo '25)",
        logo: "/clients/cimb.png",
    },
    {
        name: "Coca Cola (ShareACoke Campaign '25)",
        logo: "/clients/cocacola.png",
    },
    {
        name: "Coventry-PSB  (10-year Anniversary)",
        logo: "/clients/coventry-uni.png",
    },
    {
        name: "WorldSkills Singapore (ECG Fair '25)",
        logo: "/clients/worldskills-sg.png",
    },
    {
        name: "National University of Singapore (Career Fest '25)",
        logo: "/clients/nus.png",
    },
    {
        name: "Marina Bay Sands Singapore (CNY '25)",
        logo: "/clients/mbs.png",
    },
    {
        name: "Institue of Management Consultants Singapore (IMCS)",
        logo: "/clients/imcs.png",
    },
    {
        name: "Ministry of Digital Development and Information (MDDI)",
        logo: "/clients/mddi.png",
    }
]

export const techstack = [
  { name: "JavaScript", icon: "js", category: "language" },
  { name: "TypeScript", icon: "typescript", category: "language" },
  { name: "Python", icon: "python", category: "language" },
  { name: "Java", icon: "java", category: "language" },
  { name: "React", icon: "react", category: "framework" },
//   { name: "React Native", icon: "react", category: "framework" },
  { name: "Vercel", icon: "vercel", category: "platform" },
  { name: "Firebase", icon: "firebase", category: "platform" },
  { name: "GraphQL", icon: "graphql", category: "database" },
  { name: "Playwright", icon: "playwright", category: "platform" },
  { name: "Svelte.js", icon: "sveltejs", category: "framework" },
  { name: "Next.js", icon: "nextjs", category: "framework" },
  { name: "Node.js", icon: "nodejs", category: "framework" },
  { name: "Nest.js", icon: "nestjs", category: "framework" },
  { name: "Prisma", icon: "prisma", category: "database" },
  { name: "Spring Boot", icon: "spring", category: "framework" },
  { name: "Bootstrap", icon: "bootstrap5", category: "framework" },
  { name: "tRPC", icon: "tRPC", category: "platform" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "framework" },
  { name: "Git", icon: "git", category: "platform" },
  { name: "Figma", icon: "figma", category: "platform" },
  { name: "Adobe XD", icon: "xd", category: "platform" },
  { name: "HTML5", icon: "html5", category: "language" },
  { name: "CSS3", icon: "css3", category: "language" },
  { name: "Express.js", icon: "expressjs", category: "framework" },
  { name: "MongoDB", icon: "mongodb", category: "database" },
  { name: "PostgreSQL", icon: "postgresql", category: "database" },
  { name: "Redux", icon: "redux", category: "platform" },
  { name: "MySQL", icon: "mysql", category: "database" },
  { name: "AWS", icon: "aws", category: "platform" },
  { name: "Docker", icon: "docker", category: "platform" }
];

