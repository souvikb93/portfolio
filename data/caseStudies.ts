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

export type Block = { no: string; title: string; body: string };

export type Metric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  meta: { label: string; value: string }[];
  sections: {
    objective?: { title: string; body: string };
    discovery?: { title: string; body: string; blocks: Block[] };
    synthesis?: { title: string; body: string; findings: Finding[] };
    solution?: { title: string; body: string; blocks: Block[] };
    impact?: { title: string; metrics: Metric[] };
    reflection?: { title: string; body: string; blocks: Block[] };
  };
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
    sections: {
      objective: {
        title: "A Legacy Platform That Didn’t Meet Its Users’ Needs",
        body: "The client had a healthcare product built for Medicare plan members in the U.S, enabling them to manage their health plans, benefits, claims, and payments through a unified digital experience. Medicare plans primarily serve adults aged 65 and older, people under 65 with certain qualifying disabilities, and people with long-term medical conditions. Despite serving a user base with significant accessibility and usability needs, the legacy product was neither intuitive for older adults nor accessible to people relying on assistive technologies. The redesign needed to modernise the user experience while achieving WCAG compliance and meeting U.S. accessibility requirements — creating a senior-friendly, inclusive experience that reduced legal and compliance risk without disrupting existing healthcare workflows.",
      },
      discovery: {
        title: "Understanding the Problem Beyond Compliance",
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
        ],
      },
      synthesis: {
        title: "Key Research Findings",
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
        ],
      },
      solution: {
        title: "How I Improved the Overall User Experience",
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
        ],
      },
      impact: {
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
        ],
      },
      reflection: {
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
        ],
      },
    },
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
    sections: {
      objective: {
        title: "Closing the Gap Between Portal and Mobile",
        body: "The client’s insurance agents work in the field, not at a desk, and had decided to make mobile their main channel. But the app was still missing features the legacy web portal had, so agents kept getting pulled back to desktop. Users were leaving mid-task — mobile drop-off ran well above the portal for the same actions. Support absorbed the overflow, with over 15,000 calls a month from members who got stuck on the app. And roughly half the portal’s features hadn’t made it into the app yet.",
      },
      discovery: {
        title: "UX Audit & Key Findings",
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
        ],
      },
      solution: {
        title: "Solutions Mapped to the Audit Findings",
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
        ],
      },
      impact: {
        title: "Measurable Business & User Impact",
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
        ],
      },
      reflection: {
        title: "What This Project Taught Me",
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
        ],
      },
    },
  },
};
