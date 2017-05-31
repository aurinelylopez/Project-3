# BAO! - PROJECT #3
-----------
## 1-BAO is a multiple choice quiz . In each round, players will be answering a multiple choice questions choosen randomly. Players will each have to answer the question in the allocated input field correctly to win.

### Instructions
----------
Upon loading, questions will render and the user selects answer desired.

## Mockups & Wireframes
----------

![Alt Image](http://i.imgur.com/gpznN5I.png)

![Alt Image](http://i.imgur.com/dYtPRer.png)



## User Stories
----------
As a user, I want a question to render, to be able to answer the multiple choice question and to have a final result.

## ERD
----------
![Alt Image](http://i.imgur.com/iBNxhqE.png)

## Components and their global purpose
----------
Test ——>Container component for questions, answers and score.

Baoquestion——>component rendering quiz questions.

Answerchoices —> component responsible for rendering the answers available to the user.

Baoscore —> component responsible for rendering and keeping track of score.

## Technologies Used / NPM Modules
-----------
* CSS
* JavaScript
* PostGres
* Express (Deployed with Heroku)
    * Dependencies used:
        * Nodemon - Auto-refresh the server on code change.
        * Axios - Promise based HTTP client for the browser and node.js.
        * EJS - Client-side templating language 
        * PG-Promise - promise based library that allows to query your database using Javascript.
        * Bluebird - Bluebird is a fully featured JavaScript promises library
        * CORS - Cross-origin resource sharing (CORS) is a mechanism 
* React (Deployed with Now) - Build encapsulated components that manage their own state, then compose them to make complex UIs. 
    * Dependencies used:
        * React-Router - Declarative routing for React.
        * Create-React-App - 

## Download Project & Install
----------------
Git clone or download this project and cd into via terminal. On your terminal run npm run dev, app should be available on localhost:3000 

## Tutorials and other resources
----------------
https://github.com/bonham000/react-quiz-app
