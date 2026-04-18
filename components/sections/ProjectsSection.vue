<script setup lang="ts">
/**
 * Filterable portfolio grid.
 */
import { ref, computed } from 'vue'
import ScrollReveal from '~/components/ui/ScrollReveal.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import ProjectCard from '~/components/ui/ProjectCard.vue'
import { projects, personalInfo } from '~/content/portfolio-data'

const activeFilter = ref('All')
const filters = ['All', 'Fullstack', 'AI', 'Tool']

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

<template>
  <section class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <ScrollReveal direction="up">
        <SectionTitle 
          label="MY WORK" 
          title="Projects" 
        />
      </ScrollReveal>
      
      <!-- Filters -->
      <ScrollReveal direction="fade" :delay="0.1">
        <div class="flex flex-wrap gap-4 mb-12">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-2 rounded-full text-sm font-mono transition-all duration-300',
              activeFilter === filter 
                ? 'bg-[#C8F542] text-[#0A0A0A] font-bold' 
                : 'bg-[#111111] border border-[#242424] text-[#A89E8C] hover:border-[#C8F542] hover:text-[#C8F542]'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </ScrollReveal>
      
      <!-- Grid -->
      <div class="relative min-h-[400px]">
        <TransitionGroup 
          name="project-list" 
          tag="div" 
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project" 
          />
        </TransitionGroup>
      </div>
      
      <ScrollReveal direction="fade" :delay="0.2">
        <div class="mt-16 text-center">
          <a :href="personalInfo.socials.github" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-2 text-[#A89E8C] hover:text-[#C8F542] font-mono transition-colors">
            View all projects on GitHub 
            <Icon name="heroicons:arrow-right" class="w-4 h-4" />
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.project-list-move, /* apply transition to moving elements */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.project-list-leave-active {
  position: absolute;
}
</style>
