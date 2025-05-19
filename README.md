# Remote Waitlist Manager
Node Version - v22.15.0

# Setup
### Quick run with Docker

```
docker compose up
```

You may need to build for Windows devices first

```
DOCKER_BUILDKIT=1 docker compose build --no-cache
```

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

### Quick setup
Run `npm install` in root for git pre-commits.
Run `npm prepare`

For a user who already has this all setup, you have access to the usual npm commands:
- npm install
- npm run dev
- npm run build
- npm run start
- npm run test
- npm run lint

### Storybook

Open Storybook locally with:

```bash
npm run storybook
```
