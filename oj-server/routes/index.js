var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',function(req,res) {
    // attention: diffrent with server.js, this _dirname only one underline
    res.sendFile('index.html', {root: path.join(__dirname, '../../public/')});
});

module.exports = router;
