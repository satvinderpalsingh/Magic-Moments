
import React,{useState,useEffect} from 'react';
import useStyles from './styles';
import {Paper,Typography,TextField,Button} from '@material-ui/core';
import FileBase from 'react-file-base64';

import {useDispatch,useSelector} from 'react-redux'
import {createPost,updatePost} from '../../actions/posts';
const Form=({currentId,setCurrentId})=>{
    // eslint-disable-next-line
    const styleClasses=useStyles();
    const [postData,setPostData]=useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));//
    const dispatch=useDispatch()
    useEffect(()=>{ //useEffect responsible for adding data in form when clicked button
        if(post) setPostData(post);
    },[post]);//the second arg of useEfeect tell us when it should execute 
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));//by this we will be updating the post not creating the new One when submit hit
        }else{
        dispatch(createPost(postData));
        }
        clear();//whenever we hit submit we get cleared
    }
    const clear=()=>{   
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    
    
    return(
        <Paper className={styleClasses.paper}>
        <form autoComplete="off" noValidate className={`${styleClasses.form} ${styleClasses.root}`} onSubmit={handleSubmit}>
        <Typography variant="h6"> {currentId?'Editing':'Creating'} a Moment</Typography>
        <TextField 
            name="creator"
            variant="outlined"
            label="creator"
            fullWidth
            value={postData.creator}//postData state variable will have the value of this field in creator field
            onChange={(e)=>setPostData({...postData,creator:e.target.value})}//setPostData react hooks concept of updating the state when changes in input field
        />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
        <div className={styleClasses.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={styleClasses.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
    );
};

export default Form;