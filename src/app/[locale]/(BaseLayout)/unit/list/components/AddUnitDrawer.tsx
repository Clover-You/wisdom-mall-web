/**
 * <p>
 * 新增单位抽屉
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-20 13:41
 */
'use client'
import { Button, Form, Input, Radio, Space } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import DrawerPro from '#/components/DrawerPro'
import { addNewUnit } from '#/api/unit'
import { useMessage } from '#/hooks/antd/useMessage'

type UnitDrawerProps = {
  /**抽屉打开状态 */
  open?: boolean
  /**抽屉状态改变勾子 */
  afterOpenChange?: (open: boolean) => void
  /**抽屉内部操作完成，例如：新增完成 */
  onFinish: () => void
}

export const AddUnitDrawer: FC<UnitDrawerProps> = (props) => {
  const [open, setOpenState] = useState(false)
  const [loadState, setLoadState] = useState(false)
  const [form] = Form.useForm<API.AddUnitRequest>()
  const messageApi = useMessage()
  const t = useTranslations('pages.unit-list.add-unit-drawer')

  // 记录操作是否成功
  let operationSucceededFlag = useRef(false)

  const afterOpenChange = (drawerState: boolean) => {
    // 通知父组件抽屉状态已更改
    props.afterOpenChange?.(drawerState)
    form.resetFields()

    // 检查是否操作成功，如果成功则通知父组件
    if (operationSucceededFlag.current) {
      props.onFinish()
      operationSucceededFlag.current = false
    }
  }

  /**
   * 表单提交
   * @param formData 表单数据
   */
  const onFormSubmit = async (formData: API.AddUnitRequest) => {
    try {
      setLoadState(true)
      const {
        data: { code, message },
      } = await addNewUnit({ ...formData, enable: 1 })

      if (code != 200) return messageApi?.error?.(message)

      messageApi?.success?.(message)
      operationSucceededFlag.current = true
      setOpenState(false)
    } catch (err) {
      console.error(err)
      messageApi?.error?.(t('system-error-message'))
    } finally {
      setLoadState(false)
    }
  }

  useEffect(() => setOpenState(props.open ?? false), [props.open])

  return (
    <DrawerPro
      title={t('title')}
      width={700}
      open={open}
      closeIcon={!loadState}
      onClose={() => setOpenState(false)}
      footer={
        <FooterAction
          cancelClick={() => setOpenState(false)}
          loadState={loadState}
          submit={form.submit}
        />
      }
      height={700}
      afterOpenChange={afterOpenChange}
    >
      <Form
        form={form}
        layout={'vertical'}
        onFinish={onFormSubmit}
      >
        <Form.Item
          label={t('form.unit-name.label')}
          name={'unitName'}
          rules={[{ required: true, message: t('form.unit-name.rule-message') }]}
        >
          <Input placeholder={t('form.unit-name.placeholder')} />
        </Form.Item>

        <Form.Item name={'isDecimal'}>
          <DecimalRadio />
        </Form.Item>

        <Form.Item
          label={t('form.unit-remark.label')}
          name={'unitRemark'}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </DrawerPro>
  )
}

const DecimalRadio: FC<{
  value?: number
  onChange?: (value?: number) => void
}> = (props) => {
  const [value, setValue] = useState<number>()
  const t = useTranslations('pages.unit-list.add-unit-drawer.form')

  useEffect(() => {
    setValue(props.value)
  }, [props, props.value])

  return (
    <Space size={16}>
      <span>{t('is-decimal.label')}</span>

      <Radio.Group
        defaultValue={0}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          props.onChange?.(e.target.value)
        }}
      >
        <Radio value={1}>{t('is-decimal.allow')}</Radio>
        <Radio value={0}>{t('is-decimal.not-allowed')}</Radio>
      </Radio.Group>
    </Space>
  )
}

const FooterAction: FC<{
  submit: () => void
  loadState: boolean
  cancelClick: () => void
}> = (props) => {
  const t = useTranslations('pages.unit-list.add-unit-drawer.btn')

  return (
    <Space>
      <Button
        onClick={props.submit}
        loading={props.loadState}
      >
        {t('save-insert')}
      </Button>

      <Button
        type={'primary'}
        disabled={props.loadState}
      >
        {t('save')}
      </Button>

      <Button
        onClick={props.cancelClick}
        disabled={props.loadState}
      >
        {t('cancel')}
      </Button>
    </Space>
  )
}
