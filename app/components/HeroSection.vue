<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="container hero__inner">
      <CodeTag tag="h1">
        <h1 id="hero-title" class="hero__title">
          <span>{{ site.name }}</span>
          <span class="hero__role">{{ site.role }}</span>
        </h1>
      </CodeTag>

      <p class="hero__intro">{{ site.intro }}</p>

      <div class="hero__actions">
        <a href="#approach" class="button button--primary">My approach</a>
        <a href="#contact" class="button">Get in touch</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  padding-block: clamp(3.5rem, 10vw, 6rem);
}

@media (min-width: 60rem) {
  .hero {
    min-height: min(100svh, 52rem);
  }
}

.hero__inner > * {
  animation: rise 0.7s var(--ease-out) both;
}
.hero__inner > :nth-child(2) {
  animation-delay: 0.08s;
}
.hero__inner > :nth-child(3) {
  animation-delay: 0.16s;
}

.hero__title {
  display: grid;
  font-size: var(--step-4);
  line-height: 0.98;
  overflow-wrap: break-word;
}

.hero__role {
  color: var(--accent);
}

.hero__intro {
  max-width: 34rem;
  margin-top: 2rem;
  font-size: var(--step-1);
  line-height: 1.55;
  color: var(--text-soft);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.5rem;
}
</style>
