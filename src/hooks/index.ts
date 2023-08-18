/**
 * <p>
 * 常用勾子
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-17 17:01
 */
import { useEffect, useRef } from 'react'

/**
 * 组件挂载后回调，只触发一次
 */
export const useMounted = (callback: Function) => {
  const mount = useRef(false)
  useEffect(() => {
    if (mount.current) return
    setTimeout(() => {
      // 确保组件挂在
      callback()
      mount.current = true
    })
  }, [callback])
}
