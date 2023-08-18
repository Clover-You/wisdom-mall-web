describe('login page test', () => {
  it('login page open normally', () => {
    cy.visit('/login')
    cy.contains('.ant-card-head-title', '登录')
    console.log('sss')
  })

  it('no input do login', () => {
    cy.visit('/login')
    cy.contains('.ant-card-head-title', '登录')
    cy.get('form').find('button[type="submit"]').click()
    cy.contains('.ant-message', '请输入登录手机号')

    cy.get('#phone').type('18933333333')
    cy.get('form').find('button[type="submit"]').click()
    cy.contains('.ant-message', '请输入6位验证码')
  })

  it('auto backfill phone number by params', () => {
    const phone = '18933333333'
    cy.visit('/login?phone=' + phone)
    cy.get('#phone').should('value', phone)
  })
})
