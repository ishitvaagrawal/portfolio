<script setup lang="ts">
/**
 * Fake terminal window component.
 */
defineProps<{
  content: Record<string, any>
}>()

const formatValue = (value: any): string => {
  if (typeof value === 'string') return `"${value}"`
  if (Array.isArray(value)) return `[${value.map(v => `"${v}"`).join(', ')}]`
  return String(value)
}
</script>

<template>
  <div class="rounded-xl overflow-hidden border border-[#242424] bg-[#0A0A0A] shadow-2xl animate-[floatCard_4s_ease-in-out_infinite]">
    <!-- Terminal Header -->
    <div class="flex items-center px-4 py-3 bg-[#1A1A1A] border-b border-[#242424]">
      <div class="flex space-x-2">
        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div class="mx-auto text-[#5C5248] text-xs font-mono">
        ~/ishitva
      </div>
    </div>
    
    <!-- Terminal Content -->
    <div class="p-6 font-mono text-sm sm:text-base whitespace-pre-wrap">
      <div class="text-[#F0EBE1] mb-2">const developer = {</div>
      <div v-for="(value, key) in content" :key="key" class="pl-4 mb-1">
        <span class="text-[#C8F542]">{{ key }}</span>: 
        <span :class="typeof value === 'boolean' ? 'text-purple-400' : 'text-[#A89E8C]'">{{ formatValue(value) }}</span>,
      </div>
      <div class="text-[#F0EBE1]">} <span class="animate-[blinkCursor_1s_steps(2)_infinite] text-[#C8F542]">|</span></div>
    </div>
  </div>
</template>
