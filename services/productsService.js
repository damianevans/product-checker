var _ = require('lodash');
var request = require('request-promise');

async function CheckProducts(productsArray) {

    for(var x=0; x<productsArray.length;x++){
        var data = await DoLookup(productsArray[x]);
        productsArray[x].status = data.statusCode;
        productsArray[x].isValid = JSON.parse(data.body).length ? true : false;
    }
   return productsArray;
}
    

async function DoLookup(productItem) {
    var options = {
        method: 'GET',
        uri: productItem.url,
        resolveWithFullResponse: true
    }
    return await request(options).then(function(response) {
        return response;
    });
}

module.exports = {
    CheckProducts : CheckProducts
}