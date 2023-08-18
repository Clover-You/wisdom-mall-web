/**
 * <p>
 * 程序配置
 * </p>
 * @author Clover
 * @date 2023-07-24 16:40
 */
import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/es/storage/session'

const appSetup = createSlice({
  name: 'APP_SETUP_STORE',
  initialState: {
    firstLoad: true,
  },
  reducers: {
    REFRESH_LOAD_STATE(state) {
      // 此函数调用后不可再变动
      state.firstLoad = false
    },
  },
})

export default persistReducer(
  {
    storage: sessionStorage,
    key: 'APP_SETUP_STORE_STORAGE',
  },
  appSetup.reducer,
)

export const { REFRESH_LOAD_STATE } = appSetup.actions
