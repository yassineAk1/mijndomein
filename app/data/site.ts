/**
 * Site-wide content in one place: name, links, intro, bio, approach, skills.
 */
export const site = {
  url: 'https://yassineakka.nl',
  name: 'Yassine Akka',
  role: 'Front-end Developer',
  github: 'https://github.com/yassineAk1',
  linkedin: 'https://www.linkedin.com/in/yassine-akka-101b1a3a7/',

  // TODO: add your email address. Leave empty to hide the email link.
  email: '',

  intro: 'I build websites that are responsive, accessible, performant and progressively enhanced.',

  bio: [
    'I chose development because I love building: taking an idea from an empty file to something that works well and feels right, on every device and for every user.',
    'Besides front-end development and design, I’m especially interested in web performance and accessibility. I like finding out why a page is slow or hard to use, and improving it until it loads fast on a weak connection and works with just a keyboard or a screen reader.',
  ],
}

/** RAPPE: the quality standard of Frontend Design & Development (docs.fdnd.nl). */
export type RappeLetter = 'R' | 'A' | 'P' | 'PE'

export interface RappePrinciple {
  letter: RappeLetter
  title: string
  text: string
}

export const rappe: RappePrinciple[] = [
  {
    letter: 'R',
    title: 'Responsive',
    text: 'Layouts that adapt to every screen and to the space a component gets, using container queries and the user’s own preferences.',
  },
  {
    letter: 'A',
    title: 'Accessible',
    text: 'Built to WCAG 2.2 with semantic HTML, full keyboard support and clear feedback, so everyone can use it.',
  },
  {
    letter: 'P',
    title: 'Performant',
    text: 'Fast by default. Load time, asset size and the number of requests stay within a performance budget.',
  },
  {
    letter: 'PE',
    title: 'Progressively Enhanced',
    text: 'A solid HTML base first, with CSS and JavaScript layered on top. If a layer fails, the core still works.',
  },
]

export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    items: ['HTML', 'CSS', 'JavaScript', 'Svelte & SvelteKit', 'Vue & Nuxt'],
  },
  {
    title: 'Back-end & data',
    items: ['Node.js', 'Express', 'Liquid templating', 'REST APIs', 'Directus (headless CMS)'],
  },
  {
    title: 'Testing',
    items: ['WCAG audits', 'Keyboard & screen reader', 'Performance audits', 'Browser & device tests', 'User testing'],
  },
  {
    title: 'Workflow',
    items: ['Git & GitHub', 'GitHub Actions', 'Netlify & Render', 'Code reviews', 'Agile sprints'],
  },
]
