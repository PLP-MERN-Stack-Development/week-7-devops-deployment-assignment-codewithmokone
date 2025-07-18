const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();
// const { protect } = require('../middleware/authMiddleware');

router.get('/',taskController.getAllTasks);
// router.get('/:id', postsController.getPostById);
router.post('/', taskController.createTask);
// router.put('/:id', protect,postsController.updatePost);
router.delete('/:id', taskController.deleteTask);

module.exports = router;