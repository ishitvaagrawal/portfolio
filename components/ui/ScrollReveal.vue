<script setup lang="ts">
/**
 * Generic GSAP reveal wrapper.
 * Wraps slot content and reveals it on scroll.
 */
import { ref, onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

const props = withDefaults(defineProps<{
  direction?: 'up' | 'left' | 'right' | 'fade'
  delay?: number
}>(), {
  direction: 'up',
  delay: 0
})

const revealWrapper = ref<HTMLElement | null>(null)
const { animateScrollReveal } = useGsapAnimations()

onMounted(() => {
  if (revealWrapper.value) {
    animateScrollReveal(revealWrapper.value, props.direction, props.delay)
  }
})
</script>

<template>
  <div ref="revealWrapper" class="invisible-on-init">
    <slot />
  </div>
</template>

<style scoped>
/* Optional class to prevent FOUC */
.invisible-on-init {
  /* opacity: 0; */
}
</style>
