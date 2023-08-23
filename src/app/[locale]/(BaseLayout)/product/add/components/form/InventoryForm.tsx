/**
 * <p>
 * 库存录入
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-19 17:38
 */
import { useTranslations } from 'next-intl'

import type { FC } from 'react'

import GridPro from '#/components/GridPro'
import { GridProColumns } from '#/components/GridPro/GridProType'

export const InventoryForm: FC = () => {
  const t = useTranslations('pages.product-add.opening-inventory.grid')

  const Columns: GridProColumns<any> = [
    {
      title: t('columns.warehouse.label'),
    },
    {
      title: t('columns.opening-inventory-quantity.label'),
    },
    {
      title: t('columns.opening-cost-price.label'),
    },
    {
      title: t('columns.opening-total-amount.label'),
    },
    {
      title: t('columns.remark.label'),
    },
  ]

  return (
    <>
      <GridPro columns={Columns} />
    </>
  )
}
