/**
 * <p>
 * 操作栏
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-20 13:33
 */
'use client'
import { useState } from 'react'
import { Button, Col, Dropdown, Input, Row, Space, theme } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useTranslations } from 'next-intl'

import type { FC } from 'react'

import { AddUnitDrawer } from '#/app/[locale]/(BaseLayout)/unit/list/components/AddUnitDrawer'

export const ActionBar: FC<{
  /**与服务器交互完成时触发，例如：新增 */
  finish: () => void
  unitNameChange: (unitName?: string) => void
  /**检索按钮点击 */
  onSearch: () => void
  /**页面是否在执行加载逻辑 */
  loading?: boolean
}> = (props) => {
  const {
    token: { margin },
  } = theme.useToken()
  const [addDrawerOpen, setAddDrawerOpenState] = useState(false)
  const t = useTranslations('pages.unit-list.action')

  /**
   * 打开新增抽屉
   */
  const openAddUnitDrawer = () => {
    setAddDrawerOpenState(true)
  }

  return (
    <>
      <AddUnitDrawer
        open={addDrawerOpen}
        afterOpenChange={setAddDrawerOpenState}
        onFinish={props.finish}
      />

      <Row
        justify={'space-between'}
        gutter={[margin, margin]}
      >
        <Col>
          <Space>
            <Button
              disabled={props.loading}
              type={'primary'}
              onClick={openAddUnitDrawer}
            >
              {t('addBtn')}
            </Button>

            <Dropdown
              menu={{
                items: [
                  { label: t('dropdown-items.delete'), key: 'Delete' },
                  { label: t('dropdown-items.enable'), key: 'Enable' },
                  { label: t('dropdown-items.disable'), key: 'Disable' },
                ],
              }}
            >
              <Button>
                {t('batchOperation')}
                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>

        <Col flex={'0 0 300px'}>
          <Input.Search
            enterButton={<Button disabled={props.loading}>{t('searchBtnText')}</Button>}
            onSearch={props.onSearch}
            onChange={(e) => {
              props.unitNameChange(e.target.value)
            }}
          />
        </Col>
      </Row>
    </>
  )
}
