import { DateAndTime } from './DateAndTime'

export class WaitUtils {

    static async waitForTimeout(timeout = DateAndTime.ONE_SECOND_TIMEOUT) {
        return new Promise(res => setTimeout(res, timeout))
    }

    static async waitFor<T>(
        runnable: () => Promise<T>,
        timeout = DateAndTime.ONE_SECOND_TIMEOUT * 30,
        poolTime = DateAndTime.ONE_SECOND_TIMEOUT * 5
    ): Promise<T> {
        const startDate = Date.now()

        const executeRunnable = () =>
            new Promise<T>((resolve, reject) => {
                const checkCondition = async () => {
                    try {
                        const result = await runnable()
                        if (Date.now() - startDate < timeout) {
                            setTimeout(checkCondition, poolTime)
                        } else {
                            reject(new Error('Timeout exceeded: Condition not met'))
                        }
                        resolve(result)
                    } catch (error) {
                        if (Date.now() - startDate < timeout) {
                            setTimeout(checkCondition, poolTime)
                        } else {
                            reject(new Error(`Timeout exceeded: ${error || 'Unknown error'}`))
                        }
                    }
                }

                checkCondition()
            })

        return executeRunnable()
    }
}