import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  use: {
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${process.env.API_TOKEN}`,
    },
  },
});