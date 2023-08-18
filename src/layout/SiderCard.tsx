/**
 * <p>
 * a1
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-14 15:58
 */
'use client'

import MainContent from '#/components/MainContent'
import SiderMenu from './components/SiderMenu'

const SiderCard = () => {
  return (
    <MainContent
      style={{
        overflow: 'auto',
        width: 260,
        flexShrink: 0,
      }}
      size={'small'}
    >
      <SiderMenu />
    </MainContent>
  )
}

export default SiderCard
