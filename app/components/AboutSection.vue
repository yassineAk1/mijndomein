<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-title">
    <div class="container two-col">
      <CodeTag>
        <h2 id="about-title" class="section-title">About</h2>
      </CodeTag>

      <div class="about__bio">
        <p v-for="(paragraph, index) in site.bio" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__bio {
  display: grid;
  gap: 1.25rem;
  max-width: 36rem;
  color: var(--text-soft);
}

.about__bio p:first-child {
  font-size: var(--step-1);
  line-height: 1.55;
  color: var(--text);
}

@media (min-width: 72rem) {
  .about__bio {
    padding-top: 1.85rem;
  }
}
</style>
