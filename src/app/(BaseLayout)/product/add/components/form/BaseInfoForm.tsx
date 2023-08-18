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
import {
  Button,
  Checkbox,
  Col,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
  Switch,
  theme,
} from 'antd'
import type { FC } from 'react'

export const BaseInfoForm: FC<{
  form: FormInstance
}> = (props) => {
  const {
    token: { margin },
  } = theme.useToken()
  return (
    <>
      <Form labelCol={{ span: 8 }} form={props.form}>
        <Row gutter={margin}>
          <Col span={8}>
            <Form.Item label={'条形码'} name={'billNo'}>
              <Input
                suffix={
                  <Button type={'link'} style={{ padding: 0, height: 'auto' }}>
                    生成
                  </Button>
                }
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label={'商品编号'} name={'productNo'}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item label={'名称'} labelCol={{ span: 4 }}>
              <Input placeholder={'例如: NFC芒果汁'} />
            </Form.Item>
          </Col>

          <Col span={8} />

          <Col span={8}>
            <Form.Item label={'商品分类'}>
              <Select />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label={'单位'}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item>
              <Checkbox>启用多单位</Checkbox>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label={'启用商品'}>
              <Switch />
            </Form.Item>
          </Col>

          <Col span={16} />

          <Col span={8}>
            <Form.Item label={'单位重量(kg)'}>
              <Input addonAfter={'kg'} placeholder={'基本单位的重量'} />
            </Form.Item>
          </Col>

          <Col span={16} />

          <Col span={16}>
            <Form.Item label={'备注'} labelCol={{ span: 4 }}>
              <Input.TextArea rows={2} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
