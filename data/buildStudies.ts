import type { CaseStudy } from "@/data/caseStudies";

// Build write-ups (/builds/[slug]) — same shape as case studies.
export const buildStudies: Record<string, CaseStudy> = {
  tracka: {
    slug: "tracka",
    name: "Tracka",
    headline: "Track Better · Tailor Smarter ·  Apply Faster",
    summary:
      "As a solo product designer, I built Tracka to solve a real problem faced by job seekers while expanding my role beyond UX. Alongside designing the experience, I defined the product logic, business rules, and technical architecture required to bring a functional application to life.",
    meta: [
      { label: "Client", value: "Self-initiated product" },
      { label: "Duration", value: "3 months" },
      { label: "Industry", value: "Career Tech" },
      {
        label: "Scope of Work",
        value: "Full-stack Build · Information Architecture · Design System",
      },
    ],
    hero: {
      layout: "wide",
      items: [
        { src: "/images/j4GfC2irkQU5bFWLES6jP4YnhI.jpg", alt: "Tracka case study", ratio: "1200 / 800" },
      ],
    },
    heroEmbed: {
      src: "https://souvikb93.github.io/trackaportfolio_ipadframe/",
      alt: "Tracka running in an iPad frame",
      ratio: "517 / 391",
      width: "517px",
    },
    sections: [
      {
        eyebrow: "Context",
        title: "A Changing Job Market in the Age of AI",
        body: "When I moved to Berlin and began my own job search, I noticed how diverse the job market was, with people from different cultural, educational, professional, and language backgrounds. At the same time, AI was changing how candidates were screened and evaluated, from AI-powered CV screening to AI-led interviews.",
        media: [
          {
            layout: "center",
            items: [
              { src: "/images/xnQigOeOJ4fxgA14xGPbqecY.jpg", alt: "Berlin employment meetup", ratio: "556 / 362", width: "556px" },
            ],
          },
        ],
        caption:
          "Me (blue and red printed T-shirt) in discussion with fellow job seekers and career mentors at a Berlin employment meetup, listening to diverse perspectives on navigating the German job market.",
      },
      {
        eyebrow: "Problem",
        title: "Job Searching Has Become a Process to Manage",
        body: "Every application came with its own requirements, materials, and next steps. Context was constantly recreated across CVs, cover letters, applications, and interviews. As applications multiplied, the effort wasn’t just finding jobs. It was managing everything around each application.",
        media: [
          {
            layout: "center",
            items: [
              { src: "/images/fyASe6P3NXZ0bKrLXVLq0E2w6q8.png", alt: "Managing applications", ratio: "364 / 863", width: "364px" },
            ],
          },
        ],
      },
      {
        eyebrow: "Research",
        title: "Understanding the Job Search Journey",
        body: "Before exploring solutions, I wanted to understand how people actually manage their job search. I captured recurring behaviors, frustrations, and workarounds through informal conversations with job seekers and recruiters.",
        metrics: [
          { value: "10+", label: "Career Meetups" },
          { value: "18+", label: "User Interviews" },
          { value: "7", label: "Industries Represented" },
          { value: "4", label: "Hiring Managers" },
        ],
        media: [
          { layout: "wide", items: [{ src: "/video/1jcvQ3Vvht0pfBEzcyTjIVBrnA.mp4", alt: "Research synthesis", ratio: "690 / 388", kind: "video" }] },
        ],
      },
      {
        eyebrow: "Analysis",
        title: "From Insights to Product Decisions",
        body: "Conversations with job seekers revealed four recurring themes. Rather than solving every problem directly, I focused on the areas where Tracka could create the greatest impact within its own experience.",
        findings: [
          {
            no: "01",
            title: "Personalized Applications",
            quote:
              "I have to tweak my CV for every job, and in Germany the cover letter matters too. Sending the same one everywhere just doesn’t work anymore",
            supportLabel: "Insight",
            support:
              "Tailoring applications was the most time-consuming part of the job search. Users needed faster ways to personalize resumes and cover letters without compromising quality.",
          },
          {
            no: "02",
            title: "ATS Optimization",
            quote:
              "Everyone keeps talking about ATS these days... before I apply, I compare my CV with the job description using AI",
            supportLabel: "Insight",
            support:
              "Candidates increasingly relied on ATS checkers and manually compared resumes with job descriptions to improve their chances of reaching recruiters. Identifying the right keywords had become an additional step in every application.",
          },
          {
            no: "03",
            title: "Unified Workspace",
            quote:
              "By the time someone emails me back, the job posting has disappeared, I can’t remember which CV I sent, where I saved the cover letter, or what the role was actually looking for.",
            supportLabel: "Insight",
            support:
              "As applications progressed, important information became scattered across job portals, emails, folders, spreadsheets, and documents. Reconstructing the full context of an application often took longer than expected, especially during interviews and follow-ups.",
          },
          {
            no: "04",
            title: "Reusable Context",
            quote:
              "I already uploaded my CV... why am I filling in my work experience, education, and address all over again? After a few applications, those long forms get really tiring.",
            supportLabel: "Insight",
            support:
              "When a user provides context once, that context should carry forward and be reused wherever it is relevant. Users shouldn’t have to repeatedly re-enter or re-explain the same information at different steps or across different parts of the product.",
          },
        ],
        media: [
          { layout: "wide", items: [{ src: "/images/N9Czpipl9lUSddOVtWvc8kCn2Q.png", alt: "From insights to product decisions", ratio: "1152 / 411" }] },
        ],
      },
      {
        eyebrow: "User Journey",
        title: "Designing for Activation and Retention",
        body: "Defined distinct paths based on the different needs of first-time and returning users. Comparing both journeys helped identify moments of uncertainty, opportunities to reduce friction, and design decisions that support long-term engagement.",
        media: [
          {
            layout: "wide",
            items: [
              {
                src: "https://souvikb93.github.io/userjourney_tracka_portfolio/",
                alt: "Interactive first-time and returning user journeys",
                ratio: "1152 / 979",
                kind: "embed",
              },
            ],
          },
          { layout: "wide", items: [{ src: "/images/q1FJIbRxEr5zleZdoNmhSrx4XUU.png", alt: "Activation and retention journeys", ratio: "1072 / 383" }] },
          { layout: "wide", items: [{ src: "/images/YEjleZD455mfl5bIJBjeFDKeoi0.png", alt: "Journey comparison", ratio: "1152 / 412" }] },
          { layout: "wide", items: [{ src: "/images/IIGp5fjqkwugqytphjGK6WII88E.png", alt: "Feature prioritisation", ratio: "1152 / 344" }] },
        ],
      },
      {
        eyebrow: "Information Architecture",
        title: "Defining the Information Hierarchy",
        body: "I translated the journey into a clear information architecture, separating marketing, authentication, onboarding, and the core workspace.",
        media: [
          { layout: "wide", items: [{ src: "/images/sJ2y1cRqGOZ9uYngaHxiCbIpThI.png", alt: "Information architecture", ratio: "1152 / 605" }] },
        ],
        caption:
          "First-time users move through onboarding before entering the product, while returning users can go straight to the workspace.",
      },
      {
        eyebrow: "Design System",
        title: "From Design System to Consistent Interfaces",
        body: "I translated the design system into structured documentation that AI could interpret, enabling reusable components, predictable layouts, and consistent outputs across the product.",
        media: [
          { layout: "center", items: [{ src: "/video/bami6O5MLqZdLUMdBO2ty9EVNA.mp4", alt: "Design system walkthrough", ratio: "600 / 600", width: "600px", kind: "video" }] },
          {
            layout: "grid4",
            items: [
              { src: "/images/wORQtUBM2tFRXAaa5tvsT0TEsM.png", alt: "Tokens", ratio: "228 / 500" },
              { src: "/images/VqSj1R0aHspBuXbCY6lzRQryEB0.png", alt: "Components", ratio: "228 / 269" },
              { src: "/images/vWTijuAUzVOAkwO0NsVRBT0341g.png", alt: "Patterns", ratio: "228 / 447" },
              { src: "/images/nc9n6QtghDLC0c9Ir9TSK6Yptfk.png", alt: "Documentation", ratio: "228 / 337" },
            ],
          },
        ],
        caption: "Design System to Markdown File",
      },
      {
        eyebrow: "Concept Exploration",
        title: "Exploring Ways to Structure the Experience",
        body: "I explored multiple ways to connect Tracka’s three core workflows and tested different navigation and information structures.This helped me narrow the exploration to the direction that provided the clearest structure while keeping the three core workflows connected.",
        blocks: [
          { title: "Concept A: Data-First Tracker", body: "A dense structure optimized for job management." },
          { title: "Concept B: Unified Navigation", body: "Three core tools with shared navigation." },
          { title: "Concept C: AI-First Workspace", body: "A conversational hub connecting key tasks." },
        ],
        media: [
          {
            layout: "grid3",
            items: [
              { src: "/images/aVYKH1wVnrxsFXGwh2gc0jiAdl8.png", alt: "Concept A", ratio: "352 / 225" },
              { src: "/images/DMzXWMK6jkNVYOvvMYyFndUgMs.png", alt: "Concept B", ratio: "352 / 225" },
              { src: "/images/Y9gDikOyHWx2ld5JeD1nbkzuE.png", alt: "Concept C", ratio: "352 / 226" },
            ],
          },
        ],
      },
      {
        eyebrow: "Concept Finalization",
        title: "Selecting the Direction to Take Forward",
        body: "I selected this direction based on three key considerations to ensure it best supported the overall job-search experience.",
        blocks: [
          { no: "01", title: "Workflow Continuity", body: "How naturally users move between core tasks." },
          { no: "02", title: "Information Clarity", body: "How easily users understand and act on what matters." },
          { no: "03", title: "Scalability", body: "How well the structure supports a growing job-search workflow." },
        ],
        media: [
          { layout: "center", items: [{ src: "/images/aVYKH1wVnrxsFXGwh2gc0jiAdl8.png", alt: "Concept B thumbnail", ratio: "341 / 218", width: "341px" }] },
          { layout: "center", items: [{ src: "/images/94153csZ6w2Mjd4cYhHZo6y0Fpo.png", alt: "Concept B: Unified Navigation", ratio: "544 / 230", width: "544px" }] },
        ],
        caption: "Concept B: Unified Navigation",
      },
      {
        eyebrow: "Production Process",
        title: "From Hand Sketch to Production UI",
        body: "I started with hand-drawn sketches to explore the information hierarchy, content structure, and overall layout. Once the concept was clear, I recreated it as low-fidelity wireframes in Figma. These wireframes served as the design specification and context for AI Coding assistant to generate the initial high-fidelity interface, which I then refined through iterative design decisions.",
        blocks: [
          { title: "Concept Sketch", body: "Explore layout & information hierarchy" },
          { title: "Figma Wireframe", body: "Define structure & provide AI design context" },
          { title: "Production UI", body: "UI generated using AI coding agents, refined through iteration" },
        ],
        media: [
          { layout: "wide", items: [{ src: "/images/7gTirUV54JrihWCjLTzUPoKvCWs.png", alt: "Concept sketch", ratio: "636 / 424" }] },
          { layout: "wide", items: [{ src: "/images/pbfTymDicgXSWTragjoWUJIL6g.png", alt: "Figma wireframe", ratio: "636 / 414" }] },
          { layout: "wide", items: [{ src: "/images/ohK2uWdMuzohlJSEsexEcDa4lY.png", alt: "Production UI", ratio: "636 / 348" }] },
        ],
      },
      {
        eyebrow: "Technical Architecture",
        title: "Building a Scalable Architecture",
        body: "Rather than building custom infrastructure, I evaluated modern tools that could accelerate development while keeping costs low and maintenance minimal. The architecture prioritizes rapid iteration today, with the flexibility to replace individual services as the product scales.",
        media: [
          { layout: "wide", items: [{ src: "/images/LUF6swkZyBEg7ZnHqBLmoe5alM.png", alt: "System architecture", ratio: "1072 / 681" }] },
        ],
      },
      {
        eyebrow: "Business Logic",
        title: "Building a Consistent ATS Scoring System",
        body: "The Problem - Tracka’s ATS Analyzer scores how well a resume lines up with a job description before someone applies. Tracka initially used an LLM to calculate ATS scores. Because the model could interpret the same CV and job description differently across runs, the same application would receive different scores. The Decision - I separated understanding from scoring. The LLM extracts structured job requirements once, while a deterministic ATS engine calculates the score using predefined matching logic and weighted dimensions. The result is consistent, transparent, and repeatable. The same input always produces the same score.",
        blocks: [{ title: "How It Works" }],
        media: [
          { layout: "wide", items: [{ src: "/images/P6r1WHlaZmpTPdgtxUpI3tYZPFE.png", alt: "ATS scoring model", ratio: "1152 / 199" }] },
        ],
      },
      {
        eyebrow: "Reflection",
        title: "What I Learned While Building Tracka",
        body: "Designing, building, and testing the product exposed challenges that only became visible during implementation. These experiences reshaped how I think about design systems, product logic, and product decisions.",
        blocks: [
          {
            no: "01",
            title: "Layered Decision Making: Reliable products are built on clear fallback paths.",
            body: "Building Tracka required defining product behavior for situations where a single rule wasn’t enough. For example, deciding which theme the application should display meant evaluating multiple signals before reaching a final decision. This taught me to design layered decision paths that keep the experience predictable even when preferred inputs aren’t available.",
          },
          {
            no: "02",
            title: "Consistency & Reliability: Reliable products build more trust than clever features.",
            body: "While designing the job tracker, I initially allowed users to add a job by pasting a job posting URL. Since different job boards use different page structures, universal URL extraction wasn’t practical. Instead of forcing the feature to work everywhere, I redesigned the workflow so users paste the job description directly while the AI automatically extracts and fills the required fields. This reinforced that reliability creates more value than automation that only works in certain situations.",
          },
          {
            no: "03",
            title: "Continuous Refinement: A design system evolves through continuous feedback.",
            body: "While building Tracka with an AI coding assistant, I found that every new feature introduced new components, variants, and design refinements. Simply updating the design system in Figma wasn’t enough because the AI also needed the latest design context to generate consistent interfaces. I learned to establish a feedback loop that kept both the design system and the AI aligned as the product evolved.",
          },
        ],
        media: [
          { layout: "wide", items: [{ src: "/images/25GyxFzR0HsgETtZTVG50i6Jqc.png", alt: "Layered decision making", ratio: "1152 / 199" }] },
          { layout: "wide", items: [{ src: "/images/L5HpHx26RmmM7uvn63gekQPcLE.png", alt: "Consistency and reliability", ratio: "1152 / 193" }] },
          { layout: "wide", items: [{ src: "/images/K3EQfioE2BsZqX7mNTzeuoma4P4.png", alt: "Continuous refinement", ratio: "1152 / 193" }] },
        ],
      },
      {
        eyebrow: "User Feedback",
        title: "Build a tailored job application in under 15 minutes.",
        body: "Tracka is live and continuously evolving through feedback from early users. I’m refining the experience with each iteration before making it available to everyone. Below are a few comments shared by people who have used it so far.",
        blocks: [
          { no: "01", title: "Marla Rode, Forest Auditor", body: "I kept losing track of which companies replied and which ones didn’t. This made things a bit less chaotic for me, especially during busy weeks." },
          { no: "02", title: "Hannah Petrova, Costume Designer", body: "The cover letter part is surprisingly decent. I still edit everything myself, but it helped me stop starting at a blank page every time." },
          { no: "03", title: "Rohan S, Software Engineer", body: "I was using Notes and random bookmarks before. This feels cleaner. Still figuring it out, but at least applications aren’t scattered anymore." },
        ],
      },
    ],
  },
};
