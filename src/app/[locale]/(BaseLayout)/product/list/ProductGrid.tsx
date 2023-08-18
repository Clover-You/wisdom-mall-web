/**
 * <p>
 * 商品列表
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-18 13:41
 */
'use client'
import { Button, Divider, Space } from 'antd'
import Link from 'next/link'

import type { CSSProperties, FC } from 'react'

import GridPro from '#/components/GridPro'
import {
  GridProAlignType,
  GridProFixedType,
} from '#/components/GridPro/GridProType'
import MainContent from '#/components/MainContent'
import { SettingFilled } from '@ant-design/icons'

const TableData = [
  {
    barCode: 'SP20230718000A',
    productName: '达利园蛋黄派230g',
    propertyList: '甜,蛋黄派,金黄色,原味注心',
    unitName: '袋',
    salePrice: 8.0,
    unitWeight: 0.23,
  },
  {
    barCode: '001',
    productName: '美丽俏佳人专卖店',
    unitName: '对',
    salePrice: 9.9,
  },
  {
    barCode: 'SP20230715001A',
    productName: '创维机顶盒e900',
    unitName: '台',
    salePrice: 0.0,
  },
  {
    barCode: 'SP20230715000I',
    productName: '烟花',
    unitName: '对',
    salePrice: 20.0,
  },
  {
    barCode: 'SP20230714005I',
    productName: '福晨1.9-2',
    unitName: '对',
    salePrice: 0.0,
  },
  {
    barCode: 'SP20230714004I',
    productName: '福晨1.7-1.8',
    unitName: '斤',
    salePrice: 0.0,
  },
  {
    barCode: 'SP20230714003',
    productName: '普利司通205/55R17 EP150 91V',
    unitName: '条',
    salePrice: 0.0,
  },
  {
    barCode: 'SP20230714002',
    productName: '米其林205/65R16 95H XM2+',
    unitName: '条',
    salePrice: 0.0,
  },
  {
    barCode: 'Desert001',
    productName: 'Desert螺蛳粉',
    propertyList: '特辣',
    unitName: '对',
    salePrice: 10.0,
    unitWeight: 1,
  },
  {
    barCode: 'SP20230713010I',
    productName: '尖椒',
    unitName: '斤',
    salePrice: 0.0,
  },
]

type DataType = (typeof TableData)[number]

const ButtonStyle: CSSProperties = { padding: 0, height: 'auto' }

const ProductGrid: FC = () => {
  return (
    <MainContent>
      <GridPro<DataType>
        data={TableData}
        height={300}
        columns={[
          {
            width: 50,
            title: <SettingFilled />,
            align: GridProAlignType.Center,
            key: 'setting',
            render: (value, record, index) => index + 1,
            fixed: GridProFixedType.Left,
          },
          {
            title: '操作',
            key: 'action',
            width: 100,
            align: GridProAlignType.Center,
            fixed: GridProFixedType.Left,
            render: (value, record, index) => {
              return (
                <Space size={0} split={<Divider type={'vertical'} />}>
                  <Link key={'Detail'} href={''}>
                    详情
                  </Link>

                  <Button key={'Copy'} type={'link'} style={ButtonStyle}>
                    复制
                  </Button>

                  <Button key={'Edit'} type={'link'} style={ButtonStyle}>
                    编辑
                  </Button>

                  <Button key={'Remove'} type={'link'} style={ButtonStyle}>
                    删除{' '}
                  </Button>
                </Space>
              )
            },
          },
          {
            title: '编号',
            field: 'barCode',
            key: 'barCode',
            width: 150,
            fixed: GridProFixedType.Left,
          },
          {
            title: '名称',
            field: 'productName',
            key: 'productName',
            width: 200,
            fixed: GridProFixedType.Left,
          },
          {
            title: '属性',
            key: 'attr',
            field: 'propertyList',
            width: 150,
          },
          { title: '基本单位', field: 'unitName', key: 'unitName', width: 90 },
          {
            title: '零售价(元)',
            field: 'salePrice',
            key: 'salePrice',
            width: 90,
          },
          {
            title: '单位重量(kg)',
            field: 'unitWeight',
            key: 'unitWeight',
            minWidth: 90
          },
        ]}
        rowKey={(d) => d.barCode}
        rowSelection={{
          type: 'checkbox',
        }}
      />
    </MainContent>
  )
}

export default ProductGrid
