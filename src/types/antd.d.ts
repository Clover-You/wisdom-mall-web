/**
 * <p>
 * antd 类型
 * </p>
 * @author Clover
 * @date 2023-06-30 18:01
 */

declare namespace AntdType {
  type FormProps<T = any> = import('antd').FormProps<T>

  type ValidateErrorEntity<T = any> = ParamType<Required<FormProps<T>>['onFinishFailed']>
}
