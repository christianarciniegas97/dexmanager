export const loginElements = {  
    /*The username field is implemented as a Polymer Web Component (paper-input),
    which encapsulates the native <input> inside Shadow DOM.
    Cypress cannot directly interact with the internal input without accessing the shadow root.
    Therefore, the host element (#username) is used and then traversed via .shadow().find("input")
    to ensure stable and reliable interaction. */
    usernameInput: `paper-input#username`,
    passwordInput: "input[type='password']",
    loginButton: ".accept-btn",
    spinner: ".spinner",
    errorPopUpContainer: "#dialogMsg",
    userErrorLegendText: "paper-input-error#paper-input-add-on-1",
    passwordErrorLegendText: "paper-input-error#paper-input-add-on-2"


}

export default class Loginpage {
    
    static goToLogin(){
        cy.visit("/DexFrontEnd/#!/login")
    };

    static login(user, password){
        this.typeOnShadowInput(loginElements.usernameInput, user )
        cy.get(loginElements.passwordInput).type(password)
        cy.get(loginElements.loginButton).click()
    };

    static typeOnShadowInput (element, value){
        /* written on Shadow DOM */
        cy.get(element)
            .shadow()
            .find('input')
            .type(value)
    };

    static waitSpinnerFinished(){
        cy.get(loginElements.spinner, { timeout: 5000 }).should("not.be.visible")
    };

    static validatePopUpOfErrorLogin(){
        cy.get(loginElements.errorPopUpContainer)
        .should("be.visible")
        .and("contain.text", "Error" )
        .and("contain.text", "User or password do not match.")
    };

    static validateLoginEmpty(){
        cy.get(loginElements.userErrorLegendText).should("contain.text", "User required")
        cy.get(loginElements.passwordErrorLegendText).should("contain.text", "Minimum 10 characters, at least 1 number, 1 uppercase letter and 2 special character(s)")
    };

}