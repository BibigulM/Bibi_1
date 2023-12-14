// import { element } from "../pages/element";

// const login_Element = new element
// describe('practice ', () => {
//     beforeEach(() => {
//         cy.visit('/')
//    });

//     it('should save the user', () => {
//         login_Element.username('Admin')
//         login_Element.password('admin123')
//         login_Element.loginButton()

         
//cy.contains('Admin').click()

// cy.get("[class='oxd-icon bi-plus oxd-button-icon']").click()
// cy.get('.oxd-select-text-input')
//             .eq(0)
//             .click()
//             .get('.oxd-select-option')
//             .contains('ESS')
//             .click()
            
//             cy.get('.oxd-select-text-input')
//             .eq(1)
//             .click()
//             .get('.oxd-select-option')
//             .contains('Enabled')
//             .click()

//    cy.get('[class="oxd-input oxd-input--active"]')
//    .eq(1)
//    .type('Admin7')

//    cy.get('[placeholder="Type for hints..."]')
//    .type('Rick Junior')
//    .get('[role="listbox"]')
//    .contains('Rick Owen Junior')
//    .click()

//    cy.get('[type="password"]')
//    .eq(0)
//     .type('admin123')

//     cy.get('[type="password"]')
//     .eq(1)
//     .type('admin123')

//     cy.get('[type="submit"]')
//     .click()

// cy.get('[class="oxd-text oxd-text--h6 orangehrm-main-title"]')
// .invoke('text')
// .should('includes','Add User')





// });

// it('should select dropdown', () => {
//     // cy.visit('/')
    
//     cy.get('[name="username"]').type('Admin')
    
//     cy.get('[name="password"]').type('admin123')
    
//     cy.get('[type="submit"]').click()
    
//     cy.contains('Admin').click()
    
//      cy.get('[class="oxd-input oxd-input--active"]')
//                 .eq(1)
//                 .type('admin7')
    
//      cy.get('[class="oxd-select-text-input"]')
//                 .eq(0)
//                 .click()
//                 .get('.oxd-select-option')
//                 .contains('ESS')
//                 .click()
    
//     cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]')
//     .type('Rick Owen Junior')
//     .click()
//     .get('[role="listbox"]')
//    .contains('Rick Owen Junior')
//    .click()
    
//     cy.get('[class="oxd-select-text-input"]')
//       .eq(1)
//      .click({force: true})
//       .get('.oxd-select-option')
//       .contains('Enabled')
//       .click()
    
//     cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
//     .click({force: true})
    
//     cy.get('[class="orangehrm-background-container"]')
//     .invoke('text')
//     .should('includes','System Users')
});
});



//                     admin   search

// describe('practice dropdown', () => {
//     it('should select dropdown', () => {

// cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

// cy.get('[name="username"]').type('Admin')

// cy.get('[name="password"]').type('admin123')

// cy.get('[type="submit"]').click()

// cy.contains('PIM').click()

//  cy.get('[class="oxd-input oxd-input--active"]')
//             .eq(1)
//             .type('admin5')

//  cy.get('[class="oxd-select-text-input"]')
//             .eq(0)
//             .click()
//             .get('.oxd-select-option')
//             .contains('ESS')
//             .click()

// cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]')
// .type('Paul Collings')
// .click()

// cy.get('[class="oxd-select-text-input"]')
//   .eq(1)
//  .click({force: true})
//   .get('.oxd-select-option')
//   .contains('Enabled')
//   .click()

// cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
// .click({force: true})

// cy.get('[class="orangehrm-background-container"]')
// .invoke('text')
// .should('includes','System Users')





// PIM

// import { admin } from '../pages/admin'
// describe('practice dropdown', () => {

//     beforeEach(() => {
//         cy.visit('/')
//     });

//     it('should select dropdown', () => {

// cy.get('[name="username"]').type('Admin')

// cy.get('[name="password"]').type('admin123')

// cy.get('[type="submit"]').click()

// cy.contains('PIM').click()
// cy.get('[class="oxd-topbar-body-nav"]')
// .contains('Add Employee')
// .click()

// cy.get ('[class="oxd-input oxd-input--active orangehrm-firstname"]')
// .type('Maria')

// cy.get('[class="oxd-input oxd-input--active orangehrm-lastname"]')
// .type('Clifton')

// cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"')
// .click()

// cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
// .click()

// cy.get('[class="oxd-topbar-body-nav"]')
// .contains('Employee List')
// .click()

//  cy.get('[class="oxd-input oxd-input--active"]')
//  .eq(1)
// .type('0261')

// cy.get ('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"')
// .click()


//  cy.get('[class="orangehrm-horizontal-padding orangehrm-vertical-padding"]')
//  .invoke('text')
//  .should('includes','Record Found')

// });
// });


     

