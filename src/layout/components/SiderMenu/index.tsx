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
import { useTranslations } from 'next-intl'

import useStyle from './style'

const useGenItems = (): MenuProps['items'] => {
  const t = useTranslations('menus')

  return [
    {
      icon: React.createElement(ContainerOutlined),
      label: t('information.title'),
      key: 'Setting',
      children: [
        {
          label: <Link href={'/unit/list'}>{t('information.subs.unit.title')}</Link>,
          key: 'UnitSetting',
        },
        {
          label: t('information.subs.commodity.title'),
          key: 'SettingProduct',
          children: [
            {
              label: (
                <Link href={'/product/list'}>{t('information.subs.commodity.subs.commodity-information.title')}</Link>
              ),
              key: 'ProductList',
            },
            {
              label: (
                <Link href={'/product/category'}>{t('information.subs.commodity.subs.commodity-category.title')}</Link>
              ),
              key: 'ClassSetting',
            },
          ],
        },
      ],
    },
  ]
}

const SiderMenu: FC = () => {
  const prefixCls = 'wisdom-menu'
  const [wrapSSR, hashId] = useStyle(prefixCls)
  const itemList = useGenItems()

  return wrapSSR(
    <Menu
      className={classNames(prefixCls, hashId)}
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 6 }}
      items={itemList}
    />,
  )
}

export default React.memo(SiderMenu)
