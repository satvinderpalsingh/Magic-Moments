import {React,useEffect,useState} from 'react';
import {Container,AppBar,Typography,Grid,Grow} from '@material-ui/core';
import logo from './images/magicMoments.PNG';
import useStyles from './styles';
import Posts from './components/posts/posts';
import Form from './components/form/form';
import {getPosts} from './actions/posts' ;
import {useDispatch} from 'react-redux'



const App=()=>{
    const [currentId,setCurrentId]=useState(null);
    const styleClasses=useStyles();
    const dispatch=useDispatch();
    //useEffect help us to populate the state/(redux store) popluate with data similar to mapStateProps
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);//the second arg of useEfeect tell us when it should execute 

    return(

        <Container maxWidth="lg">
            <AppBar className={styleClasses.appBar} position="static" color="inherit">
                <Typography className={styleClasses.heading} variant="h2" align="center">Magic Moments</Typography>
                <img className={styleClasses.image} src={logo} alt="Moment" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;