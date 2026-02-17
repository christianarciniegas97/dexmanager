export const dashboardElements = {
    mainContentContainer: ".main-content"
}

export default class Dashboardpage {

    static validateDashboard(){
        cy.get(dashboardElements.mainContentContainer).should("be.visible")
        cy.url().should("include", "dashboard" )
    }
}