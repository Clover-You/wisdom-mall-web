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

  const saveAndAdd = () => {
    console.log(form.getFieldsValue())
  }

  return (
    <>
      <MainContent title={'基本信息'}>
        <BaseInfoForm form={form} />
      </MainContent>

      <LayoutSpace direction={'vertical'} />

      <MainContent title={'价格管理'}>
        <PriceForm form={form} />
      </MainContent>

      <LayoutSpace direction={'vertical'} />

      <MainContent title={'期初库存'}>
        <InventoryForm />
      </MainContent>

      <LayoutSpace direction={'vertical'} />

      <MainContent title={'库存预警'}>
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
