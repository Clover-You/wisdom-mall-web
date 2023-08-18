/**
 * <p>
 * 用户注册
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-15 16:43
 */
import http from '#/utils/request'
import service from '#/constant/service'

/**
 * 通过手机号注册用户
 * @param params 注册参数
 */
export const registerByMobile = (params: API.UserMobileRegisterRequest) => {
  return http.post<API.R>(service.register.mobile, params)
}
