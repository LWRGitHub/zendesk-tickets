// Get .env
require('dotenv').config()


// Setup request 
const request = require('request')
    url = `https://${process.env.ZENDESK_DOMAIN}.zendesk.com/api/v2/requests.json`,
    auth = "Basic " + new Buffer(process.env.EMAIL + ":" + process.env.PASSWORD).toString('base64');

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
                            const data = JSON.parse(body)
                            resolve(data); 
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

// Export the routes
module.exports = (app) => {

    // Home
    app.get(`/`, async (req, res) => {
        zendeskAPI()
        .then((data) => {
            res.render('index', {datas: data[0].requests, length: data[0].count, amountPages:  Math.ceil(data[0].count/25)})
        })
    });

    // Route used if there are more than 25 tickets 
    app.get(`/changePage/:pageNum`, (req, res) => {
        zendeskAPI()
        .then((data) => {
            res.render('changePage', {datas: data[0].requests, length: data[0].count, pageNum: Number(req.params.pageNum), amountPages: Math.ceil(data[0].count/25)})
        })
    });
}