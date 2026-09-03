// Case-study content pulled from the Framer project (MCP).
// Interactive HTML/CSS/JS embeds from the original are noted as TODO — text ported first.

export type Finding = {
  no?: string;
  title: string;
  quote?: string;
  quoteBy?: string;
  /** Live keeps the attribution on the quote line for some studies. */
  quoteInline?: boolean;
  /** Live labels this list per study — "Insight" on the build write-ups. */
  supportLabel?: string;
  /** Live runs these as bullet lists on some studies and prose on others. */
  support?: string | string[];
  impact?: string | string[];
  /** Description of the screenshot the finding is illustrated with. */
  caption?: string;
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
  kind?: "video" | "embed";
};

/** A row of figures. See components/Figure.tsx for what each layout means. */
export type Gallery = {
  layout:
    | "wide"
    | "grid4"
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
  no?: string;
  title: string;
  body?: string;
  /** "Solution Highlights" list the live pages run under the body copy. */
  bullets?: string[];
  /** Small print under this block's media. */
  caption?: string;
  /** Plates that sit under this sub-heading, as on the live pages. */
  media?: Gallery[];
};

export type Metric = {
  value: string;
  label: string;
  /** Live states how each number was measured. */
  note?: string;
  source?: string;
};

/**
 * One band of a case study. The live pages label each with its own eyebrow
 * ("Objective", "Business Impact", "Analysis", "Interaction Workflow",
 * "Design Advocacy"...) and order them differently per study, so this is an
 * ordered list rather than a fixed set of named slots.
 */
