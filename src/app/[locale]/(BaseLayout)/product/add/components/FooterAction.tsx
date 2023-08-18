/**
 * <p>
 * a1
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 17:54
 */
'use client'
import { Button, Col, Row, Space } from 'antd'
import type { FC } from 'react'

export const FooterAction: FC<{
  saveAndAdd: () => void
}> = (props) => {
  return (
    <>
      <Row justify={'space-between'}>
        <Col />
        <Col>
          <Space>
            <Button>取消</Button>
            <Button>保存</Button>
            <Button>保存并复制新增</Button>
            <Button type={'primary'} onClick={props.saveAndAdd}>
              保存并新增
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}
