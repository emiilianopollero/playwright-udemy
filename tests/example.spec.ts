import {test, expect} from '@playwright/test'

test("Simple basic test", async ({page}) => {
    await page.goto("https://es.wikipedia.org/wiki/Wikipedia:Portada")
    const pageTitle = await page.locator("#n-mainpage-description > a > span")
    await expect(pageTitle).toContainText("Portada")
})