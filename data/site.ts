// Content pulled from the Framer project via MCP. Edit here — the pages read from this.

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Builds", href: "/builds" },
  { label: "About", href: "/about_me" },
];

export const contact = {
  email: "souvik.b@alumni.nid.edu",
  phone: "+49 1628011261",
  socials: {
    x: "#",
    instagram: "#",
    behance: "#",
    dribbble: "#",
  },
};

export const hero = {
  name: "Souvik B",
  roles: ["designer", "builder"],
  blurb:
    "I’m a Berlin-based designer building AI-powered products people can understand, trust, and use.",
};

export const intro = {
  heading: "Building products at the intersection of design and AI.",
  body:
    "I’m curious about what happens when designers move closer to building. I’m exploring AI, automation, business logic, and rapid prototyping, and how designers can shape not just the experience, but the product itself. That space between design and building is what excites me most.",
};

export const experience = [
  { title: "Freelance Designer", company: "Germany", years: "2026 - Present" },
  { title: "Product Designer", company: "Accenture", years: "2024 - 2025" },
  { title: "UX/UI Designer", company: "Wipro", years: "2020 - 2024" },
];

export const aboutHeadline =
  "Building products at the intersection of design and AI.";

export type Project = {
  no: string;
  title: string;
  category: string;
  year: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    no: "(01)",
    title: "AccessNow",
    category: "Accessibilty First Medicare Product",
    year: "© 2024",
    href: "/projects/access_now",
    image: "https://framerusercontent.com/images/TNc8CSbNVglxdHgkw0nZm2Hwx8Q.png",
  },
  {
    no: "(04)",
    title: "Airbus",
    category: "AI Powered Manufacturing Diagram Validation Tool",
    year: "© 2024",
    href: "/projects/aero_check",
    image: "https://framerusercontent.com/images/yuS2M7JfOtnVFgldybJXykkAWh8.png",
  },
  {
    no: "(02)",
    title: "Member Portal",
    category: "Mobile App",
    year: "© 2023",
    href: "/projects/member_portal",
    image: "https://framerusercontent.com/images/KIEFX4kEuByXd9JpGIS8twFgVoQ.png",
  },
  {
    no: "(03)",
    title: "Desi Aroma",
    category: "Service Design for Women Empowerment",
    year: "© 2020",
    href: "/projects/desi_aroma",
    image: "https://framerusercontent.com/images/hWgzMThzfV7DnNlrIOmiQixA1g.jpg",
  },
];

export type Build = {
  no: string;
  title: string;
  tagline: string;
  body: string;
  href: string;
};

export const builds: Build[] = [
  {
    no: "01",
    title: "Tracka",
    tagline: "Career Application Toolkit",
    body:
      "Inspired by my own job search, Tracka is an AI-powered workspace for tailored resumes, cover letters, and application tracking.",
    href: "/builds/tracka",
  },
  {
    no: "02",
    title: "Shift Assist",
    tagline: "AI-Powered Diagnostics",
    body:
      "Built in 10 hours at the BOSCH Hackathon, it uses a RAG pipeline to unify OEM documentation and operator knowledge captured in shift logs, helping diagnose machine failures beyond what manuals alone can provide.",
    href: "https://vercel.com/souvikb93s-projects/machine-whisperer",
  },
  {
    no: "03",
    title: "Farm.doc",
    tagline: "Farm Compliance Automation",
    body:
      "Farm.doc helps farmers document farm activities while staying compliant with evolving German agricultural regulations through an n8n-based orchestration layer.",
    href: "https://farmdoc-omega.vercel.app/",
  },
];

// About section — Foundation / Evolution / Today (from the getfull.site export).
export const about = [
  {
    label: "(Foundation)",
    body:
      "Completed my Master’s in Design while building practical experience through six internships across sectors, from UNESCO to Unilever.",
  },
  {
    label: "(+Evolution)",
    body:
      "Expanded into digital product design, designing enterprise SaaS platforms, mobile applications, AI-powered products, and agentic systems for global clients over five years in IT consulting.",
  },
  {
    label: "(=Today)",
    body:
      "Building AI-powered and agentic products at the intersection of design, automation, and engineering. Learning German as my fourth language while exploring the latest advances in AI for product design.",
  },
];

export const testimonials = [
  {
    name: "Eleisha Z. Tetteh",
    role: "Creative Leadership Senior Manager, Accenture London",
    quote:
      "Souvik was an invaluable contributor to the Google PitchHub project, a highly strategic and competitive 8-week pilot showcasing ACN’s [genai] capabilities with Google Gemini AI. His work helped create five high-impact sales demos for prominent clients, including Airbus, UHG, Coca-Cola, Banco BV, and Woolworths — demonstrating ACN’s ability to rapidly scale and deliver cutting-edge solutions. As a UX/UI Designer, Souvik played a critical role in crafting compelling, high-quality design solutions tailored to each demo. His expertise in user-centred design was evident and his ability to collaborate effectively within the team under tight timelines was truly commendable. He demonstrated strong adaptability, seamlessly responding to feedback and refining designs to meet the specific needs of diverse industries and global markets across AMER, APAC, EMEA, and LATAM.",
  },
];

// --- /about_me -----------------------------------------------------------
export const aboutPage = {
  headline: "Chai-fueled designer navigating design, culture, and curiosity",
  intro:
    "Creating things for people has always been what I enjoy most. That’s what led me to design, and it’s what continues to inspire my work today. I’m learning German as my fourth language while exploring how design, engineering, and AI can work together to make products that solve real world problems.",
  photo: "https://framerusercontent.com/images/4IHkJM71yAnl9Jgvb8a5FBV7HeM.jpg",
};

export const techStack = {
  heading: "My Tech Stack",
  intro:
    "I work across design, AI, automation, and development, using the right tools to move from concept to prototype and working product.",
  items: [
    { name: "Claude", body: "My AI co-pilot for exploring ideas, prototyping, coding, and turning concepts into working products." },
    { name: "Figma", body: "My core workspace for product design, prototyping, design systems, and exploring AI-assisted workflows." },
    { name: "n8n", body: "My go-to for connecting APIs, automating workflows, and turning business rules into working product logic." },
    { name: "Github", body: "Where I manage, version, and collaborate on the code behind the products I build." },
    { name: "Supabase", body: "My backend layer for authentication, databases, storage, and quickly turning prototypes into functional products." },
    { name: "Vercel", body: "My deployment layer for shipping, testing, and iterating on web products quickly." },
  ],
};

export const edges = {
  heading: "Exploring the Edges of Product Design",
  intro:
    "I’m interested in what happens when designers move closer to technology, logic, and building. These are some of the areas I’m currently exploring through experiments and products.",
  items: [
    { no: "01.", title: "Business Rule Engines", body: "Exploring how business rules, conditions, and decision logic can become part of the product experience, not just something hidden in the backend." },
    { no: "02.", title: "Automating with n8n", body: "Experimenting with automation, APIs, and open-source tools to connect workflows, remove repetitive work, and turn ideas into functioning systems." },
    { no: "03.", title: "Exploring Local LLM Models", body: "Exploring local LLMs, smaller models, and on-device AI as a path toward more private, controllable, and accessible product experiences." },
    { no: "04.", title: "Switching Context with MCPs", body: "Using the Model Context Protocol to give AI tools consistent, switchable context across products and workflows." },
    { no: "05.", title: "Context Documents for AI", body: "Exploring how Markdown files and structured documentation can give AI a consistent understanding of a product and produce consistent outputs." },
  ],
};
