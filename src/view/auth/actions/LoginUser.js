import { App } from '@/shared/ApiConfig'
export async function loginUserHttp(user) {
  try {
    const apiResult = await fetch(`${App.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    })
    const loginUser = apiResult.json()
    if (!apiResult.ok) {
      throw {
        status: apiResult.status,
        message: 'الايميل او كلمه السر غير مطابقين',
      }
    }
    return loginUser
  } catch (error) {
    if (error.status == 422) {
      throw error
    } else {
      throw {
        status: 500,
        message: 'حدث خطا غير متوقغ',
      }
    }
  }
}
