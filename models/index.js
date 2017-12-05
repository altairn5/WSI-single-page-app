
var mongoose = require('mongoose');
mongoose.connect(process.env.WSI_MARKUP ||'mongodb://localhost/wsi-markup');

var Product = require('./product');

module.exports.Product = Product;
