'use client'
import React from 'react'
import type { FC, PropsWithChildren } from 'react'

type ContextType = {
  globalLoadState: boolean
  expandAll: () => void
}

const context: ContextType = {
  globalLoadState: false,
  expandAll: () => {},
}
export const PageContext = React.createContext<ContextType>(context)

export const PageContextProvider: FC<PropsWithChildren> = (props) => {
  return (
    <PageContext.Provider value={context}>
      {props.children}
    </PageContext.Provider>
  )
}
