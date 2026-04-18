<script setup lang="ts">
/**
 * Typewriter that cycles between multiple strings.
 */
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  texts: string[]
  speed?: number
}>(), {
  speed: 80
})

const displayedText = ref('')
let currentTextIndex = 0
let isTyping = true
let charIndex = 0
let timeout: ReturnType<typeof setTimeout> | null = null

const typeWriter = () => {
  const currentFullText = props.texts[currentTextIndex]
  
  if (isTyping) {
    if (charIndex < currentFullText.length) {
      displayedText.value += currentFullText.charAt(charIndex)
      charIndex++
      timeout = setTimeout(typeWriter, props.speed)
    } else {
      isTyping = false
      timeout = setTimeout(typeWriter, 2000) // Pause before erasing
    }
  } else {
    if (charIndex > 0) {
      displayedText.value = currentFullText.substring(0, charIndex - 1)
      charIndex--
      timeout = setTimeout(typeWriter, props.speed / 2) // Erase faster
    } else {
      isTyping = true
      currentTextIndex = (currentTextIndex + 1) % props.texts.length
      timeout = setTimeout(typeWriter, props.speed)
    }
  }
}

onMounted(() => {
  if (props.texts.length > 0) {
    typeWriter()
  }
})

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
})
</script>

<template>
  <span class="font-mono text-[#F0EBE1]">
    {{ displayedText }}<span class="animate-[blinkCursor_1s_steps(2)_infinite] text-[#C8F542]">|</span>
  </span>
</template>
