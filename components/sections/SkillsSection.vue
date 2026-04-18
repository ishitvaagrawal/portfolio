<script setup lang="ts">
/**
 * Grouped tech stack display.
 */
import ScrollReveal from '~/components/ui/ScrollReveal.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import SkillBadge from '~/components/ui/SkillBadge.vue'
import { skillGroups } from '~/content/portfolio-data'
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Subtle CSS Grid Pattern Background -->
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none"
         style="background-image: radial-gradient(#242424 1px, transparent 1px); background-size: 24px 24px;">
    </div>
    
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <ScrollReveal direction="up">
        <SectionTitle 
          label="TECH STACK" 
          title="Skills" 
          align="center"
        />
      </ScrollReveal>
      
      <div class="mt-16 space-y-16">
        <ScrollReveal 
          v-for="(group, index) in skillGroups" 
          :key="group.name"
          direction="up"
          :delay="index * 0.1"
        >
          <div class="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
            <h3 class="w-32 shrink-0 text-[#5C5248] text-xs font-mono uppercase tracking-widest md:text-right">
              {{ group.name }}
            </h3>
            
            <div class="flex flex-wrap gap-3">
              <SkillBadge 
                v-for="skill in group.skills" 
                :key="skill.label" 
                :label="skill.label" 
                :icon-name="skill.icon" 
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
