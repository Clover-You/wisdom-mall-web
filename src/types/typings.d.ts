/**
 * <p>
 *
 * </p>
 * @author Clover
 * @date 2023-06-30 18:01
 */

type ParamType<T> = T extends (arg: infer P) => any ? P : unknown
