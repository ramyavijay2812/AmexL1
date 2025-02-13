
import test from 'playwright/test'

import { BasePage } from '~framework/ui/pages/BasePage'

import { UserToCreateModel } from './data/UserToCreateModel'
import { UserDetailsPage2 } from './UserDetailsPage2'



export class UserDetails extends BasePage {
    private civiliteRadioButton() { return this.page.locator('label[for="MS"] span').filter({ hasText:'Mme' }) }
    private firstName() {return this.page.locator('[name="firstName"]')}
    private lastName() {return this.page.locator('[name="lastName"]')}
    private dob() { return this.page.locator('[name="fieldControl-input-dateOfBirth"]')}
    private email() {return this.page.locator('[name="email"]')}
    private contactNo() { return this.page.locator('[name="mobilePhoneNumber"]')}
    private continueButton() { return this.page.locator('button').filter({ hasText: 'Sauvegarder et Continuer' })} 
    private userDetailsPageHeader() { return this.page.locator('p').filter({ hasText : 'Souscrivez en quelques minutes' })}
    
    constructor(page) {
        super(page)
    }

    async isOnUserDetailsPage() {
        return await test.step('Check if landed on User Details Page', async () => {
            return await this.userDetailsPageHeader().isVisible()
        })
    }

    async clickCiviliteRadioButton() {
        return await test.step('Click on CiviliteRadioButton', async () => {
            await this.civiliteRadioButton().click()
        })
    }

    async enterFirstName(name: string) {
        return await test.step('Enter First Name', async () => {
            await this.firstName().pressSequentially(name)
        })
    }

    async enterLastName(name: string) {
        return await test.step('Enter Last Name', async () => {
            await this.lastName().pressSequentially(name)
        })

    }

    async enterDOB(dob: string) {
        return await test.step('Enter DOB in DD/MM/YYYY format', async () => {
            await this.dob().pressSequentially(dob)
        })      

    }

    async enterEmail(email: string) {
        return await test.step('Enter Email', async () => {
            await this.email().pressSequentially(email)
        })
    }

    async enterContactNumber(contact: string) {
        return await test.step('Enter Email', async () => {
            await this.contactNo().pressSequentially(contact)
        })
    }

    async fillUserDetails(user: UserToCreateModel) {
        return await test.step('Enter All Details', async () => {
            await this.clickCiviliteRadioButton()
            await this.enterFirstName(user.firstName)
            await this.enterLastName(user.lastName)
            await this.enterDOB(user.dob)
            await this.enterEmail(user.email)
            await this.enterContactNumber(user.contactNo)
        })
    }

    async clickContinueButton() {
        return await test.step('Click on Continue', async () => {
            await this.continueButton().click()
            return new UserDetailsPage2(this.page)
        })
    }
}