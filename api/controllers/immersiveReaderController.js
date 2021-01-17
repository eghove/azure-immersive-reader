const router = require("express").Router();

// ROUTE TO GET TOKEN AND SUBDOMAIN FOR THE AZ IMMERSIVE READER RESOURCE
router.get('/gettokenandsubdomain', function (req, res){
    console.log('/gettokenandsubdomain called');
    res.send("This worked.");
});

module.exports = router;