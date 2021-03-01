---
template: blog-post
title: Beanli
slug: /beanli
date: 2021-02-23 23:40
description: A Single Page Full-Stack Application that rewards customers with 'beans' for ordering at local coffee shops and allows store owners to manage incoming orders.
featuredImage: /assets/featured-beanli.jpg
---

[Check out the code on github](https://github.com/josepwil/beanli)

Beanli is a Single Page Full-Stack Application that rewards customers with 'beans' for ordering at local coffee shops and allows store owners to manage incoming orders.

Tech Stack: ReactJS, Node/Express, PostgreSQL, Webpack, Axios, Sass, Twilio, Stripe, Leaflet

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
