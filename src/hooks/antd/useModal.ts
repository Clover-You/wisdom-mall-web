import { useContext } from 'react'
import { AntdContext } from '#/hooks/antd/context'

/**
 * <p>
 * antd 对话框
 * </p>
 * @author Clover
 * @date 2023-07-24 16:59
 */
export const useModal = () => {
  const { modalApi } = useContext(AntdContext)
  return modalApi
}
