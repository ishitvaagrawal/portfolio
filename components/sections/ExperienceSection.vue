<script setup lang="ts">
/**
 * Experience section with a vertical work timeline.
 */
import ScrollReveal from '~/components/ui/ScrollReveal.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import SkillBadge from '~/components/ui/SkillBadge.vue'
import { experiences } from '~/content/portfolio-data'
</script>

<template>
  <section class="py-24 relative">
    <div class="max-w-3xl mx-auto px-6">
      <ScrollReveal direction="up">
        <SectionTitle 
          label="WORK HISTORY" 
          title="Experience" 
        />
      </ScrollReveal>
      
      <div class="relative mt-16 pl-4 sm:pl-0">
        <!-- Vertical Line -->
        <div class="absolute left-4 sm:left-[50%] top-0 bottom-0 w-px bg-[#242424] -translate-x-1/2"></div>
        
        <div class="space-y-12">
          <ScrollReveal 
            v-for="(exp, index) in experiences" 
            :key="exp.id" 
            direction="up" 
            :delay="index * 0.1"
          >
            <div :class="[
              'relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0',
              index % 2 === 0 ? 'sm:flex-row-reverse' : ''
            ]">
              
              <!-- Timeline Dot -->
              <div :class="[
                'absolute left-0 sm:left-[50%] top-6 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 w-4 h-4 rounded-full border-2 z-10 transition-colors duration-300',
                exp.isCurrentRole ? 'bg-[#C8F542] border-[#C8F542] shadow-[0_0_10px_rgba(200,245,66,0.5)]' : 'bg-[#0A0A0A] border-[#5C5248]'
              ]"></div>
              
              <!-- Content Card -->
              <div :class="[
                'w-full sm:w-1/2 pl-8 sm:px-12',
                index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'
              ]">
                <div :class="[
                  'bg-[#111111] border rounded-xl p-6 hover:border-[#C8F542] transition-all duration-300',
                  exp.isCurrentRole ? 'border-l-2 border-l-[#C8F542] border-y-[#242424] border-r-[#242424] shadow-[0_4px_20px_rgba(200,245,66,0.05)]' : 'border-[#242424]'
                ]">
                  <span class="text-[#5C5248] font-mono text-sm block mb-2">{{ exp.period }}</span>
                  <h3 class="text-xl font-bold font-heading text-[#F0EBE1] mb-1">{{ exp.role }}</h3>
                  <a :href="exp.companyUrl" target="_blank" rel="noopener noreferrer" class="text-[#C8F542] font-medium text-sm hover:underline inline-block mb-4">
                    @ {{ exp.company }}
                  </a>
                  
                  <p class="text-[#A89E8C] font-body text-sm mb-4 leading-relaxed">
                    {{ exp.description }}
                  </p>
                  
                  <ul class="space-y-2 mb-6">
                    <li v-for="(highlight, i) in exp.highlights" :key="i" 
                        class="text-sm font-body text-[#A89E8C] flex items-start gap-2"
                        :class="index % 2 === 0 ? 'text-left justify-start' : 'sm:text-right sm:flex-row-reverse sm:justify-start text-left justify-start'">
                      <span class="text-[#C8F542] mt-1 text-xs">▹</span>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                  
                  <div class="flex flex-wrap gap-2" :class="index % 2 === 0 ? 'justify-start' : 'sm:justify-end justify-start'">
                    <SkillBadge v-for="tag in exp.tags" :key="tag" :label="tag" />
                  </div>
                </div>
              </div>
              
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
</template>
