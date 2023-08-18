/**
 * <p>
 * 单位上下文
 * </p>
 * @author Clover
 * @date 2023-07-25 09:48
 */
import React, { FC, PropsWithChildren } from 'react'

const ContextInit = {}
export const UnitContext = React.createContext(ContextInit)

export const UnitContextProvider: FC<PropsWithChildren> = (props) => (
  <UnitContext.Provider value={ContextInit}>{props.children}</UnitContext.Provider>
)
