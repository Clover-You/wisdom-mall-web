/**
 * <p>
 * 手机号注册
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-11 09:48
 */
import { memo, useState } from 'react'
import { LockOutlined, SecurityScanOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, CardProps, Form, Input, theme, FormProps } from 'antd'
import { useRouter } from 'next/navigation'

import { useMessage } from '#/hooks/antd/useMessage'
import { useCountdown } from '#/hooks/timing/useCountdown'

import { registerByMobile } from '#/api/register'

export default function MobileRegisterBox() {
  const {
    token: { boxShadowSecondary, colorTextPlaceholder },
  } = theme.useToken()
  const router = useRouter()
  const messageApi = useMessage()
  const [form] = Form.useForm<API.UserMobileRegisterRequest>()

  const [loading, setLoad] = useState(false)

  const cardProps: CardProps = {
    title: '注册',
    style: {
      width: 500,
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%',
      boxShadow: boxShadowSecondary,
    },
  }

  /**
   * 表单提交后触发
   * @param data 表单数据
   */
  const submit = async (data: API.UserMobileRegisterRequest) => {
    try {
      setLoad(true)
      const {
        data: { code, message },
      } = await registerByMobile(data)

      if (code != 200) return messageApi?.error?.(message)

      // 跳转到登录且携带账号信息
      router.push('/login?phone=' + data.phone)
    } finally {
      setLoad(false)
    }
  }

  /**
   * 表单提交失败触发
   * @param err 错误信息
   */
  const onFailed: FormProps['onFinishFailed'] = (err) => {
    const errorFields = err.errorFields

    if ((errorFields?.length ?? 0) <= 0) return

    const firstErrorField = errorFields[0]
    const errors = firstErrorField.errors

    if ((errors?.length ?? 0) <= 0) return

    messageApi?.error?.(errors[0])
  }

  /**发送验证码 */
  const sendVerifyCode = async () => {
    try {
      await form.validateFields(['phone'])
      return true
    } catch (errs) {
      onFailed(errs as AntdType.ValidateErrorEntity)
    }
  }

  return (
    <Card {...cardProps}>
      <Form
        form={form}
        onFinish={submit}
        onFinishFailed={onFailed}
      >
        <Form.Item
          rules={[{ required: true, message: '请输入手机号' }]}
          name={'phone'}
          help={''}
        >
          <Input
            placeholder={'请输入手机号'}
            prefix={<UserOutlined style={{ color: colorTextPlaceholder }} />}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: '请输入验证码' }]}
          name={'verifyCode'}
          help={''}
        >
          <Input
            placeholder={'请输入验证码'}
            prefix={<SecurityScanOutlined style={{ color: colorTextPlaceholder }} />}
            suffix={<SendBtnAddon onClick={sendVerifyCode} />}
          />
        </Form.Item>

        <Form.Item
          rules={[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码限制6-20位' },
            { max: 20, message: '密码限制6-20位' },
          ]}
          name={'password'}
          help={''}
        >
          <Input
            minLength={6}
            maxLength={20}
            placeholder={'请输入6~20位非空格字符'}
            prefix={<LockOutlined style={{ color: colorTextPlaceholder }} />}
          />
        </Form.Item>

        <Button
          block
          type={'primary'}
          htmlType={'submit'}
          loading={loading}
        >
          注册
        </Button>
      </Form>
    </Card>
  )
}

/**
 * 发送验证码按钮
 */
const SendBtnAddon = memo(function SendBtnAddon(props: { onClick: () => Promise<boolean | undefined> }) {
  const { count, start, timingStatus } = useCountdown(60)

  return (
    <Button
      onClick={async () => {
        !timingStatus && (await props.onClick?.()) && start()
      }}
      type={'link'}
      style={{ padding: 0, lineHeight: '22px', height: 'auto' }}
    >
      {timingStatus ? count : '发送验证码'}
    </Button>
  )
})
