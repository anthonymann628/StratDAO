# 3omb Finance Interface

forked from https://tomb.finance

Thanks for taking the time to contribute!
You can start by reading our [Contribution guidelines](CONTRIBUTING.md) first.

## Setup

Install the dependencies

```shell
yarn
yarn start
```

Make sure you've configured your IDE with `prettier`.

You can reformat the project by running

```shell
npx prettier --write .
```

## Project structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **contexts** contains global contexts.
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.