const mongoose = require('mongoose');
const url = "mongodb+srv://reactShop:reactShop@reactshop.f33ot.mongodb.net/pms?retryWrites=true&w=majority";

//const url = 'mongodb://localhost:27017/pms';
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
var conn = mongoose.Collection;
var passcatSchema = new mongoose.Schema({
    passord_category: {
        type: String,
        required: true,
        index: {
            unique: true,
        }
    },

    date: {
        type: Date,
        default: Date.now
    }
});

var passCateModel = mongoose.model('password_categories', passcatSchema);
module.exports = passCateModel;