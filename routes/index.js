// Require
const zendeskAPI = require('../utils/zendeskAPI').zendeskAPI;


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
