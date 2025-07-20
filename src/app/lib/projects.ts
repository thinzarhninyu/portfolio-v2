
// types enum
export enum ProjectType {
  careerFair = "Career Fair",
  marketingCampaign = "Marketing Campaign",
  digitalInitiative = "Digital Initiative",
  careerQuiz = "Career Quiz",
  interactiveExhibit = "Interactive Exhibit",
  all = "All",
}

export const projects: {
  id: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
  client: string;
  year: number;
  link: string;
  externalLink?: string;
  tags: ProjectType[];
}[] = [
  {
    id: 'ica-heritage-exhibit',
    title: "ICA Heritage Exhibit",
    description: "A physical interactive exhibition designed to bring the Immigration & Checkpoints Authority’s heritage to life. This exhibit showcases Singapore’s rich history of immigration control and border security, featuring archival photos, officer stories, and evolving checkpoint technologies. Visitors can explore the agency’s journey from colonial-era customs to modern border management through engaging, human-centered displays and storytelling.",
    image: "/projects/ica-heritage-exhibit.jpg",
    featured: true,
    client: "Immigration & Checkpoint Authority",
    year: 2025,
    link: "/projects/ica-heritage-exhibit", 
    externalLink: "https://www.ica.gov.sg/heritage-exhibit",
    tags: [ProjectType.interactiveExhibit]
  },
  {
    id: 'nus-career-fest-2025',
    title: "NUS Career Fest 2025",
    description: "An immersive career fair experience designed to connect students with leading industry partners and opportunities. This event features interactive employer booths, career talks, and networking sessions to help students navigate the evolving job market. Attendees can explore career paths, engage directly with recruiters, and gain practical insights to prepare for their professional journey.",
    image: "/projects/nus-career-fest.jpg",
    featured: true,
    client: "National University of Singapore",
    year: 2025,
    link: "/projects/nus-career-fest-2025",
    externalLink: "https://careerfest.nus.edu.sg",
    tags: [ProjectType.careerFair]
  },
  {
    id: 'pico-career-fair-2025',
    title: "PICO Career Fair 2025",
    description: "A dynamic career fair designed to connect students with industry leaders, career pathways, and opportunities for growth. This event offers interactive company showcases, mentoring sessions, and hands-on workshops that empower participants to make informed decisions. The experience emphasizes collaboration, skill-building, and direct engagement with potential employers in a welcoming environment.",
    image: "/projects/pico.jpg",
    featured: true,
    client: "WorldSkills Singapore",
    year: 2025,
    link: "/projects/pico-career-fair-2025",
    externalLink: "https://worldskills.sg/career-fair-2025",
    tags: [ProjectType.careerFair]
  },
  {
    id: 'coca-cola-shareacoke',
    title: "ShareACoke Campaign",
    description: "An interactive brand campaign that invited users to create personalized Coke bottles and share them with friends and family. This experience leveraged social engagement, user-generated content, and targeted marketing to strengthen brand loyalty. Through easy-to-use customization tools and integrated digital channels, it delivered a memorable, human-centered experience for consumers.",
    image: "/projects/coke.jpg",
    featured: false,
    client: "Coca Cola",
    year: 2025,
    link: "/projects/coca-cola-shareacoke",
    externalLink: "https://www.coca-cola.com/shareacoke",
    tags: [ProjectType.marketingCampaign]
  },
  {
    id: 'mti-career-quiz',
    title: "MTI Career Quiz",
    description: "An interactive digital quiz designed to help students explore career options within the Ministry of Trade & Industry. This tool engages users through thoughtful questions, personalized results, and curated content about diverse roles in the public sector. It emphasizes user-friendly design, intuitive navigation, and actionable insights to guide career exploration in a fun, accessible way.",
    image: "/projects/mti-quiz.png",
    featured: true,
    client: "Ministry of Trade & Industry Singapore",
    year: 2024,
    link: "/projects/mti-career-quiz",
    externalLink: "https://www.mti.gov.sg/career-quiz",
    tags: [ProjectType.careerQuiz]
  },
  {
    id: 'singtel-digital-for-life-2024',
    title: "Singtel Digital For Life 2024",
    description: "A digital initiative developed by Singtel to promote digital literacy, well-being, and inclusion across Singapore. This program features engaging workshops, online resources, and community events that empower people of all ages to navigate technology safely and confidently. It delivers accessible, human-centered experiences designed to bridge digital gaps and build a more connected society.",
    image: "/projects/singtel.jpg",
    featured: true,
    client: "Singtel",
    year: 2024,
    link: "/projects/singtel-digital-for-life-2024",
    externalLink: "https://www.singtel.com/digital-for-life",
    tags: [ProjectType.digitalInitiative]
  }
];