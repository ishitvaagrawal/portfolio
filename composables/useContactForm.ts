import { ref } from 'vue'
import { personalInfo } from '~/content/portfolio-data'

export const useContactForm = () => {
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const validationErrors = ref<Record<string, string>>({})
  
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const isError = ref(false)

  const validateForm = (): boolean => {
    validationErrors.value = {}
    let isValid = true

    if (!name.value.trim()) {
      validationErrors.value.name = 'Name is required'
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      validationErrors.value.email = 'Valid email is required'
      isValid = false
    }

    if (!message.value.trim() || message.value.length < 10) {
      validationErrors.value.message = 'Message must be at least 10 characters'
      isValid = false
    }

    return isValid
  }

  const submitForm = async () => {
    if (!validateForm()) return

    isLoading.value = true
    isError.value = false
    isSuccess.value = false

    try {
      const response = await fetch(`https://formspree.io/f/${personalInfo.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      })

      if (response.ok) {
        isSuccess.value = true
        name.value = ''
        email.value = ''
        message.value = ''
      } else {
        isError.value = true
      }
    } catch {
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    name,
    email,
    message,
    validationErrors,
    isLoading,
    isSuccess,
    isError,
    submitForm,
    validateForm
  }
}
