/**
 * <p>
 * api 服务地址
 * </p>
 * @author Clover
 * @date 2023-07-08 01:36
 */
import { login } from './login'
import { user } from './user'
import { unit } from './unit'
import { register } from './register'

const service = {
  login,
  user,
  unit,
  register,
}

export default service
