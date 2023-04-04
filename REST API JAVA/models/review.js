const mongoose = require('mongoose');

// Define the schema for the listings collection
const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Define the model for the listings collection
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
