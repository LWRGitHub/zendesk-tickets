// Get .env
require('dotenv').config()


// Setup request 
const request = require('request'),
    url = `https://${process.env.ZENDESK_DOMAIN}.zendesk.com/api/v2/requests.json`,
    auth = "Basic " + Buffer.from(process.env.EMAIL + ":" + process.env.PASSWORD).toString('base64');


// Do the request for tickets
const zendeskAPI = async () =>{
    return new Promise((resolve, reject) =>{
        let promises = [];

        promises.push(
            new Promise((resolve, reject) => {
                request(
                    // Setup auth
                    {
                        url : url,
                        headers : {
                            "Authorization" : auth
                        }
                    },
                    // Request results
                    function (err, res, body) {
                        if (res.statusCode === 200) {
                            resolve(JSON.parse(body)); 
                        } else {
                            // reject(err); //Use to debug errors
                            resolve({requests: [{subject: "Something Went Wrong", description:"The API was unable to handle your request. Try refreshing the page."}],count: 1})
                        }
                    }
                );
            })
        );
        Promise.all(promises).then((data) => resolve(data));
    });
}

// Export API Request
module.exports.zendeskAPI = zendeskAPI;