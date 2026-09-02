// Case-study content pulled from the Framer project (MCP).
// Interactive HTML/CSS/JS embeds from the original are noted as TODO — text ported first.

export type Finding = {
  no: string;
  title: string;
  quote?: string;
  quoteBy?: string;
  support?: string;
  impact?: string;
};



/** One image or clip inside a case study. `ratio` is the live rendered aspect. */
export type Figure = {
  src: string;
  alt: string;
  ratio: string;
  /** Cap for layouts that do not stretch the tile (e.g. "center"). */
  width?: string;
  /** Corner radius as rendered on the live site; defaults to square. */
  radius?: string;
  rounded?: boolean;
  kind?: "video";
};

/** A row of figures. See components/Figure.tsx for what each layout means. */
export type Gallery = {
  layout:
    | "wide"
    | "grid3"
    | "grid2"
    | "half"
    | "halfRight"
    | "portraitPair"
    | "center"
    | "full";
  items: Figure[];
};

export type Block = {
  no: string;
  title: string;
  body: string;
  /** Plates that sit under this sub-heading, as on the live pages. */
  media?: Gallery[];
};

export type Metric = { value: string; label: string };

/**
 * One band of a case study. The live pages label each with its own eyebrow
 * ("Objective", "Business Impact", "Analysis", "Interaction Workflow",
 * "Design Advocacy"...) and order them differently per study, so this is an
 * ordered list rather than a fixed set of named slots.
 */
export type StudySection = {
  eyebrow: string;
  title?: string;
  body?: string;
  blocks?: Block[];
  findings?: Finding[];
  metrics?: Metric[];
  media?: Gallery[];
  /** Small print under the section's media. */
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  meta: { label: string; value: string }[];
  /** Banner above the title, as on the live site. */
  hero?: Gallery;
  sections: StudySection[];
};

