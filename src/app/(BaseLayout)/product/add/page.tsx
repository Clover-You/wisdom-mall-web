/**
 * <p>
 * 添加商品
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 16:54
 */
import type { FC } from 'react'

import Auth from '#/components/Security/Login'
import { ProductAddMain } from './Main'

const ProductAddPage: FC = Auth(
  {
    login: true,
  },
  () => {
    return (
      <>
        <ProductAddMain />
      </>
    )
  },
)

export default ProductAddPage
