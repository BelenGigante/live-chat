const { Schema, model } = require('mongoose');


const friendSchema = new Schema({
   friendName:{
    type: String,
    required: true,
    unique: true,
    trim: true,
   }
   //how to do requesting and receiving status ??
})

const Friend = model('Profile', friendSchema);
module.exports = Friend;