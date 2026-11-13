/**
 * ─────────────────────────────────────────────────────────────
 *  SOPHIA LETITIA — PORTFOLIO CONTENT
 *  Every word, project, skill and work sample on the site lives
 *  in this one file. Edit here; the pages update automatically.
 *
 *  Adding your own work samples:
 *   1. Drop the image into /public/work/<project-slug>/  (e.g. post-01.jpg)
 *   2. Add `src: '/work/<project-slug>/post-01.jpg'` to the matching
 *      sample below. Samples without `src` render as labeled placeholders.
 *  Adding a downloadable file (PDF deck, research report):
 *   - Drop it into /public/files/ and set `file: '/files/<name>.pdf'`.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Sophia Letitia',
  firstName: 'Sophia',
  lastName: 'Letitia',
  title: 'Marketing Student · Consumer Psychology · Creative Strategy',
  school: 'Bryant University',
  degree: 'Bachelor of Science in Marketing',
  minor: 'Minor in Psychology',
  graduation: 'Expected May 2027',
  email: 'Sophialetitia3715@gmail.com',
  linkedin: {
    handle: 'Sophia-Letitia-',
    /** Paste the full LinkedIn profile URL here to make the link clickable. */
    url: '',
  },
  /**
   * Portrait: add your photo to /public/img/ and set the path here,
   * e.g. '/img/sophia-portrait.jpg'. Leave empty to show the placeholder frame.
   */
  portrait: '',
  /**
   * Resume PDF: add your file to /public/files/ and set the path here,
   * e.g. '/files/Sophia-Letitia-Resume.pdf'. Until then, the download
   * button saves the on-page resume preview as a PDF.
   */
  resumePdf: '',
}

export const home = {
  headline: ['Understanding People.', 'Building Brands.', 'Creating Connections.'],
  supporting:
    "I'm a marketing student passionate about consumer psychology, creative strategy, digital marketing, and the ways brands connect with people.",
  intro:
    "My interest in marketing began with event promotion and a natural ability to attract audiences and drive sales. Since then, I've developed a passion for combining consumer insight, strategic thinking, and creativity to create meaningful marketing experiences.",
}

export const about = {
  lede: 'A marketer who starts with people.',
  paragraphs: [
    "I'm a Marketing student at Bryant University with a minor in Psychology.",
    'My interest in marketing began during my freshman year of college when I started promoting and selling tickets for events. After seeing how effectively I could attract interest and drive sales, I realized I had a natural knack for understanding how to market ideas, connect with people, and influence purchasing decisions.',
    'My psychology background has strengthened my understanding of what motivates consumers, what captures their attention, and how messaging and visual branding influence purchasing decisions.',
    'I love bringing together my understanding of people and my creativity to find new and engaging ways to connect with audiences. I enjoy approaching opportunities with fresh ideas, thinking outside the box, and finding creative ways to make an impact.',
  ],
  pillars: [
    {
      title: 'Consumer Insight',
      body: 'What motivates people, what captures attention, and what moves them to act.',
    },
    {
      title: 'Strategic Thinking',
      body: 'Research, audience analysis and planning that give creative work a clear purpose.',
    },
    {
      title: 'Creative Execution',
      body: 'Content, visuals and campaigns that turn insight into real connection.',
    },
  ],
}

export type Sample = {
  label: string
  /** Shown on placeholders to describe what belongs here. */
  hint?: string
  /** Public path to an image, e.g. '/work/restore-with-the-arts/post-01.jpg' */
  src?: string
  alt?: string
  aspect?: 'square' | 'portrait' | 'story' | 'landscape'
}

export type SampleGroup = {
  title: string
  description: string
  samples: Sample[]
}

export type Project = {
  slug: string
  number: string
  organization: string
  role: string
  dates: string
  category: string
  tagline: string
  summary: string
  cover: string
  coverAlt: string
  /** Visual theme for the project page. */
  theme: 'cream' | 'blush' | 'espresso' | 'rose'
  highlights: string[]
  capabilities: string[]
  stats?: { value: string; label: string }[]
  gallery: SampleGroup[]
}

