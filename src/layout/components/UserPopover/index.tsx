/**
 * <p>
 * 用户下拉框
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-18 12:02
 */
'use client'
import { Avatar, Card, Divider, Menu, MenuProps, Popover, Typography } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import Link from 'next/link'

import type { FC } from 'react'

import { useUser } from '#/redux/store'

const UserPopover: FC = () => {
  const user = useUser()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href={'#'}>个人中心</Link>,
    },
    { type: 'divider', key: '2' },
    {
      key: '4',
      danger: true,
      icon: <LoginOutlined />,
      label: <Link href={'/login'}>安全退出</Link>,
    },
  ]

  return (
    <Popover
      align={{
        offset: [-80, -15],
      }}
      title={
        <Card
          bordered={false}
          style={{ boxShadow: 'none' }}
          size={'small'}
          bodyStyle={{
            width: 260,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingBottom: 0,
          }}
          headStyle={{ background: 'red' }}
        >
          <Card.Meta
            avatar={
              <Avatar
                src={user.user?.avatar}
                size={'large'}
              />
            }
            title={user.user?.userName ?? '旺财'}
            description={
              <Typography.Text
                ellipsis
                type="secondary"
                style={{
                  fontWeight: 500,
                  transform: 'translateY(-8px)',
                }}
              >
                问君能有几多愁 恰似一江春水向东流
              </Typography.Text>
            }
          />
        </Card>
      }
      trigger={'click'}
      style={{ marginTop: 10 }}
      content={[
        <Divider
          style={{ margin: 0, marginBottom: 8 }}
          key={1}
        />,
        <Menu
          key={2}
          style={{ width: 260, border: 'none', borderRadius: 6 }}
          items={items}
          selectable={false}
        />,
      ]}
    >
      <Avatar
        size={'small'}
        src={'https://thirdqq.qlogo.cn/g?b=sdk&k=dAic2iagp1UicyseX6aIHmicDA&kti=ZK9mhwAAAAE&s=100&t=1688390589'}
      />
    </Popover>
  )
}

export default UserPopover
