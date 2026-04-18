<script setup lang="ts">
/**
 * Simple badge component for displaying skills/tags.
 */
defineProps<{
  label: string
  iconName?: string
}>()
</script>

<template>
  <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111] border border-[#242424] rounded-full text-sm font-mono transition-all duration-300 hover:border-[#C8F542] hover:bg-[rgba(200,245,66,0.10)] hover:-translate-y-0.5 group">
    <Icon v-if="iconName" :name="iconName" class="w-4 h-4 text-[#A89E8C] group-hover:text-[#C8F542] transition-colors duration-300" />
    <span class="text-[#F0EBE1] group-hover:text-[#C8F542] transition-colors duration-300">{{ label }}</span>
  </div>
</template>
