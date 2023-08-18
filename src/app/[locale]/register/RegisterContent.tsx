/**
 * <p>
 * 登录页面
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-06-20 00:24
 */
'use client'
import { ConfigProvider } from 'antd'
import classNames from 'classnames'

import useStyle from './style'
import MobileRegisterBox from './components/MobileRegisterBox'

export default function RegisterContent() {
  const [wrapSSR, hashId] = useStyle('register')

  return wrapSSR(
    <main className={classNames(hashId, 'register')}>
      <ConfigProvider componentSize={'large'}>
        <MobileRegisterBox />
      </ConfigProvider>
    </main>,
  )
}
