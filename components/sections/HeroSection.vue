<script setup lang="ts">
/**
 * Full-screen first impression section.
 */
import { ref, onMounted } from 'vue'
import { personalInfo } from '~/content/portfolio-data'
import { useGsapAnimations } from '~/composables/useGsapAnimations'
import AnimatedText from '~/components/ui/AnimatedText.vue'

const props = withDefaults(defineProps<{
  photoStyle?: 'contained' | 'full'
}>(), {
  photoStyle: 'contained'
})

const { animateHeroEntrance } = useGsapAnimations()
const heroTextRefs = ref<HTMLElement[]>([])

onMounted(() => {
  if (heroTextRefs.value.length > 0) {
    animateHeroEntrance(heroTextRefs.value)
  }
})

const setRef = (el: any) => {
  if (el && !heroTextRefs.value.includes(el)) {
    heroTextRefs.value.push(el)
  }
}
</script>

<template>
  <section class="min-h-screen relative flex items-center pt-20 overflow-hidden">
    <!-- Desktop Layout: Two Columns / Mobile: Stacked -->
    <div class="max-w-7xl mx-auto w-full px-6 flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
      
      <!-- LEFT Column: Text -->
      <div class="w-full lg:w-[55%] flex flex-col items-start pb-20 lg:pb-0">
        <p :ref="setRef" class="text-[#5C5248] font-body mb-4 text-lg">
          Hello, I'm
        </p>
        
        <h1 class="text-5xl lg:text-7xl font-bold font-heading mb-6 flex flex-wrap gap-x-4">
          <span :ref="setRef" class="inline-block">{{ personalInfo.name.split(' ')[0] }}</span>
          <span :ref="setRef" class="inline-block text-[#F0EBE1]">{{ personalInfo.name.split(' ')[1] }}</span>
          <span :ref="setRef" class="text-[#C8F542]">.</span>
        </h1>
        
        <div :ref="setRef" class="text-xl md:text-2xl font-body text-[#A89E8C] mb-4 h-8">
          <AnimatedText :texts="personalInfo.heroRoles" />
        </div>
        
        <p :ref="setRef" class="text-[#C8F542] italic font-body mb-8">
          {{ personalInfo.heroQuirk }}
        </p>
        
        <p :ref="setRef" class="text-[#A89E8C] font-body mb-10 max-w-lg leading-relaxed">
          {{ personalInfo.bio }}
        </p>
        
        <div :ref="setRef" class="flex flex-wrap gap-4">
          <a href="#projects" class="px-8 py-3 bg-[#C8F542] text-[#0A0A0A] font-medium font-body rounded hover:bg-[#9DB832] transition-colors duration-300">
            View My Work
          </a>
          <a :href="personalInfo.resumeUrl" target="_blank" class="px-8 py-3 border border-[#C8F542] text-[#C8F542] font-medium font-body rounded hover:bg-[rgba(200,245,66,0.1)] transition-colors duration-300">
            Download Resume
          </a>
        </div>
      </div>

      <!-- RIGHT Column: Photo -->
      <div class="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-12 lg:mt-0">
        <div v-if="photoStyle === 'contained'" 
             class="relative animate-[floatCard_4s_ease-in-out_infinite]" 
             :ref="setRef">
          <!-- Geometric elements -->
          <div class="absolute -top-6 -right-6 w-16 h-16 bg-[rgba(200,245,66,0.1)] border border-[#C8F542] rotate-45 z-0"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 border rounded-full border-[#242424] z-0"></div>
          
          <div class="relative z-10 w-64 h-80 sm:w-80 sm:h-96 transform -rotate-2 rounded-xl overflow-hidden border border-[#C8F542] shadow-[0_0_30px_rgba(200,245,66,0.15)] bg-[#111111]">
            <NuxtImg 
              :src="personalInfo.photo" 
              alt="Ishitva Agrawal" 
              class="w-full h-full object-cover"
              loading="eager"
              format="webp"
              quality="80"
            />
          </div>
        </div>

        <div v-else-if="photoStyle === 'full'" 
             class="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] relative" 
             :ref="setRef">
          <div class="w-full h-full" style="clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);">
            <NuxtImg 
              :src="personalInfo.photo" 
              alt="Ishitva Agrawal" 
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="eager"
              format="webp"
              quality="80"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
      <span class="text-[10px] uppercase tracking-[0.2em] text-[#5C5248]">Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-[#5C5248] to-transparent"></div>
    </div>
  </section>
</template>
