<script setup lang="ts">
/**
 * Fixed top navigation bar.
 */
import { ref, onMounted } from 'vue'
import { personalInfo } from '~/content/portfolio-data'
import { useScrollProgress } from '~/composables/useScrollProgress'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

const { activeSection } = useScrollProgress()
const { animateNavBackground } = useGsapAnimations()

const isMobileMenuOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

onMounted(() => {
  if (navRef.value) {
    animateNavBackground(navRef.value)
  }
})

const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  isMobileMenuOpen.value = false
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header ref="navRef" class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" @click="(e) => scrollToSection(e, '#home')" class="font-heading font-bold text-2xl tracking-tighter text-[#C8F542] group">
        IA<span class="text-[#F0EBE1] group-hover:text-[#C8F542] transition-colors">.</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navigationLinks" 
          :key="link.href"
          :href="link.href"
          @click="(e) => scrollToSection(e, link.href)"
          :class="[
            'text-sm font-body transition-colors duration-300 hover:text-[#C8F542]',
            activeSection === link.href.substring(1) ? 'text-[#C8F542]' : 'text-[#F0EBE1]'
          ]"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden text-[#F0EBE1] hover:text-[#C8F542] p-2"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <Icon :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 bg-[#0A0A0A] flex items-center justify-center">
        <nav class="flex flex-col items-center gap-8">
          <a 
            v-for="link in navigationLinks" 
            :key="link.href"
            :href="link.href"
            @click="(e) => scrollToSection(e, link.href)"
            :class="[
              'text-2xl font-heading font-medium transition-colors duration-300 hover:text-[#C8F542]',
              activeSection === link.href.substring(1) ? 'text-[#C8F542]' : 'text-[#F0EBE1]'
            ]"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
