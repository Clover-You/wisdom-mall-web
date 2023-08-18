/**
 * <p>
 * Drawer 组件封装
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-20 13:45
 */
import { Drawer, DrawerProps, theme } from 'antd'

import { useCallback, FC, PropsWithChildren, memo, useEffect, useState, useRef, useId } from 'react'

const DrawerPro: FC<Omit<PropsWithChildren<DrawerProps>, 'width'> & { width?: number }> = (props) => {
  const {
    token: { screenXSMax, size },
  } = theme.useToken()
  const id = useId()
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right')
  const customPlacement = useRef(false)

  const resize = useCallback(() => {
    const minWidth = window.innerWidth - size

    if (minWidth >= screenXSMax) {
      if (placement !== 'right') {
        setPlacement('right')
      }

      if (props.width != void 0) {
        const dom = document.querySelector<HTMLDivElement>(`[data-id="${id}"]`)
        if (dom != void 0) {
          if (props.width >= minWidth) {
            dom.style.width = minWidth + 'px'
          } else {
            dom.style.width = props.width + 'px' ?? '378px'
          }
        }
      }
      return
    }

    if (placement !== 'bottom') setPlacement('bottom')
    const dom = document.querySelector<HTMLDivElement>(`[data-id="${id}"]`)
    if (dom == void 0) return
    dom.style.width = innerWidth + 'px'
  }, [id, placement, props.width, screenXSMax, size])

  useEffect(() => {
    setTimeout(resize)

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [resize, placement])

  useEffect(() => {
    if (props.placement == void 0) return
    setPlacement(props.placement)
    customPlacement.current = true
  }, [props.placement, props])

  return (
    <Drawer
      {...props}
      width={props.width}
      placement={placement}
      data-id={id}
    />
  )
}

export default memo(DrawerPro)
