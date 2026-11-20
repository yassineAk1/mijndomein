<script setup lang="ts">
import { site } from '~/data/site'

const title = `${site.name} — ${site.role}`
const description = `${site.name} is a front-end developer in Amsterdam who builds fast, accessible websites. See how I work, my skills and how to get in touch.`
const image = `${site.url}/images/og.jpg`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: site.url,
  ogImage: image,
  ogImageAlt: `${site.name}, ${site.role}`,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}/` }] })
</script>

<template>
  <div>
    <HeroSection />
    <ApproachSection />
    <ProjectsSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>
