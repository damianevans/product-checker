const svc = require('../services/productsService');
const products = require('../models/products.json');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var foo = await svc.CheckProducts(products);
    console.log(foo);

    context.res = { body: JSON.stringify(foo)};
};