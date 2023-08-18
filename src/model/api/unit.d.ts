/**
 * <p>
 * 商品单位接口类型管理
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-07-26 14:47
 */
declare namespace API {
  /**
   * AddUnitRequest，添加单位
   */
  type AddUnitRequest = {
    /**
     * 启用状态 0=禁用；1=启用
     */
    enable?: number
    /**
     * 是否允许小数 0=不支持；1=支持
     */
    isDecimal?: number
    /**
     * 单位名称
     */
    unitName: string
    /**
     * 备注
     */
    unitRemark?: string
  }

  /**
   * UnitPageRequest，单位分页参数
   */
  type UnitPageRequest = {
    /**
     * 当前页
     */
    current?: number
    /**
     * 每页大小
     */
    size?: number
    /**
     * 单位名称
     */
    unitName?: string
  }

  /**
   * UnitPageResponse，分页查询结果
   */
  type UnitPageResponse = {
    /**
     * 创建时间
     */
    createAt?: string
    /**
     * 启用状态 0=禁用；1=启用
     */
    enable?: number
    /**
     * 是否允许小数 0=不支持；1=支持
     */
    isDecimal?: number
    /**
     * 排序
     */
    sort?: number
    /**
     * 单位id
     */
    unitId?: string
    /**
     * 单位名称
     */
    unitName?: string
    /**
     * 备注
     */
    unitRemark?: string
  }

  /**
   * SaveUnitUpdateRequest，单位保存修改
   */
  type SaveUnitUpdateRequest = {
    /**
     * 启用状态 0=禁用；1=启用
     */
    enable?: number
    /**
     * 是否允许小数 0=不支持；1=支持
     */
    isDecimal?: number
    /**
     * 单位排序
     */
    sort?: number
    /**
     * 单位ID
     */
    unitId: string
    /**
     * 单位名称
     */
    unitName?: string
    /**
     * 备注
     */
    unitRemark?: string
  }
}
