/**
 * <p>
 * 收集所有 css
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-13 09:46
 */
'use client'
import type { FC, PropsWithChildren } from 'react'

import { App, ConfigProvider, message, Modal, notification, theme } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { AntdContextProvider } from '#/hooks/antd/context'

import zhCN from 'antd/locale/zh_CN'
import enUs from 'antd/locale/en_US'
import { useLocale } from 'next-intl'

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notificationApi, notificationContextHolder] = notification.useNotification()
  const [messageApi, messageContextHolder] = message.useMessage()
  const [modalApi, modalContextHolder] = Modal.useModal()
  const locale = useLocale()

  const getLocale = () => {
    return locale === 'zh' ? zhCN : enUs
  }

  return (
    <>
      <StyleProvider>
        <ConfigProvider
          locale={getLocale()}
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          {messageContextHolder}
          {notificationContextHolder}
          {modalContextHolder}
          <AntdContextProvider value={{ notificationApi, messageApi, modalApi }}>
            <App>{children}</App>
          </AntdContextProvider>
        </ConfigProvider>
      </StyleProvider>
    </>
  )
}

export default AntdProvider
