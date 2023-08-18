/**
 * <p>
 * 菜单栏样式
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-14 13:43
 */
import { FullToken, genComponentStyleHook } from 'antd/es/theme/internal'
import { CSSInterpolation } from '@ant-design/cssinjs'

const genCustomMenuStyle = (token: FullToken<'Menu'>): CSSInterpolation => {
  const { componentCls } = token
  return [
    {
      [componentCls]: {
        ['.ant-menu.ant-menu-sub.ant-menu-inline']: {
          background: 'none',
        },
      },
    },
  ]
}

export default genComponentStyleHook('Menu', (token) => {
  return [genCustomMenuStyle(token)]
})
