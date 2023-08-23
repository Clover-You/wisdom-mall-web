/**
 * <p>
 * 商品分类操作栏
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 06:19
 */
'use client'
import { Button, Col, Row, Space } from 'antd'
import { useContext, type FC } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { PageContext } from './context'

export const TitleActionBar: FC<{
  addCategory?: () => void
  expandAll?: () => void
}> = (props) => {
  const router = useRouter()
  const context = useContext(PageContext)
  const t = useTranslations('pages.product-category.action')

  return (
    <>
      <Row justify={'space-between'}>
        <Col>
          <Space>
            <Button
              type={'primary'}
              onClick={props.addCategory}
            >
              {t('new-category')}
            </Button>

            <Button onClick={() => context.expandAll()}>{t('expand-all')}</Button>
          </Space>
        </Col>

        <Col>
          <Button onClick={() => router.push('/product/list')}>{t('product-list')}</Button>
        </Col>
      </Row>
    </>
  )
}
