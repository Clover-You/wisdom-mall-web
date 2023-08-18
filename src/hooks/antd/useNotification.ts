/**
 * <p>
 * antd 通知
 * </p>
 * @author Clover
 * @date 2023-07-24 09:38
 */
import { useContext } from 'react'
import { AntdContext } from '#/hooks/antd/context'

export const useNotification = () => {
  const { notificationApi } = useContext(AntdContext)
  return notificationApi
}
