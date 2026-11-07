import { verifyToken } from '@/helper/VerifyToken'
import { App } from '@/shared/ApiConfig'
export async function createPostHttp(data) {
  const headers = verifyToken()
  try {
    const apiRes = await fetch(`${App?.apiUrl}/posts`, {
      method: 'Post',
      headers: headers,
      body: JSON.stringify(data),
    })
    const newPost = await apiRes.json()
console.log(newPost);

    
      return {
        status: apiRes.status,
        backgroundApi:newPost
      
    }

  } catch (error) {
    throw error
  }
}
