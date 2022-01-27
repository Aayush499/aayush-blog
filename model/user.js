const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
        maxlength: 50,
		required: true
	},
	email: {
		type: String,
		required: true,
        trim:true,
        unique:1
        
	},
	password: {
        type: String,
        minlength: 5
    },
    role : {
        type: Number,
        default: 0

    },
    token :
    {
        type: String,

    },
    tokenExp:{
        type: Number
    }
});

const BuyerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	contact_number:{
		type: String,
		required: true
	},
	age: {
		type: Int16Array,
		required: false
	},
	batch_name:{
		type: String,
		required : true
	},
	password: {
        type: String,
        minlength: 5
    }
});

const VendorSchema = new Schema({
	manager_name: {
		type: String,
		required: true
	},
	shop_name: {
		type: String,
		required: true
	},
	date:{
		type: Date,
		required: false
	},
	password: {
        type: String,
        minlength: 5
    }
});

 const User = mongoose.model("User", UserSchema);
const Buyer = mongoose.model("Buyer", BuyerSchema);
const Vendor = mongoose.model("Vendor", VendorSchema);

module.exports = {User, Buyer, Vendor}