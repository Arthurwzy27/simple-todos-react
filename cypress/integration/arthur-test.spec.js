describe('Visit the Home Page', () => {

  it ('Connect as a user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#login-username').type('arthur')
    cy.get('#login-password').type('password')
    cy.get('[data-cy=login-submit]').click()
  })

  // it ('can add a new todo task and be mark as not completed', () => {
  //   const newTask = 'Finish the first Cypress test'
  //   cy.get('[data-cy=new-todo]').type(`${newTask}{enter}`)
  //   cy.get('[data-cy=task-item]')
  //     .first()
  //     .should('have.text', newTask)
  //   cy.get('[data-cy=checkbox]')
  //     .first()
  //     .should('not.be.checked')
  // })

  // // Check if a task is marked as Completed
  // it ('task is completed', () => {
  //   cy.get('[data-cy=checkbox]')
  //     .first()
  //     .should('not.be.checked')
  //     .click()
  //     .should('be.checked')
  // })

  // // It can add a second todo task inside the task list
  // it ('add a new todo task', () => {
  //   const newTask = 'Finish the first Cypress test'
  //   cy.get('[data-cy=new-todo]').type(`${newTask}{enter}`)
  //   cy.get('[data-cy=task-item]')
  //     .first()
  //     .should('have.text', newTask)
  //   cy.get('[data-cy=checkbox]')
  //     .first()
  //     .should('not.be.checked')
  // })

  // it ('hide all completed task', () => {

  // })

})


// cy.get('.action-checkboxes')
//   .should('not.be.visible') // Passes
//   .check({ force: true })
//   .should('be.checked') // Passes




  // beforeEach(() => {
    //   cy.login('arthur', 'password')
    // })

    // it ('check if a task is completed', () => {
      //   cy.contains('Fourth Task')
      //     .parent()
      //     .find('input[type=checkbox]')
      //     .check()

      //   cy.contains('Fourth Task')
      //     .parents('li')
      //     .should('have.class', 'completed')
      // })
