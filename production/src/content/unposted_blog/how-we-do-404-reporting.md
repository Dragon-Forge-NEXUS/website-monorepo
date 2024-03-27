---
title: "How we do error 404 reporting"
pubDate: 2024-03-25
description: "Information on DragonForgeCode's Error 404 reporting method"
author: "Altie"
image:
  url: "/imgs/blog/how-we-do-404-reporting/thumbnail.jpg"
  alt: "DragonForgeCode Banner"
tags: ["Code"]
---

To begin, we prioritize transparency within our operations, hence, I would like to elucidate the mechanics of 404 error reporting on our websites.

Across all official DFN sites, we adhere to a standardized approach, while for FYTS websites, 404 reporting is not implemented.

## How does our 404 reporting function?

Initially, when a user encounters a 404 error path, which is a routine occurrence often facilitated by web crawlers, the process initiates.

Subsequently, upon loading the 404 page, a request is dispatched to a designated file, typically denoted as 404.ts. This file undertakes the task of identifying the origin of the 404 error, typically denoted by the URL, for instance, /dragon.

Following this, the TypeScript file proceeds to relay both the user agent and the path to two additional files. These files, in turn, forward the error path to the [DFC Discord server](https://code.dragonforgenexus.xyz/discord). It's noteworthy that access to the designated channel is restricted solely to DFN Staff and Maintainers, emphasizing its non-public nature.

The transmission of the message occurs via one of two methods: a Discord Webhook or a Discord Bot integrated within the website.

Below illustrates the information presented:

```
404 page reached:
https://nightly.dragonforgenexus.xyz/assets/fire_admin/images/logo.png

UserAgent:
Mozilla/5.077692140 Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko
```

Importantly, no personally identifiable information is collected.

Although some web crawlers' addresses are logged, here are a few commonly encountered ones:

```
https://discordapp.com/
http://www.semrush.com/bot.html
http://www.google.com/bot.html
```

Concluding, the primary objective of this communication is to elucidate our 404 reporting mechanism. It's imperative to note that there's no necessity for you to report in any Discord channels, as we capture all routes comprehensively.

Altie  
Head Dragon, DragonForgeNEXUS

