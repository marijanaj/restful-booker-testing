# Cypress API Testing for Restful Booker

This project contains automated tests for the Restful Booker API using Cypress. The tests are designed to validate various functionalities and endpoints of the API, such as booking creation, updating and deleting bookings.

## Prerequisites 

Before you start, ensure that you have the following installed: 
- **Node.js** -You can download it from here.
- **Cypress** -  You can install Cypress globally using the command:

      npm install cypress --save-dev

## Mock Server Setup  

- **Clone the repository https://github.com/mwinteringham/restful-booker**
- **Setup Docker**
- **Information about start aplication read in https://github.com/mwinteringham/restful-booker/blob/main/README.md**

## Cypress Project Setup

- **Clone the repository to your local machine**

      https://github.com/marijanaj/restful-booker-testing.git         


- **Install Dependencies: Navigate to the project folder and install the required npm dependencies:**

       npm install

- **Open Cypress: After the dependencies are installed, you can open Cypress for the first time with:**

       npx cypress open

## Running the Tests

- **Open Cypress UI, and select the test suite you want to run and click on it to execute.**

       npx cypress open
 
- **Alternatively, you can run the tests in headless mode by running. This will run all tests in the command line interface without opening the Cypress UI.**

       npx cypress run

## API Endpoints Tested:

#### Auth - CreateToken
```
  POST /auth
```
#### Booking - CreateBooking
```
  POST /booking
```
#### Booking - GetBooking
```
  GET /booking/:id
```
#### Booking - UpdateBooking
```
  PUT /booking/:id
```
#### Booking - PartialUpdateBooking
```
  PATCH /booking/:id
```
#### Booking - DeleteBooking
```
  DELETE /booking/:id
```
## TEST CASES

- **Test cases can find in repository in file  [TestCasses.md](https://github.com/marijanaj/restful-booker-testing/blob/main/TestCases.md)**

*NOTE: In repository  file  [issues.md](https://github.com/marijanaj/restful-booker-testing/blob/main/issues.md) can find reported issues*
