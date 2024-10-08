const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:Shivams%40001@cluster0.at06j.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo: todo
}



