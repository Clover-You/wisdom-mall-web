declare namespace API {
  /**
   * UserMobileRegisterRequest，用户手机号注册参数
   */
  type UserMobileRegisterRequest = {
    /**
     * 密码
     */
    password: string
    /**
     * 手机号
     */
    phone: string
    /**
     * 验证码
     */
    verifyCode: string
  }
}
