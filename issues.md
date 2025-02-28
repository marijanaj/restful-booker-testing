
## Issues

**During test session, i found few issues.**

*Because of this isses, some of tests failed.* 

### Created booking in XML format
1. Send valid parameters on POST method (http://localhost:3001/booking to create new records)
3. Send XML parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Set application/xml
5. Verify HTTP status code is 200
6. Verify response is in XML format

**BUG**: response.headers['content-type'] contains text/html
**Expect**: response.headers['content-type'] should contains text/xml

  - *Because of this issue failed test: Get valid auth token and create, read, update and delete records of bookinsses - Create booking with XML format, and check response header contain text/xml, and does not contains text/html*

### Update Created Booking 
1. Send valid parameters on PUT method (http://localhost:3001/booking/bookingid )
2. Send update json parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code 

**BUG**: Status Code is wrong, cannot updated and read updated reqords
**Expect**: Status Code should be 200, and can updated and read updated reqords

  - *Because of this issue failed test: CRUD operations (Create, read, update and delete) feature covered - Get valid auth token and create, read, update and delete records of bookinsses*
  - If you want to other part of test pass, please comment this code in file  [crud.spec.cy.js](https://github.com/marijanaj/restful-booker-testing/blob/main/cypress/e2e/crud.spec.cy.js) 

    - This code:
   
           //Booking - Update Booking 
          cy.request({
            url: urls.baseUrl + "booking/" + bookingid,
            method: 'PUT',
            Cookie: `token=${token}`,
            failOnStatusCode: false,
            body: {
              "firstname": userInfo.firstnameUpdate,
              "lastname": userInfo.lastnameUpdate,
              "totalprice": userInfo.totalpriceUpdate,
              "bookingdates": {
                "checkin": userInfo.checkinUpdate,
                "totalprice": userInfo.checkoutUpdate,
              }
            },
            headers: {
              'Content-Type': 'application/json'
            },
          }).then(({ status, body }) => {
            expect(status, 'Status Code - Update Booking').to.eq(200) // Exist issue, every time retrun wrong status code, and because of that test failed.
            expect(body.firstname, 'First Name').to.eq(userInfo.firstnameUpdate);
            expect(body.lastname, 'Last name').to.eq(userInfo.lastnameUpdate);
            expect(body.totalprice, 'Total Price').to.eq(userInfo.totalpriceUpdate);
            expect(body.bookingdates.checkout, 'Checkout date').to.eq(userInfo.checkinUpdate);
            expect(body.bookingdates.checkin, 'Checkin date').to.eq(userInfo.checkoutUpdate);
          })//Booking - Booking - PartialUpdateBooking
          cy.request({
            url: urls.baseUrl + "booking/" + bookingid,
            method: 'PATCH',
            Cookie: `token=${token}`,
            failOnStatusCode: false,
            headers: {
              'Content-Type': 'application/json'
            },
            body: {
              "firstname": userInfo.firstnameSecondUpdate,
              "lastname": userInfo.lastnameSecondUpdate,
            }
          }).then(({ status, body }) => {
            expect(status, 'Status Code - Get Booking Ids').to.eq(200); 
            expect(body.firstname, 'First Name').to.eq(userInfo.firstnameSecondUpdate);
            expect(body.lastname, 'Last name').to.eq(userInfo.lastnameSecondUpdate);
            expect(body.totalprice, 'Total Price').to.eq(userInfo.totalpriceUpdate);
            expect(body.bookingdates.checkout, 'Checkout date').to.eq(userInfo.checkoutUpdate);
            expect(body.bookingdates.checkin, 'Checkin date').to.eq(userInfo.checkinUpdate);
          })
     

  
