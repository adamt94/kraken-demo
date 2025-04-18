# Notes

 - I implemented the product using the product id for the url so navigating
to /product/1 will get correct product

- I added a fake add product request to signal loading state and left 
the basket as an icon ideally would go to the basket page


- I update the packages and added tailwind for styling. I also used zustand for keeping
  the state basket information

Most of the code lives in the `src` folder and looks something like this:

````sh
src
|
+-- app               # application layer containing: route pages
|   +-- page.tsx       # main page component
|   +-- provider.tsx  # application provider that wraps the entire application with different global providers
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules I used onboarding as the main feature for this app
|
+-- hooks             # shared hooks used across the entire application
|
+-- stores            # global state stores
|
+-- types             # shared types used across the application
|
+-- styles            # shared  styles such as globals.css
|
+-- utils             # shared utility functions
````


<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend code test

In this code test, you'll be asked to:

- Make a simple React app that follows the design in `design.jpg`, consumes the API and makes the front end tests pass. Ideally the app should be responsive.

We've included:

- A sample [Next.js](https://nextjs.org/) project with a Typescript setup for your convenience, but you're welcome to swap it out for another framework if you prefer
- Some CSS colour variables that match the colours in the design
- The assets that you will need to complete the design

You're also welcome to write more tests for other parts of the application - but design those however you like.

## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
cd client && pnpm
```

## Start the app

```sh
pnpm dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && yarn test
```

This should give you two failures:

```sh
FAIL test/product.test.js
    ✕ should be able to increase and decrease product quantity
    ✕ should be able to add items to the basket
```

The task is to build the app that passes these tests.

## What we're looking for

We would like you to demonstrate your ability to:

- Reason through a programming problem
- Implement a visual design
- Implement some user interactions
- Write code that is easy to understand and extend
- Write tests that document and safeguard the program's behaviour
- Use a version control system (e.g. git) to effectively convey intent
- Write Typescript typings for the components you create, and also the typings for the GraphQL API response

Notes:

- This has not been set up with any type of CSS-in-JS, but if that is something you would like to add, please feel free.

Best of luck!
