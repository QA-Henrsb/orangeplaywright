export class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameField = page.getByRole('textbox', {name: 'username'})
        this.passwordField = page.getByRole('textbox', {name: 'password'})
        this.loginButton = page.getByRole('button', {name: 'login'})
    }

    async loginUrl() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

    async requireAlert(expect){
        await expect(this.page.getByText(/required/i)).toBeVisible()
    }
    async invalidAlert(expect){
        await expect(this.page.getByText(/invalid credentials/i)).toBeVisible()
    }
    

    async validUserPass(){
        await this.usernameField.fill('Admin')
        await this.passwordField.fill('admin123')
        await this.loginButton.click()
    }

    async invalidUserPass(){
        await this.usernameField.fill('user')
        await this.passwordField.fill('admin234')
        await this.loginButton.click()
    }

    async invalidUser(){
        await this.usernameField.fill('user')
        await this.passwordField.fill('admin123')
        await this.loginButton.click()
    }
    
    async invalidPass(){
        await this.usernameField.fill('Admin')
        await this.passwordField.fill('admin234')
        await this.loginButton.click()
    }

    async emptyUser(){
        await this.passwordField.fill('admin123')
        await this.loginButton.click()
    }

    async emptyPass(){
        await this.usernameField.fill('Admin')
        await this.loginButton.click()
    }

}