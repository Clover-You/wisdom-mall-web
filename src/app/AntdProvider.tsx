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

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notificationApi, notificationContextHolder] = notification.useNotification()
  const [messageApi, messageContextHolder] = message.useMessage()
  const [modalApi, modalContextHolder] = Modal.useModal()

  return (
    <>
      <StyleProvider>
        <ConfigProvider
          locale={zhCN}
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
