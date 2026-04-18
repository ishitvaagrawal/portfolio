<script setup lang="ts">
/**
 * Reusable animated section heading.
 */
defineProps<{
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div :class="[
    'flex flex-col gap-2 mb-12',
    align === 'center' ? 'items-center text-center' : 'items-start text-left'
  ]">
    <div class="flex items-center gap-4 mb-2">
      <div v-if="align !== 'center'" class="h-px w-8 bg-[#C8F542]" />
      <span class="text-xs uppercase tracking-widest text-[#C8F542] font-mono">
        {{ label }}
      </span>
      <div v-if="align === 'center'" class="h-px w-8 bg-[#C8F542]" />
    </div>
    
    <h2 class="text-4xl md:text-5xl font-bold font-heading">
      {{ title }}<span class="text-[#C8F542]">.</span>
    </h2>
    
    <p v-if="subtitle" class="text-secondary text-lg mt-2 max-w-2xl font-body">
      {{ subtitle }}
    </p>
    
    <div 
      class="h-1 w-24 bg-[#C8F542] mt-4 rounded-full animate-slideInFromLeft" 
      style="animation: slideInFromLeft 0.8s var(--ease-expo) forwards;"
    />
  </div>
</template>