export const caseStudies: Record<string, CaseStudy> = {
  access_now: {
    slug: "access_now",
    name: "Access Now",
    headline:
      "Building an Inclusive Product with an Accessible Design System, Accelerating Design Handoff by 27%",
    summary:
      "Revamping a medical product for the US market to ensure ADA compliance and drive wider adoption. My client, who offers a medicare product suite for the U.S. market, was facing challenges because their offerings were not compliant with the U.S. accessibility requirements. As the UX Lead on this project, I led the redesign of their flagship medical product and conducted UAT with real users of assistive technologies who have visual disabilities.",
    meta: [
      { label: "Client", value: "Wipro (Internal Product)" },
      { label: "Duration", value: "6 months" },
      { label: "Industry", value: "Healthcare Insurance" },
      {
        label: "Scope of Work",
        value: "Accessibility Design · Design System · User Acceptance Testing",
      },
    ],
    hero: {
      layout: "wide",
      items: [
        {
          src: "/images/f0OA58mX9qCOCJclp3K48XNjro.png",
          alt: "Access Now product screens",
          ratio: "1110 / 672",
        },
      ],
    },
    sections: [
      {
        eyebrow: "Objective",
        title: "A Legacy Platform That Didn’t Meet Its Users’ Needs",
        body: "The client had a healthcare product built for Medicare plan members in the U.S, enabling them to manage their health plans, benefits, claims, and payments through a unified digital experience. Medicare plans primarily serve adults aged 65 and older, people under 65 with certain qualifying disabilities, and people with long-term medical conditions. Despite serving a user base with significant accessibility and usability needs, the legacy product was neither intuitive for older adults nor accessible to people relying on assistive technologies. The redesign needed to modernise the user experience while achieving WCAG compliance and meeting U.S. accessibility requirements — creating a senior-friendly, inclusive experience that reduced legal and compliance risk without disrupting existing healthcare workflows."
      },
      {
        eyebrow: "Discovery",
        title: "Understanding the Problem Beyond Compliance",
        media: [
          {
            layout: "grid3",
            items: [
              { src: "/images/cnMFEityxCm6so3X8q1VAdmZnVI.png", alt: "Accessibility and heuristic evaluation", ratio: "352 / 345", rounded: true },
              { src: "/images/rE890x8TdwGicnNvCiSqyCljeGY.png", alt: "Stakeholder discovery workshop", ratio: "352 / 345", rounded: true },
              { src: "/images/w6tcePsmOGIC636jAKev622bf8.png", alt: "Moderated user testing session", ratio: "352 / 345", rounded: true },
            ],
          },
        ],
        body: "Before proposing solutions, I wanted to understand whether the challenges were caused by accessibility barriers, usability issues, or both. I combined expert evaluation, stakeholder insights, and user research to identify the highest-impact opportunities.",
        blocks: [
          {
            no: "01",
            title: "Accessibility & Heuristic Evaluation",
            body: "Reviewed the product against Nielsen Norman usability heuristics and WCAG accessibility guidelines to identify usability issues, accessibility gaps, and inconsistent interaction patterns.",
          },
          {
            no: "02",
            title: "Stakeholder Discovery Workshops",
            body: "Collaborated with product managers, engineers, and business stakeholders to understand business goals, technical constraints, and recurring feedback received from customers.",
          },
          {
            no: "03",
            title: "Moderated User Testing",
            body: "Observed users with visual and hearing disabilities completing common tasks using assistive technologies. Through moderated sessions and screen sharing, I identified areas of friction throughout the experience.",
          },
        ]
      },
      {
        eyebrow: "Synthesis",
        title: "Key Research Findings",
        media: [
          { layout: "half", items: [{ src: "/images/l4jOXmRKhJuAi4Vs3phyxKiTo.jpg", alt: "Research synthesis board", ratio: "552 / 340", rounded: true }] },
          { layout: "half", items: [{ src: "/images/2r9utmvCNQaNmQbC8af4a3kp89k.jpg", alt: "Affinity mapping of findings", ratio: "552 / 443", rounded: true }] },
          {
            layout: "portraitPair",
            items: [
              { src: "/images/3jGHNPpb1gpwiWzLQ40X0Rvc.jpg", alt: "Assistive technology testing", ratio: "252 / 543", rounded: true },
              { src: "/images/TDQ0v0hiB3php81bnyeeVkr3iIY.jpg", alt: "Screen reader walkthrough", ratio: "252 / 543", rounded: true },
            ],
          },
          { layout: "full", items: [{ src: "/video/Bg3EZMZeCz8GdHAFGYfbnuRtwA.mp4", alt: "Prototype walkthrough", ratio: "1280 / 150", kind: "video" }] },
        ],
        body: "Findings from user research, stakeholder workshops, accessibility audits, and heuristic evaluation revealed the most critical barriers affecting usability, accessibility, and business outcomes.",
        findings: [
          {
            no: "01",
            title: "Accessibility Barriers Reduced Task Success Rate",
            quote:
              "I can’t always tell what’s clickable, especially when I’m using 400% zoom, and my screen reader doesn’t give me enough context.",
            quoteBy: "User relying on assistive technologies",
            support:
              "68% of audited screens contained at least one WCAG colour contrast violation. 5 of 6 participants struggled to distinguish tertiary links from supporting text because colour was the only visual indicator.",
            impact:
              "Increased risk of ADA and WCAG non-compliance. Lower task completion for users relying on assistive technologies.",
          },
          {
            no: "02",
            title: "Inconsistent Design Patterns Slowed Decision Making",
            quote:
              "I rely on familiar patterns to navigate. When every screen uses different buttons and form layouts, I have to relearn the interface over and over.",
            quoteBy: "User relying on assistive technologies",
            support:
              "7 of 10 audited screens lacked a clear distinction between primary and secondary buttons. Long forms contained up to 18–24 input fields on one page before users reached the next major section.",
            impact:
              "Estimated 31% longer task completion time for first-time users. Higher drop-off during multi-step enrolment journeys. Greater development effort due to inconsistent UI implementation.",
          },
          {
            no: "03",
            title: "Application Was Not Optimized for Mobile Devices",
            quote:
              "Our analytics show that more and more users are accessing the platform on mobile, but the application isn’t optimized for smaller screens. It’s contributing to higher drop-off rates.",
            quoteBy: "Product Manager",
            support:
              "WebAIM research shows that 90% of screen reader users access the web using a mobile screen reader. Fixed-width layouts required users to zoom and scroll horizontally to complete key healthcare tasks.",
            impact:
              "With an estimated 30–40% of users on mobile, the desktop-first experience risked affecting a significant portion of the customer base and increased task abandonment on smaller screens.",
          },
        ]
      },
      {
        eyebrow: "Solution",
        title: "How I Improved the Overall User Experience",
        media: [
          {
            layout: "grid2",
            items: [
              { src: "/images/JjkM4aIGwDfsDQZd1GVWPoKCdk.png", alt: "Redesigned dashboard", ratio: "552 / 313" },
              { src: "/images/DwMGPjO7IPxAGwiVgA897RWcOwI.png", alt: "Redesigned claims flow", ratio: "552 / 313" },
            ],
          },
          {
            layout: "grid2",
            items: [
              { src: "/images/ZGJ9fY6rWT08w9d9g6tsNqeVWbk.png", alt: "Accessible form patterns", ratio: "446 / 253" },
              { src: "/images/GNHZ4A77qlrfB2PHOXUCG7Ji8ps.png", alt: "Focus and contrast states", ratio: "446 / 253" },
            ],
          },
          { layout: "center", items: [{ src: "/images/AZ2YY1OCKwquvzp5kP8pHtqcX8.png", alt: "Mobile member portal", ratio: "344 / 475", width: "344px" }] },
          { layout: "full", items: [{ src: "/images/5XPoAP7xb7e7FA8M0puFHGZCG88.png", alt: "Accessible design system overview", ratio: "1280 / 1031" }] },
        ],
        body: "Guided by the research findings, I redesigned the experience to address the most critical accessibility and usability challenges — applying inclusive design principles and WCAG guidelines to create a more intuitive, consistent, and accessible product.",
        blocks: [
          {
            no: "01",
            title: "Making Colour Accessible and Readable",
            body: "Through direct interaction with users who rely on high-contrast settings, I gained insight into their visual needs. These learnings informed colour combinations that meet WCAG standards, significantly improving readability, clarity, and overall usability across the product.",
          },
          {
            no: "02",
            title: "Structuring Visual Hierarchy Using Gutenberg Principles",
            body: "Applied Gutenberg’s diagram to establish a clear visual flow and guide user attention toward key actions. Repositioning content and CTAs along natural reading paths made the interface more intuitive, improving scanability and engagement.",
          },
          {
            no: "03",
            title: "Optimizing UI for Users with Assistive Tech",
            body: "Established descriptive placeholders, persistent labels, and clear error/success indicators. ARIA labels were defined for all interactive elements, ensuring screen reader clarity. These enhancements were embedded into the design system, making accessibility the default standard.",
          },
          {
            no: "04",
            title: "Designing Responsive Experiences Across Breakpoints",
            body: "Developed responsive prototypes using defined breakpoints for mobile, tablet, and desktop. Auto layout and constraints ensured consistent scaling of layouts, touch targets, and typography for a seamless experience across devices.",
          },
        ]
      },
      {
        eyebrow: "Impact",
        title: "Measurable Business & User Impact",
        metrics: [
          {
            value: "2.2×",
            label:
              "Better readability — 67% → 13% task failure rate for users with low vision, through improved colour contrast and inline validation (moderated usability testing).",
          },
          {
            value: "27%",
            label:
              "Faster design handoff — a shared design system and reusable components reduced design-to-development handoff time (scrum master data).",
          },
          {
            value: "4 in 5",
            label:
              "Better action recognition — CTA recognition improved from 1 in 3 to 4 in 5 users with disability, through clearer button hierarchy and interaction states.",
          },
        ]
      },
      {
        eyebrow: "Reflection",
        title: "How This Project Changed My Thinking",
        body: "This project challenged a few assumptions I had and changed how I think about designing accessible, scalable products.",
        blocks: [
          {
            no: "01",
            title: "Accessibility is Becoming an AI Readiness Strategy",
            body: "Accessible, semantically structured products are easier for both users and AI to understand. With Gartner forecasting a 25% decline in traditional search by 2026, accessibility is becoming a competitive advantage, not just a compliance requirement.",
          },
          {
            no: "02",
            title: "Design Systems are Becoming a Business Investment",
            body: "Figma found designers complete tasks 34% faster using design systems, while Forrester reported 20–30% higher developer productivity. It changed how I view design systems — from a design initiative to a strategic business investment.",
          },
          {
            no: "03",
            title: "Consistency Matters Most When Designing for Older Adults",
            body: "Nielsen Norman Group research found that predictable interaction patterns help older users build confidence and complete tasks more successfully. Consistency is more than a design principle — it’s a usability tool.",
          },
        ]
      },
    ],
  },

  member_portal: {
    slug: "member_portal",
    name: "Member Portal",
    headline:
      "Data-Driven Digital Transformation of a Healthcare Insurance App with 5M+ Downloads on Google Play",
    summary:
      "As a Product Designer at an Indian consultancy, I worked on a 1.5-year project with a leading healthcare insurer. Starting with a UX audit, we rebuilt their incomplete mobile app from scratch with a new IA and new components in the design system.",
    meta: [
      { label: "Client", value: "United Healthcare Group" },
      { label: "Duration", value: "18 months" },
      { label: "Industry", value: "Healthcare Insurance" },
      { label: "Scope of Work", value: "App Design · Information Architecture · Design System" },
    ],
    hero: {
      layout: "wide",
      items: [
        { src: "/images/9dPytogKpslavi9lGu7pupli6g.gif", alt: "Member Portal case study", ratio: "1216 / 814" },
      ],
    },
    sections: [
      {
        eyebrow: "Objective",
        title: "Closing the Gap Between Portal and Mobile",
        body: "The client’s insurance agents work in the field, not at a desk, and had decided to make mobile their main channel. But the app was still missing features the legacy web portal had, so agents kept getting pulled back to desktop. Users were leaving mid-task — mobile drop-off ran well above the portal for the same actions. Support absorbed the overflow, with over 15,000 calls a month from members who got stuck on the app. And roughly half the portal’s features hadn’t made it into the app yet."
      },
      {
        eyebrow: "Discovery",
        title: "UX Audit & Key Findings",
        media: [
          { layout: "half", items: [{ src: "/images/4BfM8vfOJ28Nn1gvhGlHOtpUTW8.png", alt: "Complex navigation audit", ratio: "352 / 416", radius: "24px" , width: "352px"}] },
          { layout: "halfRight", items: [{ src: "/images/TzMN54p9mY4McvUUg7HNbLmW4w.png", alt: "Unclear call-to-action audit", ratio: "371 / 472", radius: "24px" , width: "371px"}] },
          { layout: "half", items: [{ src: "/images/XVF7lubG4aSHdDyIdYiiwrSics.png", alt: "Complex form structures audit", ratio: "371 / 472", radius: "24px" , width: "371px"}] },
          { layout: "halfRight", items: [{ src: "/images/aQdPDGSUnioclPASar0F9Sm0bdE.png", alt: "Missing search audit", ratio: "371 / 472", radius: "24px" , width: "371px"}] },
        ],
        body: "Before touching any screens, I ran a UX audit against NN Group heuristics and cross-checked it with two quarters of analytics and support ticket data. Four patterns kept showing up, and each one was quietly costing the business money.",
        blocks: [
          {
            no: "01",
            title: "Complex Navigation",
            body: "“I know this feature exists somewhere, I just never know which menu it’s hiding in.” — Product Analyst. Users took 4 to 6 taps to reach screens that should have taken 2. Every extra tap meant more abandoned tasks flowing straight into support call volume.",
          },
          {
            no: "02",
            title: "Unclear Call-to-Action",
            body: "“I wasn’t sure if tapping that would submit my claim or just save it.” — Insurance Agent. About 3 in 5 users hesitated or picked the wrong action on core screens during interviews.",
          },
          {
            no: "03",
            title: "Complex Form Structures",
            body: "“On mobile I have to scroll left and right just to fill out one form. I’d rather do it on desktop.” — Insurance Agent. Claims and enrollment forms had the highest drop-off in the app, around 40% — the biggest single driver of support calls.",
          },
          {
            no: "04",
            title: "Lack of Search Functionality",
            body: "“It takes me longer to find the record than to actually do the work.” — Support Staff. Finding the right plan took over 90 seconds on average, so members gave up and switched to desktop.",
          },
        ]
      },
      {
        eyebrow: "Solution",
        title: "Solutions Mapped to the Audit Findings",
        media: [
          {
            layout: "grid2",
            items: [
              { src: "/images/b8y7sSEzHNKqiJvNCPbe9t4cg.png", alt: "Simplified navigation", ratio: "628 / 421" },
              { src: "/images/DwGsmAvGmMvMsFAcoHNxgfX4I.png", alt: "Focused primary action", ratio: "203 / 421" },
            ],
          },
          { layout: "center", items: [{ src: "/images/RnninTV2md2x7JBJSglnAqKX9U.png", alt: "Redesigned member dashboard", ratio: "600 / 586", width: "600px" }] },
          { layout: "center", items: [{ src: "/images/aR9W0ECwmb0A9lACmtnxzurCeE.png", alt: "Streamlined form flow", ratio: "262 / 525", width: "262px" }] },
          {
            layout: "grid2",
            items: [
              { src: "/images/YMmNg5RoIAtZ9AGQvmaNllff2FU.png", alt: "Search and filtering", ratio: "670 / 368", radius: "12px" },
              { src: "/images/7IQJUxN4YeaG2rOEKvDOG0HF5tw.png", alt: "Mobile parity", ratio: "299 / 374" },
            ],
          },
        ],
        body: "Each fix responds directly to a finding from the audit. The goal wasn’t a redesign for its own sake — it was to solve the specific problems agents were running into every day.",
        blocks: [
          {
            no: "01",
            title: "Fixing the App’s Information Architecture",
            body: "The app still ran on the web portal’s IA — a structure built for a desktop screen, not a phone. I rebuilt it from scratch based on real usage: ran card-sorting sessions, reorganized 40+ screens into 5 task-based groups (cutting navigation depth by half), and validated with tree testing before wireframing.",
          },
          {
            no: "02",
            title: "Setting Navigation Hierarchy from Analytics Data",
            body: "Rather than guess what agents saw first, I pulled Google Analytics data on page views and engagement time and let usage set the order. Most-used features went into the bottom nav for one-tap access; the hamburger menu was ordered most-used to least.",
          },
          {
            no: "03",
            title: "Building Mobile Components for the Design System",
            body: "There was no mobile component library, so developers defaulted to their own solutions screen by screen. I extended the client’s existing design system — buttons, form fields, cards, navigation elements and interaction states — and standardized CTA labels for action clarity.",
          },
          {
            no: "04",
            title: "Turning Long Forms Into Guided Steps",
            body: "Using the new form-field components, I broke multi-column desktop layouts into single-column flows, removed horizontal scroll entirely, split long forms into labeled steps with a visible progress indicator, and moved to immediate success/error feedback instead of post-submission validation.",
          },
          {
            no: "05",
            title: "Introduced Search & Filtering to Improve Data Discovery",
            body: "Finding claims data or a check application took over 90 seconds with no way to search. I defined search and filter categories from business workflows, designed clear empty/loading/no-results states, and specified filter-chip behavior, multi-select patterns, and clear/reset interactions.",
          },
        ]
      },
      {
        eyebrow: "Impact",
        title: "Measurable Business & User Impact",
        media: [
          {
            layout: "grid3",
            items: [
              { src: "/images/TeIvsNJgRD2FayZrptxBbautI.png", alt: "Adoption metric", ratio: "296 / 296", radius: "24px" },
              { src: "/images/txOOsTpVEKtsjhPxV75EabF3rwo.png", alt: "Task completion metric", ratio: "288 / 288", radius: "24px" },
              { src: "/images/fE8T7KtXCbDlHDPyumc6gIfs.png", alt: "Support load metric", ratio: "288 / 288", radius: "24px" },
            ],
          },
        ],
        metrics: [
          {
            value: "+12%",
            label:
              "Higher user engagement — mobile app usage rose within the first month, with more agents choosing mobile in their daily workflow (Google Analytics).",
          },
          {
            value: "68 → 91",
            label:
              "Improved accessibility — Lighthouse Accessibility Score, reflecting a more inclusive experience (Lighthouse, Axe & manual testing).",
          },
          {
            value: "−24%",
            label:
              "Faster task completion — simplified navigation and fewer interaction steps reduced task time in usability testing.",
          },
        ]
      },
      {
        eyebrow: "Reflection",
        title: "What This Project Taught Me",
        media: [
          {
            layout: "grid3",
            items: [
              { src: "/images/cf4S1rIIHoppVD27U4diTvJvl8.png", alt: "Final screens, left", ratio: "438 / 879" },
              { src: "/images/2BpfDGbz2myEIbvBNiCTGvt5bg.png", alt: "Final screens, centre", ratio: "490 / 983" },
              { src: "/images/yfM9UzbAkuUdabCGggUF93UNF3M.png", alt: "Final screens, right", ratio: "438 / 879" },
            ],
          },
        ],
        body: "Beyond improving accessibility and responsiveness, three lessons I’ll carry into future projects.",
        blocks: [
          {
            no: "01",
            title: "Design Decisions Need Evidence",
            body: "Stakeholders disagreed on which features belonged in the bottom nav. Rather than rely on opinions, we used product analytics to see which features users accessed most and structured navigation around actual behaviour. Analytics isn’t just a reporting tool — it’s an essential input for UX decisions.",
          },
          {
            no: "02",
            title: "Platform Shapes Information Architecture",
            body: "The mobile experience was based on the web portal’s IA. The same structure that worked on desktop created unnecessary complexity on mobile. Designing around the mobile context produced a simpler navigation model and quicker access to frequent features.",
          },
          {
            no: "03",
            title: "Alignment Is Part of the Design Process",
            body: "Adding search, filtering and sorting seemed straightforward until business expectations and technical constraints diverged. Collaborative stakeholder workshops helped prioritise the most valuable, feasible features. Design isn’t just about creating interfaces — it’s about aligning people around practical solutions.",
          },
        ]
      },
    ],
  },

  desi_aroma: {
    slug: "desi_aroma",
    name: "Desi Aroma",
    headline: "Women’s Empowerment Initiative — From concept to scalable experience.",
    summary:
      "Founded by two NID alumni, Desi Aroma is a community-driven initiative that empowers housewives in Gandhinagar by transforming their love for home-cooked food into a source of income and recognition, while serving affordable, wholesome meals to students.",
    meta: [
      { label: "Client", value: "Student Project" },
      { label: "Duration", value: "2 Months" },
      { label: "Industry", value: "Social Innovation" },
      {
        label: "Scope of Work",
        value:
          "Service Design · System Design · Brand Design · Mobile App · UX/UI · Video Production",
      },
    ],
    hero: {
      layout: "wide",
      items: [
        { src: "/images/0SMOdOOz4ZNWbgzkgp9E1xwTYfc.jpg", alt: "Desi Aroma case study", ratio: "1216 / 760" },
      ],
    },
    sections: [
      {
        eyebrow: "Objective",
        title: "Creating Economic Opportunities for Housewives While Meeting Student Needs",
        body: "Many women in Gandhinagar were looking for flexible ways to earn an income while managing their families, while many students lived away from home and missed the comfort of home-cooked food. We saw food as the natural connection between these two communities and explored how homemade food could bring the feeling of home to students while creating flexible earning opportunities for women.",
      },
      {
        eyebrow: "System Mapping",
        title: "System-Level Analysis of gandhinagar",
        body: "Primary & Secondary Research · Focus Groups · System Mapping · Insights Articulation · Opportunity Mapping",
        media: [
          { layout: "wide", items: [{ src: "/images/SjsFFtOJgAJkUGJBosOOYUh0aUc.jpg", alt: "System map of Gandhinagar", ratio: "1094 / 669" }] },
        ],
        caption: "The above shows a system map of Gandhinagar.",
      },
      {
        eyebrow: "User Research",
        title: "From Observations to Insights",
        body: "Synthesizing user interviews and discussions to uncover patterns, needs, and opportunities that informed design decisions.",
        blocks: [
          { no: "01", title: "One-to-one interviews with potential customers", body: "Limited time to cook led to dependence on restaurants, carrying home-cooked food left meals cold and soggy, and existing services lacked authentic home-style taste — a strong need for fresh, homemade food." },
          { no: "02", title: "Food tasting workshop with students", body: "Willingness to pay ₹100–₹150 for non-veg meals, cost sensitivity and a preference for simple packaging, quantity transparency expected in online menus, and demand for personalization and portion options." },
          { no: "03", title: "One-to-one discussions with homemakers", body: "Family approval is critical for homemakers’ participation, their schedules revolve around family needs, retired individuals seek meaningful engagement, and stored homemade snacks fit anytime consumption needs." },
          { no: "04", title: "Insights from food business owners", body: "Cook selection is key to consistent homemade taste, a limited local market means the right customer targeting is needed, tracking customer preferences matters, and loyalty requires assurance and stability for home chefs." },
        ],
        media: [
          { layout: "center", items: [{ src: "/images/1C8DzuEyAy7rk5rkULtbQdAwVc.jpg", alt: "Field research", ratio: "209 / 266", width: "209px" }] },
        ],
      },
      {
        eyebrow: "Comparative Analysis",
        title: "From Existing Services to New Opportunities",
        body: "Benchmarking existing food services to understand the landscape, gaps, and opportunities for a community-driven model.",
        media: [
          { layout: "wide", items: [{ src: "/images/GV12Wz2AUp2nk0c1DpNpNk4Ds.jpg", alt: "Comparative analysis", ratio: "1018 / 573" }] },
        ],
        caption: "*Original artifacts shown as-is in 2018, not recreated.",
      },
      {
        eyebrow: "Stakeholder Mapping",
        title: "From Stakeholders to Service Ecosystem",
        body: "Mapping key stakeholders, relationships, and interactions to understand how the service could function within the wider ecosystem.",
        media: [
          { layout: "wide", items: [{ src: "/images/68k9G833PEFIVks3kQPJavkWGA.jpg", alt: "Stakeholder map", ratio: "1018 / 573" }] },
        ],
      },
      {
        eyebrow: "Journey Mapping",
        title: "From Individual Journeys to Shared Experiences",
        body: "Mapping the end-to-end experiences of home chefs and customers to uncover pain points, expectations, and opportunities.",
        media: [
          { layout: "wide", items: [{ src: "/images/KJB7Y0g0VMKzU1PktFiAxppgC8.jpg", alt: "Journey map", ratio: "1018 / 573" }] },
        ],
      },
      {
        eyebrow: "Service Blueprint",
        title: "From Experiences to Service Operations",
        body: "Translating customer and chef journeys into the operational processes and touchpoints needed to deliver the service.",
        media: [
          { layout: "wide", items: [{ src: "/images/yPgr4DLOyx05l44uilEH8ItRiVQ.png", alt: "Service blueprint", ratio: "1018 / 573" }] },
        ],
      },
      {
        eyebrow: "Brand Building",
        title: "From Service Concept to Brand Identity",
        body: "Translating the service concept into a cohesive brand through identity, communication, packaging, and marketing touchpoints.",
        media: [
          { layout: "wide", items: [{ src: "/images/s4cSCilOy9wpzPdYApUc4fpZWUQ.jpg", alt: "Brand identity", ratio: "1018 / 573" }] },
        ],
      },
      {
        eyebrow: "Concept Video",
        title: "From Concept to Story",
        body: "Bringing the service concept to life through a short video that communicates its value, vision, and experience to stakeholders.",
        media: [
          { layout: "wide", items: [{ src: "/video/j6bOtMAnk1jhu46ZoAclLZZjjaw.webm", alt: "Concept video", ratio: "1152 / 648", kind: "video" }] },
        ],
      },
      {
        eyebrow: "Key Service Metrics",
        title: "Key Service Metrics",
        metrics: [
          { value: "10", label: "Service POC Duration" },
          { value: "6", label: "Home Chefs" },
          { value: "135", label: "Total Orders" },
          { value: "81", label: "Total Customers" },
          { value: "62%", label: "Repeat Customers" },
        ],
      },
      {
        eyebrow: "Interface Design",
        title: "From Service to Product",
        body: "User Persona · User Flows · Wireframing · Design System · Prototyping · User Testing. An app-based platform was envisioned as part of the scaling strategy, and a prototype was developed to demonstrate its functionality and potential.",
        media: [
          { layout: "full", items: [{ src: "/images/3QRI5gCdHRlRKXEWUbFamb4GX8.jpg", alt: "Interface design", ratio: "1280 / 767" }] },
        ],
      },
    ],

  },

  aero_check: {
    slug: "aero_check",
    name: "Aero Check",
    headline:
      "Designing an AI-Assisted Validation Tool That Increased Processing Speed by 3.3×",
    summary:
      "As a consultant, I worked on a pilot project for Airbus to demonstrate how AI could assist in validating complex manufacturing diagrams. The goal was to explore how AI could reduce manual effort by identifying missing or inconsistent information and supporting engineers with a faster, more reliable validation workflow.",
    meta: [
      { label: "Client", value: "Airbus" },
      { label: "Duration", value: "4 weeks" },
      { label: "Industry", value: "Aviation" },
      { label: "Scope of Work", value: "AI-Driven · Enterprise SaaS · No-code" },
    ],
    hero: {
      layout: "wide",
      items: [
        { src: "/images/ThKHR9rfGkWENcL1AIy01Kos.gif", alt: "Aero Check case study", ratio: "1216 / 681" },
      ],
    },
    sections: [
      {
        eyebrow: "Objective",
        title:
          "Making Manufacturing Diagram Validation Faster Without Compromising Engineering Confidence",
        body: "Engineers previously validated diagrams manually by comparing drawings against Bill of Material (BOM) data and supporting information. The repetitive process made validation time-consuming and required engineers to repeatedly cross-reference multiple sources. The objective was to reduce validation time by automating repetitive comparisons while ensuring every AI recommendation remained transparent, reviewable, and under human control."
      },
      {
        eyebrow: "Business Impact",
        title: "Reducing Validation Time by 70%",
        metrics: [
          {
            value: "3.3×",
            label:
              "Faster diagram validation — by reducing repetitive manual comparisons across drawings and Bill of Material (BOM) data.",
          },
          {
            value: "−70%",
            label:
              "Less validation time — engineers spent less time searching and reconciling information and more time reviewing the results that need their expertise.",
          },
        ]
      },
      {
        eyebrow: "Discovery",
        title: "Understanding How Engineers Validate Manufacturing Diagrams",
        body: "I spoke with engineers involved in diagram validation to understand how they review drawings, compare them against BOM and engineering data, and investigate discrepancies across supporting documentation.",
        findings: [
          {
            no: "(01)",
            title: "Cross-Referencing Engineering Data",
            quote:
              "...I need to check the drawing with the BOM and master data, especially the P/N, quantity and parameters. Sometimes I have to pivot between different data sets to understand where the deviation is coming from...",
            quoteBy: "Design Engineer",
            support:
              "Validation requires cross-referencing multiple engineering data sources and attributes, not just matching a part number.",
          },
          {
            no: "(02)",
            title: "Making Validation Traceable",
            quote:
              "...when there is a missing or validation deviation in the Post-BOM, I want to know what was compared, which validation rules were applied...",
            quoteBy: "Design Engineer",
            support:
              "Engineers need a traceable validation trail showing what was checked, which rules were applied, and where human review is still required.",
          },
          {
            no: "(03)",
            title: "Establishing Document Relationships",
            quote:
              "...for one part there can be the drawing, BOM and other technical data. I need to check the revision, configuration and document mapping before I know which information is valid for the component...",
            quoteBy: "Design Engineer",
            support:
              "Engineers need relationships between drawings, BOMs and technical documents to determine which data should be trusted.",
          },
          {
            no: "(04)",
            title: "Tracing the Source of AI Recommendations",
            quote:
              "...if the AI suggests a different material, supplier or P/N, I need to see where it got the information from. I cannot just accept the suggestion if I can’t confirm the source data...",
            quoteBy: "Design Engineer",
            support:
              "AI recommendations need source-level evidence so engineers can assess and trust the suggested value.",
          },
        ],
      },
      {
        eyebrow: "Analysis",
        title: "Three Core Requirements for the Solution.",
        body: "The analysis distilled the recurring needs across the validation process into three essential pillars for the solution.",
        blocks: [
          { no: "01", title: "Data Comparison", body: "Compare the manufacturing diagram against BOMs, revisions, configurations, and other engineering data." },
          { no: "02", title: "Deviation Resolution", body: "Identify missing or conflicting information and determine the appropriate resolution." },
          { no: "03", title: "Source Traceability", body: "Show the source and evidence behind each finding or AI recommendation." },
        ],
        media: [
          {
            layout: "grid3",
            items: [
              { src: "/images/9KaLvxH5RBdryHTufo6WRngdK5c.png", alt: "Data comparison", ratio: "276 / 215" },
              { src: "/images/XMaXzxbkI1OahLIQ1HWAwjhK8Gk.png", alt: "Deviation resolution", ratio: "276 / 215" },
              { src: "/images/UO6BqLgAAXWdFtnsNfYSCx7PFk.png", alt: "Source traceability", ratio: "257 / 212" },
            ],
          },
        ],
      },
      {
        eyebrow: "Interaction Workflow",
        title: "Mapping How Engineers, AI, and Data Work Together.",
        body: "I mapped the validation journey to define how engineers and AI interact across the primary flow and key exception scenarios, from data comparison and discrepancy detection to review, confirmation, and override.",
        media: [
          { layout: "wide", items: [{ src: "/images/eRwXsOJdq5KiO8G1WW1Fg5s.png", alt: "Validation workflow map", ratio: "1018 / 573" }] },
        ],
        caption:
          "The workflow illustrates one primary review process alongside four supporting scenarios: missing values, AI-confirmed suggestions, manual overrides, and re-review before submission. Bringing these together in a single map helped align product, design, and engineering before prototyping.",
      },
      {
        eyebrow: "Design Advocacy",
        title: "Proposing AX Principles to Build User Trust",
        media: [
          { layout: "wide", items: [{ src: "/images/Z0pVDqzTy3ChPFYNlghgaPask.png", alt: "Contextual feedback", ratio: "1072 / 605" }] },
          { layout: "wide", items: [{ src: "/images/R7yB2WULGZcVYACGYFbQ9OeFk.png", alt: "AI transparency and explainability", ratio: "1072 / 565" }] },
          { layout: "wide", items: [{ src: "/images/5EA2VLkcnffffwkEhlvfXyfn2wk.png", alt: "Human-AI handoff", ratio: "1072 / 579" }] },
          {
            layout: "grid2",
            items: [
              { src: "/images/6WuizpwHUDxfrNbIxg8auejobq0.png", alt: "Wireframes", ratio: "465 / 472" },
              { src: "/images/QunoMlryEyhlKCNMai4IB4l19wU.png", alt: "High fidelity screens", ratio: "541 / 435" },
            ],
          },
          {
            layout: "grid2",
            items: [
              { src: "/images/MPizP4rzrfBa53vALBAm6ptwj0w.jpg", alt: "Prompt to code", ratio: "505 / 469" },
              { src: "/images/bAxOxScd2j9HtWHZ67NDrtk6uE.png", alt: "Generated interface", ratio: "541 / 509" },
            ],
          },
        ],
        body: "The development team initially focused on surfacing the AI result. I mapped the validation journey — one primary review process plus four exception scenarios (missing values, AI-confirmed suggestions, manual overrides, re-review before submission) — and used three concepts to show why engineers also needed the source, reasoning, and clear paths when AI succeeds or fails.",
        blocks: [
          { no: "01", title: "Contextual Feedback", body: "When the system detected a mismatch — e.g. a part number in the diagram not matching the BOM — I highlighted the exact region in the diagram and displayed the conflicting BOM entry alongside it, so engineers could validate the issue without searching lists or switching screens." },
          { no: "02", title: "AI Transparency and Explainability", body: "When the system resolved missing information by retrieving data from another source file, I surfaced the action together with its source. Engineers could review, confirm, or reject the recommendation instead of relying on silent automation." },
          { no: "03", title: "Human–AI Handoff", body: "Instead of a generic “Needs Review” state, I displayed the validation steps performed, the data sources consulted, and why the issue remained unresolved — so engineers could continue from where the AI stopped rather than repeating the investigation." },
          { no: "04", title: "Wireframe to High Fidelity", body: "We began with quick wireframes for shared understanding, then built high-fidelity Figma prototypes while keeping the constraints of FlutterFlow (the no-code delivery platform) in mind, so the design stayed realistic and achievable." },
          { no: "05", title: "Prompt to Code", body: "The product was originally built in FlutterFlow; for the portfolio I rebuilt a working prototype using Claude." },
        ]
      },
    ],
  },
};
