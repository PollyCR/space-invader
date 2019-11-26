# Space Invader
An app displaying space-related information featuring a chatroom for real-time space discussion with other users.

Here is a link to a live version: http://space-invader.herokuapp.com

# Prerequisites
Space Invader has been built and deployed on macOS.

In order to run this project on your own machine you will first need to install node-package-manager (npm). This was built with npm v 6.13.1.

You can then fork and clone this directory onto your machine, open the root directory in your terminal and run

> npm install

to install all dependencies.

Then you can fire up the development server by running:

> npm start


The frontend has been configured to send requests to the live backend. 
If you would like to change the endpoint, the base URL settings are located at /src/adapters/BackendAdapter.js

# Built With

## Frontend
This project was bootstrapped using create-react-app.

JavaScript

HTML

CSS

React

Node.js + NPM

React Router DOM

React Scroll to Bottom

Rails' ActionCable package

Some styling done with Semantic-UI-React

Deployed via Heroku

## Backend 
Ruby

Rails (Initialized as API-only using 'rails new')

Postgres

Redis Gem for ActionCable in production

ActionCable for WebSockets protocol

Active-Model-Serializers for data serialization

BCrypt for password authentication

Rack-Cors for CORS

JWT for user Auth (saved in Local Storage)

Deployed via Heroku

# Authors
Polly Reynolds - www.github.com/pollycr

Oliver Burt - www.github.com/oliburt

