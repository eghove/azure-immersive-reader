const keys = require("../../keys");
const axios = require("axios");
// Needed this `qs` package to make axios play well with urlencoded forms. See https://www.npmjs.com/package/axios#using-applicationx-www-form-urlencoded-format
const qs = require("qs");

// insuring all secrets are strings.
const TENANT_ID = keys.TENANT_ID.toString();
const CLIENT_ID = keys.CLIENT_ID.toString();
const CLIENT_SECRET = keys.CLIENT_SECRET.toString();
const SUBDOMAIN = keys.SUBDOMAIN.toString();

module.exports = {
  // development function to throw secrets back to make sure they are reading in correctly.
  showSecrets: function (req, res) {
    const secrets = [TENANT_ID, CLIENT_ID, CLIENT_SECRET, SUBDOMAIN];
    return res.json(secrets);
  },
  // Took this with modifications to use axios instead of deprecated package `request` from: https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/quickstarts/client-libraries?pivots=programming-language-nodejs
  getCredentialsAxios: function (req, res) {
    const WINDOWS_LOGIN_URL = `https://login.windows.net/${TENANT_ID}/oauth2/token`;
    axios({
      method: "post",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: WINDOWS_LOGIN_URL,
      data: qs.stringify({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        resource: "https://cognitiveservices.azure.com/",
      }),
    })
      .then(function (response) {
        // parse the token
        const accessToken = response.data.access_token;
        if (accessToken !== null) {
          const returnObject = {
            access_token: accessToken,
            subdomain: SUBDOMAIN,
          };
          return res.json(returnObject);
        } else {
          return res
            .status(500)
            .send("There was an error in parsing the access token.");
        }
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send("CogSvcs IssueToken Error.");
      });
  },
};
