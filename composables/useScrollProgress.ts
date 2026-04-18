/**
 * Composable for tracking scroll progress and active section.
 */
import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollProgress = () => {
  const scrollY = ref(0)
  const activeSection = ref('')

  const handleScroll = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    if (import.meta.client) {
      window.addEventListener('scroll', handleScroll)
      
      const sections = document.querySelectorAll('section[id], div[id="home"]')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      }, { threshold: 0.3 })

      sections.forEach(section => observer.observe(section))
    }
  })

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return {
    scrollY,
    activeSection
  }
}
