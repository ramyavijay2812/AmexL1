
import test from 'playwright/test'

import { BasePage } from '~framework/ui/pages/BasePage'

import { AllCards } from './AllCards'
import { Cookies } from './components/Cookies'


export class HomePage extends BasePage {
    private openAccount() { return this.page.locator('[id="label-tab-open-myAccount"]') }
    private cartenAmericanExpressLink() { return this.page.locator('//p[contains(text(),"Cartes American Express")]') }
    
    private viewAllProgramsButton() { return this.page.locator('[data-testid="allProgramsButton"]') }

    get cookiesFrame() {
        return new Cookies(this.page)
    }
    constructor(page) {
        super(page)
    }

    async isOnHomePage() {
        return await test.step('Check if landed on Home Page', async () => {
            return await this.openAccount().isVisible()
        })
    }

    async clickCartenAmericanExpressLink() {
        return await test.step('Click on CartenAmericanExpressLink', async () => {
            await this.cartenAmericanExpressLink().click()
            return new AllCards(this.page)
        })
    }
}