/**
 * <p>
 * 内容
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-28 10:01
 */
'use client'
import classNames from 'classnames'
import { genComponentStyleHook } from 'antd/es/theme/internal'
import { CSSInterpolation } from '@ant-design/cssinjs'
import LoginCard from './LoginCard'

const genMainBoxStyle = (prefixCls: string): CSSInterpolation => {
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

const useLoginStyle = genComponentStyleHook('Layout', (token) => {
  return [genMainBoxStyle(token.componentCls)]
})

const LoginContentBox = () => {
  const prefixCls = 'wisdom-login'
  const [wrapSSR, hashId] = useLoginStyle(prefixCls)

  return wrapSSR(
    <main className={classNames(prefixCls, hashId)}>
      <LoginCard />
    </main>,
  )
}

export default LoginContentBox
