// Get .env
if (!process.env.PORT) {
    require('dotenv').config()
}

// Setup request 
const request = require('request'),
    username = process.env.EMAIL,
    password = process.env.PASSWORD,
    url = `https://${process.env.ZENDESK_DOMAIN}.zendesk.com/api/v2/requests.json`,
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

// Do the request for tickets
request(
    {
        url : url,
        headers : {
            "Authorization" : auth
        }
    },
    function (err, res, body) {
        if (res.statusCode === 200) {
            console.log(JSON.parse(body));
        } else {
            reject(err);
        }
    }
);