
import test from 'playwright/test'

import { BaseComponent } from '~framework/ui/pages/BaseComponent'




export class Cookies extends BaseComponent {
    private granularWrapper() { return this.page.locator('[class="granular-banner-wrapper"]') }
    private refuse() { return this.granularWrapper().locator('[id="user-consent-management-granular-banner-decline-all-button"]') }
    private accept() { return this.granularWrapper().locator('[id="user-consent-management-granular-banner-accept-all-button"]') }
    private viewAllProgramsButton() { return this.page.locator('[data-testid="allProgramsButton"]') }

    // get navigationPanel() {
    //     return new StudentPortalNavigationPanel(this.page)
    // }
    constructor(page) {
        super(page)
    }
 
    async clickRefuse() {
        return await test.step('Click on Refuse', async () => {
            await this.refuse().click()
        })
    }
 
    async clickAccept() {
        return await test.step('Click on accept', async () => {
            await this.accept().click()
        })
    }
}