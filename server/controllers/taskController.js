const Task = require('../models/TaskModel');
// const fs = require('fs');
// const path = require('path');
const { log } = require('console');

//Get all posts
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ _id: -1 })
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error in getAllTasks:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get a single post
// exports.getById = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post) return res.status(404).json({ message: 'Post not found' });
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// Create a new post
exports.createTask = async (req, res) => {
  const { title } = req.body;

  try {
    const newTask = new Task({
      title,
    });

    const task = await Task.create(newTask)
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Update a post
exports.updateTask = async (req, res) => {
  try {
   
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Post not found' });

    if (task.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this post' });
    }

    const updates = {
      ...req.body,
    };
    if (req.file?.filename) {
      updates.featuredImage = req.file.filename;
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a post
exports.deleteTask = async (req, res) => {
  console.log(req.params.id);

  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};