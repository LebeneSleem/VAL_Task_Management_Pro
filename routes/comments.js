const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Add a new comment to a task
router.post('/tasks/:taskId/comments', async (req, res) => {
  try {
    const { taskId } = req.params;
    const { text, userId } = req.body;
    
    const comment = new Comment({
      text,
      user: userId, // Assuming userId is passed in the request body
      task: taskId
    });
    
    await comment.save();
    
    res.status(201).send(comment);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
