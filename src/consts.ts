import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Christoph Alt",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_NEWS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Christoph Alt is a lead data scientist at Bayer Pharma, working on agentic systems for pharma. Previously an NLP researcher at HU Berlin and DFKI.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on language AI, machine learning, and things I have been building.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Positions I have held in industry and research.",
};

export const PUBLICATIONS: Metadata = {
  TITLE: "Publications",
  DESCRIPTION: "Peer-reviewed papers and my doctoral thesis on relation extraction, transfer learning, and model analysis.",
};

export const NEWS: Metadata = {
  TITLE: "News",
  DESCRIPTION: "Updates on papers, talks, and positions.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/ChristophAlt",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ChristophAlt",
  },
  {
    NAME: "google scholar",
    HREF: "https://scholar.google.com/citations?user=JiJIrfwAAAAJ",
  },
  {
    NAME: "orcid",
    HREF: "https://orcid.org/0000-0002-0500-8250",
  },
];
