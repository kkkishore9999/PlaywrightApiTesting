import { test, expect } from '@playwright/test';
// to test this program use this command line :: npx playwright test  /Users/krishnakk/IdeaProjects/PlaywrightApiTesting/src/example.test.ts
test.describe('GitHub API Tests', () => {
  const USER = 'kkkishore9999';
  const REPO = 'awesome-learning';

  test('should create a bug report', async ({ request }) => {
    // Send request to create a new issue
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
      data: {
        title: '[Bug] report 1',
        body: 'Bug description',
      },
    });

    // Print the response for debugging
    console.log(await newIssue.json());

    // Check if the request was not successful
    expect(newIssue.ok()).toBeTruthy();

    // Send request to get all issues
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();

    // Print the issues for debugging
    const issuesData = await issues.json();
    console.log(issuesData);

    // Validate the created issue
    expect(issuesData).toContainEqual(expect.objectContaining({
      title: '[Bug] report 1',
      body: 'Bug description',
    }));
  });
});