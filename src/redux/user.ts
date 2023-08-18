/**
 * <p>
 * 用户信息
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-12 18:15
 */
import { persistReducer } from 'redux-persist'
import Cookies from 'js-cookie'

import { userLoginByMobile } from '#/api/login'
import { fetchUserInfo } from '#/api/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import sessionStorage from 'redux-persist/es/storage/session'

export type UserStore = {
  /** 用户信息 */
  user?: API.UserInfoResponse
  /** 是否已经登录 */
  loginState: boolean
  /** jwt token */
  token?: string
  name: string
}

const initialState: UserStore = {
  user: undefined,
  loginState: false,
  token: undefined,
  name: '',
}

const userStore = createSlice({
  name: 'USER_STORE',
  initialState,
  reducers: {
    UserLoginByMobile(state, { payload }) {
      const params = payload as API.UserMobilePhoneLoginRequest
      return {
        ...state,
        loginState: true,
        user: payload,
      }
    },
    SetName(state, { payload }) {
      state.name = payload
    },
  },
  extraReducers(builder) {
    // 异步请求登录时触发
    builder.addCase(LoginByMobile.fulfilled, (state, { payload }) => {
      // 如果业务状态码不是200，那么不做操作交由UI处理
      if (payload.data.code != 200) return
      state.loginState = true
      state.token = payload.data?.data
      state.name = Date.now() + ''
    })

    builder.addCase(GetUserInfo.fulfilled, (state, { payload }) => {
      if (payload.data.code != 200) return
      state.user = payload.data?.data
    })
  },
})

export const { SetName } = userStore.actions

export default persistReducer(
  {
    storage: sessionStorage,
    key: 'USER_STORE_STORAGE',
  },
  userStore.reducer,
)

export const LoginByMobile = createAsyncThunk(
  'USER_STORE/LoginByMobile',
  async (params: API.UserMobilePhoneLoginRequest, { rejectWithValue }) => {
    try {
      const result = await userLoginByMobile(params)
      if (result.data.code == 200) {
        Cookies.set('Authorization', 'Bearer ' + result.data.data)
      }
      return result
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)

export const GetUserInfo = createAsyncThunk('USER_STORE/GetUserInfo', async (arg, { rejectWithValue }) => {
  try {
    const result = await fetchUserInfo()

    // 设置到 cookie
    return result
  } catch (err) {
    return rejectWithValue(err)
  }
})
