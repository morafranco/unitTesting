import grupoParametros from '../fixtures/grupoParametros.json'

describe('Grid Grupo de parametro', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('parameterGroups')
  })

  it('Crear, Editar, Verificar y Eliminar Grupo de parámetros', () => {

    //Grid

    cy.contains('ACCIONES').should('be.visible')
    cy.contains('DESCRIPCIÓN').should('be.visible')
    cy.contains('ESTATasdsa').should('be.visible')


    grupoParametros.forEach(grupoParametro => {
    // Crear

    cy.dataCy('add-button').click()

    cy.contains('Nuevo').should('be.visible')
    cy.contains('GUARDAR').should('be.visible')

    cy.dataCy('description-input').type(grupoParametro.description)

    cy.dataCy('save-button').click()

    cy.contains('Grupo de parámetros creado').should('be.visible')

    // Editar

    cy.contains('td', grupoParametro.description.toUpperCase()).parent('tr').within(() => {
      cy.dataCy('edit-button').click()
    });
  
    cy.dataCy('description-input').type(' EDIT')

    cy.dataCy('save-button').click()

    cy.contains('Grupo de parámetros actualizado').should('be.visible')

    // Verificar campos de edición Grupo de parámetros

    cy.contains('td', grupoParametro.description.toUpperCase()+ ' EDIT').parent('tr').within(() => {
      cy.dataCy('view-button').click()
    });
    cy.contains('Usuario Actualiza').should('be.visible')
    cy.contains('Última Actualización').should('be.visible')
    cy.contains('GUARDAR').should('not.exist');
    cy.dataCy('back-button').click()

    // Eliminar
    cy.contains('td', grupoParametro.description.toUpperCase()).parent('tr').within(() => {
      cy.dataCy('delete-button').click()
    });
    cy.contains('¿Desea eliminar este grupo parámetro?').should('be.visible')
    cy.contains('button', 'Aceptar').click();

    })
  })
  
})