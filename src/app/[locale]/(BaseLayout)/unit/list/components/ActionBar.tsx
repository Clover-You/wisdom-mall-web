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
import { Button, Col, Dropdown, Input, Row, Space, theme } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import type { FC } from 'react'
import { AddUnitDrawer } from '#/app/[locale]/(BaseLayout)/unit/list/components/AddUnitDrawer'
import { useState } from 'react'

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
              新增单位
            </Button>

            <Dropdown
              menu={{
                items: [
                  { label: '删除', key: 'Delete' },
                  { label: '启用', key: 'Enable' },
                  { label: '停用', key: 'Disable' },
                ],
              }}
            >
              <Button>
                批量操作
                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>

        <Col flex={'0 0 300px'}>
          <Input.Search
            enterButton={<Button disabled={props.loading}>搜索</Button>}
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
