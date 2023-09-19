/**
 * <p>
 * 用户接口
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-13 11:25
 */
import http from '#/utils/request'
import service from '#/constant/service'

/**
 * 获取用户信息
 */
export const fetchUserInfo = () => {
  return http.get<API.R<API.UserInfoResponse>>(service.user.fetch_user_info)
}
