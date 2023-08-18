/**
 * <p>
 * 请求错误处理勾子
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-28 13:51
 */
import { useRouter } from 'next/navigation'
import { AxiosError } from 'axios'

import { useMessage } from '#/hooks/antd/useMessage'
import { useModal } from '#/hooks/antd/useModal'

export const useRequetErrorTools = () => {
  const messageApi = useMessage()
  const modalApi = useModal()
  const router = useRouter()

  /**
   * 检查是否是业务异常，如果是，那么可以自动进行处理
   */
  const isBusinessException = (error: any) => {
    if (!(error instanceof Error) || !(error instanceof AxiosError)) return false
    // 请求都没发出，无法处理
    if (error.response == void 0) return false

    const err = error as AxiosError<API.R>

    // 未登录
    if (error.response.status == 401) {
      modalApi?.confirm?.({
        title: '请登录',
        content: '当前操作需要进行登录,是否去登录?',
        onOk: () => router.replace('/login'),
      })
      // messageApi?.error?.(err.response?.data.message)
      return true
    }

    return false
  }

  return {
    isBusinessException,
  }
}
