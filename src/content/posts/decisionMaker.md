---
template: blog-post
title: Decision Maker
slug: /decisionMaker
date: 2021-01-22 23:40
description: Decision Maker is a Full Stack application that helps users make decisions byy creating and sharing Polls.
featuredImage: /assets/featured-decisionMaker.png
---

Decision Maker is a Full Stack application that helps users make decisions by creating and sharing polls with their friends, the results are then visualized using graphs.

Tech Stack: JS, jQuery, AJAX, Node/Express, Postgres

[Click here to check out the code on github](https://github.com/josepwil/DecisionMaker)

## Final Product

Home page (SPA) showing all polls created using the application:
!["Home Page"](https://github.com/josepwil/DecisionMaker/blob/master/screenshots/homepage.png?raw=true)

Results for specific poll rendered as a graph using canvas.js, option on hover also shows where each voter ranked it:
!["Specific Vote Page"](https://github.com/josepwil/DecisionMaker/blob/master/screenshots/specificresult.png?raw=true)

Form to create a new poll:
!["New Poll Form"](https://github.com/josepwil/DecisionMaker/blob/master/screenshots/newpollform.png?raw=true)

Email send using mailgun api notifying creator their new poll was created (They also receive one when someone votes):
!["Email Confirmation"](https://github.com/josepwil/DecisionMaker/blob/master/screenshots/emailconfirmation.png?raw=true)

Voting screen where voters can click and drag options into their preferred order using sortable.js:
!["Voting Screen"](https://github.com/josepwil/DecisionMaker/blob/master/screenshots/voteform.png?raw=true)
