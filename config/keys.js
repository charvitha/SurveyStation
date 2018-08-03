if (process.env.NODE_ENV === 'production') {
  //return production set of keys
  module.exports = require('./prod');
} else {
  //return dev set of keys
  module.exports = require('./dev');
}

//ProdSecret: XCjWdbRF1Q3k7bB5dzOp5aXL
//ProdID: 122792455151-5qvf21qnoocf9t3nmtifdu8qgnlugugg.apps.googleusercontent.com
// prodMongo : mongodb://<dbuser>:<dbpassword>@ds111492.mlab.com:11492/surveystation-prod
