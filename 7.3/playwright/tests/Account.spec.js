const { test, expect } = require('@playwright/test');
const { 
    emailValid,
    passwordValid,
    emailInvalid,
    passwordInvalid
  
} = require("../user.js"); 

test.describe("Авторизация", () => {
  test('Успешная авторизация', async ({ page }) => {
    /* const browser = await chromium.launch({
      headless: false,
      slowMo: 500
    }); */ 
    // Go to https://netology.ru/
    await page.goto('https://netology.ru/');
    // Click text=Войти
    await Promise.all([
      page.waitForNavigation( /*{ url: 'https://netology.ru/?modal=sign_in' }*/),
      page.click('text=Войти')
    ]);
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', emailValid);
    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');
    // Click [placeholder="Пароль"]
    await page.fill('[placeholder="Пароль"]', passwordValid);
    // Click [data-testid="login-submit-btn"]
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://netology.ru/profile/8581862' }*/),
      page.click('[data-testid="login-submit-btn"]')
    ]);
    // await expect(page).toBeVisible("//* [data-testid='profile-programs-content']");  
    await expect(page).toHaveText('Моё обучение');
    /* // Click [data-testid="profile-programs-content"] >> text=Моё обучение
    await page.click('[data-testid="profile-programs-content"] >> text=Моё обучение'); */
    // ---------------------
    /* await context.close();
    await browser.close(); */
  });

  test('Неуспешная авторизация', async ({ page }) => {
    /* const browser = await chromium.launch({
      headless: false,
      slowMo: 500
    }); */
    // Go to https://netology.ru/
    await page.goto('https://netology.ru/');
    // Click text=Войти
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://netology.ru/?modal=sign_in' }*/),
      page.click('text=Войти')
    ]);
      // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', emailInvalid);
    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');
    // Fill [placeholder="Пароль"]
    await page.fill('[placeholder="Пароль"]', passwordInvalid);
    // Click [data-testid="login-submit-btn"]
    await page.click('[data-testid="login-submit-btn"]');
    await expect(page).toBeVisible("//* [@data-testid='login-error-hint']");
    /* await context.close();
    await browser.close();*/
  });
});