export const projects: Project[] = [
  {
    slug: 'restore-with-the-arts',
    number: '01',
    organization: 'Restore with the Arts',
    role: 'Marketing Intern',
    dates: 'May 2026 – August 2026',
    category: 'Nonprofit Marketing · Research · Community',
    tagline: 'Research-led storytelling for a nonprofit arts organization.',
    summary:
      'At Restore with the Arts, I brought research, nonprofit marketing, community engagement, and creative execution together — from planning and producing social content to studying the audience behind it and helping the organization reach new supporters.',
    cover: '/img/restore-arts.png',
    coverAlt: 'Sunlit art studio with paint brushes and canvases',
    theme: 'blush',
    highlights: [
      'Managed and developed social media content and a content calendar for a nonprofit arts organization.',
      'Conducted audience research and analyzed survey results from approximately 500 recipients.',
      'Researched grant opportunities and assisted with funding applications.',
      'Supported event promotion through press outreach, community engagement, and content creation.',
    ],
    capabilities: [
      'Audience Research',
      'Survey Analysis',
      'Content Strategy',
      'Content Calendars',
      'Press Outreach',
      'Community Engagement',
      'Grant Research',
    ],
    stats: [
      { value: '~500', label: 'Survey recipients analyzed' },
    ],
    gallery: [
      {
        title: 'Social Media Posts & Graphics',
        description: 'Content designed and published for the organization’s channels.',
        samples: [
          { label: 'Social post', hint: 'Add an Instagram post', aspect: 'square' },
          { label: 'Social post', hint: 'Add an Instagram post', aspect: 'square' },
          { label: 'Story graphic', hint: 'Add a story or reel cover', aspect: 'story' },
          { label: 'Social post', hint: 'Add a carousel slide', aspect: 'square' },
        ],
      },
      {
        title: 'Event Promotional Materials',
        description: 'Flyers, announcements and promotional assets for events.',
        samples: [
          { label: 'Event flyer', hint: 'Add an event flyer', aspect: 'portrait' },
          { label: 'Event announcement', hint: 'Add a promo graphic', aspect: 'landscape' },
        ],
      },
      {
        title: 'Audience Research & Survey Insights',
        description: 'Findings from analyzing survey results from approximately 500 recipients.',
        samples: [
          { label: 'Survey insight', hint: 'Add a chart or findings slide', aspect: 'landscape' },
          { label: 'Audience summary', hint: 'Add a research summary', aspect: 'landscape' },
        ],
      },
      {
        title: 'Marketing Calendar',
        description: 'The content calendar used to plan and schedule social media.',
        samples: [
          { label: 'Content calendar', hint: 'Add a calendar screenshot', aspect: 'landscape' },
        ],
      },
      {
        title: 'Press & Community Outreach',
        description: 'Examples of press outreach and community engagement.',
        samples: [
          { label: 'Press outreach', hint: 'Add a press release or pitch', aspect: 'portrait' },
          { label: 'Community outreach', hint: 'Add an outreach example', aspect: 'portrait' },
        ],
      },
    ],
  },
  {
    slug: 'two-herons-farm',
    number: '02',
    organization: 'Two Herons Farm',
    role: 'Social Media Marketing',
    dates: 'May 2026 – August 2026',
    category: 'Social Media · Content Creation · Visual Storytelling',
    tagline: 'One farm, many audiences — events, retail and rentals.',
    summary:
      'At Two Herons Farm, I managed the social media presence behind three very different offerings — events, retail, and rental listings — creating visual assets, short-form video and captions, and using engagement data to learn which channels and strategies worked best for each audience.',
    cover: '/img/two-herons.png',
    coverAlt: 'Farm stand with flowers beside a pond with a heron at golden hour',
    theme: 'cream',
    highlights: [
      'Managed social media presence to promote events, retail, and rental listings.',
      'Designed promotional schedules to increase online interaction and drive retail traffic.',
      'Created visual assets, short-form videos, captions, and marketing materials.',
      'Analyzed audience engagement to identify effective channels and strategies.',
    ],
    capabilities: [
      'Instagram',
      'TikTok',
      'Short-Form Video',
      'Copywriting',
      'Promotional Scheduling',
      'Engagement Analysis',
      'Visual Design',
    ],
    stats: [
      { value: '3', label: 'Offerings marketed: events, retail, rentals' },
    ],
    gallery: [
      {
        title: 'Instagram & TikTok Content',
        description: 'Posts created for the farm’s social channels.',
        samples: [
          { label: 'Instagram post', hint: 'Add a feed post', aspect: 'square' },
          { label: 'Instagram post', hint: 'Add a feed post', aspect: 'square' },
          { label: 'Instagram post', hint: 'Add a feed post', aspect: 'square' },
        ],
      },
      {
        title: 'Short-Form Video',
        description: 'Reels and TikToks — add a cover frame for each video.',
        samples: [
          { label: 'Reel / TikTok', hint: 'Add a video cover frame', aspect: 'story' },
          { label: 'Reel / TikTok', hint: 'Add a video cover frame', aspect: 'story' },
          { label: 'Reel / TikTok', hint: 'Add a video cover frame', aspect: 'story' },
        ],
      },
      {
        title: 'Promotional Graphics',
        description: 'Marketing materials for events, retail and rental listings.',
        samples: [
          { label: 'Event promo', hint: 'Add an event graphic', aspect: 'portrait' },
          { label: 'Retail promo', hint: 'Add a retail graphic', aspect: 'portrait' },
          { label: 'Rental listing', hint: 'Add a listing graphic', aspect: 'portrait' },
        ],
      },
      {
        title: 'Captions & Content Examples',
        description: 'Caption writing paired with the posts they supported.',
        samples: [
          { label: 'Caption example', hint: 'Add a post with its caption', aspect: 'landscape' },
          { label: 'Caption example', hint: 'Add a post with its caption', aspect: 'landscape' },
        ],
      },
      {
        title: 'Before & After',
        description: 'Campaign comparisons, if available.',
        samples: [
          { label: 'Before', hint: 'Add a “before” example', aspect: 'square' },
          { label: 'After', hint: 'Add an “after” example', aspect: 'square' },
        ],
      },
    ],
  },
  {
    slug: 'bryant-student-philanthropy-center',
    number: '03',
    organization: 'Bryant University Student Philanthropy Center',
    role: 'Student Alumni Caller',
    dates: 'April 2024 – November 2025',
    category: 'Communication · Relationship Building · Sales',
    tagline: 'The art of persuasion, one conversation at a time.',
    summary:
      'As a Student Alumni Caller, I built relationships with alumni through calls and email outreach — practicing the communication, persuasion, and sales skills at the heart of marketing, and consistently exceeding fundraising goals.',
    cover: '/img/philanthropy.png',
    coverAlt: 'Desk with a headset and handwritten thank-you cards',
    theme: 'espresso',
    highlights: [
      'Built relationships with more than 300 alumni daily through calls and email outreach.',
      'Secured over $3,000 in donations supporting university initiatives and student opportunities.',
      'Recognized as a top caller for consistently exceeding fundraising goals.',
    ],
    capabilities: [
      'Persuasive Communication',
      'Relationship Building',
      'Sales',
      'Email Outreach',
      'Goal-Driven Performance',
    ],
    stats: [
      { value: '300+', label: 'Alumni reached daily' },
      { value: '$3,000+', label: 'In donations secured' },
      { value: 'Top', label: 'Caller recognition' },
    ],
    gallery: [
      {
        title: 'Recognition & Outreach',
        description: 'Add recognition, outreach examples, or photos from the role.',
        samples: [
          { label: 'Recognition', hint: 'Add a certificate or recognition', aspect: 'landscape' },
          { label: 'Outreach example', hint: 'Add an email outreach example', aspect: 'landscape' },
        ],
      },
    ],
  },
  {
    slug: 'bryant-senior-counsel',
    number: '04',
    organization: 'Bryant University Senior Counsel',
    role: 'Fundraising Chair',
    dates: 'September 2026 – Present',
    category: 'Leadership · Event Promotion · Strategy',
    tagline: 'Leading fundraising strategy for the senior class.',
    summary:
      'As Fundraising Chair, I lead the ideas and strategy behind the senior class’s fundraising — collaborating with the committee, promoting events and campaigns to students and the Bryant community, and coordinating activities toward shared goals.',
    cover: '/img/senior-counsel.png',
    coverAlt: 'Event planning flat lay with tickets, envelopes and string lights',
    theme: 'rose',
    highlights: [
      'Develop fundraising ideas and strategies to increase student participation.',
      'Collaborate with committee members to plan and execute fundraising efforts.',
      'Promote events and campaigns to students and the Bryant community.',
      'Coordinate fundraising activities and goals.',
    ],
    capabilities: [
      'Leadership',
      'Fundraising Strategy',
      'Event Promotion',
      'Campaign Planning',
      'Collaboration',
      'Creative Thinking',
    ],
    gallery: [
      {
        title: 'Campaigns & Event Promotion',
        description: 'Promotional materials for fundraising events and campaigns.',
        samples: [
          { label: 'Campaign graphic', hint: 'Add a campaign graphic', aspect: 'portrait' },
          { label: 'Event promo', hint: 'Add an event flyer', aspect: 'portrait' },
          { label: 'Social post', hint: 'Add a promo post', aspect: 'square' },
        ],
      },
      {
        title: 'Planning & Strategy',
        description: 'Fundraising plans, timelines or strategy documents.',
        samples: [
          { label: 'Strategy', hint: 'Add a plan or timeline', aspect: 'landscape' },
        ],
      },
    ],
  },
]

