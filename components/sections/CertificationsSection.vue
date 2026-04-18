<script setup lang="ts">
/**
 * Certifications grid section.
 */
import ScrollReveal from '~/components/ui/ScrollReveal.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import { certifications } from '~/content/portfolio-data'
</script>

<template>
  <section class="py-24 relative bg-[#111111]/30">
    <div class="max-w-4xl mx-auto px-6">
      <ScrollReveal direction="fade">
        <SectionTitle 
          label="ACHIEVEMENTS" 
          title="Licenses & Certifications" 
        />
      </ScrollReveal>
      
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ScrollReveal 
          v-for="(cert, index) in certifications" 
          :key="cert.id"
          direction="up"
          :delay="index * 0.1"
          class="group bg-[#0A0A0A] border border-[#242424] rounded-xl p-6 flex flex-col items-start gap-4 hover:border-[#C8F542]/50 transition-colors duration-300 relative overflow-hidden"
        >
          <!-- Subtle background glow on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-[rgba(200,245,66,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div class="w-12 h-12 rounded-full bg-[#111111] border border-[#242424] flex items-center justify-center group-hover:border-[#C8F542]/50 transition-colors relative z-10">
            <Icon name="heroicons:academic-cap" class="w-6 h-6 text-[#C8F542]" />
          </div>
          
          <h3 class="text-base font-heading font-bold text-[#F0EBE1] leading-snug relative z-10">
            {{ cert.title }}
          </h3>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
