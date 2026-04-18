export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:8000'
    const response = await $fetch(`${backendUrl}/contact`, {
      method: 'POST',
      body
    })
    
    return response
  } catch (error: any) {
    console.error('API proxy error:', error)
    return {
      success: false,
      message: 'Failed to proxy request to backend.'
    }
  }
})
