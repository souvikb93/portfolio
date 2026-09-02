import type { CaseStudy } from "@/data/caseStudies";

// Build write-ups (/builds/[slug]) — same shape as case studies.
export const buildStudies: Record<string, CaseStudy> = {
  tracka: {
    slug: "tracka",
    name: "Tracka",
    headline: "Track Better · Tailor Smarter · Apply Faster",
    summary:
      "As a solo product designer, I built Tracka to solve a real problem faced by job seekers while expanding my role beyond UX. Alongside designing the experience, I defined the product logic, business rules, and technical architecture required to bring a functional application to life.",
    meta: [
      { label: "Type", value: "Self-initiated product" },
      { label: "Duration", value: "3 months" },
      { label: "Industry", value: "Career Tech" },
      { label: "Scope of Work", value: "Full-stack Build · Information Architecture · Design System" },
    ],
    hero: {
      layout: "wide",
      items: [
        { src: "/images/j4GfC2irkQU5bFWLES6jP4YnhI.jpg", alt: "Tracka case study", ratio: "1200 / 800" },
      ],
    },
    sections: [
      {
        eyebrow: "Objective",
        title: "A Changing Job Market in the Age of AI",
        body: "When I moved to Berlin and began my own job search, I noticed how diverse the job market was — people from different cultural, educational, professional, and language backgrounds. At the same time, AI was changing how candidates were screened and evaluated, from AI-powered CV screening to AI-led interviews. Finding the right opportunity was only the beginning: each application involved understanding the role, preparing and tailoring a CV, writing a cover letter, navigating AI-driven screening, and managing multiple applications, follow-ups, and recruiter conversations. Keeping track of everything became a job in itself."
      },
      {
        eyebrow: "Discovery",
        title: "Understanding the Job Search Journey",
        media: [
          { layout: "wide", items: [{ src: "/video/1jcvQ3Vvht0pfBEzcyTjIVBrnA.mp4", alt: "Research synthesis", ratio: "690 / 388", kind: "video" }] },
          { layout: "wide", items: [{ src: "/images/N9Czpipl9lUSddOVtWvc8kCn2Q.png", alt: "From insights to product decisions", ratio: "1152 / 411" }] },
          { layout: "wide", items: [{ src: "/images/q1FJIbRxEr5zleZdoNmhSrx4XUU.png", alt: "Opportunity mapping", ratio: "1072 / 383" }] },
          { layout: "wide", items: [{ src: "/images/YEjleZD455mfl5bIJBjeFDKeoi0.png", alt: "Activation and retention", ratio: "1152 / 412" }] },
          { layout: "wide", items: [{ src: "/images/IIGp5fjqkwugqytphjGK6WII88E.png", alt: "Feature prioritisation", ratio: "1152 / 344" }] },
        ],
        body: "Before exploring solutions, I wanted to understand how people actually manage their job search. To ensure Tracka solved real problems, I interviewed job seekers, spoke with recruiters, attended career meetups, and analysed the real job application process across the Berlin hiring market — capturing recurring behaviours, frustrations, and workarounds.",
        blocks: [
          {
            no: "01",
            title: "Personalized Applications",
            body: "Tailoring applications was the most time-consuming part of the job search. Users needed faster ways to personalize resumes and cover letters without compromising quality. → Resume & Cover Letter Builder: analyse the job description, extract ATS keywords, generate personalized materials.",
          },
          {
            no: "02",
            title: "ATS Optimization",
            body: "Candidates increasingly relied on ATS checkers and manually compared resumes with job descriptions. Identifying the right keywords had become an extra step in every application. → ATS Match Analyzer: extract ATS keywords from the job description, highlight missing skills, estimate an ATS match score.",
          },
          {
            no: "03",
            title: "Application Management",
            body: "As applications progressed, important information became scattered across job portals, emails, folders, spreadsheets, and documents. Reconstructing the full context of an application often took longer than expected. → Unified Workspace: save the original job description, store tailored CVs and cover letters, keep recruiter contacts and notes together.",
          },
          {
            no: "04",
            title: "Frictionless Onboarding",
            body: "We couldn’t eliminate repetitive forms across external job portals, but we could remove the same friction from our own onboarding. → AI-Powered Onboarding: upload an existing CV, automatically extract profile details, review and confirm before getting started.",
          },
        ]
      },
      {
        eyebrow: "Solution",
        title: "From Hand Sketch to Production UI",
        media: [
          { layout: "wide", items: [{ src: "/images/7gTirUV54JrihWCjLTzUPoKvCWs.png", alt: "Hand sketch", ratio: "636 / 424" }] },
          { layout: "wide", items: [{ src: "/images/pbfTymDicgXSWTragjoWUJIL6g.png", alt: "Wireframe", ratio: "636 / 414" }] },
          { layout: "wide", items: [{ src: "/images/ohK2uWdMuzohlJSEsexEcDa4lY.png", alt: "Production UI", ratio: "636 / 348" }] },
        ],
        body: "I defined the information architecture and key entry points first — separating marketing, authentication, onboarding, and the core workspace into a clear navigation structure — then moved through concept exploration and an AI-assisted production process.",
        blocks: [
          {
            no: "01",
            title: "Defining the Information Hierarchy",
        media: [
          { layout: "wide", items: [{ src: "/images/sJ2y1cRqGOZ9uYngaHxiCbIpThI.png", alt: "Information hierarchy", ratio: "1152 / 605" }] },
          { layout: "center", items: [{ src: "/video/bami6O5MLqZdLUMdBO2ty9EVNA.mp4", alt: "Interface walkthrough", ratio: "600 / 600", width: "600px", kind: "video" }] },
        ],
            body: "The experience separates marketing, authentication, onboarding, and the core workspace into a clear navigation structure, creating an intuitive journey for both first-time and returning users.",
          },
          {
            no: "02",
            title: "Design System as AI Context",
        media: [
          {
            layout: "grid3",
            items: [
              { src: "/images/wORQtUBM2tFRXAaa5tvsT0TEsM.png", alt: "Tokens", ratio: "228 / 500" },
              { src: "/images/VqSj1R0aHspBuXbCY6lzRQryEB0.png", alt: "Components", ratio: "228 / 269" },
              { src: "/images/vWTijuAUzVOAkwO0NsVRBT0341g.png", alt: "Patterns", ratio: "228 / 447" },
            ],
          },
        ],
            body: "A design system is only valuable if applied consistently. I translated the system into structured documentation that AI could interpret, enabling reusable components, predictable layouts, and consistent outputs across the product.",
          },
          {
            no: "03",
            title: "Concept Exploration",
        media: [
          {
            layout: "grid3",
            items: [
              { src: "/images/aVYKH1wVnrxsFXGwh2gc0jiAdl8.png", alt: "Concept one", ratio: "352 / 225" },
              { src: "/images/DMzXWMK6jkNVYOvvMYyFndUgMs.png", alt: "Concept two", ratio: "352 / 225" },
              { src: "/images/Y9gDikOyHWx2ld5JeD1nbkzuE.png", alt: "Concept three", ratio: "352 / 226" },
            ],
          },
          { layout: "center", items: [{ src: "/images/94153csZ6w2Mjd4cYhHZo6y0Fpo.png", alt: "Selected direction", ratio: "544 / 230", width: "544px" }] },
        ],
            body: "I explored different ways of bringing the Tracker, Resume Builder, and Letter Builder together, evaluating each concept against navigation clarity, cognitive load, scalability, and continuity — using product goals and user needs as criteria rather than visual preference.",
          },
          {
            no: "04",
            title: "Production Process",
            body: "Hand-drawn sketches explored hierarchy and layout; low-fidelity Figma wireframes became the design specification and context for an AI coding assistant to generate the initial high-fidelity interface, which I refined through iteration.",
          },
          {
            no: "05",
            title: "Scalable Technical Architecture",
        media: [
          { layout: "wide", items: [{ src: "/images/LUF6swkZyBEg7ZnHqBLmoe5alM.png", alt: "System architecture", ratio: "1072 / 681" }] },
        ],
            body: "Rather than building custom infrastructure, I evaluated modern tools that could accelerate development while keeping costs and maintenance low — prioritising rapid iteration today with the flexibility to replace individual services as the product scales.",
          },
          {
            no: "06",
            title: "A Consistent ATS Scoring System",
        media: [
          { layout: "wide", items: [{ src: "/images/P6r1WHlaZmpTPdgtxUpI3tYZPFE.png", alt: "ATS scoring model", ratio: "1152 / 199" }] },
        ],
            body: "Tracka initially used an LLM to calculate ATS scores, so the same CV and job description could receive different scores across runs. I separated understanding from scoring: the LLM extracts structured job requirements once, while a deterministic ATS engine calculates the score using predefined matching logic and weighted dimensions. The same input always produces the same score.",
          },
        ]
      },
      {
        eyebrow: "Reflection",
        title: "What I Learned While Building Tracka",
        media: [
          { layout: "wide", items: [{ src: "/images/25GyxFzR0HsgETtZTVG50i6Jqc.png", alt: "Layered decision making", ratio: "1152 / 199" }] },
          { layout: "wide", items: [{ src: "/images/L5HpHx26RmmM7uvn63gekQPcLE.png", alt: "Consistency and reliability", ratio: "1152 / 193" }] },
          { layout: "wide", items: [{ src: "/images/K3EQfioE2BsZqX7mNTzeuoma4P4.png", alt: "Continuous refinement", ratio: "1152 / 193" }] },
        ],
        body: "Designing, building, and testing the product exposed challenges that only became visible during implementation — and reshaped how I think about design systems, product logic, and product decisions.",
        blocks: [
          {
            no: "01",
            title: "Layered Decision Making",
            body: "Reliable products are built on clear fallback paths. Deciding which theme to display meant evaluating multiple signals before reaching a final decision. I learned to design layered decision paths that keep the experience predictable even when preferred inputs aren’t available.",
          },
          {
            no: "02",
            title: "Consistency & Reliability",
            body: "Reliable products build more trust than clever features. I initially let users add a job by pasting a posting URL, but universal URL extraction wasn’t practical across job boards. I redesigned the workflow so users paste the job description directly while AI extracts and fills the fields — reliability beats automation that only sometimes works.",
          },
          {
            no: "03",
            title: "Continuous Refinement",
            body: "A design system evolves through continuous feedback. Every new feature introduced new components and refinements; updating Figma wasn’t enough because the AI also needed the latest design context. I established a feedback loop that kept both the design system and the AI aligned as the product evolved.",
          },
        ]
      },
    ],
  },
};
