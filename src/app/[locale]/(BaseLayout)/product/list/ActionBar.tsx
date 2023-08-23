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
import { Button, Checkbox, Col, Dropdown, Input, MenuProps, Row, Select, Space, theme } from 'antd'
import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import MainContent from '#/components/MainContent'

const ActionBar: FC = () => {
  const router = useRouter()
  const t = useTranslations('pages.product-list.action')

  const MenuItemList: MenuProps['items'] = [
    {
      label: t('batch-dropdown.func.label'),
      key: '1',
      type: 'group',
      children: [{ label: t('batch-dropdown.func.children.move-to-category.label'), key: '1-1' }],
    },
    {
      label: t('batch-dropdown.other.label'),
      key: '2',
      type: 'group',
      children: [
        { label: t('batch-dropdown.other.children.top.label'), key: '2-1' },
        { label: t('batch-dropdown.other.children.disable.label'), key: '2-2' },
        { label: t('batch-dropdown.other.children.enable.label'), key: '2-3' },
        { label: t('batch-dropdown.other.children.delete.label'), key: '2-4' },
      ],
    },
  ]

  const MoreMenuItemList: MenuProps['items'] = [
    {
      label: t('mover-dropdown.children.import.label'),
      key: '1',
    },
    {
      label: t('mover-dropdown.children.export.label'),
      key: '2',
    },
  ]

  const {
    token: { sizeXS },
  } = theme.useToken()

  const SearchBox = () => (
    <Input.Search
      placeholder={t('search-input.placeholder')}
      enterButton={<Button>{t('search-input.label')}</Button>}
    />
  )

  return (
    <MainContent>
      <Row
        align={'middle'}
        justify={'end'}
        gutter={[sizeXS, sizeXS]}
      >
        <Col style={{ alignSelf: 'start' }}>
          <Space>
            <Button
              type={'primary'}
              onClick={() => router.push('/product/add')}
            >
              {t('new-btn-text')}
            </Button>

            <Dropdown menu={{ items: MenuItemList }}>
              <Button>
                {t('batch-dropdown.label')}
                <DownOutlined />
              </Button>
            </Dropdown>

            <Dropdown menu={{ items: MoreMenuItemList }}>
              <Button>
                {t('mover-dropdown.label')}
                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>

        <Col style={{ flexGrow: 1 }}></Col>

        <Col>
          <Checkbox checked>{t('ignore-disable-commodity')}</Checkbox>
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
          <Button style={{ width: '100%' }}>{t('super-search-btn-text')}</Button>
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
