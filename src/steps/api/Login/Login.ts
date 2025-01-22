import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('Realiza la peticion con las credenciales de login', async function () {
  const server = this.server;

  const formData = new URLSearchParams();
  formData.append('grant_type', 'password');
  formData.append('username', 'inputPassword');
  formData.append('password', 'QEamw@#e22');

  const response = await server.post('oauth/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString(),
  });

  const data = await response.json();

  expect(response.status()).toBe(200);
  expect(data).toHaveProperty('access_token');
  expect(data.token_type).toBe('Bearer');
});
