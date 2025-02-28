/**
 * @author Marijana Milovanovic <marijanajelenic92@gmail.com>
 */

import mainPage from "../pages/mainPage";
import urls from "../properties/urls";
import userInfo from "../properties/usersInformation";

describe('Invalid feature covered Create Token', () => {

  it('Try create token without username', () => {
    mainPage.authToken(urls.baseUrl + "auth", "Without username - Auth - CreateToken", "", userInfo.password, "invalid")
  })

  it('Try create token without password', () => {
    mainPage.authToken(urls.baseUrl + "auth", "Without password - Auth - CreateToken", userInfo.username, "", "invalid")
  })

  it('Try create token without credentials', () => {
    mainPage.authToken(urls.baseUrl + "auth", "Without credentials - Auth - CreateToken", "", "", "invalid")
  })

  it('Try create token with wrong type of username and password', () => {
    mainPage.authToken(urls.baseUrl + "auth", "Wrong type of username and password - Auth - CreateToken", 555, 123, "invalid")
  })

  it('Try create token with wrong password', () => {
    mainPage.authToken(urls.baseUrl + "auth", "Wrong password - Auth - CreateToken", userInfo.username, "password", "invalid")
  })

  it('Try send wrong format in body (xml) and check response', () => {
    const xmlBodyBooking = `
    < booking >
        <firstname>${userInfo.firstname}</firstname>
        <lastname>${userInfo.lastname}</lastname>
        <totalprice>${userInfo.totalprice}</totalprice>
        <depositpaid>${userInfo.depositpaid}</depositpaid>
        <additionalneeds>${userInfo.additionalneeds}</additionalneeds>
        <bookingdates>
            <checkin>${userInfo.checkin}</checkin>
            <checkout>${userInfo.checkout}</checkout>
        </bookingdates>
    </booking >
    `;
    mainPage.createBooking(
      urls.baseUrl + "booking",
      400,
      xmlBodyBooking,
      'application/json',
      'application/json',
      'text/plain',
      "invalid"
    )
  })

  it('Try send wrong format in body (json) and check response', () => {
    const jsonBodyBooking =
    {
      "firstname": userInfo.firstname,
      "lastname": userInfo.lastname,
      "totalprice": userInfo.totalprice,
      "depositpaid": userInfo.depositpaid,
      "additionalneeds": userInfo.additionalneeds,
      "bookingdates": {
        "checkin": userInfo.checkin,
        "checkout": userInfo.checkout
      }
    };
    mainPage.createBooking(
      urls.baseUrl + "booking",
      400,
      jsonBodyBooking,
      'text/xml',
      'application/xml',
      'text/plain',
      "invalid")
  })
})
