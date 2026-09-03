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
        body: "Every application came with its own requirements, materials, and next steps. Context was constantly recreated across CVs, cover letters, applications, and interviews. As applications multiplied, the effort wasn\u2019t just finding jobs. It was managing everything around each application.",
        media: [
          {
            layout: "center",
            items: [
              { src: "/images/fyASe6P3NXZ0bKrLXVLq0E2w6q8.png", alt: "The six steps behind every application", ratio: "364 / 863", width: "364px" },
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
              "I have to tweak my CV for every job, and in Germany the cover letter matters too. Sending the same one everywhere just doesn\u2019t work anymore",
            quoteBy: "\u2014 Darbara Singh, Product Designer",
            quoteInline: true,
            supportLabel: "Insight",
            support:
              "Tailoring applications was the most time-consuming part of the job search. Users needed faster ways to personalize resumes and cover letters without compromising quality.",
            media: [
              { layout: "wide", items: [{ src: "/images/deck/theme-personalized.png", alt: "Job description analysed into a tailored resume and cover letter", ratio: "1600 / 610" }] },
            ],
          },
          {
            no: "02",
            title: "ATS Optimization",
            quote:
              "Everyone keeps talking about ATS these days... before I apply, I compare my CV with the job description using AI",
            quoteBy: "\u2014 Marlin Rode, Frontend Developer",
            quoteInline: true,
            supportLabel: "Insight",
            support:
              "Candidates increasingly relied on ATS checkers and manually compared resumes with job descriptions to improve their chances of reaching recruiters. Identifying the right keywords had become an additional step in every application.",
            media: [
              { layout: "wide", items: [{ src: "/images/deck/theme-ats.png", alt: "ATS match analyzer scoring a resume against a job description", ratio: "1600 / 630" }] },
            ],
          },
          {
            no: "03",
            title: "Unified Workspace",
            quote:
              "By the time someone emails me back, the job posting has disappeared, I can\u2019t remember which CV I sent, where I saved the cover letter, or what the role was actually looking for.",
            quoteBy: "\u2014 Jackob Shimoy, Product Manager",
            quoteInline: true,
            supportLabel: "Insight",
            support:
              "As applications progressed, important information became scattered across job portals, emails, folders, spreadsheets, and documents. Reconstructing the full context of an application often took longer than expected, especially during interviews and follow-ups.",
            media: [
              { layout: "wide", items: [{ src: "/images/deck/theme-workspace.png", alt: "One workspace holding the job description, documents and contacts", ratio: "1600 / 580" }] },
            ],
          },
          {
            no: "04",
            title: "Frictionless Onboarding",
            quote:
              "I already uploaded my CV... why am I filling in my work experience, education, and address all over again? After a few applications, those long forms get really tiring.",
            quoteBy: "\u2014 Leonard Fischer, Backend Developer",
            quoteInline: true,
            supportLabel: "Insight",
            support:
              "While we couldn\u2019t eliminate repetitive forms across external job portals, we could remove the same friction from our own onboarding experience.",
            media: [
              { layout: "wide", items: [{ src: "/images/deck/theme-onboarding.png", alt: "Upload a CV and have profile details extracted automatically", ratio: "1600 / 550" }] },
            ],
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
                src: "/embeds/tracka-user-journey.html",
                alt: "Interactive first-time and returning user journeys",
                ratio: "1152 / 979",
                kind: "embed",
              },
            ],
          },
          { layout: "wide", items: [{ src: "/images/YEjleZD455mfl5bIJBjeFDKeoi0.png", alt: "Journey comparison", ratio: "1152 / 412" }] },
          { layout: "wide", items: [{ src: "/images/IIGp5fjqkwugqytphjGK6WII88E.png", alt: "Feature prioritisation", ratio: "1152 / 344" }] },
        ],
      },
      {
        eyebrow: "Product Hierarchy",
        title: "Defining the Information Hierarchy",
        body: "Before moving into UI design, I defined the information architecture and key user entry points. The experience separates marketing, authentication, onboarding, and the core workspace into a clear navigation structure, creating an intuitive journey for both first-time and returning users.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/deck/ia-hierarchy.png", alt: "Product hierarchy from marketing and authentication through onboarding to the core workspace", ratio: "1600 / 840" },
            ],
          },
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
        eyebrow: "Design to Code",
        title: "Applying the Design System to the Structure",
        media: [
          {
            layout: "grid4",
            items: [
              { src: "/images/deck/dtc-figma.png", alt: "Figma design system: foundations, components and documentation", ratio: "1120 / 2456" },
              { src: "/images/deck/dtc-mcp.png", alt: "MCP server exposing the design context to AI", ratio: "1120 / 1320" },
              { src: "/images/deck/dtc-copilot.png", alt: "AI copilot extracting, structuring and defining the system", ratio: "1120 / 2196" },
              { src: "/images/deck/dtc-markdown.png", alt: "DESIGN_SYSTEM.md as the documented source of truth", ratio: "1120 / 1656" },
            ],
          },
        ],
      },
      {
        eyebrow: "Concept Exploration",
        title: "Exploring Ways to Structure the Experience",
        body: "I explored multiple ways to connect Tracka\u2019s three core workflows and tested different navigation and information structures.This helped me narrow the exploration to the direction that provided the clearest structure while keeping the three core workflows connected.",
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
        eyebrow: "Wireframing",
        title: "From Concept to a Clearer Structure",
        blocks: [
          { title: "Information Hierarchy", body: "Prioritized content and actions across each screen." },
          { title: "Interaction Flow", body: "Defined how users move through key tasks and states." },
          { title: "AI Context", body: "Captured the structure and behaviour needed to guide AI production." },
        ],
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/deck/wireframe-to-ui.png", alt: "Hand-drawn wireframe translated into the job tracker interface", ratio: "1600 / 596" },
            ],
          },
        ],
      },
      {
        eyebrow: "Lo-fi to Hi-fi",
        title: "Applying the Design System to the Structure",
        blocks: [
          { title: "Visual Balance", body: "Checked hierarchy, spacing, density, and composition." },
          { title: "Refinement", body: "Adjusted the design system where the application revealed inconsistencies or visual issues." },
          { title: "System Fit", body: "Assessed how well the design system translated across components, layouts, and light and dark modes." },
        ],
        media: [
          {
            layout: "grid2",
            items: [
              { src: "/images/deck/hifi-light.png", alt: "Job tracker in light mode", ratio: "1600 / 1040" },
              { src: "/images/deck/hifi-dark.png", alt: "Job tracker in dark mode", ratio: "1600 / 1137" },
            ],
          },
        ],
      },
      {
        eyebrow: "Design to Code",
        title: "Applying the Design System to the Structure",
        media: [
          {
            layout: "grid3",
            items: [
              { src: "/images/deck/cpac-package.png", alt: "AI context package of markdown, tokens and HTML examples", ratio: "1216 / 2064" },
              { src: "/images/deck/cpac-mcp.png", alt: "Figma MCP design context", ratio: "1216 / 1332" },
              { src: "/images/deck/cpac-prompt.png", alt: "CPAC prompt: context, purpose, action, constraints", ratio: "1216 / 2064" },
            ],
          },
        ],
      },
      {
        eyebrow: "Technical Architecture",
        title: "Building a Scalable Architecture",
        body: "Rather than building custom infrastructure, I evaluated modern tools that could accelerate development while keeping costs low and maintenance minimal. The architecture prioritizes rapid iteration today, with the flexibility to replace individual services as the product scales.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/deck/tech-architecture.png", alt: "ATS scoring engine, data layer and AI features, and the flows between them", ratio: "1600 / 1016" },
            ],
          },
        ],
      },
      {
        eyebrow: "Business Logic",
        title: "Building a Consistent ATS Scoring System",
        body: "The Problem - Tracka initially used an LLM to calculate ATS scores. Because the model could interpret the same CV and job description differently across runs, the same application would receive different scores. The Decision - I separated AI interpretation from scoring. The LLM extracts the key requirements from the job description, while a Business Logic Engine applies fixed rules and weights to calculate the score. The result is consistent, transparent, and repeatable. The same input always produces the same score.",
        blocks: [{ title: "How It Works" }],
        media: [
          {
            layout: "grid5",
            items: [
              { src: "/images/deck/ats-step-1.png", alt: "1. Read structured data", ratio: "1000 / 972" },
              { src: "/images/deck/ats-step-2.png", alt: "2. Match and map", ratio: "1000 / 972" },
              { src: "/images/deck/ats-step-3.png", alt: "3. Score per dimension", ratio: "1000 / 972" },
              { src: "/images/deck/ats-step-4.png", alt: "4. Apply weights", ratio: "1000 / 972" },
              { src: "/images/deck/ats-step-5.png", alt: "5. Final score", ratio: "1000 / 972" },
            ],
          },
        ],
      },
      {
        eyebrow: "Feedback",
        title: "Testing out with Real Users",
        body: "I combined continuous in-product feedback with moderated testing sessions to understand both the problems users reported and the friction I observed while they used Tracka.",
        blocks: [
          { title: "In-Product Feedback", body: "Users could report issues directly in Tracka, describe what they experienced, and attach screenshots. Submissions were sent to me by email." },
          { title: "Moderated Testing", body: "I observed users completing key tasks, listened to their feedback, and captured moments of hesitation, confusion, and unmet expectations." },
        ],
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/deck/feedback-testing.png", alt: "In-product feedback form alongside a moderated testing session", ratio: "1600 / 420" },
            ],
          },
        ],
      },
      {
        eyebrow: "Feedback Synthesis",
        title: "Mapping Feedback to the User Journey",
        body: "I mapped reported issues and observed friction to the relevant stages of the journey. This helped me identify where problems occurred, understand their impact, and prioritise the changes that would improve the experience.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/deck/feedback-synthesis.png", alt: "Feedback and the resulting design change mapped against each journey stage", ratio: "1600 / 660" },
            ],
          },
        ],
      },
      {
        eyebrow: "Design Trade-off",
        title: "Choosing Reliability Over Automation",
        body: "I wanted to make adding a job to the Tracker as effortless as possible, while keeping the experience automated, reliable, and consistent.",
        blocks: [
          { title: "Original Approach", body: "Users pasted a job URL. A crawler extracted the webpage content, and an LLM populated the job details." },
          { title: "The Challenge", body: "Different job boards use different structures, making URL extraction unreliable and inconsistent." },
          { title: "Product Decision", body: "Users paste the job description instead. The LLM extracts and populates the relevant job details automatically." },
          { title: "The Outcome", body: "Job details could be extracted consistently, regardless of the source website." },
        ],
        media: [
          { layout: "wide", items: [
            { src: "/images/deck/tradeoff-steps.png", alt: "Original approach, the challenge, the product decision and the outcome", ratio: "1900 / 319" },
          ] },
          { layout: "grid2", items: [
            { src: "/images/deck/tradeoff-add-job.png", alt: "The original add-a-job modal built around URL extraction", ratio: "1600 / 1695" },
            { src: "/images/deck/tradeoff-outcome.png", alt: "Finding a job on a job portal and bringing it into Tracka", ratio: "1600 / 1607" },
          ] },
        ],
      },
      {
        eyebrow: "Impact",
        title: "Testing Tracka Against Familiar Workflows",
        body: "I tested the same resume-tailoring task across three workflows to understand whether Tracka could reduce the time and effort required to adapt a resume for a specific job.",
        blocks: [
          { title: "3 Users", body: "Three participants from the same field." },
          { title: "3 Workflows", body: "Tracka, plus two alternatives chosen based on the participants\u2019 shared prior experience." },
          { title: "Same Task", body: "Same job description, same starting resume, same AI assistance." },
        ],
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/deck/impact-table.png", alt: "Time taken per user across Word, Canva and Tracka", ratio: "1600 / 900" },
            ],
          },
        ],
      },
      {
        eyebrow: "Impact",
        title: "Tracka was fast, and refinement can make it faster",
        body: "The comparative test showed that Tracka reduced the time needed to create a tailored cover letter, while also revealing opportunities to streamline the workflow further.",
        metrics: [
          { value: "33.2%", label: "Faster than Word doc + AI" },
          { value: "26.8%", label: "Faster than Canva + AI" },
          { value: "15.4 min", label: "Median time with Tracka" },
          { value: "3/3", label: "Would use Tracka again" },
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
            body: "Building Tracka required defining product behavior for situations where a single rule wasn\u2019t enough. For example, deciding which theme the application should display meant evaluating multiple signals before reaching a final decision. This taught me to design layered decision paths that keep the experience predictable even when preferred inputs aren\u2019t available.",
            media: [
              {
                layout: "grid4",
                items: [
                  { src: "/images/deck/fallback-1.png", alt: "1. Check user preference", ratio: "1088 / 972" },
                  { src: "/images/deck/fallback-2.png", alt: "2. Check device preference", ratio: "1088 / 972" },
                  { src: "/images/deck/fallback-3.png", alt: "3. Check local time", ratio: "1088 / 972" },
                  { src: "/images/deck/fallback-4.png", alt: "4. Fallback action", ratio: "1088 / 972" },
                ],
              },
            ],
          },
          {
            no: "02",
            title: "Consistency & Reliability: Reliable products build more trust than clever features.",
            media: [
              { layout: "wide", items: [{ src: "/images/L5HpHx26RmmM7uvn63gekQPcLE.png", alt: "Consistency and reliability", ratio: "1152 / 193" }] },
            ],
            body: "While designing the job tracker, I initially allowed users to add a job by pasting a job posting URL. Since different job boards use different page structures, universal URL extraction wasn\u2019t practical. Instead of forcing the feature to work everywhere, I redesigned the workflow so users paste the job description directly while the AI automatically extracts and fills the required fields. This reinforced that reliability creates more value than automation that only works in certain situations.",
          },
          {
            no: "03",
            title: "Continuous Refinement: A design system evolves through continuous feedback.",
            media: [
              { layout: "wide", items: [{ src: "/images/deck/refinement-loop.png", alt: "Review AI output, identify gaps, update the Figma system, re-extract context, keep context fresh", ratio: "1900 / 318" }] },
            ],
            body: "While building Tracka with an AI coding assistant, I found that every new feature introduced new components, variants, and design refinements. Simply updating the design system in Figma wasn\u2019t enough because the AI also needed the latest design context to generate consistent interfaces. I learned to establish a feedback loop that kept both the design system and the AI aligned as the product evolved.",
          },
        ],
      },
      {
        eyebrow: "User Feedback",
        title: "Build a tailored job application in under 15 minutes.",
        body: "Tracka is live and continuously evolving through feedback from early users. I\u2019m refining the experience with each iteration before making it available to everyone. Below are a few comments shared by people who have used it so far.",
        blocks: [
          { no: "01", title: "Marla Rode, Forest Auditor", body: "I kept losing track of which companies replied and which ones didn\u2019t. This made things a bit less chaotic for me, especially during busy weeks." },
          { no: "02", title: "Hannah Petrova, Costume Designer", body: "The cover letter part is surprisingly decent. I still edit everything myself, but it helped me stop starting at a blank page every time." },
          { no: "03", title: "Rohan S, Software Engineer", body: "I was using Notes and random bookmarks before. This feels cleaner. Still figuring it out, but at least applications aren\u2019t scattered anymore." },
        ],
      },
    ],
  },
};