export const skills = [
  {
    category: 'Strategy & Research',
    icon: 'compass',
    items: [
      'Consumer Behavior',
      'Market Research',
      'Audience Insights',
      'Data Analysis',
      'Brand Strategy',
    ],
  },
  {
    category: 'Creative & Digital',
    icon: 'sparkle',
    items: [
      'Social Media Marketing',
      'Content Creation',
      'Short-Form Video',
      'Creative Strategy',
      'Marketing Communications',
    ],
  },
  {
    category: 'Tools',
    icon: 'tools',
    items: [
      'Canva',
      'CapCut',
      'Mailchimp',
      'SurveyMonkey',
      'Microsoft Office',
      'Excel',
      'Google Workspace',
    ],
  },
  {
    category: 'Certifications',
    icon: 'seal',
    items: [
      'HubSpot Social Media Marketing Certification',
      'LinkedIn Learning AI Course Certification',
    ],
  },
] as const

export type CaseStudy = {
  slug: string
  number: string
  /** Leave as placeholder text until you add the real project. */
  title: string
  course: string
  focus: string
  placeholder: boolean
  cover?: string
  sections: {
    overview: string
    challenge: string
    research: string
    strategy: string
    creative: string
    takeaways: string
  }
  /** Downloadable deliverables, e.g. { label: 'Final deck', file: '/files/deck.pdf' } */
  deliverables: { label: string; file?: string }[]
  gallery: Sample[]
}

