---
title: "From Docs template"
order: 2
---

## Let's start migrating content from `Docs` Template:

> *special thanks for [Matuzalém Teles](http://github.com/matuzalemsteles) who developed a part of this template on clayui.com*

We have 2 possible use cases for Docs navigation:
- We could create a section that is used as a page too.
- We could create a tree of sections that can be used to nest sections and pages.

### Changes:
frontmatter:
- `redirect` is an optional `frontmatter` that can be used to redirect a route or page to another. When you are trying to access a page route, this page will redirect you for another that had been described on `redirect` frontmatter.

Search Component:
- Seach Component was removed because isn't working in an adequated way. [Algolia search](https://www.algolia.com/) was inserted to provide this search service. To enable Algolia search on your template you can set `ALGOLIA_API_KEY` and `ALGOLIA_INDEX_NAME` environments variables on .env files.

> If you don't provide any ALGOLIA enviroment variables, search component will not render in production mode.

More info you could view .env files section

> We could use Code Tabs with an option to copy our code using the default markdown code notation.
For example:
```
	```javascript
	function dale() {
	    console.log('oiw');
	}
	```
```
