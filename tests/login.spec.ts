import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com'); 
  await page.getByPlaceholder('Your password').fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  await expect(page.getByTestId('page-title')).toHaveText('My account');
  await expect(page.getByTestId('nav-menu')).toHaveText('Jane Doe');

});