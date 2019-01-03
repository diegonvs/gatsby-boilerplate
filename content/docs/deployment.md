---
title: "Deployment"
order: 4
---

# Deployment on Cloud

Hey, it's great to see you here! 💖

Here, in this article, I'll teach you how to deploy your website started from Gatsby Boilerplate on [WeDeploy](https://wedeploy.com).

> # TL;DR
> This guide teach you how to deploy using WeDeploy, but you can use the same strategy of deployment exposing `public` folder to your favorite host folder.

### WeDeploy

#### #1 Build your production files

> The first step is to build for production your web app if you have `gatsby` installed globally you just need run `gatsby build`. If not, you can just run `yarn build` script.

#### #2 Create an account and create Hosting and Auth WeDeploy services

> The second step is to create your account or if you have it, create a new project containing a new WeDeploy Hosting service and a WeDeploy Auth service.

#### #3 Create or update existing `wedeploy.json` files

> The third step is to verify our `wedeploy.json` files. First, open the `static/` folder and set `wedeploy.json` file to the WeDeploy service-id that you have created:

```json
{
	"id": "<your-hosting-service-id>",
	"image": "wedeploy/hosting:2.0.1"
}
```

> After that, enter on `static/auth` folder and change auth `wedeploy.json` too.

```json
{
    "id": "<your-auth-service-id>",
    "image": "wedeploy/auth:2.8.0",
    "env": {
        "WEDEPLOY_AUTH_SECURE_FIELDS": "providers, email, password, resetKey, supportedScopes",
        "WEDEPLOY_AUTH_PASSWORD": "true"
    }
}
```

For more information configuring this `wedeploy.json` for auth service, check this [link](https://wedeploy.com/docs/auth/getting-started/).

#### #4 Fire!

_Considering that you have installed `wedeploy` command line interface, if not, check this [link](https://wedeploy.com/docs/intro/using-the-command-line/)_

Just fire 'we deploy' on `public/` and on `public/auth` folder to deploy your Gatsby Boilerplate instance to the cloud and see magic happening 

🔥 🔥 🔥 🔥 🔥 🌈 🌈 🌈 🌈 🌈
