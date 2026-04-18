<script setup lang="ts">
import { useHead } from '#imports'
import { personalInfo } from '~/content/portfolio-data'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import EducationSection from '~/components/sections/EducationSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import CertificationsSection from '~/components/sections/CertificationsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

useHead({
  title: personalInfo.name,
  meta: [
    { name: 'description', content: personalInfo.bio },
    { property: 'og:title', content: `${personalInfo.name} — ${personalInfo.tagline}` },
    { property: 'og:description', content: personalInfo.bio },
    { property: 'og:image', content: '/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://ishitva.com' } // Placeholder URL
  ]
})
</script>

<template>
  <main>
    <AppNavbar />
    <HeroSection id="home" photo-style="contained" />
    <AboutSection id="about" />
    <ExperienceSection id="experience" />
    <EducationSection id="education" />
    <ProjectsSection id="projects" />
    <SkillsSection id="skills" />
    <CertificationsSection id="certifications" />
    <ContactSection id="contact" />
    <AppFooter />
  </main>
</template>
