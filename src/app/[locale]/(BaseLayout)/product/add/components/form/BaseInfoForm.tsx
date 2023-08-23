/**
 * <p>
 * 基础数据表单
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 16:59
 */
'use client'
import { Button, Checkbox, Col, Form, FormInstance, Input, Row, Select, Switch, theme } from 'antd'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

export const BaseInfoForm: FC<{
  form: FormInstance
}> = (props) => {
  const {
    token: { margin },
  } = theme.useToken()
  const t = useTranslations('pages.product-add.basic-information.form')

  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        form={props.form}
      >
        <Row gutter={margin}>
          <Col span={8}>
            <Form.Item
              label={t('bill-no.label')}
              name={'billNo'}
            >
              <Input
                suffix={
                  <Button
                    type={'link'}
                    style={{ padding: 0, height: 'auto' }}
                  >
                    {t('bill-no.suffix')}
                  </Button>
                }
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label={t('product-no.label')}
              name={'productNo'}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item
              label={t('product-name.label')}
              labelCol={{ span: 4 }}
            >
              <Input placeholder={t('product-name.input.placeholder')} />
            </Form.Item>
          </Col>

          <Col span={8} />

          <Col span={8}>
            <Form.Item label={t('category.label')}>
              <Select />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label={t('unit.label')}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item>
              <Checkbox>{t('multiple-units.label')}</Checkbox>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label={t('enable.label')}>
              <Switch />
            </Form.Item>
          </Col>

          <Col span={16} />

          <Col span={8}>
            <Form.Item label={t('unit-weight.label')}>
              <Input
                addonAfter={'kg'}
                placeholder={t('unit-weight.input.placeholder')}
              />
            </Form.Item>
          </Col>

          <Col span={16} />

          <Col span={16}>
            <Form.Item
              label={t('remark.label')}
              labelCol={{ span: 4 }}
            >
              <Input.TextArea rows={2} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
