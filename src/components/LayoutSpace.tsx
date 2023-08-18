/**
 * <p>
 * 布局间距
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-14 15:43
 */
'use client'
import { theme } from 'antd'
import type { FC } from 'react'

const LayoutSpace: FC<{
  direction?: 'horizontal' | 'vertical'
}> = (props) => {
  const { direction = 'horizontal' } = props

  const {
    token: { padding },
  } = theme.useToken()

  const width = direction === 'horizontal' ? padding : 1,
    height = direction === 'vertical' ? padding : 1

  return <div style={{ height, width, flexShrink: 0 }}></div>
}

export default LayoutSpace
