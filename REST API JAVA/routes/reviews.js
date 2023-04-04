
const express = require('express');
const router = express.Router();
const Review = require('../models/review');



  
// GET all reviews
router.get('/', async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

// Get a single review
router.get('/:id', getreview, (req,res) => {
res.send(res.review)
})

// Create a new review
router.post('/', async (req, res) => {
    const review = new Review({
        title: req.body.title,
        description: req.body.description
    });
    try {
      const newReview = await review.save();
      res.status(201).json(newReview);
    } catch(err) {
      res.status(400).json({ message: err.message });
    }
  });

// Update a review
router.patch('/:id', getreview, async (req, res) => {
    if (req.body != null) {
        res.review.title = req.body.title
    }
    if (req.body.description != null){
        res.review.description = req.body.description
    }
    try {
        const updatedreview = await res.review.save()
        res.json(updatedreview)
    } catch (error) {
        res.status(400).json({message: err.message})
    }
  });
  

// Delete a review
router.delete('/:id', async (req, res) => {
    try {
      const review = await Review.findOneAndDelete({_id: req.params.id});
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.json({ message: 'Deleted review!' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

async function getreview(req, res, next){
let review

try
{
    review = await Review.findById(req.params.id)
    if(review ==null)
    {
        return res.status(404).json({message: 'cannot find a review!'})
    }
    }catch (err)
{
return res.status(500).json({message: err.message})
}
res.review = review
next()
}
module.exports = router;
