/**
 * <p>
 * 操作栏
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-18 13:10
 */
'use client'
import { DownOutlined } from '@ant-design/icons'
import {
  Button,
  Checkbox,
  Col,
  Dropdown,
  Input,
  MenuProps,
  Row,
  Select,
  Space,
  theme
} from 'antd'
import type { FC } from 'react'
import { useRouter } from 'next/navigation'

import MainContent from '#/components/MainContent'

const ActionBar: FC = () => {
  const router = useRouter()

  const MenuItemList: MenuProps['items'] = [
    {
      label: '功能',
      key: '1',
      type: 'group',
      children: [{ label: '移动至分类', key: '1-1' }],
    },
    {
      label: '其它',
      key: '2',
      type: 'group',
      children: [
        { label: '置顶', key: '2-1' },
        { label: '停用', key: '2-2' },
        { label: '启用', key: '2-3' },
        { label: '删除', key: '2-4' },
      ],
    },
  ]

  const MoreMenuItemList: MenuProps['items'] = [
    {
      label: '导入',
      key: '1',
    },
    {
      label: '导出',
      key: '2',
    },
  ]

  const {
    token: { sizeXS },
  } = theme.useToken()

  const SearchBox = () => (
    <Input.Search
      placeholder="搜索编号、名称、规格、属性、条形码、备注"
      enterButton={<Button>搜索</Button>}
    />
  )

  return (
    <MainContent>
      <Row align={'middle'} justify={'end'} gutter={[sizeXS, sizeXS]}>
        <Col style={{ alignSelf: 'start' }}>
          <Space>
            <Button
              type={'primary'}
              onClick={() => router.push('/product/add')}
            >
              新增商品
            </Button>

            <Dropdown menu={{ items: MenuItemList }}>
              <Button>
                批量操作
                <DownOutlined />
              </Button>
            </Dropdown>

            <Dropdown menu={{ items: MoreMenuItemList }}>
              <Button>
                更多
                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>

        <Col style={{ flexGrow: 1 }}></Col>

        <Col>
          <Checkbox checked>不显示停用商品</Checkbox>
        </Col>

        <Col>
          <Select style={{ width: 150 }} />
        </Col>

        <Col
          flex={'0 0 600px'}
          sm={{ span: 18, flex: 'none' }}
          xl={{ span: 24, order: 4, flex: 'none' }}
          xxl={{ flex: 'auto', order: 3 }}
        >
          <SearchBox key={'SearchBox'} />
        </Col>

        <Col
          sm={{ span: 6 }}
          xl={{ span: 4, order: 3 }}
          xxl={{ order: 4, span: 2 }}
        >
          <Button style={{ width: '100%' }}>高级搜索</Button>
        </Col>

        {/* 
            <Col sm={{span: 24}} xxl={{span: 0}}>
              <div style={{ justifyContent: 'end', display: 'flex' }}>
                <SearchBox key={'SearchBox'} />
              </div>
            </Col> */}
      </Row>
    </MainContent>
  )
}

export default ActionBar
