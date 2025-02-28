/**
 * @author Marijana Milovanovic <marijanajelenic92@gmail.com>
 */

import mainPage from "../pages/mainPage";
import urls from "../properties/urls";
import userInfo from "../properties/usersInformation";

describe('Tests covered Create Token', () => {
  
  it('Create token with correct username and password', () => {
    mainPage.authToken(urls.baseUrl + "auth", "Without username - Auth - CreateToken", userInfo.username, userInfo.password, "valid")
  })

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
    mainPage.authToken(urls.baseUrl + "auth", "Wrong password - Auth - CreateToken", , "password", "invalid")
  })
