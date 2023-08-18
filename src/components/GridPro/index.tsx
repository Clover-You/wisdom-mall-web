/**
 * <p>
 * 表格封装
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-18 13:49
 */
'use client'
import { Table, theme } from 'antd'

import classNames from 'classnames'
import { TableProps } from 'antd/es/table'
import { useEffect, useState } from 'react'

import useStyle from './style'
import { GridProColumns, GridProProps, GridProSize } from './GridProType'

function toAntdColumns<T>(columns: GridProColumns<T> = []): TableProps<T>['columns'] {
  return columns.map((it) => {
    return {
      key: it.key,
      dataIndex: it.field as string,
      title: it.title,
      width: it.width,
      align: it.align,
      ellipsis: it.ellipsis ?? true,
      fixed: it.fixed,
      render: (text, record, index) => {
        if (it.minWidth == void 0 || it.minWidth <= 40) return it.render?.(text, record, index) ?? text
        return <div style={{ minWidth: it.minWidth }}>{it.render?.(text, record, index) ?? text}</div>
      },
    }
  })
}

function GridPro<T extends object>(props: GridProProps<T>) {
  const [columns, setColumns] = useState<TableProps<T>['columns']>([])
  const {
    token: { borderRadius },
  } = theme.useToken()

  useEffect(() => {
    setColumns(toAntdColumns<T>(props.columns))
  }, [props.columns, props])

  const prefixCls = 'wisdom-grid-pro'
  const [wrapSSR, hashId] = useStyle(prefixCls)

  return wrapSSR(
    <>
      <Table<T>
        className={classNames(prefixCls, hashId)}
        {...props}
        style={{ borderRadius, overflow: 'hidden', ...props.style }}
        scroll={{ x: props.width ?? 'max-content', y: props.height }}
        dataSource={props.data}
        columns={columns}
        bordered={props.bordered ?? true}
        rowKey={props.rowKey}
        size={props.size ?? GridProSize.Middle}
        loading={props.loading}
        rowSelection={props.rowSelection}
        pagination={props.pagination}
      />
    </>,
  )
}

export default GridPro
