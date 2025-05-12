# Remote Waitlist Manager

Node Version - v22.15.0
Live URL - https://fullstack-swe-takehome.vercel.app/

A full-stack application to manage restaurant waitlists, with real-time seating, queuing, and notifications for diners.

Takehome task for TableCheck.

# Table of Contents

1. [Deployment](#deployment)
2. [Stack](#stack)
3. [Setup](#setup)
4. [Diary](#diary)

## Deployment

## Stack

## Setup

### First time setup

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

#### 2. Install Docker

Install Docker Desktop from the official site:  
https://www.docker.com/products/docker-desktop/

### Quick setup

For a user who already has this all setup, you have access to the usual npm commands:

- npm install
- npm run dev
- npm run build
- npm run start
- npm run test
- npm run lint

You will also need a copy of the secret environment variables, to run:

```bash
docker compose up
```

## Diary

### Initial thoughts

Having read multiple blog posts from the TableCheck tech blog, I stumbled upon [the fullstack tech test](https://github.com/TableCheck-Labs/fullstack-swe-takehome). My intial thoughts are that this is highly technical, and I haven't done a take home task in a while. Despite that, I like a structured oppurtunity to learn and don't have a recent tech test up so regardless of the outcome, this looks like a good use of my time.

My hunch to start, would be to replicate the tech stack outlined in [Frontend engineering at TableCheck](https://www.tablecheck.com/en/blog/tech/frontend-engineering-at-tablecheck/), but my recent experience is more Next.js focused and I think I'm going to need to move quickly. This also means I get API routes, SSR and the benefits of deploying with Vercel itself.Thinking ahead to deployment, this stack means I could handle my deployment with a single instance on Vercel, and have the Database hosted elsewhere.

Leaving me with the following Stack as a starting point:

#### Stack intuition

- Framework: Next.js (React + TypeScript)
- State Management: XState
- Styling: Emotion
- Reusable Components: Storybook
- Database: MongoDB
- Deployment: Vercel + MongoDB Atlas
- Docker: local deployment + requirement from tech test

There are many additional requirements in the tech test, notably:

- Runnable with `docker compose up`
- "the user must be able to view the state of their queued party across multiple browser sessions."
- Add github users

#### Setup

At this point, I'm ready to create a walking skeleton of working components along, roughly outlined below, but please see the Projects Board on Github:

- Setup Next.js with TS.
- Setup Emotion
- Setup XState
- Setup MongoDB and MongoDB Atlas
- Docker
- .env local files
- Setup Jest for unit testing
- Setup Cypress for E2E
- Setup Prettier and ESLint
- Setup Husky pre-commit prettier and jest

### 1. Setup Next

On a hunch I'm checking my node version, currently fixed to v22.14.0 for another project. So moving to latest.

I always find myself coming back to projects annoyed it's not obvious what versions the project is locked to, especially on older, maintained projects. So I always throw this at the top of the README too.

While we are here, let's add some extremely accessible "How to start a Next project" installation instructions.

I'm not certain on the shape of my docker file yet, but I know my requirement is to have it run simply.
