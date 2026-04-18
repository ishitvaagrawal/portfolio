<script setup lang="ts">
/**
 * Centered contact section with form and direct email link.
 */
import ScrollReveal from '~/components/ui/ScrollReveal.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import { useContactForm } from '~/composables/useContactForm'
import { personalInfo } from '~/content/portfolio-data'

const { 
  name, 
  email, 
  message, 
  validationErrors, 
  isLoading, 
  isSuccess, 
  isError, 
  submitForm 
} = useContactForm()
</script>

<template>
  <section class="py-24 relative">
    <div class="max-w-2xl mx-auto px-6 text-center">
      <ScrollReveal direction="fade">
        <SectionTitle 
          label="GET IN TOUCH" 
          title="Let's build something" 
          align="center"
        />
        
        <p class="text-[#A89E8C] font-body text-lg mb-12">
          Open to freelance, collaborations, and interesting problems.
        </p>
      </ScrollReveal>
      
      <ScrollReveal direction="fade" :delay="0.2">
        <div class="bg-[#111111] border border-[#242424] rounded-xl p-8 relative overflow-hidden">
          
          <Transition name="fade" mode="out-in">
            <!-- Success State -->
            <div v-if="isSuccess" class="py-12 flex flex-col items-center justify-center text-center">
              <div class="w-16 h-16 rounded-full bg-[rgba(200,245,66,0.1)] flex items-center justify-center mb-6">
                <Icon name="heroicons:check" class="w-8 h-8 text-[#C8F542]" />
              </div>
              <h3 class="text-2xl font-bold font-heading text-[#F0EBE1] mb-2">Message Sent!</h3>
              <p class="text-[#A89E8C] font-body">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button @click="isSuccess = false" class="mt-8 text-[#C8F542] hover:underline font-mono text-sm">
                Send another message
              </button>
            </div>
            
            <!-- Form State -->
            <form 
              v-else 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              @submit.prevent="submitForm" 
              class="text-left flex flex-col gap-6"
            >
              <!-- Hidden input for Netlify bot protection -->
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>
              
              <div v-if="isError" class="p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-body">
                Failed to send message. Please try again later or use the direct email link below.
              </div>
              
              <div class="flex flex-col gap-1">
                <label for="name" class="text-sm font-mono text-[#A89E8C]">Name</label>
                <UInput 
                  id="name" 
                  name="name"
                  v-model="name" 
                  placeholder="John Doe" 
                  :ui="{ base: 'bg-[#0A0A0A]' }"
                  :class="{'ring-red-500/50': validationErrors.name}"
                />
                <span v-if="validationErrors.name" class="text-xs text-red-400 mt-1">{{ validationErrors.name }}</span>
              </div>
              
              <div class="flex flex-col gap-1">
                <label for="email" class="text-sm font-mono text-[#A89E8C]">Email</label>
                <UInput 
                  id="email" 
                  name="email"
                  type="email" 
                  v-model="email" 
                  placeholder="john@example.com"
                  :ui="{ base: 'bg-[#0A0A0A]' }"
                  :class="{'ring-red-500/50': validationErrors.email}"
                />
                <span v-if="validationErrors.email" class="text-xs text-red-400 mt-1">{{ validationErrors.email }}</span>
              </div>
              
              <div class="flex flex-col gap-1">
                <label for="message" class="text-sm font-mono text-[#A89E8C]">Message</label>
                <UTextarea 
                  id="message" 
                  name="message"
                  v-model="message" 
                  placeholder="Hello! I have a project in mind..." 
                  :rows="5"
                  :ui="{ base: 'bg-[#0A0A0A] min-h-[120px]' }"
                  :class="{'ring-red-500/50': validationErrors.message}"
                />
                <span v-if="validationErrors.message" class="text-xs text-red-400 mt-1">{{ validationErrors.message }}</span>
              </div>
              
              <UButton 
                type="submit" 
                block 
                :loading="isLoading"
                class="bg-[#C8F542] hover:bg-[#9DB832] text-[#0A0A0A] font-bold h-12 mt-2"
              >
                Send Message
              </UButton>
            </form>
          </Transition>
        </div>
        
        <div class="flex items-center gap-4 my-8 w-full max-w-md mx-auto">
          <div class="h-px bg-[#242424] flex-1"></div>
          <span class="text-[#5C5248] font-mono text-sm uppercase">or</span>
          <div class="h-px bg-[#242424] flex-1"></div>
        </div>
        
        <a :href="`mailto:${personalInfo.email}`" 
           class="inline-flex items-center gap-3 text-xl font-heading font-medium text-[#F0EBE1] hover:text-[#C8F542] transition-colors group">
          <div class="w-10 h-10 rounded-full border border-[#242424] flex items-center justify-center group-hover:border-[#C8F542] group-hover:bg-[rgba(200,245,66,0.1)] transition-all">
            <Icon name="heroicons:envelope" class="w-5 h-5" />
          </div>
          {{ personalInfo.email }}
        </a>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
