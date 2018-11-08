const _ = require("lodash");
const products = require("../models/product");
let Product = products.Product;

LoadData = function(jsonData){
    productsArr = [];
    productsArr = _.map(jsonData, function(item) {
        return new Product(item.id, item.name);
    });

    return productsArr;
}

module.exports = {
    LoadData : LoadData
}