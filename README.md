# Remote Waitlist Manager
Deploy Link - TO DO
Node Version - v22.15.0

# Setup

### Quick run with Docker

```
docker compose up
```

### Quick run with npm

Move into the next-app folder `cd next-app`
Run `npm install` in root for git pre-commits.
Run `npm run dev`

For a user who already has this all setup, you have access to the usual npm commands:

- npm install
- npm run dev
- npm run build
- npm run start
- npm run test
- npm run lint

### Running locally

If you've never run a Next app locally before, this more verbose guide is for you.

#### 1. Install Node.js (via NVM)

We use [`nvm`](https://github.com/nvm-sh/nvm) to manage Node.js versions.

##### a. Install `nvm` (macOS/Linux):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Then restart your terminal.

##### b. Install `nvm` (macOS/Linux):

This project includes an .nvmrc file, so you can run the following to set your version in this folder.

```bash
nvm install
nvm use
```

#### 2. Set Editor settings for VSCode

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Storybook

Open Storybook locally with:

```bash
npm run storybook
```

# Diary

Thanks for the task, I appreciate the scope is quite small compared to others I've recieved. My first hunch on this is to showcase some good unit testing, in a Typescript/Next application. In the full-task I might seperate out the UI from the backend more explictly but since no real API calls need to be made I won't do that for the sake of the task.

This repo as it stands, is a repo I maintain for quickstarting a Next + Express + Mongo project that already has:

- Storybook - component library and deployment built in
- Typescript, Jest, Cypress setup for strong typing and testing.
- Husky - pre-commit hooks to ensure 80% code coverage in testing on every commit
- Docker - This project can be run as a docker container, less useful for a standalone Next App
- Linting - ESLint config for TypeScript files
- XState - my preferred state management option
- Material UI - my quickstart for rapid prototypes
- GitHub Actions to run tests and deploy storybook

## Tasks as it stands:

- Break down front end into components
- Break down test into tickets
- Set up automated deployments

## UI Design
TODO

## API Design
TODO

With File data being:

```
type FileMeta = {
  TODO
};
```
