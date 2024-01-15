# Error #1965 Reproduction for MSW

This repository serves as a reproduction for the error https://github.com/mswjs/msw/issues/1965. The error log indicates the issue as "Package ./node is not exported from package Users/User/msw-1965-bug/node_modules/msw." The problem occurs specifically when running `yarn build` or `yarn start`, while `yarn test` works without any issues.

## Reproduction Steps

To reproduce the error, follow these steps:

1. Clone the repository:
    `git clone "the repo"`

2. Change into the repository directory:
    `cd <repo-directory>`

3. Install dependencies:
    `yarn install`

4. Build the project:
    `yarn build`

5. Start the application:
    `yarn start`

6. Run tests:
    `yarn test`