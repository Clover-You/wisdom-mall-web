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
import { Button, Divider, Space, TablePaginationConfig } from 'antd'
import { useTranslations } from 'next-intl'

import GridPro from '#/components/GridPro'
import { GridProAlignType, GridProColumns, GridProFixedType } from '#/components/GridPro/GridProType'

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
  const t = useTranslations('pages.unit-list.unit-grid')

  const [columns] = useState<GridProColumns<API.UnitPageResponse>>([
    {
      title: t('columns.sort'),
      field: 'sort',
      align: GridProAlignType.Center,
      fixed: GridProFixedType.Left,
      width: 60,
    },
    {
      title: t('columns.operation'),
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
      title: t('columns.unit-name'),
      field: 'unitName',
      minWidth: 120,
    },
    {
      title: t('columns.allow-decimal'),
      field: 'isDecimal',
      minWidth: 120,
      render: (value: number) => (value == 0 ? t('not-allowed') : t('allow')),
    },
    {
      title: t('columns.enable'),
      field: 'enable',
      minWidth: 120,
      render: (value: number) => (value == 0 ? t('disable') : t('enable')),
    },
    {
      title: t('columns.unit-remark'),
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
  const t = useTranslations('pages.unit-list.unit-grid')

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
        {t('edit')}
      </Button>
      <Button
        type={'link'}
        style={ButtonStyle}
        onClick={props.remove}
      >
        {t('delete')}
      </Button>
    </Space>
  )
}
