import { genComponentStyleHook } from 'antd/es/theme/internal'
import { CSSInterpolation } from '@ant-design/cssinjs'

/**
 * <p>
 * grid pro 表格样式
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-03 10:34
 */
const genTableBodyStyle = (prefixCls: string): CSSInterpolation => {
  return [
    {
      [prefixCls]: {
        '.ant-table-body': {
          '&::-webkit-scrollbar': {
            width: 5,
            height: 5,
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'hsla(0, 0%, 50%, .3)',
            borderRadius: 0,
          },
          //只需要加上这一行
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'none',
          },
        },
      },
    },
  ]
}

export default genComponentStyleHook('Table', (token) => {
  const { componentCls } = token
  return [genTableBodyStyle(componentCls)]
})
