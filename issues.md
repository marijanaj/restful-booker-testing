
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

  - *Because of this issue failed test: Get valid auth token and create, read, update and delete records of bookinsses - Create booking with XML format, and check response header contain text/xml, and does not contains text/html.* https://github.com/marijanaj/restful-booker-testing/blob/main/cypress/e2e/create.booking.spec.cy.js

### Update Created Booking 
1. Send valid parameters on PUT method (http://localhost:3001/booking/bookingid )
2. Send update json parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code 

**BUG**: Status Code is wrong, cannot updated and read updated reqords
**Expect**: Status Code should be 200, and can updated and read updated reqords

  - *Because of this issue failed test: CRUD operations (Create, read, update and delete) feature covered - Get valid auth token and create, read, update and delete records of bookinsses* https://github.com/marijanaj/restful-booker-testing/blob/main/cypress/e2e/crud.spec.cy.js

