/**
 * <p>
 * 登录页面
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-06-20 00:24
 */
import { CSSInterpolation } from '@ant-design/cssinjs'
import { genComponentStyleHook } from 'antd/lib/theme/internal'

function genBoxStyle(prefixCls: string): CSSInterpolation {
  return [
    {
      [prefixCls]: {
        height: '100vh',
        position: 'relative',
        ['&::after']: {
          content: '""' /* 必须设置 content 属性 */,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1 /* 将伪元素放在背景图片的下方 */,
          background: 'url(/bg.svg)',
          filter: 'brightness(70%)' /* 降低亮度为70% */,
        },
      },
    },
  ]
}

export default genComponentStyleHook('Layout', (token) => {
  const { componentCls } = token
  return [genBoxStyle(componentCls)]
})
