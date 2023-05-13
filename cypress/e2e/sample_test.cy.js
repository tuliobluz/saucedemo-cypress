context('Buy item', () => {
  const testData = process.env.TEST_DATA_ENV || 'testDataReview.json';
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
    cy.visit('');
    cy.fixture(testData).then((user) => {
      cy.get(selectors.userName)
        .type(user.userName)
        .get(selectors.password)
        .type(user.password)
        .get(selectors.loginButton)
        .click();
    });
  });

  it('Buys an item from the site', () => {
    cy.getBySel(selectors.addToCart('backpack'))
      .click()
      .get(selectors.goToCart)
      .click()
      .getBySel(selectors.checkoutButton)
      .click()
      .fixture(testData)
      .then((user) => {
        cy.getBySel(selectors.firstName)
          .type(user.firstName)
          .getBySel(selectors.lastName)
          .type(user.lastName)
          .getBySel(selectors.postalCode)
          .type(user.postalCode)
          .getBySel(selectors.continueButton)
          .click()
          .getBySel(selectors.finishButton)
          .click();
      });
    cy.contains('Thank you for your order!').should('be.visible');
    /* 
        Another assertion will be checking the payload of the order in
        the service that the order takes place it could be a mirror of
        the real application or mock service
    */
  });
});
