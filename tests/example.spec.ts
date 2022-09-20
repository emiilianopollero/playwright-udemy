import {test, expect} from '@playwright/test'

test("Simple basic test", async ({page}) => {
    await page.goto("https://es.wikipedia.org/wiki/Wikipedia:Portada")
    const pageTitle = page.locator("#n-mainpage-description > a > span")
    await expect(pageTitle).toContainText("Portada")
})

test("Clickin on Element", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button")
    await page.click("text=Sign in")
    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
})

// test("Selectors",async ({page}) => {
//     //text
//     await page.click("text=some text selector")
//     //CSS selectors
//     await page.click("button")
//     await page.click("#idSelector")
//     await page.click(".classSelector")
//     //Only visible CSS selector
//     await page.click(".submit-button:visible")
//     //Combinations
//         //username + class
//     await page.click("#username .first")
//     //Xpath
//     await page.click("//button")
// })

test("Working with inputs",async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button")
    await page.type("#user_login", "some username")
    await page.type("#user_password", "some password")
    await page.click("text=Sign in")
    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
})