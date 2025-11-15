// @ts-check
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage.js'
import { DashboardPage } from '../pages/dashboardPage.js';

/** @type { LoginPage } */
let login;
/** @type { DashboardPage } */
let dashboard;


test.describe('Login Scenarios', () => {

  test.beforeEach(async ({ page }) =>{
  login = new LoginPage(page)
  dashboard = new DashboardPage(page)
  await login.loginUrl()
})

  
test('Login With Valid Username and Password', async ({ page }) => {
    
  await login.validUserPass()
  await dashboard.checkDashboardPage()
})

test('Login Without Filling Username', async ({ page }) => {
 
  await login.emptyUser()
  await login.requireAlert(expect)
})

test('Login Without Filling Password', async ({ page }) => {

  await login.emptyPass()
  await login.requireAlert(expect)
})



test('Login With Invalid Username', async ({ page }) => {
  
  await login.invalidUser()
  await login.invalidAlert(expect)
})

test('Login with Invalid Password', async ({ page }) => {
  
  await login.invalidPass()
  await login.invalidAlert(expect)
})

test('Login with Invalid Username and Password', async ({ page }) => {

  await login.invalidUserPass()
  await login.invalidAlert(expect)
})

})
