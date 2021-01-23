const router = require("express").Router();
const azImmersiveReaderCredServices = require("../services/azImmersiveReaderCredService");
// ROUTE TO GET TOKEN AND SUBDOMAIN FOR THE AZ IMMERSIVE READER RESOURCE
// ENDPOINT = "/api/azimmersivereader/gettokenandsubdomain"
router.get("/gettokenandsubdomain", function (req, res) {
  //azImmersiveReaderCredServices.showSecrets(req, res);
  azImmersiveReaderCredServices.getCredentialsAxios(req, res);
});

module.exports = router;
