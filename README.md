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

```bash
docker run -d \
  -p 27017:27017 \
  -v $(pwd)/lib/init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js:ro \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=example \
  mongo

```

Run Docker with MongoDB instance:

```
docker compose up -d
```

```
docker ps
```

Stop container:

```
docker compose down
```

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

### 2. Style solution

My choice of Next immediately backfired, in a view to make my API a self-documenting one I forgot the complexities added by having the option of easy SSR with Next and Vercel. This meant I was burrowing down for the edge case of a working example or Emotion, with Next, with SSR, in these particular versions of React and Emotion. This has been shockingly turbulent over the last few versions and after spending too long on what should have been "out-of-the-box" I instead decided to not use SSR in my client-side components.

Had I known this, I think I would instead use Material-UI with Tailwind for inline styles, considering this is a faster prototyping project, but I think for a larger project I was more along the right track here.

### 3. Setup Xstate

A take home task is a great time to try something new, and I haven't used xState before but Finite State Machines feels like something that should be part of state anyway. This seems to be a viable replacement to Redux in a newer app, but at the same time the conflation between Redux, Flux, xState and beyond keeps reworking similar ideas so while I can track it enough now to implement a basic button, it will be interesting to see if this helps my project.

### 4. Setup MongoDB

MongoDB was a requirement, and is what I'm use commonly as Next.js + MongoDB covers most use cases I face. I'm normally required to interact with MongoDB, but not code it myself so I anticipate needing some helper scripts to "reset" and "populate" this database as part of the front-end.

I use WSL, as I'm on a Windows machine for now and setting this up with MongoDB is a pretty awful experience. Luckily, since a later requirement is to move over to a Docker script I'm bringing that in now.
