var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mailto:mongoose.connect("mongodb+srv://rajiv:rajiv555@hmnodejs.7gfy9ku.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
