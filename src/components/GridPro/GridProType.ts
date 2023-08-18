type TableProps<T> = import('antd').TableProps<T>
export type GridProColumn<T> = {
  title: string | React.ReactNode
  width?: number | string
  field?: keyof T
  key?: string
  render?: (value: any, record: T, index: number) => React.ReactNode
  align?: GridProAlignType
  ellipsis?: boolean
  fixed?: GridProFixedType
  minWidth?: number
}

export type GridProColumns<T> = GridProColumn<T>[]

export enum GridProSize {
  Middle = 'middle',
  Small = 'small',
  Large = 'large',
}

export enum GridProAlignType {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum GridProFixedType {
  Left = 'left',
  Right = 'right',
}

export type GridProPropsRecord<T> = {
  columns?: GridProColumns<T>
  bordered?: boolean
  size?: GridProSize
  data?: T[]
  rowKey?: TableProps<T>['rowKey']
  height?: number | string
  width?: number | string
}

export type GridProProps<T> = GridProPropsRecord<T> &
  Omit<TableProps<T>, keyof GridProPropsRecord<T> | 'scroll' | 'dataSource'>
