<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => (is404.value ? 'Page not found | Yassine Akka' : 'Something went wrong | Yassine Akka'),
  robots: 'noindex',
})
</script>

<template>
  <NuxtLayout>
    <section class="container error-page">
      <CodeTag tag="h1">
        <h1 class="section-title">{{ is404 ? '404' : 'Error' }}</h1>
      </CodeTag>
      <p class="error-page__text">
        {{ is404 ? 'This page doesn’t exist (anymore). The link may be outdated.' : 'Something went wrong. Please try again in a moment.' }}
      </p>
      <a href="/" class="button button--primary">Back to home</a>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.error-page {
  display: grid;
  justify-items: start;
  gap: 2rem;
  padding-block: clamp(4rem, 14vw, 10rem);
}

.error-page__text {
  max-width: 32rem;
  font-size: var(--step-1);
  color: var(--text-soft);
}
</style>
