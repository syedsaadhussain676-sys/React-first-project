# How to set up a new React Project using parcel

- create a folder and create index.html,styl.css,main.js
- link main.js,style.css to index.html
- create a div with id="root" for react
- npm init 
- npm i react react-dom
- npm i -D parcel
- package.json > remove "main" change "type" to "module" add type="module" attr to src tag
- In main.js import React and ReactDOM
- ReactDOM setup
- create RootLayout in root.render()
- serve using parcel
- npx parcel index.html
- add scripts


## High level design
### header
- Logo
- search-bar
- nav-links
    - Home
    - About-us
    - Contact-us
    - Cart 