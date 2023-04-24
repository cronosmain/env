# env

## Description

Gets the environment variable or terminates the program execution.

## How to install?

```bash
npm install @cronosmain/env # or any other package manager
```

## What is it for?

I have forgotten countless times to specify the environment variable when running an application.

Usually nodejs does not react if `process.env` has no value by key and proudly returns `undefined`. Often such silly errors are hard to catch and understand why the application crashes after all. Often the error logs don't give any specifics about what happened. This simple library solves that problem.

```ts
import { app } from './app.ts'
import env from '@cronosmain/env'
// env() can be imported as default:
// import env from '@cronosmain/env'
// or as a named variable:
// import { env } from '@cronosmain/env'

// If it is defined, the value will be returned
// Otherwise the application will exit with
// status code 1 and a message in stderr (console.error)
app.listen(env('TCP_PORT'), () => console.log('Listening...'))

// You can pass the fallback as a second argument
let URL = env('SERVICE_URL', 'https://example.com')
```
