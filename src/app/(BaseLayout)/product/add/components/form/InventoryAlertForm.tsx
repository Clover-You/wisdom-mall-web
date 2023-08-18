/**
 * <p>
 * 库存预警
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 17:44
 */
'use client'
import GridPro from '#/components/GridPro'
import { GridProColumns } from '#/components/GridPro/GridProType'
import { Form } from 'antd'

import type { FC } from 'react'

export const InventoryAlertForm: FC = () => {

  const Columns: GridProColumns<any> = [
    {
      title: '仓库'
    },
    {
      title: '最低库存数量'
    },
    {
      title: '最高库存数量'
    }
  ]

  return (
    <>
      <Form>
        <GridPro columns={Columns} />
      </Form>
    </>
  )
}
