/**
 * <p>
 * Redux 上下文提供
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-12 20:31
 */
'use client'
import type { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import store from './store'

export const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
