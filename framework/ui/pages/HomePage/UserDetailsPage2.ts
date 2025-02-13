
import test from 'playwright/test'

import { BasePage } from '~framework/ui/pages/BasePage'




export class UserDetailsPage2 extends BasePage {
    
    private userDetailsPage2Header() { return this.page.locator('h2').filter({ hasText:'Vos informations personnelles' })}
    
    constructor(page) {
        super(page)
    }

    async isOnUserDetailsPage2() {
        return await test.step('Check if landed on User Details Page 2', async () => {
            return await this.userDetailsPage2Header().isVisible()
        })
    }

}