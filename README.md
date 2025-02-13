# Slideroom UI test automation project (Admission, ATS Manager)

The project for automation and covering functionality checks for Outcomes and ATS Manager UI. 

## Concepts included
* Page Object Model

## Tools
* TypeScript
* Playwright

## Requirements
In order to utilize the project, you need to have the installed locally Node.js version of greater than 12.


### Installing and test execution are so simple:
1. Created a .env file to fetch environmental variables`


2. At the first execution and after updates of npm packages you need to perform the following command in your terminal and be located in the root dir of the project:

    * `npm i` 

1. Then you can perform any scripts from `package.json` file to execute necessary tests:

### Debugging

To perform comfortable debugging you need to install extension for VS Code:
```
Name: Playwright Test for VSCode
Id: ms-playwright.playwright
Description: Run Playwright Test tests in Visual Studio Code.
Version: 1.0.6
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
```

Then, you just need to open `Testing` in Primary Side Bar and launch any test you need, or selected cases, with additional options set in the menu.

Or you can open test any file and click `PLAY` button to run the test


## Reporting 

After test, reports and all additional data will be stored in `./report-dir` folder
