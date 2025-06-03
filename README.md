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

# Challenge details

For this challenge we would like you to develop a basic file sharing website as well as
documentation about the design decisions and future work.
Our file sharing website allows users to upload files, view which files are uploaded, and
delete or download any of the files. Specifically,
- A user should be able to upload file(s) to the site
- A user should be able to view all uploaded file(s)
- A user should be able to delete any of the uploaded file(s)
- A user should be able to download any of the uploaded file(s) (which have not been
deleted)

For this challenge:
- We do not require you to implement a real file server (you may choose to mock the
state of the file server purely on the client side / website). For example, representing
the list of files as a variable is sufficient for this exercise:

```
const files = [
  { name: "file-a.txt" }
];
```

- We would like you to focus on using production frameworks and best practices for
this challenge (the actual implementation of the logic should be minimal, however
we would like to see the use of frameworks like React, proper state management,
testing, bundling, etc.)
- You are welcome to and encouraged to make use of open source or off the shelf
libraries and tools that you might use in a “real” project (ex. Material UI, NextJs, etc.).
In addition to the implementation, please include in your README
- Instructions on how to build / run / view your website
- Documentation / justification about major design decisions (such as framework
selection)
- Additional future work that you might consider in a production environment / team
(monitoring? deployment? API? scalability?)

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

## Tasks as it stands:

- Break down front end into components
- Break down test into tickets
- Set up automated deployments

## UI Design
![FileUI](https://github.com/user-attachments/assets/ecbaa2aa-acf2-4be8-906e-67114c741de5)

- A site/page layout for site-wide logic like Auth, Headers, Footers and global contexts.
- A Container, for page specific logic.
- Controls for folder-wide controls like uploading, folder settings etc
- A Folder/FileList component
- A File Component, A component that represents Files in the FileList
- File Controls, A Component that controls this particular file

