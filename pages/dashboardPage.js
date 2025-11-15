export class DashboardPage {
    constructor(page) {
        this.page = page
        this.dashboardTitle = page.locator('.oxd-topbar-header-breadcrumb')
    }

    async checkDashboardPage(){
        await this.dashboardTitle.waitFor()
    }

} 