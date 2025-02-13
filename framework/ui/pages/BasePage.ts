import test from '@playwright/test'
import { Locator, Page } from 'playwright'

import { DateAndTime } from '~utils/date-and-time/DateAndTime'

import { BaseComponent } from './BaseComponent'


export abstract class BasePage extends BaseComponent {
    page: Page
    protected requiredLocators: Locator[] = []
    
    constructor(page: Page) {
        super(page)
        this.page = page
    }

   
    private async checkRequiredLocators() {
        const locatorStates = []
        await test.step(`Wait for required locators for page ${this.constructor.name}`, async () => {
            for (const locator of this.requiredLocators) {
                let locatorState: { selector: string, isLoaded: boolean }
                try {
                    await locator.first().waitFor({ timeout: DateAndTime.TIMEOUT })
                    locatorState = { selector: locator.toString(), isLoaded: true }
                } catch {
                    locatorState = { selector: locator.toString(), isLoaded: false }
                }
                locatorStates.push(locatorState)
            }
        })
        return locatorStates
    }
  
}