/**
 * <p>
 * a1
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-14 15:32
 */
'use client'
import { Layout, Watermark, theme } from 'antd'

import type { FC } from 'react'
import React, { useEffect } from 'react'

import LayoutSpace from '#/components/LayoutSpace'
import { SitePreviewNotice } from '#/components/SitePreviewNotice'
import { useModal } from '#/hooks/antd/useModal'
import { REFRESH_LOAD_STATE } from '#/redux/app'
import { useAppSetup, useDispatch, useUser } from '#/redux/store'

type RootLayoutProps = {
  header?: React.ReactNode
  sider?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  const user = useUser()
  const appSetup = useAppSetup()
  const modalApi = useModal()
  const dispatch = useDispatch()

  const {
    token: { padding, borderRadius },
  } = theme.useToken()

  useEffect(() => {
    if (appSetup.firstLoad && process.env.NODE_ENV === 'production') {
      modalApi?.info?.({
        title: '滴滴',
        content: <SitePreviewNotice />,
        onOk: () => {
          dispatch(REFRESH_LOAD_STATE())
        },
      })
    } else {
      dispatch(REFRESH_LOAD_STATE())
    }
  }, [appSetup.firstLoad, modalApi, dispatch])

  return (
    <Watermark content={[user.user?.userName ?? '', user.user?.phone ?? '']}>
      <Layout style={{ minHeight: '100vh', maxHeight: '100vh', padding: padding }}>
        {props.header}
        {props.header == void 0 ? undefined : <LayoutSpace direction={'vertical'} />}

        <Layout style={{ flexGrow: 1, flexDirection: 'initial' }}>
          {props.sider}
          {props.sider == void 0 ? undefined : <LayoutSpace direction={'horizontal'} />}

          <Layout style={{ overflow: 'hidden' }}>
            <Layout.Content
              style={{
                minHeight: 280,
                overflowY: 'auto',
                borderRadius: borderRadius,
              }}
            >
              {props.content}

              <Layout.Footer>{props.footer}</Layout.Footer>
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default RootLayout
