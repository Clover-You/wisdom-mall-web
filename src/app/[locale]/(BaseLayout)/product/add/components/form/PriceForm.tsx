/**
 * <p>
 * 价格表单
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 17:28
 */
'use client'
import { Col, Form, FormInstance, Input, Row, theme } from 'antd'
import { useTranslations } from 'next-intl'

import type { FC } from 'react'

export const PriceForm: FC<{
  form: FormInstance
}> = (props) => {
  const {
    token: { margin },
  } = theme.useToken()
  const t = useTranslations('pages.product-add.price-management.form')

  return (
    <>
      <Form
        layout={'vertical'}
        form={props.form}
      >
        <Row gutter={margin}>
          <Col span={6}>
            <Form.Item label={t('retail-rice.label')}>
              <Input
                addonAfter={t('numismatic-unit')}
                placeholder={t('retail-rice.input.placeholder')}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={t('wholesale-price.label')}>
              <Input
                addonAfter={t('numismatic-unit')}
                placeholder={t('wholesale-price.input.placeholder')}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={t('grade-price1.label')}>
              <Input
                addonAfter={t('numismatic-unit')}
                placeholder={t('grade-price1.input.placeholder')}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={t('grade-price2.label')}>
              <Input
                addonAfter={t('numismatic-unit')}
                placeholder={t('grade-price2.input.placeholder')}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={t('grade-price3.label')}>
              <Input
                addonAfter={t('numismatic-unit')}
                placeholder={t('grade-price3.input.placeholder')}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={t('lowest-selling-price.label')}>
              <Input
                addonAfter={t('numismatic-unit')}
                placeholder={t('lowest-selling-price.input.placeholder')}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={t('reference-purchase-price.label')}>
              <Input
                addonAfter={t('numismatic-unit')}
                placeholder={t('reference-purchase-price.input.placeholder')}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
