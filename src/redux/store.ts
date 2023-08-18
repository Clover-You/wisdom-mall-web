/**
 * <p>
 * 创建 redux
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-12 18:13
 */
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { useDispatch as createDispatch, useSelector } from 'react-redux'

import appSetup from './app'
import userStore from './user'

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
  reducer: {
    user: userStore,
    app: appSetup,
  },
})

/** 数据商店 */
export type AppStore = ReturnType<typeof store.getState>

export const useUser = () => useSelector<AppStore, AppStore['user']>((state) => state.user)
export const useAppSetup = () => useSelector<AppStore, AppStore['app']>((state) => state.app)

persistStore(store)

export default store
export type RootDispatch = typeof store.dispatch

export const useDispatch = () => createDispatch() as RootDispatch
