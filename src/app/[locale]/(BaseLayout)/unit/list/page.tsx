/**
 * <p>
 * a1
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-20 13:27
 */
import Auth from '#/components/Security/Login'
import { Metadata } from 'next'
import { type FC } from 'react'
import { MainBox } from './MainBox'

export const metadata: Metadata = {
  title: '单位-智慧商城',
}

const UnitPage: FC = Auth(
  {
    login: true,
  },
  () => {
    return <MainBox />
  },
)
export default UnitPage
