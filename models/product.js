
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

  /****************
  * PRODUCT SCHEMA *
   ****************/

var  ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  images: {
      lg: {
        data: Buffer,
        contentType: String
      },
      sm:{
        data: Buffer,
        contentType: String
      }
  }
})

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
