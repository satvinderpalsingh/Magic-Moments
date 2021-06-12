import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
const Post=({post,setCurrentId})=>{
    // eslint-disable-next-line
    const dispatch = useDispatch();
    const styleClasses=useStyles();
    return(
        <Card className={styleClasses.card}>
            <CardMedia className={styleClasses.media} image={post.selectedFile} title={post.title} />
                <div className={styleClasses.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={styleClasses.overlay2}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>
                <div className={styleClasses.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={styleClasses.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                </CardContent>
                <CardActions className={styleClasses.cardActions}>
        <Button size="small" color="primary" onClick={()=>{}}>
            <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={()=>{}}>
            <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
    );
};

export default Post;





