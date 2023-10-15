const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"

    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add email"]
    },
    mobile: {
        type: String,
        required: [true, "Please add phone number"]
    },
},
    {
        timeStamps: true,
    }
);


module.exports = mongoose.model("Contacts", contactSchema);