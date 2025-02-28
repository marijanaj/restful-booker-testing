/**
 * @author Marijana Milovanovic <marijanajelenic92@gmail.com>
 */

import mainPage from "../pages/mainPage";
import urls from "../properties/urls";
import userInfo from "../properties/usersInformation";

describe('Create, read and delete feature covered', () => {

  it('Get valid auth token and create, read and delete records of bookinsses', () => {   
    mainPage.authToken(urls.baseUrl + "auth", "Status Code - Auth - CreateToken", userInfo.username, userInfo.password, "valid")
    cy.get("@token").then((token) => {
      //Booking - CreateBooking
      cy.request({
        url: urls.baseUrl + "booking",
        method: 'POST',
        body: {
          "firstname": userInfo.firstname,
          "lastname": userInfo.lastname,
          "totalprice": userInfo.totalprice,
          "depositpaid": true,
          "additionalneeds": userInfo.additionalneeds,
          "bookingdates": {
            "checkin": userInfo.checkin,
            "checkout": userInfo.checkout
          }
        },
        headers: {
          'Content-Type': 'application/json'
        },
        Cookie: `token=${token}`,
      }).then((response) => {
        expect(response.status, 'Status Code').to.eq(200);
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.body.booking.firstname, 'First Name').to.eq(userInfo.firstname).and.to.be.a('string');
        expect(response.body.booking.lastname, 'Last name').to.eq(userInfo.lastname).and.to.be.a('string');
        expect(response.body.booking.additionalneeds, 'Additional needs').to.eq(userInfo.additionalneeds).and.to.be.a('string');
        expect(response.body.booking.totalprice, 'Total Price').to.eq(userInfo.totalprice).to.be.a('number');
        expect(response.body.booking.depositpaid, 'Deposit paid').to.be.a('boolean');
        expect(response.body.bookingid, 'Booking id should be type number').to.be.a('number');
        cy.wrap(response.body.bookingid).as('bookingid')
        cy.get('@bookingid').then((bookingid) => {
          cy.log("Booking id  " + bookingid)
          cy.setCookie('token', token)

          //Booking - GetBookingIds -After created, check user with bookingid
          cy.request({
            url: urls.baseUrl + "booking/" + bookingid,
            bookingid,
            method: 'GET',
            log: true,
            Cookie: `token=${token}`,
          }).then(({ status, body }) => {
            expect(status, 'Status Code for GetBookingIds').to.eq(200);
            expect(body.firstname, 'First Name').to.eq(userInfo.firstname);
            expect(body.lastname, 'Last name').to.eq(userInfo.lastname);
            expect(body.totalprice, 'Total Price').to.eq(userInfo.totalprice);
            expect(body.bookingdates.checkout, 'Checkout date').to.eq(userInfo.checkout);
            expect(body.bookingdates.checkin, 'Checkin date').to.eq(userInfo.checkin);
            expect(body.additionalneeds, 'Additional needs').to.eq(userInfo.additionalneeds);
          })
          //Booking - DeleteBooking
          cy.request({
            url: urls.baseUrl + "booking/" + bookingid,
            method: 'DELETE',
            Cookie: `token=${token}`,
            failOnStatusCode: false,
            headers: {
              'Content-Type': 'application/json'
            },
          }).then(({ status }) =>
            expect(status, 'Status Code - Delete Booking').to.eq(201));

          //GetBookingIds after deleted, check booking deleted
          cy.request({
            url: urls.baseUrl + "booking/" + bookingid,
            bookingid,
            method: 'GET',
            log: true,
            failOnStatusCode: false,
            Cookie: `token=${token}`,
          }).then(({ status, body }) => {
            expect(status, 'Status Code for GetBookingIds after deleted').to.eq(404);
          })
        })
      })
    })
  })
})
