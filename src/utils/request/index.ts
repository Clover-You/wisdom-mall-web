/**
 * <p>
 * axios 二次封装
 * </p>
 * @author Clover
 * @date 2023-07-08 01:29
 */
import axios, { AxiosError } from 'axios'
import store from '../../redux/store'
import { useMessage } from '#/hooks/antd/useMessage'

const http = axios.create({})

http.interceptors.request.use(async (config) => {
  const user = store.getState().user
  user.token != void 0 && (config.headers.Authorization = `Bearer ${user.token}`)
  return config
})

http.interceptors.response.use(
  async (response) => {
    return response
  },
  (error) => {
    if (!(error instanceof AxiosError)) return error
    const messageApi = useMessage()
    // 未登录
    if (error.response?.status === 403) {
      const result = error.response?.data as API.R
      if (result == void 0) {
        messageApi?.error?.('请登录')
      } else {
        messageApi?.error?.(result.message)
      }
    }
    return error
  },
)

export default http
