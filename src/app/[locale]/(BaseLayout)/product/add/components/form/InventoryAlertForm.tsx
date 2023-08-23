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
import { useTranslations } from 'next-intl'

import type { FC } from 'react'

import GridPro from '#/components/GridPro'
import { GridProColumns } from '#/components/GridPro/GridProType'

export const InventoryAlertForm: FC = () => {
  const t = useTranslations('pages.product-add.inventory-alert.grid')

  const Columns: GridProColumns<any> = [
    {
      title: t('columns.warehouse.label'),
    },
    {
      title: t('columns.mini-stock-quantity.label'),
    },
    {
      title: t('columns.max-stock-quantity.label'),
    },
  ]

  return (
    <>
      <GridPro columns={Columns} />
    </>
  )
}
