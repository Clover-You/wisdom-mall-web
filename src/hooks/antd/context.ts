/**
 * <p>
 * antd 组件相关的 context
 * </p>
 * @author Clover
 * @date 2023-07-24 09:41
 */

import React from 'react'
import { NotificationInstance } from 'antd/es/notification/interface'
import { MessageInstance } from 'antd/es/message/interface'
import { Modal } from 'antd'

type DefaultAntdContext = {
  notificationApi?: NotificationInstance
  messageApi?: MessageInstance
  modalApi?: ReturnType<typeof Modal.useModal>[0]
}

export const DefaultAntdContext: DefaultAntdContext = {
  notificationApi: undefined,
  messageApi: undefined,
  modalApi: undefined,
}

const context = React.createContext(DefaultAntdContext)

export const AntdContextProvider = context.Provider
export const AntdContext = context
