<script setup lang="ts">
/**
 * Reusable project display card.
 */
import type { Project } from '~/content/portfolio-data'
import SkillBadge from './SkillBadge.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div :class="[
    'flex flex-col bg-[#111111] border border-[#242424] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#C8F542] hover:shadow-[0_4px_24px_rgba(200,245,66,0.10)] group',
    project.isFeatured ? 'lg:col-span-2 lg:flex-row' : ''
  ]">
    <!-- Image Area -->
    <div :class="[
      'relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]',
      project.isFeatured ? 'lg:w-1/2 lg:shrink-0' : 'aspect-video'
    ]">
      <img 
        v-if="project.image" 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div v-else class="absolute inset-0 flex items-center justify-center opacity-20">
        <Icon name="heroicons:photo" class="w-16 h-16 text-[#A89E8C]" />
      </div>
      
      <!-- Category Badge overlay -->
      <div class="absolute top-4 right-4 px-2.5 py-1 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#242424] rounded text-xs font-mono text-[#C8F542]">
        {{ project.category }}
      </div>
    </div>

    <!-- Content Area -->
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-2xl font-bold font-heading text-[#F0EBE1] group-hover:text-[#C8F542] transition-colors duration-300">
          {{ project.title }}
        </h3>
        <span class="text-xs text-[#5C5248] font-mono">{{ project.year }}</span>
      </div>
      
      <p class="text-[#A89E8C] font-body text-sm mb-6 flex-grow">
        {{ project.longDescription }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <SkillBadge v-for="tag in project.tags" :key="tag" :label="tag" />
      </div>
      
      <div class="flex items-center gap-4 mt-auto pt-4 border-t border-[#242424]">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" 
           class="flex items-center gap-1.5 text-sm font-medium text-[#F0EBE1] hover:text-[#C8F542] transition-colors">
          <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4" />
          Live Demo
        </a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" 
           class="flex items-center gap-1.5 text-sm font-medium text-[#F0EBE1] hover:text-[#C8F542] transition-colors">
          <Icon name="simple-icons:github" class="w-4 h-4" />
          Source
        </a>
      </div>
    </div>
  </div>
</template>
