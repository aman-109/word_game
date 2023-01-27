const mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: {type:String},
  difficulty:{type:String},
  score:{type:Number,default:0}
});

const User = mongoose.model("user", users);

module.exports = User;