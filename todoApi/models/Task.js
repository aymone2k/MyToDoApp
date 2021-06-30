const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
  createdAt:{ type: Date,  default: Date.now},// date de creation
  title: { type: String, required: true },
  done: { type: Boolean}, 
}); 

module.exports = mongoose.model('Task', taskSchema);  