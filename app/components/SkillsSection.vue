<script setup lang="ts">
import { skillGroups } from '~/data/site'
</script>

<template>
  <section id="skills" class="section" aria-labelledby="skills-title">
    <div class="container">
      <div class="section-head two-col two-col--end">
        <CodeTag>
          <h2 id="skills-title" class="section-title">Skills</h2>
        </CodeTag>
        <p class="skills__intro">
          The tools and techniques I use day to day, from the markup up to the deploy.
        </p>
      </div>

      <div class="skills">
        <div v-for="group in skillGroups" :key="group.title" class="skill-group">
          <h3 class="skill-group__title">{{ group.title }}</h3>
          <ul class="skill-group__list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__intro {
  max-width: 28rem;
  color: var(--muted);
}

.skills {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem clamp(1.25rem, 3vw, 2rem);
}

@media (min-width: 72rem) {
  .skills {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.skill-group {
  padding-top: 1.25rem;
  border-top: 1px solid var(--accent);
}

.skill-group__title {
  font-size: 1.35rem;
  letter-spacing: 0.06em;
}

.skill-group__list {
  display: grid;
  gap: 0.15rem;
  margin-top: 1rem;
  padding: 0;
  list-style: none;
  color: var(--text-soft);
}

.skill-group__list li {
  padding-block: 0.45rem;
  border-bottom: 1px solid var(--border);
  font-size: var(--step--1);
}
</style>
