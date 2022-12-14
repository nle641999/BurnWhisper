# BurnWhisper

## Description

The application will allow users to participate in active discourse with their fellow collegues about their universities. For example, one user can make a post commenting about how the food at the HUB had roaches, and then other users will be able to make comments as well as upvoting the post. With this in mind, there will be three pages in use: the home page, the login/sign-up page, and the user profile page. 

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Mock-Up](#mock-up)
- [Tentative-Entity-Relationship-Diagram](#tentative-entity-relationship-diagram)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)

## User Story
```md
AS A user
I WANT to be able to have discourse with my colleagues about my university or school
SO THAT I can express my thoughts and opinions
```

## Acceptance Criteria
```md
GIVEN the homepage of BurnWhisper
WHEN I am not logged in
THEN I cannot interact with any post OR comment
WHEN I am not logged in
THEN I can click on the LOGIN button to login
WHEN I do not have an account
THEN I can click sign up to make an account
WHEN I am logged in
THEN I can create, add, and update posts and comments
WHEN I am logged in
THEN I can view my profile and view all of my previous posts
WHEN I am logged in
THEN I can click on school insignias to view their posts
WHEN I want to sign out
THEN I can click LOGOUT to sign out
```

## Installation
If copying repo, make sure to `git clone` the repo, and then type `npm i` in the terminal to install dependencies

## Mock-Up
<img src = "./assets/mockup.png" >

## Tentative Entity Relationship Diagram
<img src = "./assets/Screenshot_16.png">

## Usage
The application allows a user to create a profile and then update the forum with their own posts and comments. The website is geared towards individuals still in school specifiaclly colleges, and is a space for them to spill their thoughts on the school they are attending. 

## Technologies
- bcrypt
- connect-session-sequelize
- cookie-parser
- dotenv
- express
- express-flash
- express-handlebars
- express-session
- mysql2
- sequelize
- (*NEW*) bootflat (*NEW*)

## Credits
Worked on in collaboration with ALEX HSIEH, ORAAN LEVI, and NICHOLAS LE