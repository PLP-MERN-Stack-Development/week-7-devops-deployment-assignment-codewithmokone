// Post.js - Mongoose model for blog posts

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            trim: true,
            maxlength: [100, 'Title cannot be more than 100 characters'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Task', TaskSchema); 