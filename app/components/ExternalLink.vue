<script setup lang="ts">
/** A link to one of my own profiles (LinkedIn, GitHub) that opens in a new tab. */
defineProps<{ href: string }>()
</script>

<template>
  <a :href="href" target="_blank" rel="me">
    <slot /> <span aria-hidden="true">↗</span><span class="visually-hidden"> (opens in a new tab)</span>
  </a>
</template>
