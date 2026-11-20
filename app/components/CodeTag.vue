<script setup lang="ts">
/** Wraps content in grey <tag> and </tag> labels, like a code editor. Decoration only. */
withDefaults(defineProps<{ tag?: string }>(), { tag: 'h2' })
</script>

<template>
  <div class="tagged">
    <span class="code-tag" aria-hidden="true">&lt;{{ tag }}&gt;</span>
    <slot />
    <span class="code-tag" aria-hidden="true">&lt;/{{ tag }}&gt;</span>
  </div>
</template>

<style scoped>
.tagged {
  display: grid;
  gap: 0.5rem;
}

/* On wide screens the tags hang slightly to the left, like indentation in an editor */
@media (min-width: 72rem) {
  .code-tag {
    margin-left: -1.75rem;
  }
}
</style>
