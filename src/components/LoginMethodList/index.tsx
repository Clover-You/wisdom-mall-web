/**
 * <p>
 * 登录方式
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-21 21:13
 */

import { Button, Col, Popover, Row, theme } from 'antd'
import { useRouter } from 'next/navigation'

import { AlibabaSymbolIcon } from '#/components/icon/symbol/AlibabaSymbolIcon'
import { useModal } from '#/hooks/antd/useModal'

export const LoginMethodTab = () => {
  const {
    token: { sizeXL: fontSize },
  } = theme.useToken()
  const router = useRouter()
  const modalApi = useModal()

  const byGitHubLogin = () => {
    router.push('https://github.com/login/oauth/authorize?client_id=b9eb5c34ba9653410383')
  }

  const notSupportedMethod = () => {
    modalApi?.warning?.({ content: '未来可期~' })
  }

  return (
    <>
      <Row
        justify={'center'}
        align={'middle'}
        gutter={48}
      >
        <Col>
          <Button
            type={'link'}
            onClick={notSupportedMethod}
            style={{ margin: 0, padding: 0 }}
          >
            <AlibabaSymbolIcon
              icon="weixin1"
              style={{ fontSize }}
            />
          </Button>
        </Col>
        <Col>
          <Button
            type={'link'}
            onClick={notSupportedMethod}
            style={{ margin: 0, padding: 0 }}
          >
            <AlibabaSymbolIcon
              icon="QQ"
              style={{ fontSize }}
            />
          </Button>
        </Col>
        <Col>
          <Button
            type={'link'}
            onClick={notSupportedMethod}
            style={{ margin: 0, padding: 0 }}
          >
            <AlibabaSymbolIcon
              icon="gitee"
              style={{ fontSize }}
            />
          </Button>
        </Col>
        <Col>
          <Button
            type={'link'}
            onClick={byGitHubLogin}
            style={{ margin: 0, padding: 0 }}
          >
            <AlibabaSymbolIcon
              icon="github"
              style={{ fontSize }}
            />
          </Button>
        </Col>
        <Col>
          <Popover
            content={
              <Row
                justify={'center'}
                align={'middle'}
                gutter={24}
              >
                <Col>
                  <Button
                    type={'link'}
                    onClick={notSupportedMethod}
                    style={{ margin: 0, padding: 0 }}
                  >
                    <AlibabaSymbolIcon
                      icon="weixin1"
                      style={{ fontSize }}
                    />
                  </Button>
                </Col>
                <Col>
                  <Button
                    type={'link'}
                    onClick={notSupportedMethod}
                    style={{ margin: 0, padding: 0 }}
                  >
                    <AlibabaSymbolIcon
                      icon="QQ"
                      style={{ fontSize }}
                    />
                  </Button>
                </Col>
                <Col>
                  <Button
                    type={'link'}
                    onClick={notSupportedMethod}
                    style={{ margin: 0, padding: 0 }}
                  >
                    <AlibabaSymbolIcon
                      icon="gitee"
                      style={{ fontSize }}
                    />
                  </Button>
                </Col>
              </Row>
            }
          >
            <Button
              type={'link'}
              style={{ margin: 0, padding: 0 }}
            >
              <AlibabaSymbolIcon
                icon="13more_01"
                style={{ fontSize }}
              />
            </Button>
          </Popover>
        </Col>
      </Row>
    </>
  )
}
