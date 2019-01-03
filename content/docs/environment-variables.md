---
title: "Enviroment Variables"
order: 5
---

## Config and enviroment(.env) files
Gatsby uses a standard to define [enviroment variables](https://en.wikipedia.org/wiki/Environment_variable) on his code.

You can provide environment variables to your site to customize its behavior in different environments. Gatsby Boilerplate offers two possible files: `.env.production` which is used to set environment variables on production and `.env.development` that can be used to set environment variables on development.

Gatsby Boilerplate uses the following environment variables:

- `ALGOLIA_API_KEY` is used to set the API Key for [Algolia search](https://www.algolia.com/doc/guides/security/api-keys/) service.
- `ALGOLIA_INDEX_NAME` is used to set another one necessary Algolia credential to use the service.
- `GA_TRACKING_ID` is used to set the tracking ID for Google Analytics track your app using `gatsby-google-analytics` plugin.
- `GITHUB_REPO` is used to make references of a repo that have been passed to some components like Footer, Navigation...
- `PROJECT_NAME` is used to define some titles on the page. Default value: `Gatsby Boilerplate`.
- `WEDEPLOY_AUTH_SERVICE_URL` is used to set your WeDeploy auth service URL. More info on this [link](https://wedeploy.com/tutorials/auth-web/get-started/)
- `WEDEPLOY_MASTER_TOKEN` is used to set your WeDeploy project's master token.

For more information to improve this file, check this [guide](https://www.gatsbyjs.org/docs/environment-variables/).