# env

## Description

Sets variables from the .env file. Allows to get them safely.

## How to install?

```bash
npm install @cronosmain/env # or any other package manager
```

## What is it for?

I have forgotten countless times to specify the environment variable when running an application.

Usually nodejs does not react if `process.env` has no value by key and proudly returns `undefined`. Often such silly errors are hard to catch and understand why the application crashes after all. Often the error logs don't give any specifics about what happened. This simple library solves that problem.

## .env file

The first time you import from this library, a side effect is performed. It will find the .env file in your current working directory and install the variables from there. If the file doesn't exist (e.g., in a production run), it won't do anything.

### Examples of .env file syntax:

```
# Values must be set in double quotes, not single quotes.
VAR1 = "value"
VAR2="value"
VAR3 ="value" # comment
# VAR4 ="value" | will not be set because it is a comment
```

## How to use?

```ts
import { app } from './app.ts'
import env from '@cronosmain/env'
// env() can be imported as default:
// import env from '@cronosmain/env'
// or as a named variable:
// import { env } from '@cronosmain/env'

// If var is defined, the value will be returned
// Otherwise Error-like object will be thrown
app.listen(env('TCP_PORT'), () => console.log('Listening...'))

// You can pass the fallback as a second argument
let URL = env('SERVICE_URL', 'https://example.com')
```
