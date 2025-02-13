import { faker } from '@faker-js/faker'

import { UserToCreateModel } from '~framework/ui/pages/HomePage/data/UserToCreateModel'
import { DateAndTime } from '~utils/date-and-time/DateAndTime'

export class UserDetailProvider {
    getUserToCreate(): UserToCreateModel {
        const timestamp = DateAndTime.getCurrentTimeSimpleFormattedString()
        return { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            dob: '01/01/2000',
            email: 'newUser' + timestamp + '@gmail.com',
            contactNo: '0612473388' }
    }
}