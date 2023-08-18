/**
 * <p>
 * 字符工具类
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-07 10:53
 */

/**
 * 字符串是否不是一个空串
 * @param str 需要校验的字符串
 */
export const notBlank = (str?: string) => {
  if (str == void 0) return false
  return str.trim().length > 0
}

/**
 * 是否是一个空串
 * @param str 需要校验的字符串
 */
export const isBlank = (str?: string) => {
  return !notBlank(str)
}
