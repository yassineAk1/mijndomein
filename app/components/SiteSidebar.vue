<script setup lang="ts">
import { site } from '~/data/site'
import scrollSpy from '~/assets/js/scroll-spy.js?raw'

const links = [
  { id: 'approach', label: 'Approach' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

// Inlined at the end of <body>: no extra request, and no framework needed
useHead({ script: [{ key: 'scroll-spy', innerHTML: scrollSpy, tagPosition: 'bodyClose' }] })
</script>

<template>
  <header class="sidebar">
    <!-- Logo: only shown in the mobile top bar -->
    <a href="/#top" class="brand">
      <span aria-hidden="true">YA</span>
      <span class="visually-hidden">{{ site.name }}</span>
    </a>

    <nav class="nav" aria-label="Main">
      <ol class="steps">
        <li v-for="link in links" :key="link.id" class="step">
          <a :href="`/#${link.id}`" class="step__link">
            <span class="step__dot" aria-hidden="true" />
            <span class="step__label">{{ link.label }}</span>
          </a>
        </li>
      </ol>
    </nav>

    <ul class="social">
      <li><ExternalLink :href="site.linkedin">LinkedIn</ExternalLink></li>
      <li><ExternalLink :href="site.github">GitHub</ExternalLink></li>
    </ul>
  </header>
</template>

<style scoped>
/* ---------- Mobile: a slim bar at the top ---------- */
.sidebar {
  --dot: 0.625rem;

  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-block-size: var(--topbar-height);
  padding-inline: 1rem;
  background: rgb(19 21 24 / 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.brand {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  inline-size: 2.25rem;
  block-size: 2.25rem;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--accent);
  text-decoration: none;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.brand:hover {
  background: var(--accent);
  color: var(--on-accent);
}

.social,
.step__dot {
  display: none;
}

.nav {
  margin-left: auto;
  overflow-x: auto;
  scrollbar-width: none;
}

.steps {
  display: flex;
  padding: 0;
  list-style: none;
}

.step__link {
  display: block;
  padding: 0.5rem 0.4rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
}

.step__link:hover {
  color: var(--text);
}

/* aria-current is set by the scroll-spy script */
.step__link[aria-current] {
  color: var(--accent);
}

/* Very narrow phones: tighten the links so all five fit */
@media (max-width: 24rem) {
  .step__link {
    padding-inline: 0.3rem;
    font-size: 0.75rem;
  }
}

/* ---------- Desktop: fixed sidebar with a progress line ---------- */
@media (min-width: 60rem) {
  .sidebar {
    position: fixed;
    inset: 0 auto 0 0;
    inline-size: var(--sidebar-width);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 2rem 1.5rem;
    background: var(--surface);
    border-bottom: 0;
    border-right: 1px solid var(--border);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .brand {
    display: none;
  }

  .nav {
    margin: auto 0;
    overflow: visible;
  }

  .steps {
    flex-direction: column;
  }

  .step {
    position: relative;
  }

  /* Line segment from this dot down to the next one */
  .step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(var(--dot) / 2 - 0.5px);
    inline-size: 1px;
    block-size: 100%;
    background: var(--border-strong);
    transition: background-color 0.4s;
  }

  .step__link {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 1.1rem;
    /* Space between the steps, and so the length of the line: grows with the screen height */
    padding: clamp(0.85rem, 2.6vh, 1.6rem) 0;
    font-size: 0.9rem;
  }

  .step__dot {
    display: block;
    flex-shrink: 0;
    inline-size: var(--dot);
    block-size: var(--dot);
    border: 1.5px solid var(--dim);
    border-radius: 50%;
    background: var(--surface);
    transition:
      background-color 0.3s,
      border-color 0.3s,
      box-shadow 0.3s,
      transform 0.3s var(--ease-out);
  }

  .step__link:hover .step__dot {
    border-color: var(--text);
  }

  /* Steps before the active one are "passed": filled dot and line */
  .step:has(~ .step > [aria-current])::after {
    background: var(--accent);
  }

  .step:has(~ .step > [aria-current]) .step__link {
    color: var(--text-soft);
  }

  .step:has(~ .step > [aria-current]) .step__dot {
    border-color: var(--accent);
    background: var(--accent);
  }

  .step__link[aria-current] {
    color: var(--text);
  }

  .step__link[aria-current] .step__dot {
    border-color: var(--accent);
    background: var(--accent);
    box-shadow: 0 0 0 5px rgb(var(--accent-rgb) / 0.15);
    transform: scale(1.2);
  }

  .social {
    display: grid;
    gap: 0.4rem;
    padding: 0;
    list-style: none;
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }

  .social a {
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  .social a:hover {
    color: var(--accent);
  }
}
</style>
