var express = require('express');
var router = express.Router();
var request = require('request');
module.exports = router;




router.get('/moloni', function (req, res, next){
    
    var options = {
    'method': 'POST',
    'url': 'https://api.moloni.pt/v1/products/getOne/?access_token=e6f00338b69912fe0ccc650c0ad461adbf32ffd8',
    'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'PHPSESSID=6ssm2i8198chkjgjhqv4ol58r2'
    },
    form: {
        'company_id': '207274',
        'product_id': '106538129',
        'name' : 'name'
    
    }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        return res.send(response.body);
        });
 
});


