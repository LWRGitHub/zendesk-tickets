// Require
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const zendeskAPI = require('../utils/zendeskAPI').zendeskAPI;

// Setup
chai.should();
chai.use(chaiHttp);

// Tests routes
describe('Routes', () =>{

    describe('GET /', () =>{
        it('It should GET with status 200, be HTML & body should be an Object', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html;
                    res.body.should.be.a('object');
                    done();
                });
        })
    })

    for(let i = 1; i < 5; i++){
        describe(`GET /changePage/${i}`, () =>{
            it('It should GET with status 200, be HTML & body should be an Object', (done) => {
                chai.request(server)
                    .get(`/changePage/${i}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.html;
                        res.body.should.be.a('object');
                        done();
                    });
            })
        })
    }

})

// Tests the API
describe('API', () => {
    it('API data should be type Array of Objects & have a length of 100', (done) => {
        zendeskAPI().then( async function (res) {
            res[0].requests.should.be.a('array');
            res[0].requests[0].should.be.a('object');
            res[0].requests.length.should.be.eq(100);
            done();
        })
    })
})