# Vue & Firebase Example

I wrote this project to showcase how to:
- Run firebase emulators without a firebase project
- Build functions in watch mode with emulators for hot reloading 
- Create a script to populate the Auth and Firestore emulators with fake data
- How to use vuefire and firebase to display firestore data and deal with user authentication

## How to Use

Clone the Repository

```bash
git clone https://github.com/ralacerda/vue-firebase-example.git
cd vue-firebase-example
```

Install dependencies using `pnpm`. If you don't have `pnpm`installed, try running `corepack enable` or follow the [official installing instructions](https://pnpm.io/installation).

```bash
pnpm i
```

Start the firebase emulators. Note that you need Node.js version 16.0 or higher and Java JDK version 11 or higher.
```bash
pnpm dev:emulators
```

After you see the sucess message that the emulators are ready, *in a new terminal*, run the following script to seed the database:
```bash
pnpm seed
```

Then start the vite development server
```bash
pnpm dev:vite
```

The app will be avaliable at http://localhost:5173/ and the Emulator UI should be avaliable at http://localhost:4000/

## Emulators

## Functions

Written in Typescript, are build in watch mode with the `dev:emulators` command

## Seed Script

Simple javascript script (I couldn't get `ts-node` to run it) that will seed create user for each of the Beatles member and seed the Firestore with fake companies created using Fakerjs.

## Vuefire

This repository shows how easy it's to set up vuefire to display realtime data and deal with user authentication.
