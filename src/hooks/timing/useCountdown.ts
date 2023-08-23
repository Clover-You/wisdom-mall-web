/**
 * <p>
 * 倒计时
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-11 11:55
 */
import { useRef, useState } from 'react'

export const useCountdown = (progress: number, ms: number = 1000) => {
  const timer = useRef<NodeJS.Timeout>()
  const [count, setCounter] = useState(progress)
  const [timingStatus, setTimingSatet] = useState(false)

  const start = () => {
    if (timingStatus) return
    setTimingSatet(true)

    timer.current = setInterval(() => {
      setCounter((count) => {
        if (count <= 0) {
          clearInterval(timer.current)
          timer.current = undefined
          setTimingSatet(false)
          return progress
        }

        return --count
      })
    }, ms)
  }

  return { count, start, timingStatus }
}
