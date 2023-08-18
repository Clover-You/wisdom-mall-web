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
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

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
      messageApi?.error?.('系统异常')
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
      title={'编辑单位'}
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
          label={'单位名称'}
          name={'unitName'}
          rules={[{ required: true, message: '请输入单位名称' }]}
        >
          <Input placeholder={'请输入单位名称'} />
        </Form.Item>

        <Form.Item name={'isDecimal'}>
          <DecimalRadio />
        </Form.Item>

        <Form.Item
          label={'备注'}
          name={'unitRemark'}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          name={'enable'}
          valuePropName={'checked'}
        >
          <EnableCheckbox>启用</EnableCheckbox>
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

  useEffect(() => {
    setValue(props.value)
  }, [props, props.value])

  return (
    <Space size={16}>
      <span>允许小数</span>

      <Radio.Group
        defaultValue={0}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          props.onChange?.(e.target.value)
        }}
      >
        <Radio value={1}>允许</Radio>
        <Radio value={0}>不允许</Radio>
      </Radio.Group>
    </Space>
  )
}

const FooterAction: FC<{
  submit: () => void
  loadState: boolean
  cancelClick: () => void
}> = (props) => {
  return (
    <Space>
      <Button
        type={'primary'}
        onClick={props.submit}
        disabled={props.loadState}
        loading={props.loadState}
      >
        保存
      </Button>

      <Button
        onClick={props.cancelClick}
        disabled={props.loadState}
      >
        取消
      </Button>
    </Space>
  )
}
