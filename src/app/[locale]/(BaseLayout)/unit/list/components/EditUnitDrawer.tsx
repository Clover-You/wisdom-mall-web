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
import { Button, Checkbox, CheckboxProps, Form, Input, Radio, Space } from 'antd'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import type { FC } from 'react'

import { saveUnitUpdate } from '#/api/unit'
import DrawerPro from '#/components/DrawerPro'
import { useMessage } from '#/hooks/antd/useMessage'
import { wait } from '#/utils'

type UnitDrawerProps = {
  /**抽屉打开状态 */
  open?: boolean
  /**抽屉状态改变勾子 */
  afterOpenChange?: (open: boolean) => void
  /**抽屉内部操作完成，例如：新增完成 */
  onFinish: () => void
  /**回显数据 */
  callbackData?: API.UnitPageResponse
}

export const EditUnitDrawer: FC<UnitDrawerProps> = (props) => {
  const [open, setOpenState] = useState(false)
  const [loadState, setLoadState] = useState(false)
  const [form] = Form.useForm<API.SaveUnitUpdateRequest>()
  const messageApi = useMessage()
  // 记录操作是否成功
  let operationSucceededFlag = useRef(false)
  const t = useTranslations('pages.unit-list.edit-unit-drawer')

  const afterOpenChange = (drawerState: boolean) => {
    // 通知父组件抽屉状态已更改
    props.afterOpenChange?.(drawerState)

    // 检查是否操作成功，如果成功则通知父组件
    if (operationSucceededFlag.current) {
      props.onFinish()
      operationSucceededFlag.current = false
    }

    if (!drawerState) form.resetFields()
  }

  /**
   * 表单提交
   * @param formData 表单数据
   */
  const onFormSubmit = async (formData: API.SaveUnitUpdateRequest) => {
    try {
      setLoadState(true)
      await wait(300)

      const {
        data: { code, message },
      } = await saveUnitUpdate(formData)

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

  useEffect(() => {
    setTimeout(() => {
      setOpenState(props.open ?? false)
    })
  }, [props.open])

  useEffect(() => {
    setTimeout(() => {
      if (props.open && props.callbackData != void 0)
        return form.setFieldsValue({
          enable: props.callbackData.enable,
          isDecimal: props.callbackData.isDecimal,
          sort: props.callbackData.sort,
          unitId: props.callbackData.unitId,
          unitName: props.callbackData.unitName,
          unitRemark: props.callbackData.unitRemark,
        })
    })
  }, [props.callbackData, props.open, form])

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
          name={'unitId'}
          hidden
        >
          <Input />
        </Form.Item>

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

        <Form.Item
          name={'enable'}
          valuePropName={'checked'}
        >
          <EnableCheckbox>{t('form.enable.label')}</EnableCheckbox>
        </Form.Item>
      </Form>
    </DrawerPro>
  )
}

type EnableCheckboxProps = Omit<CheckboxProps, 'checked' | 'onChange'> & {
  checked?: number
  onChange?: (value: number) => void
}

const EnableCheckbox: FC<EnableCheckboxProps> = (props) => {
  return (
    <Checkbox
      {...props}
      checked={(props.checked ?? 0) > 0}
      onChange={(e) => {
        props.onChange?.(Number(e.target.checked))
      }}
    >
      {props.children}
    </Checkbox>
  )
}

const DecimalRadio: FC<{
  value?: number
  onChange?: (value?: number) => void
}> = (props) => {
  const [value, setValue] = useState<number>()
  const t = useTranslations('pages.unit-list.edit-unit-drawer.form.is-decimal')

  useEffect(() => {
    setValue(props.value)
  }, [props, props.value])

  return (
    <Space size={16}>
      <span>{t('label')}</span>

      <Radio.Group
        defaultValue={0}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          props.onChange?.(e.target.value)
        }}
      >
        <Radio value={1}>{t('allow')}</Radio>
        <Radio value={0}>{t('not-allowed')}</Radio>
      </Radio.Group>
    </Space>
  )
}

const FooterAction: FC<{
  submit: () => void
  loadState: boolean
  cancelClick: () => void
}> = (props) => {
  const t = useTranslations('pages.unit-list.edit-unit-drawer.btn')

  return (
    <Space>
      <Button
        type={'primary'}
        onClick={props.submit}
        disabled={props.loadState}
        loading={props.loadState}
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
