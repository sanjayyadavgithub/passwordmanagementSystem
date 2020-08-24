const mongoose = require('mongoose');
const url = "mongodb+srv://reactShop:reactShop@reactshop.f33ot.mongodb.net/pms?retryWrites=true&w=majority";
//const url = 'mongodb://localhost:27017/pms';

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
var conn = mongoose.Collection;
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true,
        }
    },

    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var userModel = mongoose.model('users', userSchema);
module.exports = userModel;