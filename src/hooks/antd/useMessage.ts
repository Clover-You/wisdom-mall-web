import { useContext } from 'react'
import { AntdContext } from '#/hooks/antd/context'
/**
 * <p>
 * antd 消息
 * </p>
 * @author Clover
 * @date 2023-07-24 16:51
 */
export const useMessage = () => {
  const { messageApi } = useContext(AntdContext)
  return messageApi
}
