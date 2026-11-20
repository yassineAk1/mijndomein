import type { RappeLetter } from './site'

/**
 * Projects. Add a project = add an object to this list.
 *
 * Not shown on the site right now: the Projects section says "Coming soon".
 * The content is kept here for the redesign of that section.
 */
export interface Project {
  title: string
  subtitle: string
  /** Client, or 'Solo project'. */
  client: string
  role: string
  year: string
  /** Optional, e.g. 'In progress'. */
  status?: string
  /** One sentence. Keep it short: people scan. */
  summary: string
  /** What you did, concrete and short. Shown under "How it's built". */
  contributions: string[]
  /** How the RAPPE principles show up in this project. Only list the ones you can back up. */
  rappe: { letter: RappeLetter; text: string }[]
  stack: string[]
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Teylers Museum',
    subtitle: 'Timeline & quiz',
    client: 'Q42 × Teylers Museum',
    role: 'Front-end Developer',
    year: '2026',
    status: 'In progress',
    summary:
      'A playful, accessible museum timeline for young visitors. I built the quiz that tests what they have learned.',
    contributions: [
      'Built the quiz with Atomic Design: AnswerOption → QuizQuestion → Quiz',
      'Loaded the questions and explanations from the Directus CMS',
      'Set up the SvelteKit project and the team’s contributing guidelines',
    ],
    rappe: [
      {
        letter: 'A',
        text: 'Feedback lives in an <output> element, so screen readers announce the result. Tested keyboard-only and with Narrator.',
      },
      {
        letter: 'P',
        text: 'All questions ship with the page, so checking an answer needs no extra request.',
      },
      {
        letter: 'PE',
        text: 'Checking answers works without JavaScript through a SvelteKit form action, and the chosen answer stays selected.',
      },
    ],
    stack: ['SvelteKit', 'Svelte', 'Directus', 'CSS'],
    liveUrl: 'https://q42-teylers.netlify.app/',
    repoUrl: 'https://github.com/fdnd-agency/q42museumplatform',
  },
  {
    title: 'Funda',
    subtitle: 'Proof of concept',
    client: 'Solo project',
    role: 'Design & Development',
    year: '2026',
    summary:
      'A rebuild of Funda’s property pages that works with HTML alone, with every interaction added as an enhancement.',
    contributions: [
      'Planned the build with a sitemap of routes and endpoints, and wireframes',
      'Server-side rendered pages with Node.js, Express and Liquid, using data from Directus',
      'A share popover with a copy-link button that confirms with a checkmark',
    ],
    rappe: [
      {
        letter: 'R',
        text: 'Designed for phone and tablet. The photo viewer falls back to a native <dialog> on iOS, where the Fullscreen API is missing.',
      },
      {
        letter: 'A',
        text: 'Checked with a user test, accessibility tests and HTML validation, and fixed what came out of them.',
      },
      {
        letter: 'P',
        text: 'Load speed backed by tests. A service worker makes the site installable and adds an offline page.',
      },
      {
        letter: 'PE',
        text: 'Saving a favorite is a plain POST form. With JavaScript it is enhanced with fetch, a message and an animation.',
      },
    ],
    stack: ['Node.js', 'Express', 'Liquid', 'Directus', 'Service Worker'],
    liveUrl: 'https://proof-of-concept-r0dm.onrender.com',
    repoUrl: 'https://github.com/yassineAk1/proof-of-concept',
  },
]
