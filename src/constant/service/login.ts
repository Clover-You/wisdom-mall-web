/**
 * <p>
 * 登录接口
 * </p>
 * @author Clover
 * @date 2023-07-08 01:37
 */
export const login = {
  // 发送登录验证码
  send_login_verify_code: '/api/third-party/mobile-phone-verify-code/send-login-code',
  // 手机验证码登录
  user_login: '/api/user/auth/mobile-phone-login'
}