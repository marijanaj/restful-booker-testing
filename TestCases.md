# Test Cases
## Restful booker ( Authorization and CRUD proces)

><h2><summary> Auth - CreateToken -API Tests covered Create Token </summary></h2>
    https://github.com/marijanaj/restful-booker-testing/blob/main/cypress/e2e/auth.spec.cy.js

### Successful Authentication 
1. Send valid username and passorcd on http://localhost:3001/auth
2. Verify HTTP status code is 200
3. Verify that API returns a succesfull token
4. Check token is present in response
5. And check token is Type string 

### Try create token without Username
1. Send empty username and correct password on http://localhost:3001/auth
2. Verify HTTP status code is show
3. Verify that API doesn't returns token
5. Check message in response "Bad credentials"
   
### Try create token without Password
1. Send correct username and empty password on http://localhost:3001/auth
2. Verify HTTP status code is show
3. Verify that API doesn't returns token
5. Check message in response "Bad credentials"
  
### Try create token without credentials
1. Send empty username and empty password on http://localhost:3001/auth
2. Verify HTTP status code is show
3. Verify that API doesn't returns token
5. Check message in response "Bad credentials"

### Try create token with wrong type of username and password
1. Send wrong type of username and password on http://localhost:3001/auth (send number, but accept only string)
3. Verify HTTP status code is show
4. Verify that API doesn't returns token
5. Check message in response "Bad credentials"

### Try create token with wrong password
1. Send correct username and wrong password on http://localhost:3001/auth
2. Verify HTTP status code is show
3. Verify that API doesn't returns token
5. Check message in response "Bad credentials"

><h2><summary> Booking - CreateBooking -API  </summary></h2>
    https://github.com/marijanaj/restful-booker-testing/blob/main/cypress/e2e/create.booking.spec.cy.js

### Successful created booking in JSON format
1. Send valid parameters on POST method (http://localhost:3001/booking to create new records)
3. Send json parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code is 200
5. Verify response is in JSON format

### Successful created booking in XML format 
1. Send valid parameters on POST method (http://localhost:3001/booking to create new records)
3. Send XML parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code is 200
5. Verify response is in XML format
  
### Try send wrong format in body (XML) and check response for Create Booking
1. Send format XML in body http://localhost:3001/auth
2. Set JSON data show in response
4. Verify HTTP status code is 400, becuase sent wrong format of body parameters

### Try send wrong format in body (JSON) and check response for Create Booking
1. Send format JSON in body http://localhost:3001/auth
2. ANd set XML data show in response
4. Verify HTTP status code is 400, becuase sent wrong format of body parameters

 
><h2><summary> Create, read and delete API </summary></h2>
    https://github.com/marijanaj/restful-booker-testing/blob/main/cypress/e2e/create.read.delete.spec.cy.js

### Successful Create Booking
1. Send valid parameters on POST method (http://localhost:3001/booking to create new records)
3. Send json parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code is 200
5. Verify response is in JSON format
6. Verify  parameters are present in response
7. Check first name value and type string 
8. Check last name value and type string 
9. Check Additional needs value and type string
10. Check total price value and type number
11. Check Deposit paid needs value and type boolean
12. Check booking id number in response, check that is number

### Check Created Booking with booking id
1. Send valid parameters on GET method (http://localhost:3001/booking/bookingid )
2.  Verify HTTP status code is 200
3.  Verify response is in JSON format
4.  Verify  parameters are present in response
5.  Check first name value
6.  Check last name value
7. Check Additional needs value
8. Check total price value
9. Check Deposit paid needs value

### Check Delete Booking Booking
1. Send valid parameters  DELETE method (http://localhost:3001/booking/bookingid )
2. Verify HTTP status code is 201

### Check GetBookingIds after deleted, check booking deleted
1. Send valid parameters  GET method (http://localhost:3001/booking/bookingid )
2. Verify HTTP status code is 404


><h2><summary> CRUD operations (Create, read, update and delete) feature covered</summary></h2>
      https://github.com/marijanaj/restful-booker-testing/blob/main/cypress/e2e/crud.spec.cy.js
      
### CRUD operations (Create, read, update and delete records of bookinsses) feature covered
1. Get valid token ```POST: http://localhost:3001/auth```
2. Create new booking with parameters ```POST http://localhost:3001/booking```
3. Check that the new record show  ```GET http://localhost:3001/booking/id```
4. Update creaated booking ```PUT http://localhost:3001/booking/id```
5. Check that booking updated ```PATCH  http://localhost:3001/booking/id```
6. Delete record booking ```DELETE  http://localhost:3001/booking/id```
7. Check record deleted  ```GET http://localhost:3001/booking/id```
   

### Successful Authentication ```POST: http://localhost:3001/auth```
1. Send valid username and passorcd on http://localhost:3001/auth
2. Verify HTTP status code is 200
3. Verify that API returns a succesfull token
4. Check token is present in response
5. And check token is Type string
6. 
### Successful Create Booking ```POST http://localhost:3001/booking```
1. Send valid parameters on POST method (http://localhost:3001/booking to create new records)
3. Send json parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code is 200
5. Verify response is in JSON format
6. Verify  parameters are present in response
7. Check first name value and type string 
8. Check last name value and type string 
9. Check Additional needs value and type string
10. Check total price value and type number
11. Check Deposit paid needs value and type boolean
12. Check booking id number in response, check that is number

### Check Created Booking  with booking id ```GET http://localhost:3001/booking/id```
1. Send valid parameters on GET method (http://localhost:3001/booking/bookingid )
2.  Verify HTTP status code is 200
3.  Verify response is in JSON format
4.  Verify  parameters are present in response
5.  Check first name value
6.  Check last name value
7. Check Additional needs value
8. Check total price value
9. Check Deposit paid needs value

### Update Created Booking ```PUT http://localhost:3001/booking/id```
1. Send valid parameters on PUT method (http://localhost:3001/booking/bookingid )
2. Send update json parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code is 200
5. Verify response is in JSON format
6. Verify  parameters are present in response
7. Check first name value change
8. Check last name value change
9. Check Additional needs value change
10. Check total price value change

### Check Partial Update Booking ```PATCH  http://localhost:3001/booking/id```
1. Send valid parameters  PATCH method (http://localhost:3001/booking/bookingid )
2.  Verify HTTP status code is 200
3.  Verify response is in JSON format
4.  Verify  parameters are present in response
5.  Check first name value
6.  Check last name value
7. Check Additional needs value
8. Check total price value
9. Check Deposit paid needs value
   
### Check Delete Booking Booking ```DELETE  http://localhost:3001/booking/id```
1. Send valid parameters  DELETE method (http://localhost:3001/booking/bookingid )
2. Verify HTTP status code is 201

### Check GetBookingIds after deleted, check booking deleted ```GET http://localhost:3001/booking/id```
1. Send valid parameters  GET method (http://localhost:3001/booking/bookingid )
2. Verify HTTP status code is 404


    
