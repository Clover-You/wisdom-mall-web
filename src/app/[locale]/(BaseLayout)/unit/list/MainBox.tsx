/**
 * <p>
 *
 * </p>
 * @author Clover
 * @date 2023-07-25 09:52
 */
'use client'
import { useCallback, useState } from 'react'

import type { TablePaginationConfig } from 'antd'
import type { FC, PropsWithChildren } from 'react'
import { useTranslations } from 'next-intl'

import { fetchUnitListAsPage } from '#/api/unit'
import { ActionBar } from '#/app/[locale]/(BaseLayout)/unit/list/components/ActionBar'
import LayoutSpace from '#/components/LayoutSpace'
import MainContent from '#/components/MainContent'
import { useMounted } from '#/hooks'
import { useMessage } from '#/hooks/antd/useMessage'
import { useModal } from '#/hooks/antd/useModal'
import { wait } from '#/utils'
import { useRequetErrorTools } from '#/utils/request/hooks/useRequetErrorTools'
import { EditUnitDrawer } from './components/EditUnitDrawer'
import { UnitList } from './components/UnitGrid'

export const MainBox: FC<PropsWithChildren> = () => {
  const messageApi = useMessage()
  const modalApi = useModal()
  const t = useTranslations('pages.unit-list')

  const [queryWrapper, setQueryWrapper] = useState<API.UnitPageRequest>({
    unitName: '',
  })
  const [loading, setLoadState] = useState(false)
  const [editDrawerOpen, setEditOpen] = useState(false)
  const [editCallbackData, setCallbackData] = useState<API.UnitPageResponse | undefined>(undefined)
  const [dataList, setDataList] = useState<API.UnitPageResponse[]>()
  const [pageConfig, setPageConfig] = useState<TablePaginationConfig>({
    size: 'small',
    hideOnSinglePage: true,
    showQuickJumper: true,
    onChange(page, pageSize) {
      fetchList({
        ...queryWrapper,
        current: page,
        size: pageSize,
      })
    },
  })

  const requestErrorTools = useRequetErrorTools()
  /**
   * 数据查询
   * @param params 查询参数
   */
  const fetchList = useCallback(
    async (params: API.UnitPageRequest) => {
      if (loading) return

      try {
        setLoadState(true)
        await wait(300)
        const {
          data: { code, message, data },
        } = await fetchUnitListAsPage(params)

        if (code != 200) return messageApi?.error?.(message)

        setDataList(data.list)

        setPageConfig({
          ...pageConfig,
          pageSize: data.pageSize,
          total: data.total,
          current: data.currentPage,
        })
      } catch (err) {
        if (requestErrorTools.isBusinessException(err)) return
        console.error(err)
        messageApi?.error?.('系统异常')
      } finally {
        setLoadState(false)
      }
    },
    [pageConfig, loading, messageApi, requestErrorTools],
  )

  /**
   * 编辑当前行
   * @param record 但前行数据
   */
  const onRowEditClick = (record: API.UnitPageResponse) => {
    setCallbackData(record)
    setEditOpen(true)
  }

  /**
   * 移除当前行数据
   * @param record 当前行数据
   */
  const onRemoveRow = (record: API.UnitPageResponse) => {
    modalApi?.confirm?.({
      content: t('removeUnitAlert'),
      onOk: async () => {
        messageApi?.success?.(t('removeSuccess'))
      },
    })
  }

  const getFetchParamRecords = (): API.UnitPageRequest => {
    return {
      ...queryWrapper,
      current: pageConfig.current,
      size: pageConfig.pageSize,
    }
  }

  useMounted(() => {
    fetchList(queryWrapper)
  })

  return (
    <>
      <EditUnitDrawer
        onFinish={() => {
          fetchList(getFetchParamRecords())
        }}
        open={editDrawerOpen}
        callbackData={editCallbackData}
        afterOpenChange={(open) => setEditOpen(open)}
      />

      <MainContent>
        <ActionBar
          onSearch={() => fetchList(queryWrapper)}
          finish={() => fetchList(queryWrapper)}
          unitNameChange={(val) => setQueryWrapper({ ...queryWrapper, unitName: val })}
        />
      </MainContent>

      <LayoutSpace direction={'vertical'} />

      <MainContent>
        <UnitList
          onEdit={onRowEditClick}
          remove={onRemoveRow}
          data={dataList}
          loading={loading}
          pageConfig={pageConfig}
        />
      </MainContent>
    </>
  )
}
