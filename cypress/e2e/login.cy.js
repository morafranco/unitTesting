describe('template spec', () => {
  it('passes', () => {
    cy.visit('')
  })
})
describe('Landing', () => {
  beforeEach(() => {
    cy.visit('login')
  })
  it('.should() - assert that <title> is correct', () => {
    cy.title().should('include', 'Sistema de Compras')
  })
})
describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('probar login', () => {

    cy.dataCy('username-input').type('mmora')
    cy.dataCy('password-input').type('Mrfrmr_@alm01')
    cy.dataCy('login-button').click()

    cy.url().should('include', '/')
    cy.wait(2000)
  })
})