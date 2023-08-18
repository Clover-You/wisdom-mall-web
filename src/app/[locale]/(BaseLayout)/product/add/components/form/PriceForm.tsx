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
import type { FC } from 'react'

export const PriceForm: FC<{
  form: FormInstance
}> = (props) => {
  const {
    token: { margin },
  } = theme.useToken()

  return (
    <>
      <Form layout={'vertical'} form={props.form}>
        <Row gutter={margin}>
          <Col span={6}>
            <Form.Item label={'零售价'}>
              <Input addonAfter={'元'} placeholder={'请输入'} />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={'批发价'}>
              <Input addonAfter={'元'} placeholder={'请输入'} />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={'等级价一'}>
              <Input addonAfter={'元'} placeholder={'批发价 x 100%'} />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={'等级价二'}>
              <Input addonAfter={'元'} placeholder={'批发价 x 100%'} />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={'等级价三'}>
              <Input addonAfter={'元'} placeholder={'批发价 x 100%'} />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={'最低售价'}>
              <Input addonAfter={'元'} placeholder={'请输入'} />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label={'参考进货价'}>
              <Input addonAfter={'元'} placeholder={'请输入'} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
