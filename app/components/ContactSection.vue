<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="contact" class="section" aria-labelledby="contact-title">
    <div class="container two-col">
      <CodeTag>
        <h2 id="contact-title" class="section-title">Contact</h2>
      </CodeTag>

      <div class="contact__body">
        <p class="contact__statement">Have a question or an opportunity? Feel free to send me a message.</p>

        <a v-if="site.email" :href="`mailto:${site.email}`" class="contact__mail">{{ site.email }}</a>

        <div class="contact__links">
          <ExternalLink :href="site.linkedin" class="button button--primary">LinkedIn</ExternalLink>
          <ExternalLink :href="site.github" class="button button--quiet">GitHub</ExternalLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 72rem) {
  .contact__body {
    padding-top: 1.85rem;
  }
}

.contact__statement {
  max-width: 30rem;
  font-size: var(--step-2);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--text);
  text-wrap: balance;
}

.contact__mail {
  display: inline-block;
  margin-top: 2rem;
  font-family: var(--font-mono);
  font-size: var(--step-1);
  color: var(--accent);
  text-underline-offset: 0.3em;
  overflow-wrap: anywhere;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.5rem;
}
</style>
