# Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

This project uses Typescript, Sass for styles.
It contains some basic components. Each component is a TSX file and a .module.scss file that is associated to the component.

## How to run on local machine

1. Create a `.env.development` file
    - Make `.env.development` file by copy from `.env.example`
2. Edit env config
    - Change API url to `http://localhost:8003` if you run API on the same machine
    - Install dependency:
    ```
    npm install
    ```
    - Run:
    ```
    npm run dev
    ```
    Access at: `http://localhost:3000`

## How to build production

1. Create a `.env.production` file
2. Edit env config
3. Run
    ```
    npm run build
    ```

## Folder Structure

Use `kebab-case` for all files and folders in this project.

```
├──
│   ├── apis
│   ├── components
│   ├── elements
│   │   ├── button
│   │   ├── input
│   │   ├── ...
│   ├── constants
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── stores
│   ├── utils
│   ├── styles
```

* `apis`: API call functions for each feature which is store in separately file such as src/api/user.ts ...
* `components`: Contains components of app
* `elements`: Generic and reusable across the whole app (Button, Input ...)
* `constants`: Define constant variable
* `hooks`: Contains common utility hooks
* `pages`: Contain all the pages with router define by sub folder and file name
* `services`: All the common services, eg. storage, api, etc
* `stores`: Manage redux state
* `utils`: Contains util and helper function
* `styles`: All common styles (css) or theme (sass)

## Note

1. Use aliases for import statements. You can configure module aliases via `tsconfig.json`

    ```
    import Home from '@components/home';
    ```

2. Use component-level Sass via CSS Modules and the `.module.scss`. Use `rem` unit for defining most sizes, you can use function `pxToRem` in `styles/function` to convert pixels to the CSS unit REM

3. Authentication Providers
    * Use a re-usable higher-order function for the authentication logic.
    
    * Client-side authentication: You can find HOCs in `components/auth` You can use it to wrap the `AuthenticationPage` directly
    
    ```
    export default withAuthComponent<TProps>(PageProfile);
    ```
    
    * Server-side authentication: Use HOCs in `utils/request`. The function will continue on to call the wrapped getServerSideProps function, and will return the merged user data with the resulting props from the page.
    
    ```
    type TProps = InferGetServerSidePropsType<typeof getServerSideProps>;

    export const getServerSideProps = withAuthServerSideProps<{ user: IUserInfoPublic | null }>(async () => {
        const [ user, error ] = await apiUser.getProfile();
        if (error) {
            throw error;
        }
        return {
            props: { user: user?.data ?? null },
        }
    })
    ```