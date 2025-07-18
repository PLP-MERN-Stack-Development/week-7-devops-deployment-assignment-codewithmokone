const express = require('express');
const postsController = require('../controllers/postController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
// const upload = require('../middleware/uploads');
// const multer = require('multer');

router.get('/',postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', protect, postsController.createPost);
router.put('/:id', protect,postsController.updatePost);
router.delete('/:id', protect,postsController.deletePost);

module.exports = router;