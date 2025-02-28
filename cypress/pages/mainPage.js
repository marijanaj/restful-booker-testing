const userInfo = require("../properties/usersInformation");

const loginPage = {

  authToken(urlValue, infoMessage, usernameValue, passwordValue, testData) {
    cy.request({
      method: "POST",
      url: urlValue,
      form: true,
      body: {
        username: usernameValue,
        password: passwordValue,
      },
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if (testData === "valid") {
        expect(response.status, infoMessage).to.eq(200);
        expect(response.body.token, "Token").to.be.a('string');
        expect(response.body.token, 'Token').to.not.be.undefined
        cy.wrap(response.body.token).as('token')
      } else {
        expect(response.status, "Status Code - 'Auth - CreateToken'").to.eq(200),
          expect(response.body.token, 'Token').to.be.undefined
        expect(response.body.reason, infoMessage).to.eq('Bad credentials')
      }
    })
  },

  createBooking(url, responseStatus, bodyType, contentType, accept, wrongContentType, testData) {
    cy.request({
      method: 'POST',
      url: url,
      failOnStatusCode: false,
      headers: {
        'Content-Type': contentType,
        'Accept': accept
      },
      body: bodyType
    }).then((response) => {
      expect(response.status, "Status Code response").to.eq(responseStatus);
      cy.log('Response :', response.body);
      if (testData === "valid") {
        expect(response.headers['content-type']).to.contain(contentType).to.not.contains(wrongContentType)
      } else {
        expect(response.headers['content-type']).to.contain(wrongContentType).to.not.contains(contentType)
      }
    })

  }

}



export default { ...loginPage };
