import { ref } from 'vue'

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
    isSuccess.value = false
    isError.value = false

    try {
      // Netlify expects form data to be URL-encoded
      const body = new URLSearchParams()
      body.append('form-name', 'contact')
      body.append('name', name.value)
      body.append('email', email.value)
      body.append('message', message.value)

      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      })

      if (!response.ok) throw new Error('Network response was not ok')

      isSuccess.value = true
      name.value = ''
      email.value = ''
      message.value = ''
    } catch (error) {
      console.error('Contact form error', error)
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
