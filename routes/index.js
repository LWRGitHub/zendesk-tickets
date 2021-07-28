// Get .env
if (!process.env.PORT) {
    require('dotenv').config()
}

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
                    {
                        url : url,
                        headers : {
                            "Authorization" : auth
                        }
                    },
                    function (err, res, body) {
                        if (res.statusCode === 200) {
                            // console.log(JSON.parse(body))
                            resolve(JSON.parse(body));
                        } else {
                            reject(err);
                        }
                    }
                );
            })
        );
        Promise.all(promises).then((data) => resolve(data));
    });
}

module.exports = (app) => {

    app.get(`/`, async (req, res) => {
        zendeskAPI()
        .then((data) => {
            res.render('index', {datas: data[0].requests})
        })

    });
}