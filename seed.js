
var db   = require("./models"),
    fs   = require("fs"),
    path = require("path"),
    items = [];


  /****************************
  *  MOCK DATA and ASSETS PATH *
   ****************************/


var imgPath = "./public/assets/product-%s.jpg";


items.push({
      name: "Williams-Sonoma Classic Apron, French Blue",
      price: 1995,
      description: "This section is expanded. This section can be collapsed by clicking on the “Expanded” text. This section is expanded. This section can be collapsed by clicking on the “Expanded” text.",
      images:{
          lg:{
            data:  fs.readFileSync(imgPath.replace('%s', 'large-a')),
            contentType: 'image/jpg'
          },
          sm:{
            data: fs.readFileSync(imgPath.replace('%s', 'small-a')),
            contentType: 'image/jpg'
          }
      }
    },
    {
      name: "Williams-Sonoma Classic Apron, Striped Gray",
      price: 1595,
      description: "This section is expanded. This section can be collapsed by clicking on the “Expanded” text. This section is expanded. This section can be collapsed by clicking on the “Expanded” text.",
      images:{
          lg:{
            data:  fs.readFileSync(imgPath.replace('%s', 'large-b')),
            contentType: 'image/jpg'
          },
          sm:{
            data: fs.readFileSync(imgPath.replace('%s', 'small-b')),
            contentType: 'image/jpg'
          }
      }
    },
    {
      name: "Williams-Sonoma Classic Apron, Striped Yellow",
      price: 2197,
      description: "This section is expanded. This section can be collapsed by clicking on the “Expanded” text. This section is expanded. This section can be collapsed by clicking on the “Expanded” text.",
      images:{
          lg:{
            data:  fs.readFileSync(imgPath.replace('%s', 'large-c')),
            contentType: 'image/jpg'
          },
          sm:{
            data: fs.readFileSync(imgPath.replace('%s', 'small-c')),
            contentType: 'image/jpg'
          }
      }
    },
    {
      name: "Williams-Sonoma Classic Apron, Striped Red",
      price: 2195,
      description: "This section is expanded. This section can be collapsed by clicking on the “Expanded” text. This section is expanded. This section can be collapsed by clicking on the “Expanded” text.",
      images:{
          lg:{
            data:  fs.readFileSync(imgPath.replace('%s', 'large-d')),
            contentType: 'image/jpg'
          },
          sm:{
            data: fs.readFileSync(imgPath.replace('%s', 'small-d')),
            contentType: 'image/jpg'
          }
    }
  })


  /***************************
  *  SEEDS DB WITH MOCK DATA  *
   ***************************/


db.Product.remove({}, function(err, products){

  db.Product.create(items, function(err, items){

    if(err){
      return console.log("Error: ", err);
    }

    console.log("products:", items);
    console.log("created", items.length, "items");
  });

});
