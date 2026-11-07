import { App } from '@/shared/ApiConfig'
import { verifyToken } from '@/helper/VerifyToken'
export async function checkAuth() {
  try {
    const headers = verifyToken()
    const auth = await fetch(`${App.apiUrl}/auth`, {
      method: 'POST',
      headers: headers,
    })
    if (auth.ok) {
      return {
        status: 200,
      }
    } else {
      return {
        status: 401,
      }
    }
  } catch (error) {
    throw {
      status: 500,
    }
  }
}
