const { test, expect } = require('@playwright/test');
const { 
    emailValid,
    passwordValid,
    emailInvalid,
    passwordInvalid
  
} = require("../user.js");

test.describe("Авторизация", () => {
  test('Успешная авторизация', async ({ page }) => {
    /* const browser = await chrome.launch({
      headless: false,
      slowMo: 500
    }); */ 
    await page.goto('https://netology.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(emailValid);
    await page.getByPlaceholder('Пароль').fill(passwordValid);
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByText( 'Моё обучение' )).toBeVisible();
    // await expect(page.getByText('Вы остановились здесь. Продолжим?')).toBeVisible();
  });

  test('Неуспешная авторизация', async ({ page }) => {
    /* const browser = await chromium.launch({
      headless: false,
      slowMo: 500
    }); */
    await page.goto('https://netology.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(emailInvalid);
    await page.getByPlaceholder('Пароль').fill(passwordInvalid);
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByTestId('login-error-hint')).toBeVisible();
  });
});

