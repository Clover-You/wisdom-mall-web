/**
 * <p>
 * 登录接口
 * </p>
 * @author Clover
 * @date 2023-07-07 23:32
 */
import http from '#/utils/request'
import service from '#/constant/service'

/**
 * 发送登录验证码
 * @param phone 手机号
 */
export const sendLoginPhoneVerifyCode = (phone: string) => {
  return http.get<API.R>(service.login.send_login_verify_code, {
    params: { phone },
  })
}

/**
 * 手机验证码登录
 * @param params 登录参数
 * @returns
 */
export const userLoginByMobile = (params: API.UserMobilePhoneLoginRequest) => {
  return http.post<API.R<string>>(service.login.user_login, params)
}
