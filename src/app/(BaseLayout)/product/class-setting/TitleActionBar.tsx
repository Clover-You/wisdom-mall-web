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
import { PageContext } from './context'

export const TitleActionBar: FC<{
  addCategory?: () => void
  expandAll?: () => void
}> = (props) => {
  const router = useRouter()
  const context = useContext(PageContext)

  return (
    <>
      <Row justify={'space-between'}>
        <Col>
          <Space>
            <Button type={'primary'} onClick={props.addCategory}>
              添加分类
            </Button>

            <Button onClick={() => context.expandAll()}>全部展开</Button>
          </Space>
        </Col>
        
        <Col>
          <Button onClick={() => router.push('/product/list')}>商品列表</Button>
        </Col>
      </Row>
    </>
  )
}
