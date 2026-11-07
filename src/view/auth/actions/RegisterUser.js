import { App } from '@/shared/ApiConfig'

export async function registerUser(userData) {
  try {
    const api = await fetch(`${App.apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userData),
    })
    const newUser = await api.json()
    if (!api.ok) {
      throw {
        status: api.status,
        success: false,
        backResponse: newUser,
      }
    }
    return newUser
  } catch (error) {
    if (error.status) {
      throw error
    }
    throw { message: ' حدث خطا غير متوقع', success: false, errors: null, status: 500 }
  }
}
