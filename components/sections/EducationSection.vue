<script setup lang="ts">
/**
 * Education vertical timeline section.
 */
import ScrollReveal from '~/components/ui/ScrollReveal.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import { educations } from '~/content/portfolio-data'
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-6">
      <ScrollReveal direction="fade">
        <SectionTitle 
          label="EDUCATION" 
          title="Academic Background" 
        />
      </ScrollReveal>
      
      <div class="mt-16 space-y-12">
        <ScrollReveal 
          v-for="(edu, index) in educations" 
          :key="edu.id"
          direction="up"
          :delay="index * 0.1"
          class="relative pl-8 md:pl-0"
        >
          <!-- Timeline Line -->
          <div class="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-[#242424] -translate-x-1/2"></div>
          
          <div class="md:grid md:grid-cols-2 md:gap-12 relative">
            <!-- Timeline Dot -->
            <div class="absolute left-[-37px] md:left-[50%] top-2 md:top-6 w-3 h-3 rounded-full bg-[#C8F542] md:-translate-x-1/2 ring-4 ring-[#0A0A0A] z-10"></div>
            
            <!-- Left side: Period -->
            <div class="mb-2 md:mb-0 md:text-right md:pt-4" :class="[index % 2 === 0 ? 'md:order-1' : 'md:order-2']">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium border border-[#242424] text-[#C8F542] bg-[rgba(200,245,66,0.05)]">
                {{ edu.period }}
              </span>
            </div>
            
            <!-- Right side: Content -->
            <div class="bg-[#111111] border border-[#242424] rounded-xl p-6 hover:border-[#C8F542]/50 transition-colors duration-300" :class="[index % 2 === 0 ? 'md:order-2' : 'md:order-1']">
              <h3 class="text-xl font-heading font-bold text-[#F0EBE1] mb-1">{{ edu.degree }}</h3>
              <div class="text-[#A89E8C] font-mono text-sm mb-4">
                {{ edu.institution }}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
