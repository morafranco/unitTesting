// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('dataCy', (value) => {
    return cy.get(`[data-cy=${value}]`)
  })
  Cypress.on('window:before:load', (win) => {
    cy.spy(win.console, 'log')
    cy.spy(win.console, 'error')
  })
  
  Cypress.Commands.add('login', () => { 
    let bodyData = `username=${encodeURIComponent('mmora')}&password=${encodeURIComponent('Mrfrmr_')}&ldad=${encodeURIComponent('https://portalesdemo.almer.com.mx/ADConnect/api/authenticate')}&robot=true`;

    cy.request({
     method: 'POST',
     url: 'https://portalestest.almer.com.mx/ComprasV24ApiAuth/api/auth/login',
     body: bodyData,
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     }
   }).then( ({ body }) => {
    window.localStorage.setItem('JWT', body.result.token)
    window.localStorage.setItem('Program Selected', 'Maiz')
    window.localStorage.setItem('Unit Selected', 'Nogales')
 })
  
})  