# Jeison Castañeda's Trainning By Condorlabs.io
[![N|Solid](https://c.na65.content.force.com/servlet/servlet.ImageServer?id=0150h0000056P9rAAE&oid=00DE0000000c48tMAA)](https://Condorlabs.io)


# Study plan and scafolding

##### HTML, CSS, and Javascript

  - HTML Fundamentals - Views Folder
  - Introduction to CSS - Public/assets/css folder
    JavaScript: Basics - Public/assets/js folder
    Javascript, Axios vs. Fetch? - Public/assets/js folder

##### NODEJS

  - Understanding Node.js & Express.js fundamentals - index.js, app.js, api folder, middlewares folder, helpers folder  


# Install and run

##### Requirements
    - Nodejs v10 up
##### Install
    - run npm in stall command
##### Run
    - run npm start command


# For Graphql
  - The api have single responsability for each of the models and you can access for the graphql of each model on the /api/v1/:{api_path}/graphq
  ```JavaScript
    mutation { 
    quoteCreateOne(record: {clientName: "Hola!", total: 22}) {
      recordId
    }
    }
    query {
      findQuoteById(_id:"5fe1a7c8ddb90c190e83680b") {
        clientName
        total
      },
      findQuotes(filter:{total:22}, skip:0, limit: 10) {
        clientName
        total
      }
      paginateQuotes(filter:{total:22}) {
        count
      }
    }
  ```
  

