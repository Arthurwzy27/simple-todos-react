describe('Visit the Home Page', () => {
  // Connect as a user
  it ('Connect as a user', () => {
    cy.visit('http://localhost:3000')
    cy.get('#login-username').type('arthur')
    cy.get('#login-password').type('password')
    cy.get('[data-cy=login-submit]').click()
  })



  it ('can add a new todo task and be mark as not completed', () => {
    const newTask = '1. Creating first test'

    cy.get('[data-cy=new-todo]').type(`${newTask}{enter}`)
    cy.get('[data-cy=task-item]')
      .first()
      .should('have.text', newTask)
    cy.get('[data-cy=checkbox]')
      .first()
      .should('not.be.checked')
  })

  // It can add a second todo task inside the task list
  it ('add a new todo task', () => {
      const taskTwo = '2. Send the ToDo app link'
      cy.get('[data-cy=new-todo]').type(`${taskTwo}{enter}`)
      cy.get('[data-cy=task-item]')
        .first()
        .should('have.text', taskTwo)
      cy.get('[data-cy=checkbox]')
        .first()
        .should('not.be.checked')
    })


    // Check if a task is marked as Completed
    it ('task is completed', () => {
        cy.get('[data-cy=checkbox]')
          .first()
          .should('not.be.checked')
          .click()
          .should('be.checked')
      })


        // // Hide all completed task
        // it ('hide all completed task', () => {
        //     // cy.get('[data-cy=filter-button]').click()
        //     cy.get('[data-cy=task-item]')
        //       .last()
        //       .should('have.text', 'Finish the first Cypress test')
        //     cy.contains('Finish the first Cypress test').should('not.be.visible')
        //   })

  // Reset database prior to every test
  it ('Reset db', () => {
    cy.get('[data-cy=checkbox]').click({ multiple: true })
    cy.get('[data-cy=delete-task-item]').click({ multiple: true })
  })

})