const emptySections = {
  overview: 'Describe the project, the course, the team and your role.',
  challenge: 'What business problem or opportunity did the project address?',
  research:
    'What research did you conduct, and what did you learn about the consumer?',
  strategy: 'What did you recommend, and why?',
  creative: 'Show the campaign, concepts, or deliverables you produced.',
  takeaways: 'What did you learn, and what would you do next?',
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'case-study-01',
    number: '01',
    title: 'Case Study Title',
    course: 'Course name · Semester',
    focus: 'Marketing Strategy · Brand Positioning',
    placeholder: true,
    sections: emptySections,
    deliverables: [
      { label: 'Presentation deck' },
      { label: 'Research report' },
    ],
    gallery: [
      { label: 'Presentation slide', hint: 'Add a key slide', aspect: 'landscape' },
      { label: 'Research graphic', hint: 'Add a chart or insight', aspect: 'landscape' },
      { label: 'Creative concept', hint: 'Add a concept or ad', aspect: 'square' },
    ],
  },
  {
    slug: 'case-study-02',
    number: '02',
    title: 'Case Study Title',
    course: 'Course name · Semester',
    focus: 'Consumer Research · Advertising',
    placeholder: true,
    sections: emptySections,
    deliverables: [{ label: 'Presentation deck' }],
    gallery: [
      { label: 'Presentation slide', hint: 'Add a key slide', aspect: 'landscape' },
      { label: 'Ad concept', hint: 'Add an advertising concept', aspect: 'portrait' },
    ],
  },
  {
    slug: 'case-study-03',
    number: '03',
    title: 'Case Study Title',
    course: 'Course name · Semester',
    focus: 'Business Analysis · Market Research',
    placeholder: true,
    sections: emptySections,
    deliverables: [{ label: 'Analysis report' }],
    gallery: [
      { label: 'Analysis graphic', hint: 'Add a chart or table', aspect: 'landscape' },
    ],
  },
]

export const contact = {
  headline: "Let's Create Something Meaningful.",
  supporting:
    "I'm always interested in connecting with creative thinkers, marketing professionals, and brands looking to make an impact.",
}
