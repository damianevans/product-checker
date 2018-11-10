var data = require('./ProductDetails_en-GB.json');
var products = require('../models/product');
let Product = products.Product;
var _ = require('lodash');

var result = _.mapValues(data, function(item) {
    return new Product(item.id, item.name);
});

console.log(JSON.stringify(result));
//_.each(result, (item) => console.log(item));//

//base url = https://xxxx/product/catalogue/v3/summaries?productIds=2268156&store=en-GB&expand=variants&currency=GBP
