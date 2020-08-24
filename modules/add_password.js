const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/pms';
const url = "mongodb+srv://reactShop:reactShop@reactshop.f33ot.mongodb.net/pms?retryWrites=true&w=majority";
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex : true,
});
//console.log(connect);
var conn = mongoose.Collection;
var passSchema = new mongoose.Schema({
    password_category: {
        type: String,
        required: true,
    },
    project_name: {
        type: String,
        required: true,
    },
    password_detail: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
passSchema.plugin(mongoosePaginate);
var passModel = mongoose.model('password_details', passSchema);
module.exports = passModel;