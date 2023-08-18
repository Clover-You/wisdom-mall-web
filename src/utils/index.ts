/**
 * <p>
 * 工具描述
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-27 09:29
 */

/**
 * 防抖处理函数
 *
 * const debounce = Debounce(1000)
 * async () => await debounce()
 * @param time 间隔时间
 */
export const Debounce = (time: number) => {
  let timer: NodeJS.Timeout | null
  return () =>
    new Promise<void>((resolve) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        resolve()
        timer = null
      }, time)
    })
}

/**
 * 使一个异步函数进入阻塞状态
 * @param time 睡眠时间
 */
export const wait = (time: number = 1000) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
