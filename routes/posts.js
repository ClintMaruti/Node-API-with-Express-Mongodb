const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET all posts
router.get('/api/v1/posts', (req,res) => {
    const posts = Post.find();
    res.json(posts);
});

// SUBMIT A POST
router.post('api/v1/post/', (req,res) => {
    try{
        const post = new Post({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content
        });
        const posted = post.save();
        res.json(posted);
    } catch(err){
        res.json({message: err});
    }
});

module.exports = router;