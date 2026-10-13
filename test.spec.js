import { test, expect } from '@playwright/test';

test('First Test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await page.locator('id=username').fill('rahulshettyacademy');
    await page.locator('id=password').fill('Learning@830$3mK2');
    await page.locator('id=signInBtn').click();

    //await expect(page.locator('.card-body a').nth(0)).toContainText('iphone X');
    //await page.waitForLoadState('networkidle'); // waits untill network comes to ideal state.
    await page.locator('.card-body a').first().waitFor();
    const allTitles = await page.locator('.card-body a').allTextContents();
    console.log (allTitles);
});
