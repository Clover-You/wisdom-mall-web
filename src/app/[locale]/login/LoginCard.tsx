/**
 * <p>
 * 登录卡片
 * </p>
 * @author Clover
 * @date 2023-06-30 17:52
 */
'use client'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import {
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  Form,
  Divider,
  FormProps,
  Input,
  message,
  Row,
  Space,
  theme,
} from 'antd'
import Link from 'next/link'
import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AxiosError, AxiosResponse } from 'axios'

import store, { useDispatch } from '#/redux/store'

import { GetUserInfo, LoginByMobile } from '#/redux/user'
import { SendPhoneCodeButton } from './SendPhoneCodeButton'
import { useNotification } from '#/hooks/antd/useNotification'
import { LoginMethodTab } from '#/components/LoginMethodList'

const LoginCard: FC = () => {
  const { token } = theme.useToken()
  const i18nFormat = useTranslations('pages.login')
  const router = useRouter()

  const [form] = Form.useForm<API.UserMobilePhoneLoginRequest>()
  const [messageApi, messageContextHolder] = message.useMessage()
  const [loadState, setLoad] = useState(false)
  const dispatch = useDispatch()
  const notificationApi = useNotification()
  const searchParams = useSearchParams()

  const onLoginFinish = async (params: API.UserMobilePhoneLoginRequest) => {
    try {
      setLoad(true)
      const response = await dispatch(LoginByMobile(params))

      if (response.payload instanceof AxiosError) throw response.payload

      const {
        data: { code, message },
      } = response.payload as AxiosResponse<API.R>

      if (code != 200) return messageApi.error(message)

      // 记录用户登录状态与用户基础信息
      const userInfoResponse = await dispatch(GetUserInfo())
      if (userInfoResponse.payload instanceof AxiosError) throw userInfoResponse.payload

      const {
        data: { code: userInfoResponseCode, message: userInfoResponseMessage },
      } = userInfoResponse.payload as AxiosResponse<API.R>

      if (userInfoResponseCode != 200) return messageApi.error(userInfoResponseMessage)

      router.replace('/home')

      const user = store.getState().user
      // 一秒后显示欢迎回来
      setTimeout(() => {
        notificationApi?.open({
          message: '🎉 欢迎',
          description: `${user.user?.userName}!下午好,欢迎回来👏`,
        })
      }, 3000)
    } catch (err) {
      // 检查是否 AxiosError 异常并且状态码是 403
      if (err instanceof AxiosError) {
        if (err.response?.status === 403) {
          return messageApi.error('登录失败')
        }
      }
      console.error(err)
      messageApi.error(`系统异常\n${err}`)
    } finally {
      setLoad(false)
    }
  }

  /**
   * 执行数据校验
   */
  const validateFields: FormProps['onFinishFailed'] = (err) => {
    if (err?.errorFields == void 0 || (err?.errorFields?.length ?? 0) === 0) return
    const {
      errorFields: [
        {
          errors: [errorMessage],
        },
      ],
    } = err
    messageApi.error(errorMessage)
  }

  /**
   * 校验手机号
   */
  const verifyPhoneCode = async () => {
    try {
      await form.validateFields(['phone'])
      return true
    } catch (e: any) {
      const errorCount = e.errorFields?.length ?? 0
      if (errorCount === 0) return false

      const errorMessage = e.errorFields[0].errors?.[0] ?? ''
      messageApi.error(errorMessage)
    }
    return false
  }

  useEffect(() => {
    // 如果携带了 phone 参数访问，那么回填到表单
    if (searchParams.get('phone') != void 0) {
      form.setFieldValue('phone', searchParams.get('phone'))
    }
  }, [searchParams, form])

  return (
    <>
      {messageContextHolder}

      <ConfigProvider componentSize={'large'}>
        <Card
          title={i18nFormat('card.title')}
          style={{
            width: 500,
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            boxShadow: token.boxShadowSecondary,
          }}
        >
          <Form
            scrollToFirstError={true}
            labelCol={{ span: 2 }}
            autoComplete="off"
            form={form}
            onFinish={onLoginFinish}
            onFinishFailed={validateFields}
          >
            <Form.Item>
              <Space>
                <span>{i18nFormat('card.noAccount')}</span>
                <Link href={'/register'}>{i18nFormat('card.toRegister')}</Link>
              </Space>
            </Form.Item>

            <Form.Item
              name={'phone'}
              help={''}
              rules={[{ required: true, message: i18nFormat('card.input.phone.form.ruleMessage') }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: token.colorTextPlaceholder }} />}
                placeholder={i18nFormat('card.input.phone.placeholder')}
              />
            </Form.Item>

            <Form.Item
              name={'verifyCode'}
              help={''}
              rules={[{ required: true, message: i18nFormat('card.input.verifyCode.form.ruleMessage') }]}
            >
              <Input
                prefix={<LockOutlined style={{ color: token.colorTextPlaceholder }} />}
                autoComplete={'none'}
                placeholder={i18nFormat('card.input.verifyCode.placeholder')}
                suffix={
                  <SendPhoneCodeButton
                    before={verifyPhoneCode}
                    getPhone={async () => form.getFieldValue('phone')}
                  />
                }
              />
            </Form.Item>

            <Form.Item>
              <Row>
                <Col flex={1}>
                  <Checkbox>{i18nFormat('card.rememberMe')}</Checkbox>
                </Col>

                <Col>
                  <Link href={'/forget'}>{i18nFormat('card.forgotPass')}</Link>
                </Col>
              </Row>
            </Form.Item>

            <Button
              block
              htmlType={'submit'}
              type={'primary'}
              loading={loadState}
            >
              {i18nFormat('card.submitBtn')}
            </Button>
          </Form>

          <Divider plain>{i18nFormat('card.loginMethodTip')}</Divider>
          <LoginMethodTab />
        </Card>
      </ConfigProvider>
    </>
  )
}

export default LoginCard
