

import { AssertionHelper } from '~utils/assertion-helper/AssertionHelper'

import { test } from '../fixture/homePageFixture'
import { UserDetailProvider } from './UserDetailProvider'

test('Functionality -> American Express Portal -> User Details Page', async ({ homePage }) => {
    const isLoginSuccess = await homePage.isOnHomePage()
    new AssertionHelper()
        .setMessage('Check if we are on Home Page')
        .verifyIf(isLoginSuccess)
        .toBeTruthy()
    await homePage.page.waitForLoadState()
    await homePage.cookiesFrame.clickAccept()

    const cartenAmericanExpressPage = await homePage.clickCartenAmericanExpressLink()
    await cartenAmericanExpressPage.cookiesFrame.clickRefuse()
    const isOnAllCardsPage = await cartenAmericanExpressPage.isOnAllCardsPage()
    new AssertionHelper()
        .setMessage('Check if we are on All Cards Page')
        .verifyIf(isOnAllCardsPage)
        .toBeTruthy()
    
    const goldCardDescriptionPage =  await cartenAmericanExpressPage.clickEnSavoirPlusButton()
    await goldCardDescriptionPage.page.waitForLoadState()

    const isOnGoldCardDescriptionPage = await goldCardDescriptionPage.isOnGoldCardDescriptionPage()
    new AssertionHelper()
        .setMessage('Check if we are on Gold Card Description Page')
        .verifyIf(isOnGoldCardDescriptionPage)
        .toBeTruthy()

    const userDetailsPage = await goldCardDescriptionPage.clickDemandezVotreCarteButton()
    await userDetailsPage.page.waitForLoadState()

    const isOnUserDetailsPage = await userDetailsPage.isOnUserDetailsPage()
    new AssertionHelper()
        .setMessage('Check if we are on User Details Page')
        .verifyIf(isOnUserDetailsPage)
        .toBeTruthy()
    
    await userDetailsPage.fillUserDetails(new UserDetailProvider().getUserToCreate())
    const userDetailsPage2 = await userDetailsPage.clickContinueButton()
    await userDetailsPage2.page.waitForLoadState()

    const isOnUserDetailsPage2 = await userDetailsPage2.isOnUserDetailsPage2()
    new AssertionHelper()
        .setMessage('Check if we are on User Details Page')
        .verifyIf(isOnUserDetailsPage2)
        .toBeTruthy()
})