# WS Single Page Demo (MEAN Stack)


### Overview

This single page demo renders a single HTML page where users can interact with product's images, quantities, and see prices, names and descriptions change as users select new products.
Additionally, on page load the client makes a request to the backend to retrieve mock data pre-seeded in the database

### Goals

- Demonstrate knowledge and understanding of different UI concepts, responsive web standards, and current industry technologies such as HTML5, CSS3, AngularJS, NodeJs and MongoDB.
- Demonstrate understanding and ability to build/consume Representational State Transfer (REST) resources.
- Hopefully, have the opportunity to exchange ideas, learn new concepts, and acquire knowledge from code feedback.


### Requirements

For running this demo, you will need to have NodeJS and MongoDB already installed in your computer.


## Steps for Running the Demo
  1. Uncompressed the file containing the project's files or clone [this repo from GitHub](https://github.com/altairn5/WSI-single-page-app.git).

  2. Once in the project's directory, run `npm install` to install the dependencies listed in `package.json`.

  3. After all dependencies have been installed, you will need to start Mongo and seed the database by running the following commands in the terminal.  


  - ```Mongod```
  - ```node seed.js``` (From the project's root directory)

  4) Run `npm start` to start the NodeJS server and demo page.

  5) After starting the server, navigate to http://127.0.0.1:3000/ or http://127.0.0.1:3000/

## Demo's Limited Functionality

  Currently for this demo, the client makes a `GET` request to the backend to fetch all products pre-seeded in the Database.

 Currently, `POST, DELETE AND PUT` requests are not handled.
