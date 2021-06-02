import PostMemory from '../models/post.js';

export const getPosts=async (req,res)=>{
    try{
        const postMemories=await PostMemory.find();
        res.status(200).json(postMemories);

    }catch(error) {
        res.status(404).json({message:error.message});
    }
};

export const createPosts=async (req,res)=>{
    const post=req.body;
    const newPost=new PostMemory(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);

    }catch(error) {
        res.status(409).json({message:error.message});
    }
};