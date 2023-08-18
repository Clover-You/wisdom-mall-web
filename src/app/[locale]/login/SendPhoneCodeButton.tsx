/**
 * <p>
 * 发送登录验证码按钮
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-12 16:40
 */
import { Button, message } from 'antd'
import { useState } from 'react'

import type { ButtonProps } from 'antd'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { sendLoginPhoneVerifyCode } from '#/api/login'
import { useCountdown } from '#/hooks/timing/useCountdown'

export type SendPhoneCodeButtonProps = Omit<ButtonProps, 'onClick' | 'disabled'> & {
  before: () => Promise<boolean>
  getPhone: () => Promise<string>
}

export const SendPhoneCodeButton: FC<SendPhoneCodeButtonProps> = (props) => {
  const [loadState, setLoad] = useState(false)
  const { start, count, timingStatus } = useCountdown(60)
  const i18nFormat = useTranslations('pages.login')

  /**
   * 发送登录验证码
   */
  const sendLoginVerifyCode = async () => {
    if (!timingStatus && !(await props.before())) return

    try {
      setLoad(true)
      // 发送验证码
      const phone = await props.getPhone()
      const resp = await sendLoginPhoneVerifyCode(phone)

      // 处理响应状态
      const { code, message: codeMessage } = resp.data
      if (code != 200) return message.error(codeMessage)

      // 登录验证码发送成功，开启倒计时
      start()
    } catch (e) {
      console.error(e)
      message.error(`验证码发送失败，系统异常\,${e}`)
    } finally {
      setLoad(false)
    }
  }
  return (
    <>
      <Button
        onClick={sendLoginVerifyCode}
        loading={loadState}
        type={'link'}
        style={{ padding: 0, lineHeight: '22px', height: 'auto', ...props.style }}
      >
        {timingStatus ? count : i18nFormat('card.sendVerifyCode')}
      </Button>
    </>
  )
}
