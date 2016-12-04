var mongoose = require('mongoose');


    console.log('process.env.MONGODB_URI: ', process.env.MONGODB_URI)

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
