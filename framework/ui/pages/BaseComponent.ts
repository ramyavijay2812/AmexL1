import { Locator, Page } from 'playwright'

import { RequiredLocators } from './RequiredLocators'

export abstract class BaseComponent implements RequiredLocators {
    protected page: Page
    protected requiredLocators: Locator[]
    constructor(page: Page){
        this.page = page
        this.requiredLocators = []
    }

    getRequiredLocators() {
        return this.requiredLocators
    }  
   
}