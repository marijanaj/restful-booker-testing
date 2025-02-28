/**
 * @author Marijana Milovanovic <marijanajelenic92@gmail.com>
 */

import mainPage from "../pages/mainPage";
import urls from "../properties/urls";
import userInfo from "../properties/usersInformation";

describe('Create booking with xml and with json format', () => {

  it('Create booking with JSON format, and check response header contain application/json, and does not contains text/html', () => {
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
      200,
      jsonBodyBooking,
      'application/json',
      'application/json',
      'text/xml',
      "valid")
  })

  it('Create booking with XML format, and check response header  contain text/xml, and does not contains text/html', () => {
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
      200,
      xmlBodyBooking, 
      'text/xml',
      'application/xml', 
      'text/html',
      "valid")
    //exist bug,  content-type should be text/xml, in this case back text/html
  })

  it('Create booking, try send wrong format in body (xml) and check response', () => {
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

  it('Create booking, try send wrong format in body (json) and check response', () => {
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
