<script setup lang="ts">
import { rappe } from '~/data/site'
</script>

<template>
  <section id="approach" class="section" aria-labelledby="approach-title">
    <div class="container">
      <div class="section-head two-col two-col--end">
        <CodeTag>
          <h2 id="approach-title" class="section-title">Approach</h2>
        </CodeTag>
        <p class="approach__intro">
          I build by <strong>RAPPE</strong>, the quality standard of Frontend Design &amp; Development in Amsterdam.
          Every project has to meet all four principles, and I test it on each of them.
        </p>
      </div>

      <!-- Read across, the letters spell RAPPE -->
      <ol class="rappe">
        <li v-for="principle in rappe" :key="principle.letter" class="rappe__item">
          <span class="rappe__letter" aria-hidden="true">{{ principle.letter }}</span>
          <h3 class="rappe__title">{{ principle.title }}</h3>
          <p class="rappe__text">{{ principle.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.approach__intro {
  max-width: 30rem;
  color: var(--muted);
}

.approach__intro strong {
  color: var(--accent);
  font-weight: 600;
  letter-spacing: 0.04em;
}

/* A grid with hairline dividers: 1px gaps over a border-colored background */
.rappe {
  display: grid;
  gap: 1px;
  padding: 0;
  list-style: none;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--border);
  overflow: hidden;
}

@media (min-width: 40rem) {
  .rappe {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 72rem) {
  .rappe {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.rappe__item {
  display: flex;
  flex-direction: column;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  background: var(--bg);
  transition: background-color 0.3s;
}

.rappe__item:hover {
  background: var(--surface);
}

.rappe__letter {
  font-family: var(--font-display);
  font-size: clamp(4.5rem, 3rem + 4vw, 6.5rem);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: 0.02em;
  color: var(--accent);
  transition: color 0.3s;
}

@supports (-webkit-text-stroke: 1px black) {
  .rappe__letter {
    color: transparent;
    -webkit-text-stroke: 1.5px rgb(var(--accent-rgb) / 0.7);
  }

  .rappe__item:hover .rappe__letter {
    color: var(--accent);
  }
}

.rappe__title {
  margin-top: 1.75rem;
  font-size: 1.45rem;
  letter-spacing: 0.06em;
  line-height: 1.15;
}

.rappe__text {
  margin-top: 0.75rem;
  font-size: var(--step--1);
  line-height: 1.7;
  color: var(--muted);
}
</style>
