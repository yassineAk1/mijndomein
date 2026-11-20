# yassineakka.nl

Personal portfolio of Yassine Akka, front-end developer. A single-page site built with [Nuxt](https://nuxt.com), statically generated and hosted on GitHub Pages at [yassineakka.nl](https://yassineakka.nl).

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

Preview the static build (exactly what gets deployed):

```bash
npm run generate
npm run preview    # http://localhost:4173
```

## Performance

The content is static, so the production build ships **no framework JavaScript** (`features.noScripts` in `nuxt.config.ts`). All CSS is inlined, and the page is one HTML file plus three self-hosted fonts (about 100 KB in total). The only script is the sidebar scroll-spy (`app/assets/js/scroll-spy.js`), inlined as a progressive enhancement: without it the navigation still works.

Run Lighthouse on the static build at `http://localhost:4173`, in an incognito window. Don't test the dev server at `http://localhost:3000`: it loads every file separately for hot reloading, so it scores far lower than the live site.

## Editing content

| What | File |
| --- | --- |
| Name, intro, bio, links, RAPPE approach, skills | `app/data/site.ts` |
| Project content (not shown yet: the section says "Coming soon") | `app/data/projects.ts` |
| Colors, fonts, spacing (design tokens) | `app/assets/css/main.css` |
| Page sections | `app/components/` |
| Sidebar scroll-spy | `app/assets/js/scroll-spy.js` |
| Social share image (1200×630) | `public/images/og.jpg` |

## Deployment

Every push to `main` builds and publishes the site through GitHub Actions (`.github/workflows/deploy.yml`). The workflow can also be started manually from the Actions tab.
