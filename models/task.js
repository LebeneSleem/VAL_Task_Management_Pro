const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['To Do', 'In Progress', 'Pending Review', 'Completed'], default: 'To Do' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  repository: { type: String, required: true },
  branch: { type: String, required: true },
  commitId: { type: String, required: true }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
