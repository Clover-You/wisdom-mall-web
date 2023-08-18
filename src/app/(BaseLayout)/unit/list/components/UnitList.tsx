/**
 * <p>
 * 单位列表展示
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-26 17:19
 */
'use client'
import { CSSProperties, FC, useState } from 'react'

import GridPro from '#/components/GridPro'
import { GridProAlignType, GridProColumns, GridProFixedType } from '#/components/GridPro/GridProType'
import { Button, Divider, Space, TablePaginationConfig } from 'antd'

export const UnitList: FC<{
  /**表格数据 */
  data?: API.UnitPageResponse[]
  /**表格加载状态 */
  loading?: boolean
  /**分页配置 */
  pageConfig?: TablePaginationConfig
  /**编辑按钮点击 */
  onEdit: (record: API.UnitPageResponse) => void
  /**删除按钮点击 */
  remove: (record: API.UnitPageResponse) => void
  onChange?: () => void
}> = (props) => {
  const [columns] = useState<GridProColumns<API.UnitPageResponse>>([
    {
      title: '序号',
      field: 'sort',
      align: GridProAlignType.Center,
      fixed: GridProFixedType.Left,
      width: 60,
    },
    {
      title: '操作',
      align: GridProAlignType.Center,
      fixed: GridProFixedType.Left,
      width: 140,
      render: (ignore, row) => (
        <GridOperation
          onEdit={() => props.onEdit(row)}
          remove={() => props.remove(row)}
        />
      ),
    },
    {
      title: '单位名称',
      field: 'unitName',
      minWidth: 120,
    },
    {
      title: '允许小数',
      field: 'isDecimal',
      minWidth: 120,
      render: (value: number) => (value == 0 ? '不允许' : '允许'),
    },
    {
      title: '状态',
      field: 'enable',
      minWidth: 120,
      render: (value: number) => (value == 0 ? '停用' : '启用'),
    },
    {
      title: '备注',
      field: 'unitRemark',
      minWidth: 120,
    },
  ])

  return (
    <GridPro
      pagination={props.pageConfig}
      loading={{
        tip: '数据加载中',
        spinning: props.loading,
      }}
      columns={columns}
      data={props.data}
      rowKey={(row) => row.unitId!}
      height={400}
      rowSelection={{
        type: 'checkbox',
        fixed: true,
      }}
    />
  )
}

const GridOperation: FC<{
  /**编辑按钮点击 */
  onEdit: () => void
  /**删除按钮点击 */
  remove: () => void
}> = (props) => {
  const ButtonStyle: CSSProperties = { padding: 0, height: 'auto' }

  return (
    <Space
      size={0}
      split={<Divider type={'vertical'} />}
    >
      <Button
        type={'link'}
        style={ButtonStyle}
        onClick={props.onEdit}
      >
        编辑
      </Button>
      <Button
        type={'link'}
        style={ButtonStyle}
        onClick={props.remove}
      >
        删除
      </Button>
    </Space>
  )
}
