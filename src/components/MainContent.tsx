/**
 * <p>
 * 页面内容盒子
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-18 13:11
 */
'use client'
import type { PropsWithChildren, FC, CSSProperties } from 'react'
import { Card, theme, CardProps } from 'antd'

const MainContent: FC<PropsWithChildren & { style?: CSSProperties } & CardProps> = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Card
      // size={'small'}
      {...props}
      style={{ padding: 0, background: colorBgContainer, ...props.style }}
    >
      {props.children}
    </Card>
  )
}

export default MainContent
