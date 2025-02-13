import test, { expect } from '@playwright/test'


export class AssertionHelper {
    private message: string

    setMessage(message: string) {
        this.message = message
        test.step(`Assertion: ${message}`, async () => {return undefined})
        return this
    }

    verifyIf(any) {
        if (!this.message) {
            this.setMessage(`Verification for ${test.info().title}`)
        }
        return expect(any, this.message)
    }
}

