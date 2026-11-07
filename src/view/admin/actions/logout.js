import { verifyToken } from '@/helper/VerifyToken'
import { App } from '@/shared/ApiConfig'
export async function logoutHttp() {
  const headers = verifyToken()
  try {
    const apiRes = await fetch(`${App?.apiUrl}/logout`, {
      method: 'Post',
      headers: headers,
    })
    const userLogout = await apiRes.json()

    if (!apiRes.ok) {
      return {
        status: apiRes.status,
        message: userLogout.message,
      }
    }

    localStorage.removeItem('userData')
    return {
      status: apiRes.status,
      message: userLogout.message,
    }
  } catch (error) {
    throw error
  }
}
