# Test Cases
## Restful booker ( Authorization and CRUD proces)

><h2><summary> CRUD operations (Create, read, update and delete) feature covered</summary></h2>
  
### CRUD operations (Create, read, update and delete records of bookinsses) feature covered
1. Get valid token ```POST: https://restful-booker.herokuapp.com/auth```
2. Create new booking with parameters ```POST https://restful-booker.herokuapp.com/booking```
  ```
Request body:
   firstname 
   lastname
   totalprice
   checkin
   checkout
   additionalneeds
```
  ```
Header
  Content-Type
```
4. Check that the new record show  ```GET https://restful-booker.herokuapp.com/booking/:id```
5. Update creaated booking ```PUT https://restful-booker.herokuapp.com/booking/:id```
6. Check that booking updated ```PATCH  https://restful-booker.herokuapp.com/booking/:id```
7. Delete record booking ```DELETE  https://restful-booker.herokuapp.com/booking/:id```
   

><h2><summary> Auth - CreateToken -API  </summary></h2>
  
### Successful Authentication
1. Send valid username and passorcd on https://restful-booker.herokuapp.com/auth
2. Verify HTTP status code is 200
3. Verify that API returns a succesfull token
4. Check token is present in response
5. And check token is Type string 

### Try create token without Username
1. Send empty username and correct password on https://restful-booker.herokuapp.com/auth
2. Verify HTTP status code is show
3. Verify that API doesn't returns token
5. Check message in response "Bad credentials"
   
### Try create token without Password
1. Send correct username and empty password on https://restful-booker.herokuapp.com/auth
2. Verify HTTP status code is show
3. Verify that API doesn't returns token
5. Check message in response "Bad credentials"
  
### Try create token without credentials
1. Send empty username and empty password on https://restful-booker.herokuapp.com/auth
2. Verify HTTP status code is show
3. Verify that API doesn't returns token
5. Check message in response "Bad credentials"

### Try create token with wrong type of username and password
1. Send wrong type of username and password on https://restful-booker.herokuapp.com/auth (send number, but accept only string)
3. Verify HTTP status code is show
4. Verify that API doesn't returns token
5. Check message in response "Bad credentials"

><h2><summary> Booking - CreateBooking -API  </summary></h2>

### Successful Create Booking
1. Send valid parameters on POST method (https://restful-booker.herokuapp.com/booking to create new records)
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

### Successful created booking in JSON format
1. Send valid parameters on POST method (https://restful-booker.herokuapp.com/booking to create new records)
3. Send json parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code is 200
5. Verify response is in JSON format

### Successful created booking in XML format
1. Send valid parameters on POST method (https://restful-booker.herokuapp.com/booking to create new records)
3. Send XML parameters (firstname, lastname, totalprice, deopositpaid, bookingdates, checkin, checkout, and additionalneeds)
4. Verify HTTP status code is 200
5. Verify response is in XML format
  
### Try send wrong format in body (XML) and check response for Create Booking
1. Send format XML in body https://restful-booker.herokuapp.com/auth
2. Set JSON data show in response
4. Verify HTTP status code is 400, becuase sent wrong format of body parameters

### Try send wrong format in body (JSON) and check response for Create Booking
1. Send format JSON in body https://restful-booker.herokuapp.com/auth
2. ANd set XML data show in response
4. Verify HTTP status code is 400, becuase sent wrong format of body parameters

