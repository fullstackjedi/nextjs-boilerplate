import axios from 'axios'
import { getSession } from 'next-auth/client'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL
})

instance.interceptors.request.use(
  async (request) => {
    const session = await getSession()

    if (session) {
      // Handle no session here
    }

    request.headers['authorization'] = '' // Add auth token to request here
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { instance }
