import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const useGsapAnimations = () => {
  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const animateHeroEntrance = (elements: HTMLElement[]) => {
    if (prefersReducedMotion()) return

    gsap.from(elements, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'expo.out'
    })
  }

  const animateScrollReveal = (element: HTMLElement, direction: 'up' | 'left' | 'right' | 'fade', delay: number) => {
    if (prefersReducedMotion()) return

    let initialProps: gsap.TweenVars = { opacity: 0 }
    
    switch (direction) {
      case 'up': initialProps.y = 50; break
      case 'left': initialProps.x = -50; break
      case 'right': initialProps.x = 50; break
      case 'fade': break
    }

    gsap.from(element, {
      ...initialProps,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
      duration: 0.8,
      delay,
      ease: 'expo.out'
    })
  }

  const animateNavBackground = (navElement: HTMLElement) => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        gsap.to(navElement, {
          backgroundColor: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(10px)',
          duration: 0.3,
          ease: 'power2.out'
        })
      } else {
        gsap.to(navElement, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    })
  }

  return {
    animateHeroEntrance,
    animateScrollReveal,
    animateNavBackground
  }
}
