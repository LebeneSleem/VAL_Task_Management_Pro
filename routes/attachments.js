const express = require('express');
const router = express.Router();
const multer = require('multer'); // For handling the file uploads
const upload = multer({ dest: 'uploads/' }); 
const Attachment = require('../models/Attachment');

router.post('/tasks/:taskId/attachments', upload.single('file'), async (req, res) => {
  try {
    const { taskId } = req.params;
    const { filename, originalname, mimetype, size } = req.file;
    
    const attachment = new Attachment({
      filename,
      originalname,
      mimetype,
      size,
      task: taskId
    });
    
    await attachment.save();
    
    res.status(201).send(attachment);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
