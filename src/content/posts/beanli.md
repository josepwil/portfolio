---
template: blog-post
title: Beanli
slug: /beanli
date: 2021-02-23 23:40
description: A Single Page Full-Stack Application that rewards customers with 'beans' for ordering at local coffee shops and allows store owners to manage incoming orders.
featuredImage: /assets/featured-beanli.jpg
---

Beanli is a Single Page Full-Stack Application that rewards customers with 'beans' for ordering at local coffee shops and allows store owners to manage incoming orders.

Tech Stack: ReactJS, Node/Express, PostgreSQL, Webpack, Axios, Sass, Twilio, Stripe, Leaflet

[Click here to check out the code on github](https://github.com/josepwil/beanli)

## Walkthrough

!["Walkthrough Gif"](https://github.com/josepwil/portfolio/blob/main/static/assets/walkthrough-beanli.gif?raw=true)

## Features

- A customer can filter nearby stores by distance
- A customer can see their current beans and lifetime earnings
- A customer can see their tier / which is impacted by lifetime earnings
- A customer can select a store and see the menu
- A customer can add / remove items from their cart
- A customer can 'grind' some of their beans to reduce the total price or (if they have enough beans) get their order for free
- A customer can checkout using Stripe
- A customer can see confirmation of their order, an estimated completion time and a map marked with the coffee shop location
- A customer will earn beans if they paid money for their order
- The rate at which a customer will earn beans will be impacted by the accelerator associated with their current tier
- A customer will receive an SMS when their order is ready
- A customer can see their previous orders and reorder

- A store owner can see when they have a new order
- A store owner can mark the order as completed by dragging and dropping it into the completed section which will send an SMS to the customer

## Development Process

### The Idea

I am fan of the rewards systems offered by companies like Starbucks/Tim hortons, but of course those rewards are only limited to those particular stores. I also like trying new places and local coffee shops in particular.

Beanli seeks to solve that problem through a reward based system whereby a user can earn 'beans' at any store on the app and redeem those 'beans' at any store too, in order to discount the total price of their order.

### User Stories

We mapped out all of the features and what we thought a user should be able to do using the application both from the customer and store owner's perspective.

### The Tech Stack

We came together as a group to decide on what the appropriate stack was for the features we intended to implement. As well as any additional libraries we would need to use / APIs we would need to interact with.

### ERD

We spent some time designing our database by creating an ERD, which you can see below.
![ERD](/assets/beanli-erd.png)

### The Routes

After finalizing our ERD we followed Restful practices to plan out our routes.

### Wire Frames

We created some basic mock ups of the design/layout of our UI using figma, one such example is below.
![Wireframe](/assets/beanli-wireframe.png)

### Stand Ups

We had 2 daily stand ups, one at the start of the day and one at the end to keep track of each others progress or any difficulties that anyone was facing. We would also pair program any particularly difficult road blocks.

### Development

We leveraged github projects to break development down into small sections, we would select an issue from the project board, create a branch and work on that issue. Upon finishing work on that branch we would submit a pull request that had to be approved by another team member before it was merged into the main branch.
