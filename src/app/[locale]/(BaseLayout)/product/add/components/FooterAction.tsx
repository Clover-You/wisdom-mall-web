/**
 * <p>
 * 页脚
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 17:54
 */
'use client'
import { Button, Col, Row, Space } from 'antd'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

export const FooterAction: FC<{
  saveAndAdd: () => void
}> = (props) => {
  const t = useTranslations('pages.product-add.footer')

  return (
    <>
      <Row justify={'space-between'}>
        <Col />
        <Col>
          <Space>
            <Button>{t('cancel')}</Button>
            <Button>{t('save')}</Button>
            <Button>{t('save-and-copy-insert')}</Button>
            <Button
              type={'primary'}
              onClick={props.saveAndAdd}
            >
              {t('save-insert')}
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}
