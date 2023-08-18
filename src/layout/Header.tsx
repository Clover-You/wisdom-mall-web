/**
 * <p>
 * 头部布局
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-13 10:42
 */
'use client'
import { Card, Layout, Space } from 'antd'
import type { CSSProperties, FC } from 'react'

import UserPopover from './components/UserPopover'
import MainContent from '#/components/MainContent'

type HeaderProps = {
  style?: CSSProperties
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <MainContent bodyStyle={{ padding: 0 }}>
        <Layout.Header
          style={{
            background: 'none',
            display: 'flex',
            height: 48,
            alignItems: 'center',
            justifyContent: 'space-between',
            ...props.style,
          }}
        >
          <div>LOGO</div>

          <Space>
            <UserPopover />
            {/* <Dropdown menu={{ items }}>

          </Dropdown> */}
          </Space>
        </Layout.Header>
      </MainContent>
    </>
  )
}

export const HeaderLoadingSkeleton = () => {
  return <>加载中</>
}

export default Header
