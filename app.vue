<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  htmlAttrs: {
    class: 'dark' // Force dark mode
  }
})
</script>

<template>
  <div class="bg-[#0A0A0A] min-h-screen text-[#F0EBE1] font-body selection:bg-[#C8F542] selection:text-[#0A0A0A]">
    <NuxtPage />
  </div>
</template>
