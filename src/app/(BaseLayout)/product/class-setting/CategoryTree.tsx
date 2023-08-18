/**
 * <p>
 * 分类
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 09:25
 */
'use client'
import { Space, Tag, Tree } from 'antd'
import { useContext, type FC, useState, Key } from 'react'

import { PageContext } from './context'

export const CategoryTree: FC = () => {
  const context = useContext(PageContext)
  const [expandedKeysRecord, setExpandedKeys] = useState<Key[]>([])

  context.expandAll = () => {
    const go = (list: any[]) => {
      let record: Key[] = []
      list.map(it => {
        record.push(it.key)
        if ((it.children?.length ?? 0) > 0) {
          record.push(...go(it.children))
        }
      })
      return record
    }

    setExpandedKeys(go(data))
  }

  const data = [
    {
      title: '商品分类',
      key: '0-0',
      children: [
        {
          title: '玻璃',
          key: '0-1',
        },
        {
          title: '仿瓷',
          key: '0-2',
        },
        {
          title: '家居',
          key: '0-3',
        },
        {
          title: (
            <Space>
              <span>默认分类</span>
              <Tag color={'green'}>默认</Tag>
            </Space>
          ),
          key: '0-4',
        },
        {
          title: '加工产品',
          key: '0-5',
        },
        {
          title: '摆件',
          key: '0-6',
        },
        {
          title: '非洲菫',
          key: '0-7',
          children: [
            {
              title: '迷你',
              key: '0-7-0',
            },
          ],
        },
        {
          title: '蔬菜',
          key: '0-8',
        },
        {
          title: '福晨',
          key: '0-9',
        },
        {
          title: '刮刮乐',
          key: '0-10',
        },
        {
          title: '双色球',
          key: '0-11',
        },
        {
          title: '副食',
          key: '0-12',
        },
      ],
    },
  ]

  return (
    <Tree
      treeData={data}
      blockNode
      defaultExpandedKeys={['0-0']}
      expandedKeys={expandedKeysRecord}
      onExpand={(expandedKeys) => {
        setExpandedKeys(expandedKeys)
      }}
    />
  )
}
