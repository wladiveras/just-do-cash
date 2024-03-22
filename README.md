# Saas Landing Page

A Sass landing page designed to showcase your product subscription service, with built-in security features. Additionally, it provides a simple dashboard for you to easily monitor all sales and subscriptions.

![fintech](https://i.imgur.com/dXriMYn.png)

## Setup

Step to setup project in your machine.

### node setup

Skip this step if you already use node 21
Install NVM by downloading the install script from their GitHub page. You can use curl or wget:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

#or

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Now, you can install a specific version of Node.js using NVM. For example, to install Node.js 21, you would use:

```bash
nvm install 21
```

You can switch between installed Node versions with:

```bash
nvm use <version>
```

### project setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [nuxt 3 documentation](https://nuxt.com/docs) and [nuxt UI](https://ui.nuxt.com/getting-started/) for more information.

## Utils Links

[iconify icons](https://icon-sets.iconify.design/)
[Tailwind css](https://tailwindcss.com/docs/)
[Animate Style css](https://animate.style/)

## Licence

[MIT](./LICENSE)
