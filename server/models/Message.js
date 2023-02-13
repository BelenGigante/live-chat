const { Schema, model } = require('mongoose');


const messageSchema = new Schema({
    message:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        timestamps: 'true',
    },
    sender:[
    {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
    ]
})

const Message = model('Profile', messageSchema);

module.exports = Message;