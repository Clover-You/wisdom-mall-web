/**
 * <p>
 * user controller
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-12 21:52
 */
declare namespace API {
  /**
   * UserInfoResponse，用户信息
   */
  type UserInfoResponse = {
    /**
     * 头像
     */
    avatar?: string
    /**
     * 是否封禁
     */
    banned?: boolean
    /**
     * 用户创建时间
     */
    createAt?: Date
    /**
     * 用户绑定的手机号
     */
    phone?: string
    /**
     * 账户信息修改时间
     */
    updateAt?: Date
    /**
     * 账号
     */
    userAccount?: number
    /**
     * 用户id
     */
    userId?: string
    /**
     * 用户名
     */
    userName?: string
  }
}
