import React from 'react';
import Post from './post/post';
import {Grid,CircularProgress} from '@material-ui/core';
import useStyles from './styles';
import {useSelector} from 'react-redux';//in order to fetch the data from our store newConcept using react-hooks similar to mapStateProps() functionality

const Posts=({setCurrentId})=>{
    const styleClasses=useStyles();
    const posts=useSelector((state)=>state.posts);//useSelector help us to fetch data from redux Store
    return(
        !posts.length?<CircularProgress/>:(
            <Grid  container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
        )
    );
};

//<></> this added due to parent componet requirement
//every array iterator should have unique key otherwise warnings come out
export default Posts;
