context('Buy item', () => {

    const selectors = {
        userName: '#user-name',
        password: '#password',
        loginButton: '#login-button',

    }

    beforeEach(() => {
        cy.visit('')
        .get(selectors.userName)
        .type('standard_user')
        .get(selectors.password)
        .type('secret_sauce')
        .get(selectors.loginButton)
        .click()
    })
})