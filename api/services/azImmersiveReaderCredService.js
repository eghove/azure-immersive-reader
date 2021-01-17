const keys = require("../../keys");
const request = require("request");
const axios = require("axios");
const qs = require("qs");

const TENANT_ID = keys.TENANT_ID.toString();
const CLIENT_ID = keys.CLIENT_ID.toString();
const CLIENT_SECRET = keys.CLIENT_SECRET.toString();
const SUBDOMAIN = keys.SUBDOMAIN.toString();

module.exports = {
    // development function to throw secrets back to make sure they are reading in correctly.
    showSecrets: function (req, res) {
        const secrets = [TENANT_ID, CLIENT_ID, CLIENT_SECRET, SUBDOMAIN];
        res.json(secrets)
    },
    // Took this with superficial modications from: https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/quickstarts/client-libraries?pivots=programming-language-nodejs
    getCredentials : function (req, res) {
        const WINDOWS_LOGIN_URL =  `https://login.windows.net/${TENANT_ID}/oauth2/token`;
        try {
            request.post({
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                url: WINDOWS_LOGIN_URL,
                form: {
                    grant_type: 'client_credentials',
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    resource: 'https://cognitiveservices.azure.com/'
                }
            },
            function(err, resp, tokenResult) {
                if (err) {
                    console.log(err);
                    return res.status(500).send('CogSvcs IssueToken error');
                }
    
                var tokenResultParsed = JSON.parse(tokenResult);
    
                if (tokenResultParsed.error) {
                    console.log(tokenResult);
                    return res.send({error :  "Unable to acquire Azure AD token. Check the debugger for more information."})
                }
    
                var token = tokenResultParsed.access_token;
                var subdomain = SUBDOMAIN;
                return res.send({token, subdomain});
            });
        } catch (err) {
            console.log(err);
            return res.status(500).send('CogSvcs IssueToken error');
        } 
    },
    // bringing back axios since request is deprecated.
    getCredentialsAxios : function(req, res) {
        const WINDOWS_LOGIN_URL =  `https://login.windows.net/${TENANT_ID}/oauth2/token`;
        axios({
            method: "post",
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            url: WINDOWS_LOGIN_URL,
            data: qs.stringify({
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                resource: 'https://cognitiveservices.azure.com/'
            })
        })
        .then(function (response){
            res.json(response.data)
        })
        .catch((error) => {
            res.status(422).json(error);
        })
    }

}