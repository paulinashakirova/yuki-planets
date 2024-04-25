# yuki-planets

This template should help get you started with the Planets project.

## IMPORTANT

In the stores you will see 2 functions:
The first one fetches planets from swapi.dev and another one that "fetches" local data with a delay.

    Why? Because on the first day the swapi was working, but since day two I see
    > Your connection is not private

And I couldn't access it anymore, so replacing with local data was my "damage control" solution.
In case swapi works for you: 1. rename `data2` to `data` on line 19 2. rename `data` to `data2` on line 49 3. uncomment line 29 4. comment out line 30
This should (I couldn't really test it) change the data origin to fetch the real planets.

And the other important point

Unfortunately, I didn't have time to fix loading pages when manupulating url using local data.

## Project Setup

Check that you have correct versions on node and npm inside .npmrc and .nvmrc files

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

General notes 2. Make styles more interesting harnessing the power of Tailwind (which I absolutely love)

Further ideas

- add darkmode
- error page instead of component
- pagination
- mock and test router
- loading state with a nice spinner while loading planets
- load page with correct data when changing url params
