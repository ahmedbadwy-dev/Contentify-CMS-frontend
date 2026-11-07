import { App } from '@/shared/ApiConfig'
import { verifyToken } from '@/helper/VerifyToken'
const header = verifyToken()
export async function deletePostHttp(postId) {
  try {
    const apiPost = await fetch(`${App.apiUrl}/posts/${postId}`, {
      method: 'DELETE',
      headers: header,
    })
    const posts = await apiPost.json()
    if (!apiPost.ok) {
      return {
        status: apiPost.status,
        message: posts.message,
      }
    } else {
      return {
        status: apiPost.status,
        apiBackgrond: posts,
      }
    }
  } catch (error) {
    throw error
  }
}
