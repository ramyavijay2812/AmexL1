
import test from 'playwright/test'

import { BasePage } from '~framework/ui/pages/BasePage'

import { Cookies } from './components/Cookies'
import { GoldCardDescriptionPage } from './GoldCardDescriptionPage'


export class AllCards extends BasePage {
    private carteAmericanExpressHeader() { return this.page.locator('//span[@itemprop="name"][text()="Cartes American Express"]')}
    private enSavoirPlusButton() { return this.page.locator('//a[contains(@href,"https://www.americanexpress.com/fr/carte-de-paiement/gold-card-americanexpress")]//span[contains(text(),"En savoir plus")]')
    }
    
    get cookiesFrame() {
        return new Cookies(this.page)
    }
    constructor(page) {
        super(page)
    }

    async clickEnSavoirPlusButton() {
        return await test.step('Click on EnSavoirPlusButto', async () => {
            const [newPage] = await Promise.all([
                this.page.waitForEvent('load'),
                this.page.keyboard.press('PageDown'),
                this.page.keyboard.press('PageDown'),
                this.enSavoirPlusButton().click()
            ])
            return new GoldCardDescriptionPage(this.page)

        })
    }

    async isOnAllCardsPage() {
        return await test.step('Check if landed on All Cards Page', async () => {
            return await this.carteAmericanExpressHeader().isVisible()
        })
    }
}