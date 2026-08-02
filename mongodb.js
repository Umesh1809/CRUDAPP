const mongoose = require('mongoose');

// 🟢 CHANGED: Replaced 'localhost' with your cluster service name 'mongodb-service'
mongoose.connect('mongodb://mongodb-service:27017/crudapp')
  .then(() => console.log('Successfully connected to MongoDB inside AKS!'))
  .catch(err => console.error('Database connection tracking block:', err));
