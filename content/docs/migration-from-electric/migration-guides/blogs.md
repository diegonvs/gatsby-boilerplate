---
title: "From Blog template"
order: 1
---

## Let's start migrating content from `Blog` Template:

We could migrate all our content to blog using the `content` folder as mentioned before.

> Note that Electric has the same possible values to be passed to the `frontmatter` of a post.

## Electric blog frontmatter example:
```markdown
---
title: "Markdown Post"
description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
date: "February 02, 2017"
author: "Author Name"
layout: "blog"
---
```
## Gatsby blog frontmatter example:
```markdown
---
author: Diego Nascimento
banner: images/flavor_wheel.jpg
date: 2016-12-17T15:04:10.000Z
description: The Coffee Taster’s Flavor Wheel, the official resource used by coffee tasters, has been revised for the first time this year.
title: Making sense of the SCAA’s new Flavor Wheel
---
```

## Changes:

frontmatter:
- `date` follow a date standard to Gatsby analyze and decode date. You can change time format on `date` query field on blog template file to another format, for example, from "MMMM DD, YYYY" to "DD MMMM, YYYY"
- `banner` is an optional `frontmatter` that can be used to expose a banner for the post on blog list of our blog.

> Note that we don't need to pass our values between quotation marks

Considering this, we can proceed just copying and paste our content from a markdown file into `blog` content folder.
