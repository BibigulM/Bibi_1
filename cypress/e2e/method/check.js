/ <reference types="cypress" />


describe('', () => {
  it('', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

      cy.get('[name="username"]').type('Admin')

      cy.get('[name="password"]').type('admin123')

      cy.get('[type="submit"]').click()

      cy.contains('Admin').click()

      // cy.get('.oxd-table-cell.oxd-padding-cell div div label input ').eq(0).check({ force: true })

      // cy.get('.oxd-table-cell.oxd-padding-cell div div label input ').eq(0).uncheck({ force: true })

// 1 st way
        //cy.contains('Admin').click()

        // 2nd way
        // cy.get('.oxd-main-menu li')
        //     .children('[href="/web/index.php/admin/viewAdminModule"]')
        //     .click()

        // 3rd way

        // cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()




  });
});