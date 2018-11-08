var productData = require('../models/products.json');
var products = require('../models/product');
var dataSvc = require('../services/loadData');
var productSvc = require('../services/productsService');
var loadDataService = dataSvc.LoadData;
var checkProductData = productSvc.CheckProducts;

var products = loadDataService(productData);
var foo = checkProductData(products);
console.log('done');