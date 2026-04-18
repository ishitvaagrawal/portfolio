<script setup lang="ts">
/**
 * Minimal footer.
 */
import { personalInfo } from '~/content/portfolio-data'
</script>

<template>
  <footer class="border-t border-[#242424] py-8 mt-24">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <span class="font-heading font-bold text-xl text-[#F0EBE1]">
          {{ personalInfo.name }}
        </span>
        <div class="h-4 w-px bg-[#242424] hidden md:block"></div>
        <div class="flex items-center gap-4">
          <a v-if="personalInfo.socials.github" :href="personalInfo.socials.github" target="_blank" rel="noopener noreferrer" class="text-[#A89E8C] hover:text-[#C8F542] transition-colors" aria-label="GitHub">
            <Icon name="simple-icons:github" class="w-5 h-5" />
          </a>
          <a v-if="personalInfo.socials.linkedin" :href="personalInfo.socials.linkedin" target="_blank" rel="noopener noreferrer" class="text-[#A89E8C] hover:text-[#C8F542] transition-colors" aria-label="LinkedIn">
            <Icon name="simple-icons:linkedin" class="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <p class="text-sm text-[#5C5248] font-body text-center md:text-right">
        Built with <span class="text-[#C8F542]">♥</span> and too much coffee.<br/>
        &copy; {{ new Date().getFullYear() }} All rights reserved.
      </p>
    </div>
  </footer>
</template>
