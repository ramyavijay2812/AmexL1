import moment from 'moment'

export class DateAndTime {
    static readonly ONE_SECOND_TIMEOUT = 1000
    static readonly TIMEOUT = 30 * DateAndTime.ONE_SECOND_TIMEOUT
    static readonly ONE_MINUTE_TIMEOUT = 60 * DateAndTime.ONE_SECOND_TIMEOUT

    format: string

    static getCurrentTimeFormattedString(format = 'DD/MM/yyyy-hh:mm:ss') {
        return moment().format(format)
    }

    static getCurrentTimeSimpleFormattedString(format = 'DDMMyyyyhhmmssSS') {
        return moment().format(format)
    }

    static getCurrentDateISOString() {
        return moment().toISOString()
    }
}