# Payment Gateway - Dashboard

A payment gateway dashboard is a centralized platform for managing online transactions. It provides real-time data, supports multiple payment methods, ensures secure transactions, and offers robust reporting and analytics tools. It's user-friendly, making payment processing efficient and insightful.A payment gateway dashboard.

![fintech](![image](https://github.com/wladi-veras/saas-landing/assets/27956518/905c23b5-65ed-427a-aca5-71b23d5c8a87)
)

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

## Licence

[MIT](./LICENSE)
