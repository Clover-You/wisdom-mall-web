/**
 * <p>
 * 登录校验
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-07 10:46
 */
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { FC } from 'react'

import { isBlank } from '#/utils/strings'

type AuthProps = {
  /**是否需要登录 */
  login?: boolean
}

export default function Auth<P = {}>(props: AuthProps, children: FC<P>) {
  return (childrenProps: P) => {
    // 需要登录
    if (props.login) {
      const cookieStore = cookies()
      const authToken = cookieStore.get('Authorization')?.value
      // 不存在token，去登录
      if (isBlank(authToken)) return redirect('/login')
    }
    return children(childrenProps)
  }
}
