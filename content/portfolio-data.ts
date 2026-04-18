export interface Socials {
  github: string;
  linkedin: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  heroRoles: string[];
  heroQuirk: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl: string;
  formspreeId: string;
  photo: string;
  socials: Socials;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  isCurrentRole: boolean;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  isFeatured: boolean;
  category: 'Fullstack' | 'AI' | 'Tool';
  year: string;
}

export interface Skill {
  label: string;
  icon?: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  id: string;
  title: string;
}

export const personalInfo: PersonalInfo = {
  name: "Ishitva Agrawal",
  tagline: "Fullstack Developer & AI Engineer",
  heroRoles: ["Fullstack Developer", "AI Engineer", "Builder of Things"],
  heroQuirk: "I build things that think.",
  bio: "I am a fullstack and AI developer passionate about creating intelligent, high-performance web products. I specialize in merging modern frontend interfaces with robust backend architectures and AI-driven capabilities.",
  location: "India",
  email: "Ishitva26@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1Jt-BVtIYoK1SWSyLSdBJGwqRXP8dU7x_/view?usp=sharing",
  formspreeId: "your-id-here",
  photo: "/ishitva.jpg",
  socials: {
    github: "https://github.com/ishitvaagrawal",
    linkedin: "https://www.linkedin.com/in/ishitva-agrawal-7326aa208/"
  }
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Software Developer",
    company: "BoffinHive",
    companyUrl: "https://www.boffinhive.com/",
    period: "October 2025 – Present",
    description: "Developing internal applications and robust backend services.",
    highlights: [
      "Built a To-Do Application as a training project to familiarize with the company's tech stack.",
      "Developed an internal Reimbursement Management Application with claim management, payment splits, and OCR-based extraction.",
      "Designed PostgreSQL schemas with triggers and views, and implemented CRUD operations via GraphQL (Hasura).",
      "Built a Go-based market data ingestion service consuming live data for 50,000+ instruments."
    ],
    tags: ["Go", "PostgreSQL", "GraphQL", "PrimeVue"],
    isCurrentRole: true
  },
  {
    id: "exp-2",
    role: "Python Developer",
    company: "Engineer Philosophy",
    companyUrl: "https://engineerphilosophy.com/",
    period: "February 2025 – May 2025",
    description: "Engineered AI solutions and improved backend service integrations.",
    highlights: [
      "Implemented and improved RESTful APIs using Django REST Framework.",
      "Engineered solutions using Large Language Models (LLMs) including training, fine-tuning, and testing.",
      "Integrated and deployed pre-trained models to enhance AI-driven applications.",
      "Designed and deployed AI agents to automate tasks and improve system efficiency."
    ],
    tags: ["Python", "Django", "LLMs", "REST API"],
    isCurrentRole: false
  },
  {
    id: "exp-3",
    role: "Data Science Associate Intern",
    company: "Plasmit",
    companyUrl: "https://www.plasmitvector.com/",
    period: "January 2024 – July 2024",
    description: "Engineered machine learning models for disease detection in a remote environment.",
    highlights: [
      "Engineered AI/ML models in Python for disease detection, achieving 92% accuracy and 89% precision.",
      "Optimized model performance, enhancing detection accuracy and reducing false positives by 15%.",
      "Leveraged Python, Streamlit, Git, and GitHub to streamline model development and deployment."
    ],
    tags: ["Python", "Machine Learning", "Streamlit", "Data Science"],
    isCurrentRole: false
  },
  {
    id: "exp-4",
    role: "SDE Intern",
    company: "ZEDCONX",
    companyUrl: "https://www.linkedin.com/company/zedconx/posts/?feedView=all",
    period: "June 2023 – July 2023",
    description: "Developed and optimized a school management web application.",
    highlights: [
      "Created a school management web app with MIS integration, centralizing 100% of resources online.",
      "Improved page performance by 30% and UX using React for a more interactive experience.",
      "Leveraged HTML, CSS, JavaScript, Canva, and Figma for efficient design and development."
    ],
    tags: ["React", "HTML/CSS", "JavaScript", "Figma"],
    isCurrentRole: false
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Price Prediction And Alert System Using AI",
    shortDescription: "An autonomous AI system for price tracking and analysis.",
    longDescription: "Engineered an autonomous agentic AI system that improved task automation efficiency by 40%. Implemented RAG techniques to boost information retrieval accuracy by 25%, and fine-tuned open-source models using QLoRA to reduce training time by 30% while maintaining performance.",
    tags: ["AI Agents", "RAG", "QLoRA", "LLM Fine-tuning"],
    githubUrl: "https://github.com",
    image: "/projects/price-prediction.png",
    isFeatured: true,
    category: "AI",
    year: "2025"
  },
  {
    id: "proj-2",
    title: "Movie Recommendation System",
    shortDescription: "A hybrid movie recommendation engine processing 50k+ records.",
    longDescription: "Built a Python recommendation engine combining Popularity-based, Content-based (TF-IDF with Cosine Similarity), and Collaborative Filtering (SVD). Integrated all three approaches into a unified pipeline, boosting accuracy by 20% and improving scalability.",
    tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    githubUrl: "https://github.com",
    image: "/projects/movie-recommendation.png",
    isFeatured: true,
    category: "AI",
    year: "2025"
  },
  {
    id: "proj-3",
    title: "Peprica Pizza WebApp",
    shortDescription: "A full-stack pizza customization web application.",
    longDescription: "Led the frontend development using React in a 6-member team. Enhanced UX by 40% with 10+ API integrations, and refined the overall app with Redux, Node.js, Express, and MongoDB, cutting load times by 25%.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    githubUrl: "https://github.com",
    image: "/projects/pizza-webapp.png",
    isFeatured: false,
    category: "Fullstack",
    year: "2023"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: [
      { label: "Python", icon: "simple-icons:python" },
      { label: "SQL", icon: "simple-icons:postgresql" },
      { label: "C/C++", icon: "simple-icons:cplusplus" },
      { label: "HTML/CSS", icon: "simple-icons:html5" },
      { label: "Golang", icon: "simple-icons:go" }
    ]
  },
  {
    name: "Frameworks",
    skills: [
      { label: "Django", icon: "simple-icons:django" },
      { label: "FastAPI", icon: "simple-icons:fastapi" },
      { label: "Flask", icon: "simple-icons:flask" },
      { label: "React", icon: "simple-icons:react" },
      { label: "WordPress", icon: "simple-icons:wordpress" }
    ]
  },
  {
    name: "AI & Data",
    skills: [
      { label: "LLMs", icon: "heroicons:cpu-chip" },
      { label: "Model Fine-tuning", icon: "heroicons:adjustments-horizontal" },
      { label: "Prompt Engineering", icon: "heroicons:chat-bubble-bottom-center-text" },
      { label: "Machine Learning", icon: "heroicons:beaker" },
      { label: "Data Analysis", icon: "heroicons:chart-bar" }
    ]
  },
  {
    name: "Tools",
    skills: [
      { label: "Git / GitHub", icon: "simple-icons:github" },
      { label: "Hugging Face", icon: "simple-icons:huggingface" },
      { label: "Power BI", icon: "simple-icons:powerbi" },
      { label: "Streamlit", icon: "simple-icons:streamlit" },
      { label: "Figma", icon: "simple-icons:figma" }
    ]
  }
];

export const educations: Education[] = [
  {
    id: "edu-1",
    degree: "Master of Business Administration in Business Management (MBA)",
    institution: "Narsee Monjee Institute of Management Studies, Mumbai",
    period: "July 2025 – Present"
  },
  {
    id: "edu-2",
    degree: "Bachelor of Technology in Computer Science and Engineering (B.Tech)",
    institution: "Indian Institute of Information Technology Surat, Gujrat",
    period: "August 2020 – July 2024"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "LLM Engineering: Master AI, LLM Model, and Agents"
  },
  {
    id: "cert-2",
    title: "Introduction to Career Skills in Data Analytics"
  },
  {
    id: "cert-3",
    title: "Complete Guide to Power BI for Data Analysts by Microsoft Press"
  }
];
