/**
 * <p>
 * 首页
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-09-03 09:35
 */
import Auth from '#/components/Security/Login'
import { memo, type FC } from 'react'

const IndexPage: FC = () => {
  return <></>
}

export default Auth(
  {
    login: true,
  },
  memo(IndexPage),
)
