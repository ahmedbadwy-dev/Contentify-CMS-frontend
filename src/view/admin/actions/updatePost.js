import { verifyToken } from '@/helper/VerifyToken'
import { App } from '@/shared/ApiConfig'
export async function updatePostHttp(data,id) {
  const headers = verifyToken()
  try {
    const apiRes = await fetch(`${App?.apiUrl}/posts/${id}`, {
      method: 'put',
      headers: headers,
      body: JSON.stringify(data),
    })
    const updatedPost = await apiRes.json()

    
    console.log(updatedPost)
      return {
        status: apiRes.status,
         backgroundApi:updatedPost  
      }
 
      
  } catch (error) {
    throw error
  }
}
