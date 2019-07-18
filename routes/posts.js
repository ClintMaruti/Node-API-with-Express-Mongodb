const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET all posts
router.get('/api/v1/posts', async (req,res) => {
    const posts = await Post.find();
    res.json(posts);
});

// SUBMIT A POST
router.post('api/v1/post/', async (req,res) => {
    try{
        const post = await new Post({
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

// GET A SPECIFIC POST
router.get('api/v1/post/:postId', async (req,res) => {
    try{
        const specificPost = await Post.findById(req.params.postId);
        res.json(specificPost);
    } catch (err) {
        res.json({message: err});
    }
});

// UPDATE A POST
router.patch('api/v1/post/:postId', async (req,res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: {content: req.body.content} },
            );
        res.json(updatePost);
    } catch(err) {
        res.json({message: err});
    }
});

// DELETE A POST
router.delete('api/v1/post/:postId', async (req,res) => {
    try {
        const deletePost = await Post.remove(req.params.postId);
        res.json(deletePost);
    } catch (err){
        res.json({message: err});
    }
});

module.exports = router;