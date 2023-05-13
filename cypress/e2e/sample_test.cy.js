context('Buy item', () => {
  const selectors = {
    userName: '#user-name',
    password: '#password',
    loginButton: '#login-button',
    addToCart: (product) => `add-to-cart-sauce-labs-${product}`,
    goToCart: '.shopping_cart_link',
    checkoutButton: 'checkout',
    firstName: 'firstName',
    lastName: 'lastName',
    postalCode: 'postalCode',
    continueButton: 'continue',
    finishButton: 'finish',
  };

  beforeEach(() => {
    cy.visit('')
      .get(selectors.userName)
      .type('standard_user')
      .get(selectors.password)
      .type('secret_sauce')
      .get(selectors.loginButton)
      .click();
  });

  it('Buys an item from the site', () => {
    cy.getBySel(selectors.addToCart('backpack')).click();
    cy.get(selectors.goToCart).click();
    cy.getBySel(selectors.checkoutButton).click();

    cy.getBySel(selectors.firstName).type('Standard');
    cy.getBySel(selectors.lastName).type('User');
    cy.getBySel(selectors.postalCode).type(12345);
    cy.getBySel(selectors.continueButton).click();
    cy.getBySel(selectors.finishButton).click();
    cy.contains('Thank you for your order!').should('be.visible');
    /* 
        Another assertion will be checking the payload of the order in
        the service that the order takes place it could be a mirror of
        the real application or mock service
    */
  });
});
