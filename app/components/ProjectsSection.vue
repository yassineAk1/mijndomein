<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-title">
    <div class="container two-col">
      <CodeTag>
        <h2 id="projects-title" class="section-title">Projects</h2>
      </CodeTag>

      <div class="soon">
        <p class="soon__status">Coming soon</p>
        <p class="soon__text">I’m putting together a selection of my work. Until then, you can find my code on GitHub.</p>
        <ExternalLink :href="site.github" class="button button--quiet">View GitHub</ExternalLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.soon {
  display: grid;
  justify-items: start;
  gap: 1.5rem;
  max-width: 34rem;
}

@media (min-width: 72rem) {
  .soon {
    padding-top: 1.85rem;
  }
}

.soon__status {
  padding: 0.3rem 0.85rem;
  border: 1px solid rgb(var(--accent-rgb) / 0.35);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: var(--step--2);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
}

.soon__text {
  font-size: var(--step-1);
  line-height: 1.55;
  color: var(--text-soft);
}
</style>
