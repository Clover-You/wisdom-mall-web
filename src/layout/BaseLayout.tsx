/**
 * <p>
 * 基础布局
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-13 10:24
 */
import type { FC, PropsWithChildren } from 'react'

import Header from './Header'
import RootLayout from './RootLayout'
import SiderCard from './SiderCard'

const BaseLayout: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <RootLayout
        header={<Header style={{ height: 48 }} />}
        sider={<SiderCard />}
        content={props.children}
        footer={'Wisdom mall ©2023 Created by Clover You'}
      />
    </>
  )
}

export default BaseLayout
