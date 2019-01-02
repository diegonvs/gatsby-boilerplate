---
title: "Additional Features"
order: 3
---

## Auth
If you want to restrict a page, you can use `needsAuth` frontmatter on the top of any markdown file. When you set to true, this page will be restricted for private users only.

This authentication is provided by a [WeDeploy Auth](https://wedeploy.com/docs/auth/getting-started/) service that can be set on a `.env.production` or `.env.development` file. These files configuration will be explained in the next section.

## Progressive Web App support
Gatsby Boilerplate is a Progressive Web App,  if you aren't familiar with this term, check this [link](https://developers.google.com/web/progressive-web-apps/).

During the development, this boilerplate was battle tested to turns it into a real PWA covering all  [PWA checklist](https://developers.google.com/web/progressive-web-apps/checklist).

We could personalize our [progressive web app manifest file](https://developers.google.com/web/fundamentals/web-app-manifest/?hl=en) changing the values on `Gatsby-config.js` file. 

>PS: this files will be created only in build time when you perform a `gatsby build`.

## Offline Support
We could personalize what type of files we can cache on `Gatsby-config.js` file on `gatsby-plugin-offline` options. 
Default extensions are: `js,jpg,png,gif,html,css,svg`

## GZIP compression
If you want to disable the default zopfli plugin to compress our files just remove `gatsby-plugin-zopfli` on `Gatsby-config.js`.


## Config and enviroment(.env) files
Gatsby uses a standard to define [enviroment variables](https://en.wikipedia.org/wiki/Environment_variable) on his code.

You can provide environment variables to your site to customize its behavior in different environments. Gatsby Boilerplate offers two possible files: `.env.production` which is used to set environment variables on production and `.env.development` that can be used to set environment variables on development.