export type StudySection = {
  eyebrow: string;
  /** Plain list the live pages run under the section body. */
  bullets?: string[];
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
  /** Short line live runs under the study name. */
  subtitle?: string;
  /** Banner above the title, as on the live site. */
  hero?: Gallery;
  /** Interactive frame live floats over the hero image. */
  heroEmbed?: Figure;
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
        eyebrow: "Challenge",
        title: "A Legacy Platform That Didn’t Meet Its Users’ Needs",
        body: "The client had a healthcare product built for Medicare plan members in the U.S, enabling them to manage their health plans, benefits, claims, and payments through a unified digital experience. Medicare plans primarily serve:"
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
        bullets: [
          "Adults aged 65 and older",
          "People under 65 with certain qualifying disabilities",
          "People with long-term medical conditions",
        ],
        caption:
          "Despite serving a user base with significant accessibility and usability needs, the legacy product was neither intuitive for older adults nor accessible to people relying on assistive technologies. The redesign needed to modernise the user experience while achieving WCAG compliance and meeting U.S. accessibility requirements. The goal was to create a senior-friendly, inclusive experience that reduced legal and compliance risk without disrupting existing healthcare workflows.",
        blocks: [
          {
            title: "Accessibility & Heuristic Evaluation",
            body: "Reviewed the product against Nielsen Norman usability heuristics and WCAG accessibility guidelines to identify usability issues, accessibility gaps, and inconsistent interaction patterns.",
          },
          {
            title: "Stakeholder Discovery Workshops",
            body: "Collaborated with product managers, engineers, and business stakeholders to understand business goals, technical constraints, and recurring feedback received from customers.",
          },
          {
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
            caption:
              "Screenshot of the legacy application showing unclear interactive controls, including a text-based “Close” action instead of a standard close icon, and low-contrast table content that reduces readability.",
            quote:
              "I can’t always tell what’s clickable, especially when I’m using 400% zoom, and my screen reader doesn’t give me enough context.",
            quoteBy: "\u2013User relying on assistive technologies",
            support: [
              "68% of audited screens contained at least one WCAG colour contrast violation.",
              "5 of 6 participants struggled to distinguish tertiary links from supporting text because colour was the only visual indicator.",
            ],
            impact: [
              "Increased risk of ADA and WCAG non-compliance.",
              "Lower task completion for users relying on assistive technologies.",
            ],
          },
          {
            no: "02",
            title: "Inconsistent Design Patterns Slowed Decision Making",
            caption:
              "Screenshot of legacy application showing weak button hierarchy and inconsistent input field patterns.",
            quote:
              "I rely on familiar patterns to navigate. When every screen uses different buttons and form layouts, I have to relearn the interface over and over.",
            quoteBy: "\u2013 User relying on assistive technologies",
            support: [
              "7 of 10 audited screens lacked a clear distinction between primary and secondary buttons.",
              "Long forms contained up to 18–24 input fields in one page before users reached the next major section.",
            ],
            impact: [
              "Estimated 31% longer task completion time for first-time users.",
              "Higher drop-off during multi-step enrolment journeys.",
              "Greater development effort due to inconsistent UI implementation.",
            ],
          },
          {
            no: "03",
            title: "Application Was Not Optimized for Mobile Devices",
            caption:
              "Mobile view of the legacy application showing a desktop-first interface that was not optimized for mobile, resulting in broken layouts",
            quote:
              "Our analytics show that more and more users are accessing the platform on mobile, but the application isn’t optimized for smaller screens. It’s contributing to higher drop-off rates.",
            quoteBy: "\u2013 Product Manager",
            support: [
              "WebAIM research shows that 90% of screen reader users access the web using a mobile screen reader, reinforcing the need for responsive, mobile-accessible experiences.",
              "Fixed-width layouts required users to zoom and scroll horizontally to complete key healthcare tasks.",
            ],
            impact: [
              "With an estimated 30–40% of users accessing the platform via mobile devices, the desktop-first experience had the potential to affect a significant portion of the customer base.",
              "Increased task abandonment rate during key workflows on smaller screens.",
            ],
          },
        ],
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
        body: "Guided by the research findings, I redesigned the experience to address the most critical accessibility and usability challenges. The following improvements demonstrate how inclusive design principles and WCAG guidelines were applied to create a more intuitive, consistent, and accessible product.",
        blocks: [
          {
            no: "01",
            title: "Making Colour Accessible and Readable",
            body: "Through direct interaction with users who rely on high-contrast settings, I gained valuable insight into their visual needs. These learnings informed the selection of color combinations that meet WCAG standards, significantly improving readability, clarity, and overall usability across the product.",
          },
          {
            no: "02",
            title: "Sructuring Visual Hierarchy Using Gutenberg Principles",
            body: "Applied Gutenberg’s diagram to establish a clear visual flow and guide user attention toward key actions. By strategically repositioning content and CTAs along natural reading paths, the interface became more intuitive, improving scanability and engagement.",
          },
          {
            no: "03",
            title: "Optimizing UI for Users with Assistive Tech",
            body: "We established descriptive placeholders, persistent labels, and clear error/success indicators. ARIA labels were defined for all interactive elements, ensuring screen reader clarity. These enhancements were embedded into the design system, making accessibility the default standard.",
          },
          {
            no: "04",
            title: "Designing Responsive Experiences Across Breakpoints",
            body: "Developed responsive prototypes using defined breakpoints for mobile, tablet, and desktop. Leveraged auto layout and constraints to ensure consistent scaling of layouts, touch targets, and typography, delivering a seamless experience across devices.",
          },
        ]
      },
      {
        eyebrow: "Impact",
        title: "Measurable Business & User Impact",
        blocks: [
          {
            title:
              "2.2\u00d7 Better Readability - 67% \u2192 13% task failure rate for users with low vision through improved colour contrast and inline validation.",
            body: "Validated through: Moderated usability testing",
          },
          {
            title:
              "27% Faster Design Handoff - A shared design system and reusable components reduced design-to-development handoff time.",
            body: "Measured through: Data from scrum master",
          },
          {
            title:
              "Better Action Recognition - CTA recognition improved from 1 in 3 to 4 in 5 users with disability through clearer button hierarchy and interaction states.",
            body: "Measured through: Moderated usability testing",
          },
        ],
      },
      {
        eyebrow: "Reflection",
        title: "How This Project Changed My Thinking",
        body: "This project challenged a few assumptions I had and changed how I think about designing accessible, scalable products.",
        blocks: [
          {
            no: "01",
            title: "Accessibility is Becoming an AI Readiness Strategy",
            body: "Accessibility now benefits both humans and AI. Accessible, semantically structured products are easier for both users and AI to understand. With Gartner forecasting a 25% decline in traditional search by 2026, accessibility is becoming a competitive advantage, not just a compliance requirement.",
          },
          {
            no: "02",
            title: "Design Systems are Becoming a Business Investment",
            body: "While researching how to demonstrate the value of investing in a design system to the client, I discovered that its benefits extend far beyond design consistency. Figma found that designers complete tasks 34% faster using design systems, while Forrester reported 20–30% higher developer productivity. It changed how I view design systems, from a design initiative to a strategic business investment.",
          },
          {
            no: "03",
            title: "Consistency Matters Most When Designing for Older Adults",
            body: "One insight that stayed with me was that older adults rely heavily on consistency. Research from Nielsen Norman Group found that predictable interaction patterns help older users build confidence and complete tasks more successfully. It reinforced that consistency is more than a design principle, it's a usability tool.",
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
    subtitle: "Insurance in the Digital Era",
    summary:
      "As a Product Designer at an Indian consultancy, I worked on a 1.5-year project with a leading healthcare insurer. Starting with a UX audit, we rebuilt their incomplete mobile app from scratch with a new IA and new components in the design system.",
    meta: [
      { label: "Client", value: "United Healthcare Group" },
      { label: "Duration", value: "18 months" },
      { label: "Industry", value: "Healthcare Insurance" },
      { label: "Scope of Work", value: "App Design · Design System · Information Architecture" },
    ],
    hero: {
      layout: "wide",
      items: [
        { src: "/images/9dPytogKpslavi9lGu7pupli6g.gif", alt: "Member Portal case study", ratio: "1216 / 814" },
      ],
    },
    sections: [
      {
        eyebrow: "Challenge",
        title: "Closing the Gap Between Portal and Mobile",
        body: "The client’s insurance agents work in the field, not at a desk, and had decided to make mobile their main channel. But the app was still missing features the legacy web portal had, so agents kept getting pulled back to desktop. Closing that gap is why I was brought on.",
        blocks: [
          {
            title: "Users Leaving Mid-Task",
            body: "Mobile drop-off ran well above what the portal saw for the same actions.",
          },
          {
            title: "Support Absorbing the Overflow",
            body: "Over 15,000 calls a month came from members who got stuck on the app.",
          },
          {
            title: "Half the Portal Wasn\u2019t on Mobile Yet",
            body: "Several web portal features hadn\u2019t made it into the app, so agents had to switch back to desktop to finish the task.",
          },
        ],
      },
      {
        eyebrow: "Discovery",
        title: "UX Audit & Key Findings",
        body: "Before touching any screens, I ran a UX audit against NN Group heuristics and cross-checked it with two quarters of analytics and support ticket data. Four patterns kept showing up, and each one was quietly costing the business money.",
        findings: [
          {
            title: "Lack of Search Functionality",
            quote: "It takes me longer to find the record than to actually do the work.",
            quoteBy: "\u2014 Support Staff",
            quoteInline: true,
            support: "Finding the right plan took over 90 seconds on average.",
            impact: "Instead of finishing on their phone, members gave up and switched to desktop.",
          },
          {
            title: "Complex Navigation",
            quote: "I know this feature exists somewhere, I just never know which menu it’s hiding in.",
            quoteBy: "\u2014 Product Analyst",
            quoteInline: true,
            support: "Users took 4 to 6 taps to reach screens that should’ve taken 2.",
            impact: "Every extra tap meant more people abandoning the task, and abandoned tasks were flowing straight into support call volume.",
          },
          {
            title: "Unclear Call-to-Action",
            quote: "I wasn’t sure if tapping that would submit my claim or just save it.",
            quoteBy: "\u2014 Insurance Agent",
            
            support: "About 3 in 5 users hesitated or picked the wrong action on core screens during user interviews.",
            impact: "Second-guessing what a button does slows every client interaction and erodes trust in the tool itself.",
          },
          {
            title: "Complex Form Structures",
            quote: "On mobile I have to scroll left and right just to fill out one form. I’d rather just do it on desktop where I can see the whole thing at once.",
            quoteBy: "\u2014 Insurance Agent",
            quoteInline: true,
            support: "Claims and enrollment forms had the highest drop-off in the app, around 40%.",
            impact: "Biggest single driver of support calls.",
          },
        ],
        media: [
          {
            layout: "half",
            items: [{ src: "/images/4BfM8vfOJ28Nn1gvhGlHOtpUTW8.png", alt: "Search audit", ratio: "352 / 416", radius: "24px", width: "352px" }],
          },
          {
            layout: "halfRight",
            items: [{ src: "/images/TzMN54p9mY4McvUUg7HNbLmW4w.png", alt: "Navigation audit", ratio: "371 / 472", radius: "24px", width: "371px" }],
          },
          {
            layout: "half",
            items: [{ src: "/images/XVF7lubG4aSHdDyIdYiiwrSics.png", alt: "Call-to-action audit", ratio: "371 / 472", radius: "24px", width: "371px" }],
          },
          {
            layout: "halfRight",
            items: [{ src: "/images/aQdPDGSUnioclPASar0F9Sm0bdE.png", alt: "Form structure audit", ratio: "371 / 472", radius: "24px", width: "371px" }],
          },
        ],
      },
      {
        eyebrow: "Solution",
        title: "Solutions Mapped to the Audit Findings",
        body: "Each fix below responds directly to a finding from the audit. The goal wasn’t a redesign for its own sake, it was to solve the specific problems agents were already running into every day.",
        blocks: [
          {
            no: "01",
            title: "Fixing the App’s Information Architecture",
            body: "Agents couldn’t find things because the app was still running on the same information architecture as the web portal, a structure built for a desktop screen where everything is visible at once, not a phone. I rebuilt the IA from scratch based on real usage patterns.",
            bullets: [
              "Ran card sorting sessions to see how agents naturally grouped features",
              "Reorganized 40+ screens into 5 task-based groups, cutting navigation depth by half",
              "Validated the new structure with tree testing before wireframing",
            ],
            media: [
              {
                layout: "grid2",
                items: [
                  { src: "/images/b8y7sSEzHNKqiJvNCPbe9t4cg.png", alt: "Simplified navigation", ratio: "628 / 421" },
                  { src: "/images/DwGsmAvGmMvMsFAcoHNxgfX4I.png", alt: "Focused primary action", ratio: "203 / 421" },
                ],
              },
              {
                layout: "wide",
                items: [
                  {
                    src: "/embeds/member-portal-ia.html",
                    alt: "Interactive information architecture map \u2014 drag cards, draw connections, zoom",
                    ratio: "1148 / 600",
                    kind: "embed",
                  },
                ],
              },
            ],
          },
          {
            no: "02",
            title: "Setting Navigation Hierarchy from Google Analytics Data",
            body: "With the new structure in place, I still had to decide what agents saw first. Rather than guess, I pulled Google Analytics data on page views and engagement time and let actual usage set the order.",
            bullets: [
              "Pulled Google Analytics data on page views and engagement time across the app",
              "Ranked features by actual usage, not internal opinion",
              "Placed the most-used features in the bottom navigation bar for one-tap access",
              "Ordered the hamburger menu to match, most used to least",
            ],
            media: [
              { layout: "center", items: [{ src: "/images/RnninTV2md2x7JBJSglnAqKX9U.png", alt: "Navigation hierarchy from analytics", ratio: "600 / 586", width: "600px" }] },
            ],
            caption:
              "The most visited pages identified in Google Analytics (left) were used to determine the hierarchy of items in the hamburger menu (right), aligning navigation with real user behavior.",
          },
          {
            no: "03",
            title: "Building Mobile Components for the Design System",
            body: "There was no mobile component library, so developers were defaulting to their own solutions screen by screen. I extended the client’s existing design system instead of building a new one from scratch.",
            bullets: [
              "Audited the existing design system to understand tokens and patterns already in place",
              "Built mobile-specific components extending the system, not replacing it",
              "Covered buttons, form fields, cards, navigation elements and interaction states",
              "Standardized CTA labels to improve action clarity and consistency",
            ],
          },
          {
            no: "04",
            title: "Turning Long Forms Into Guided Steps",
            body: "Using the form field components just built in the design system, I broke a multi-column desktop layout into something a phone could actually handle.",
            bullets: [
              "Switched to single-column layouts, removing horizontal scroll entirely",
              "Broke long forms into labeled steps with a visible progress indicator",
              "Designed immediate success and error feedback instead of post-submission validation.",
            ],
            media: [
              {
                layout: "center",
                items: [
                  {
                    src: "https://souvikb93.github.io/member-portal-inputfield/",
                    alt: "Interactive input field prototype",
                    ratio: "254 / 525",
                    width: "254px",
                    kind: "embed",
                  },
                ],
              },
            ],
            caption:
              "Wireframes were initially developed to align the team on the application’s structure and user flow. These were then evolved into interactive prototypes that communicated transition states and user interactions, enabling consistent implementation by developers.",
          },
          {
            no: "05",
            title: "Introduced Search & Filtering to Improve Data Discovery",
            body: "Finding the right claims data or check application took over 90 seconds, so agents gave up and switched back to desktop. There was no way to search or narrow down long lists.",
            bullets: [
              "Defined search and filter categories based on business workflows and stakeholder requirements.",
              "Designed clear empty, loading, and no-results states for search experiences.",
              "Defined filter chip behavior, multi-select patterns, and clear/reset interactions.",
            ],
            media: [
              {
                layout: "grid2",
                items: [
                  { src: "/images/YMmNg5RoIAtZ9AGQvmaNllff2FU.png", alt: "Search and filtering", ratio: "670 / 368", radius: "12px" },
                  { src: "/images/7IQJUxN4YeaG2rOEKvDOG0HF5tw.png", alt: "Mobile parity", ratio: "299 / 374" },
                ],
              },
            ],
            caption:
              "Stakeholder workshops for the Application Status page defined the search, filtering, and sorting experience, which was translated into the final UI shown on the right.",
          },
        ],
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
            label: "Higher User Engagement",
            note: "Mobile app usage increased by 12% within the first month, with more insurance agents choosing the mobile app as part of their daily workflow.",
            source: "Validated using: Google Analytics",
          },
          {
            value: "68 → 91",
            label: "Improved Accessibility",
            note: "Lighthouse Accessibility Score improved from 68 to 91, reflecting a more accessible and inclusive experience across the redesigned member portal.",
            source: "Validated using: Lighthouse, axe & manual accessibility testing",
          },
          {
            value: "-24%",
            label: "Faster Task Completion",
            note: "Task completion time improved by 24% during usability testing, with simplified navigation and fewer interaction steps reducing the time required.",
            source: "Validated using: Moderated usability testing",
          },
        ],
      },
      {
        eyebrow: "Reflection",
        title: "What This Project Taught Me",
        body: "Beyond improving accessibility and responsiveness, these are three lessons I’ll carry into future projects.",
        blocks: [
          {
            no: "01",
            title: "Design Decisions Need Evidence",
            body: "Working on this project changed how I approach product decisions. During the redesign, different stakeholders had different views on which features should appear in the bottom navigation and the hamburger menu. Rather than relying on opinions, we used product analytics to understand which features users accessed most frequently and structured the navigation around actual behaviour. It reinforced that analytics isn’t just a reporting tool, it’s an essential input for UX decision-making.",
          },
          {
            no: "02",
            title: "Platform Shapes Information Architecture",
            body: "When I joined the project, the mobile experience was based on the same information architecture as the web portal. The same structure that worked well on desktop created unnecessary complexity on mobile. Designing around the mobile context resulted in a simpler navigation model and quicker access to frequently used features.",
          },
          {
            no: "03",
            title: "Alignment Is Part of the Design Process",
            body: "Adding search, filtering and sorting seemed straightforward until business expectations and technical constraints diverged. Running collaborative stakeholder workshops helped us prioritise features that delivered the most value while remaining technically feasible. It changed how I think about design. It’s not just about creating interfaces, but also about aligning people around practical solutions.",
          },
        ],
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
      },
    ],
  },

  desi_aroma: {
    slug: "desi_aroma",
    name: "Desi Aroma",
    headline: "Women\u2019s Empowerment Initiative",
    summary:
      "Founded by two NID alumni, Desi Aroma is a community-driven initiative that empowers housewives in Gandhinagar by transforming their love for home-cooked food into a source of income and recognition, while serving affordable, wholesome meals to students.",
    meta: [
      { label: "Client", value: "Student Project" },
      { label: "Duration", value: "2 Months" },
      { label: "Industry", value: "Social Innovation" },
      {
        label: "Scope of Work",
        value:
          "Service Design \u00b7 System Design Design \u00b7 Brand Design \u00b7 Mobile App \u00b7 UX/UI \u00b7 Video Production",
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
        eyebrow: "Recognition",
        title: "\ud83c\udfc6 Second Runner-Up User Interface Design Category",
        body: "From concept to scalable experience.",
      },
      {
        eyebrow: "Objective",
        title:
          "Creating Economic Opportunities for Housewives While Meeting Student Needs",
        body: "Many women in Gandhinagar were looking for flexible ways to earn an income while managing their families, while many students lived away from home and missed the comfort of home-cooked food. We saw food as the natural connection between these two communities and explored how homemade food could bring the feeling of home to students while creating flexible earning opportunities for women.",
      },
      {
        eyebrow: "System Mapping",
        title: "System-Level Analysis of gandhinagar",
        body: "Primary & Secondary Research \u2022  Focus Groups \u2022 System Mapping \u2022 Insights Articulation \u2022 Opportunity Mapping",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/SjsFFtOJgAJkUGJBosOOYUh0aUc.jpg", alt: "System map of Gandhinagar", ratio: "1094 / 669" },
            ],
          },
        ],
        caption: "The above shows a system map of Gandhinagar.",
      },
      {
        eyebrow: "User Research",
        title: "From Observations to Insights",
        body: "Synthesizing user interviews and discussions to uncover patterns, needs, and opportunities that informed design decisions.",
        blocks: [
          {
            title: "One-to-one interviews with potential customers",
            body: "",
            bullets: [
              "Limited time to cook \u2192 dependence on restaurants",
              "Carrying home-cooked food leads to cold, soggy meals",
              "Strong need for fresh, homemade food",
              "Existing services lack authentic home-style taste",
            ],
          },
          {
            title: "Food tasting workshop with students",
            body: "",
            bullets: [
              "Willingness to pay \u20b9100\u2013\u20b9150 for non-veg meals",
              "Cost sensitivity; preference for simple packaging",
              "Quantity transparency expected in online menus",
              "Demand for personalization and portion options",
            ],
          },
          {
            title: "One-to-one discussions with homemakers",
            body: "",
            bullets: [
              "Family approval is critical for homemakers\u2019 participation",
              "Homemakers\u2019 schedules revolve around family needs",
              "Retired individuals seek meaningful engagement",
              "Stored homemade snacks fit anytime consumption needs",
            ],
          },
          {
            title: "Insights from Food Business Owners",
            body: "",
            bullets: [
              "Cook selection is key to consistent homemade taste",
              "Limited local market \u2192 right customer targeting needed",
              "Importance of tracking customer preferences",
              "Loyalty requires assurance and stability for home chefs",
            ],
          },
        ],
        media: [
          {
            layout: "center",
            items: [
              { src: "/images/1C8DzuEyAy7rk5rkULtbQdAwVc.jpg", alt: "Research artefacts", ratio: "209 / 266" },
            ],
          },
        ],
        caption: "Insights from Interviews & Group Discussions",
      },
      {
        eyebrow: "Comparative Analysis",
        title: "From Existing Services to New Opportunities",
        body: "Benchmarking existing food services to understand the landscape, gaps, and opportunities for a community-driven model.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/GV12Wz2AUp2nk0c1DpNpNk4Ds.jpg", alt: "From Existing Services to New Opportunities", ratio: "1018 / 573" },
            ],
          },
        ],
        caption:
          "*Original artifacts shown as-is in 2018, not recreated. Please use the custom-built zoom feature to view the research text in detail.",
      },
      {
        eyebrow: "Stakeholder Mapping",
        title: "From Stakeholders to Service Ecosystem",
        body: "Mapping key stakeholders, relationships, and interactions to understand how the service could function within the wider ecosystem.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/68k9G833PEFIVks3kQPJavkWGA.jpg", alt: "From Stakeholders to Service Ecosystem", ratio: "1018 / 573" },
            ],
          },
        ],
        caption:
          "*Original artifacts shown as-is in 2018, not recreated. Please use the custom-built zoom feature to view the research text in detail.",
      },
      {
        eyebrow: "Journey Mapping",
        title: "From Individual Journeys to Shared Experiences",
        body: "Mapping the end-to-end experiences of home chefs and customers to uncover pain points, expectations, and opportunities.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/KJB7Y0g0VMKzU1PktFiAxppgC8.jpg", alt: "From Individual Journeys to Shared Experiences", ratio: "1018 / 573" },
            ],
          },
        ],
        caption:
          "*Original artifacts shown as-is in 2018, not recreated. Please use the custom-built zoom feature to view the research text in detail.",
      },
      {
        eyebrow: "Service Blueprint",
        title: "From Experiences to Service Operations",
        body: "Translating customer and chef journeys into the operational processes and touchpoints needed to deliver the service.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/yPgr4DLOyx05l44uilEH8ItRiVQ.png", alt: "From Experiences to Service Operations", ratio: "1018 / 573" },
            ],
          },
        ],
        caption:
          "*Original artifacts shown as-is in 2018, not recreated. Please use the custom-built zoom feature to view the research text in detail.",
      },
      {
        eyebrow: "Brand Building",
        title: "From Service Concept to Brand Identity",
        body: "Translating the service concept into a cohesive brand through identity, communication, packaging, and marketing touchpoints.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/s4cSCilOy9wpzPdYApUc4fpZWUQ.jpg", alt: "From Service Concept to Brand Identity", ratio: "1018 / 573" },
            ],
          },
        ],
        caption:
          "*Original artifacts shown as-is in 2018, not recreated. Please use the custom-built zoom feature to view the research text in detail.",
      },
      {
        eyebrow: "Concept Video",
        title: "From Concept to Story",
        body: "Bringing the service concept to life through a short video that communicates its value, vision, and experience to stakeholders.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/video/j6bOtMAnk1jhu46ZoAclLZZjjaw.webm", alt: "Concept video", ratio: "1152 / 648", kind: "video" },
            ],
          },
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
        body: "User Persona \u2022 User Flows \u2022 Wireframing \u2022 Design System \u2022 Prototyping \u2022 User Testing",
        media: [
          {
            layout: "full",
            items: [
              { src: "/images/3QRI5gCdHRlRKXEWUbFamb4GX8.jpg", alt: "App interface", ratio: "1280 / 767" },
            ],
          },
        ],
        caption:
          "An app-based platform was envisioned as part of the scaling strategy, and a prototype was developed to demonstrate its functionality and potential.",
      },
    ],

  },

  aero_check: {
    slug: "aero_check",
    name: "Aero Check",
    headline:
      "Designing an AI-Assisted Validation Tool That Increased Processing Speed by 3.3\u00d7",
    summary:
      "As a consultant, I worked on a pilot project for Airbus to demonstrate how AI could assist in validating complex manufacturing diagrams. The goal was to explore how AI could reduce manual effort by identifying missing or inconsistent information and supporting engineers with a faster, more reliable validation workflow.",
    meta: [
      { label: "Client", value: "Airbus" },
      { label: "Duration", value: "4 Weeks" },
      { label: "Industry", value: "Aviation" },
      { label: "Scope of Work", value: "AI-Driven \u00b7 Enterprise Saas \u00b7 No-code" },
    ],
    hero: {
      layout: "wide",
      items: [
        { src: "/images/ThKHR9rfGkWENcL1AIy01Kos.gif", alt: "PitchHub case study", ratio: "1216 / 681" },
      ],
    },
    sections: [
      {
        eyebrow: "Objective",
        title:
          "Making Manufacturing Diagram Validation Faster Without Compromising Engineering Confidence.",
        body: "Engineers previously validated diagrams manually by comparing drawings against Bill of Material (BOM) data and supporting information. The repetitive process made validation time-consuming and required engineers to repeatedly cross-reference multiple sources. The objective was to reduce validation time by automating repetitive comparisons while ensuring every AI recommendation remained transparent, reviewable, and under human control.",
      },
      {
        eyebrow: "Business Impact",
        title: "Reducing Validation Time by 70%.",
        body: "By shifting repetitive comparison work from manual checks to an AI-assisted workflow, engineers could spend less time searching and reconciling information and more time reviewing the results that require their expertise.",
        metrics: [
          {
            value: "3.3X Faster",
            label:
              "Streamlined diagram validation by reducing repetitive manual comparisons across drawings and Bill of Material (BOM) data.",
          },
        ],
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
            caption:
              "Insight- Validation requires cross-referencing multiple engineering data sources and attributes, not just matching a part number.",
          },
          {
            no: "(02)",
            title: "Making Validation Traceable",
            quote:
              "...when there is a missing or validation deviation in the Post-BOM, I want to know what was compared, which validation rules were applied...",
            quoteBy: "Design Engineer",
            caption:
              "Insight- Engineers need a traceable validation trail showing what was checked, which rules were applied, and where human review is still required.",
          },
          {
            no: "(03)",
            title: "Establishing Document Relationships",
            quote:
              "...for one part there can be the drawing, BOM and other technical data. I need to check the revision, configuration and document mapping before I know which information is valid for the component...",
            quoteBy: "Design Engineer",
            caption:
              "Insight- Engineers need relationships between drawings, BOMs and technical documents to determine which data should be trusted.",
          },
          {
            no: "(04)",
            title: "Tracing the Source of AI Recommendations",
            quote:
              "...if the AI suggests a different material, supplier or P/N, I need to see where it got the information from. I cannot just accept the suggestion if I can\u2019t confirm the source data...",
            quoteBy: "Design Engineer",
            caption:
              "Insight- AI recommendations need source-level evidence so engineers can assess and trust the suggested value.",
          },
        ],
      },
      {
        eyebrow: "Analysis",
        title: "Three Core Requirements for the Solution.",
        body: "The analysis distilled the recurring needs across the validation process into three essential pillars for the solution.",
        blocks: [
          {
            title: "Data Comparison",
            body: "Compare the manufacturing diagram against BOMs, revisions, configurations, and other engineering data.",
            media: [
              {
                layout: "center",
                items: [
                  { src: "/images/9KaLvxH5RBdryHTufo6WRngdK5c.png", alt: "Data comparison", ratio: "256 / 189" },
                ],
              },
            ],
          },
          {
            title: "Deviation Resolution",
            body: "Identify missing or conflicting information and determine the appropriate resolution.",
            media: [
              {
                layout: "center",
                items: [
                  { src: "/images/UO6BqLgAAXWdFtnsNfYSCx7PFk.png", alt: "Deviation resolution", ratio: "256 / 211" },
                ],
              },
            ],
          },
          {
            title: "Source Traceability",
            body: "Show the source and evidence behind each finding or AI recommendation.",
            media: [
              {
                layout: "center",
                items: [
                  { src: "/images/XMaXzxbkI1OahLIQ1HWAwjhK8Gk.png", alt: "Source traceability", ratio: "256 / 189" },
                ],
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Interaction Workflow",
        title: "Mapping How Engineers, AI, and Data Work Together.",
        body: "I mapped the validation journey to define how engineers and AI interact across the primary flow and key exception scenarios, from data comparison and discrepancy detection to review, confirmation, and override.",
        media: [
          {
            layout: "wide",
            items: [
              { src: "/images/eRwXsOJdq5KiO8G1WW1Fg5s.png", alt: "Interaction workflow map", ratio: "1018 / 573" },
            ],
          },
        ],
        caption:
          "The workflow illustrates one primary review process alongside four supporting scenarios: missing values, AI-confirmed suggestions, manual overrides, and re-review before submission. Bringing these together in a single map helped align product, design, and engineering before prototyping.",
      },
      {
        eyebrow: "Design Advocacy",
        title: "How I Proposed AX Principles to Build User Trust.",
        body: "The development team initially focused on surfacing the AI result. I used three concepts to demonstrate why engineers also needed the source, reasoning, validation context, and clear paths when AI succeeds or fails.",
        blocks: [
          {
            no: "01",
            title: "Contextual Feedback",
            body: "When the system detected a mismatch, such as a part number in the manufacturing diagram not matching the Bill of Materials (BOM), I highlighted the exact region in the diagram and displayed the conflicting BOM entry alongside it. Engineers could immediately validate the issue without searching through lists or switching screens.",
            media: [
              {
                layout: "wide",
                items: [
                  { src: "/images/Z0pVDqzTy3ChPFYNlghgaPask.png", alt: "Contextual feedback", ratio: "1072 / 605" },
                ],
              },
            ],
          },
          {
            no: "02",
            title: "AI Transparency and Explainability",
            body: "When the system automatically resolved missing information by retrieving data from another source file, I surfaced the action together with its source. Engineers could review, confirm, or reject the AI recommendation instead of relying on silent automation.",
            media: [
              {
                layout: "wide",
                items: [
                  { src: "/images/R7yB2WULGZcVYACGYFbQ9OeFk.png", alt: "AI transparency and explainability", ratio: "1072 / 565" },
                ],
              },
            ],
          },
          {
            no: "03",
            title: "Human AI Handoff",
            body: "Instead of showing a generic \"Needs Review\" state, I displayed the validation steps performed, the data sources consulted, and why the issue remained unresolved. Engineers could continue from where the AI stopped instead of repeating the investigation.",
            media: [
              {
                layout: "wide",
                items: [
                  { src: "/images/5EA2VLkcnffffwkEhlvfXyfn2wk.png", alt: "Human AI handoff", ratio: "1072 / 579" },
                ],
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Design",
        title: "Wireframe to High Fidelity",
        body: "For this project, we began by creating quick wireframes to ensure alignment and shared understanding across the team. Once aligned, we developed high-fidelity Figma prototypes, all while keeping in mind the constraints of FlutterFlow, the no-code platform we used to deliver the final product. This ensured the design was both realistic and achievable from concept to final build.",
        media: [
          {
            layout: "grid2",
            items: [
              { src: "/images/6WuizpwHUDxfrNbIxg8auejobq0.png", alt: "Wireframes", ratio: "465 / 472" },
              { src: "/images/QunoMlryEyhlKCNMai4IB4l19wU.png", alt: "High fidelity screens", ratio: "541 / 435" },
            ],
          },
        ],
      },
      {
        eyebrow: "Prototype",
        title: "Prompt to Code",
        body: "For the project, we originally built it in FlutterFlow, but for the purpose of showcasing it in my portfolio, I created a working prototype using Claude.",
        media: [
          {
            layout: "grid2",
            items: [
              { src: "/images/MPizP4rzrfBa53vALBAm6ptwj0w.jpg", alt: "Prototype", ratio: "505 / 469" },
              { src: "/images/bAxOxScd2j9HtWHZ67NDrtk6uE.png", alt: "Prototype interactions", ratio: "541 / 509" },
            ],
          },
        ],
      },
    ],

  },
};
