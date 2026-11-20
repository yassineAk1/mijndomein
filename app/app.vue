<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  ogSiteName: site.name,
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
