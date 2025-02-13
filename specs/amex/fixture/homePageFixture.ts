import { test as base } from '@playwright/test'
import { config } from 'dotenv'

import { HomePage } from '~framework/ui/pages/HomePage/HomePage'

config() 
export const test = base.extend<{homePage: HomePage}>({
    homePage: async ({ page }, use) => {
        await page.goto(process.env.BASEURL)
        const homePage = new HomePage(page)
        await use(homePage)
    }
})
