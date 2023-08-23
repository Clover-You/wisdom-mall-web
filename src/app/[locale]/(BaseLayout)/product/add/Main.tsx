/**
 * <p>
 * 添加商品内容盒子
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-07 14:06
 */
'use client'

import { Form } from 'antd'
import { useTranslations } from 'next-intl'

import type { FC } from 'react'

import LayoutSpace from '#/components/LayoutSpace'
import MainContent from '#/components/MainContent'
import { FooterAction } from './components/FooterAction'
import { BaseInfoForm } from './components/form/BaseInfoForm'
import { InventoryAlertForm } from './components/form/InventoryAlertForm'
import { InventoryForm } from './components/form/InventoryForm'
import { PriceForm } from './components/form/PriceForm'

export const ProductAddMain: FC = () => {
  const [form] = Form.useForm()
  const t = useTranslations('pages.product-add')

  const saveAndAdd = () => {
    console.log(form.getFieldsValue())
  }

  return (
    <>
      <MainContent title={t('basic-information.label')}>
        <BaseInfoForm form={form} />
      </MainContent>

      <LayoutSpace direction={'vertical'} />

      <MainContent title={t('price-management.label')}>
        <PriceForm form={form} />
      </MainContent>

      <LayoutSpace direction={'vertical'} />

      <MainContent title={t('opening-inventory.label')}>
        <InventoryForm />
      </MainContent>

      <LayoutSpace direction={'vertical'} />

      <MainContent title={t('inventory-alert.label')}>
        <InventoryAlertForm />
      </MainContent>

      <LayoutSpace direction={'vertical'} />

      <MainContent
        style={{
          position: 'sticky',
          bottom: 0,
        }}
        size={'small'}
      >
        <FooterAction saveAndAdd={saveAndAdd} />
      </MainContent>
    </>
  )
}
