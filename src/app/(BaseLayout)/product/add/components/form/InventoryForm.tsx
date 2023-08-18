/**
 * <p>
 * 库存录入
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 17:38
 */
import GridPro from '#/components/GridPro'
import { GridProColumns } from '#/components/GridPro/GridProType'
import type { FC } from 'react'

export const InventoryForm: FC = () => {

  const Columns: GridProColumns<any> = [
    {
      title: '仓库',
    },
    {
      title: '期初库存数量'
    },
    {
      title: '期初成本价'
    },
    {
      title: '期初总金额'
    },
    {
      title: '备注'
    }
  ]

  return <>
    <GridPro columns={Columns} />
  </>
}