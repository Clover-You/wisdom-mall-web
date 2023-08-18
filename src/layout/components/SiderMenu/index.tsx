/**
 * <p>
 * 侧边栏菜单
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-14 13:40
 */
import type { FC } from 'react'
import React from 'react'

import { ContainerOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import classNames from 'classnames'
import Link from 'next/link'
import useStyle from './style'

const items2: MenuProps['items'] = [
  {
    icon: React.createElement(ContainerOutlined),
    label: '资料',
    key: 'Setting',
    children: [
      {
        label: <Link href={'/unit/list'}>单位设置</Link>,
        key: 'UnitSetting',
      },
      {
        label: '商品',
        key: 'SettingProduct',
        children: [
          {
            label: <Link href={'/product/list'}>商品资料</Link>,
            key: 'ProductList',
          },
          {
            label: <Link href={'/product/class-setting'}>商品分类</Link>,
            key: 'ClassSetting',
          },
        ],
      },
    ],
  },
]

const SiderMenu: FC = () => {
  const prefixCls = 'wisdom-menu'
  const [wrapSSR, hashId] = useStyle(prefixCls)

  return wrapSSR(
    <Menu
      className={classNames(prefixCls, hashId)}
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 6 }}
      items={items2}
    />,
  )
}

export default SiderMenu
