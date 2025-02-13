
import test from 'playwright/test'

import { BasePage } from '~framework/ui/pages/BasePage'

import { UserDetails } from './UserDetails'



export class GoldCardDescriptionPage extends BasePage {
    private demandezVotreCarteButton() { return this.page.locator('[data-qe-id="CallToActionsWithLinks"] a[data-qe-id="Button"]').last() }
    private goldCardPageheader() { return this.page.locator('//li[@aria-current="page"][normalize-space(text()="Carte Gold American Express")]')}
    constructor(page) {
        super(page)
    }

   
    async clickDemandezVotreCarteButton() {
        return await test.step('Click on DemandezVotreCarte Button', async () => {
            await this.demandezVotreCarteButton().click()
            return new UserDetails(this.page)
        })
    }

    async isOnGoldCardDescriptionPage() {
        return await test.step('Check if landed on Gold card description Page', async () => {
            return await this.goldCardPageheader().isVisible()
        })
    }}