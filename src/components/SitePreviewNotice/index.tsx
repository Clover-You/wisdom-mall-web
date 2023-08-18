/**
 * <p>
 * 网站建设中提示内容
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-08-11 15:38
 */
import { Typography } from 'antd'

export const SitePreviewNotice = () => {
  return (
    <>
      <Typography>该项目处于紧急开发状态,作者会不定期更新开发进度!</Typography>

      <br />
      <Typography>
        技术栈：
        <ul>
          <li>
            前端:
            <Typography>Next.js 13.4+ 、React 18+ 、TypeScript 5+ 、Redux 8+、Axios、AntDesign 5+</Typography>
          </li>

          <li>
            后端:
            <Typography>
              JDK@latest、 SpringBoot 3+、SpringCloud、SpringCloudAlibaba、Nacos、Postgres、
              MyBatisPlus、SpringDoc、SpringSecurity
            </Typography>
          </li>
        </ul>
      </Typography>

      <Typography>
        <Typography>PR 及贡献：</Typography>
        <Typography>
          项目目前还不接受 PR 哈!因为项目处于孵化期,由于本人水平有限,首先, 我并不了解如何处理 PR! 其次, 接受 PR
          会导致本人本就不聪明的脑袋瓜变得混乱!
        </Typography>
      </Typography>

      <br />
      <Typography>
        咳咳,如果要提 PR 也不是不行🥹!只需要遵守 <code>.eslintrc.json</code> 和 <code>.prettierrc.json</code>
        文件中的代码规范就好了!
      </Typography>

      <br />
      <Typography>
        项目仓库 👉 &nbsp;
        <Typography.Link
          target={'_blank'}
          href="https://github.com/Clover-You/wisdom"
        >
          https://github.com/Clover-You/wisdom
        </Typography.Link>
      </Typography>
    </>
  )
}
