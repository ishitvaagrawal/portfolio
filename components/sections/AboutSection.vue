<script setup lang="ts">
/**
 * About section featuring personal bio and summary.
 */
import ScrollReveal from '~/components/ui/ScrollReveal.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import TerminalCard from '~/components/ui/TerminalCard.vue'
import { personalInfo } from '~/content/portfolio-data'

const terminalContent = {
  name: personalInfo.name,
  role: "fullstack + AI",
  location: personalInfo.location,
  status: "currently building",
  coffeeLevel: "critically high",
  openTo: ["freelance", "collabs", "interesting problems"]
}

const stats = [
  { value: "∞", label: "Coffees consumed" },
  { value: "100+", label: "Commits pushed" },
  { value: "2", label: "Domains mastered" }
]
</script>

<template>
  <section class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        
        <!-- Left Column: Text -->
        <div class="w-full lg:w-1/2">
          <ScrollReveal direction="left">
            <SectionTitle 
              label="WHO I AM" 
              title="About Me" 
            />
            
            <div class="prose prose-invert prose-p:text-[#A89E8C] prose-p:font-body mb-10">
              <p>
                {{ personalInfo.bio }}
              </p>
              <p class="mt-4">
                When I'm not writing code, you can find me exploring the latest advancements in AI, optimizing database queries, or simply enjoying a good cup of coffee while debugging a stubborn issue.
              </p>
            </div>
            
            <!-- Stat Cards -->
            <div class="grid grid-cols-3 gap-4">
              <div v-for="stat in stats" :key="stat.label" 
                   class="flex flex-col items-center justify-center p-4 rounded-xl border border-[#242424] bg-[#111111] hover:border-[#C8F542] transition-colors duration-300">
                <span class="text-2xl font-bold font-heading text-[#C8F542]">{{ stat.value }}</span>
                <span class="text-xs text-[#5C5248] text-center mt-1 uppercase tracking-wider">{{ stat.label }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <!-- Right Column: Terminal -->
        <div class="w-full lg:w-1/2">
          <ScrollReveal direction="right" :delay="0.2">
            <TerminalCard :content="terminalContent" />
          </ScrollReveal>
        </div>
        
      </div>
    </div>
  </section>
</template>
