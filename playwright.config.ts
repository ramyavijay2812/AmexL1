import { devices,PlaywrightTestConfig } from '@playwright/test'


const ONE_SECOND_TIMEOUT = 1000

const config: PlaywrightTestConfig = {
    timeout: ONE_SECOND_TIMEOUT * 60000,
    workers: 4,
    retries: 1,
    use: {
        actionTimeout: ONE_SECOND_TIMEOUT * 60,
        acceptDownloads: true,
        ignoreHTTPSErrors: true,
        screenshot: { mode: 'only-on-failure', fullPage: true },
        headless: true 
    },
    expect: {
        timeout: ONE_SECOND_TIMEOUT * 60 
    },
    outputDir: 'report-dir/test-results',
    projects: [
        {
            name: 'firefox',
            retries: 0,
            use: {
                ...devices['Desktop Firefox'],
            }, 
        },
        {
            name: 'chromium',
            retries: 0,
            use: {
                ...devices['Desktop Chrome']
            }, 
        },
        {
            name: 'webkit',
            retries: 0,
            use: {
                ...devices['Desktop Safari']
            }
        },
        {
            name: 'galaxy_s8',
            use: {
                isMobile: true,
                ...devices['Galaxy S8'] 
            } 
        },
        {
            name: 'galaxy_s9',
            use: {
                isMobile: true,
                ...devices['Galaxy S9+'] 
            } 
        },
        {
            name: 'iphone_xr',
            use: {
                isMobile: true,
                ...devices['iPhone XR'],
                browserName: 'chromium'
            } 
        },
        {
            name: 'ipad',
            use: {
                isMobile: true,
                ...devices['iPad Pro 11'],
                browserName: 'chromium'
            } 
        },
        {
            name: 'pixel',
            use: {
                isMobile: true,
                ...devices['Pixel 5']
            } 
        }
    ],
    reporter: [
        ['line'],
        [
            'html',
            {
                outputFolder: 'report-dir/report/playwright-report',
                open: 'never' 
            }
        ],
        [
            'json',
            {
                outputFile: 'report-dir/report/playwright-report.json' 
            }
        ]
    ] 
}
export default config