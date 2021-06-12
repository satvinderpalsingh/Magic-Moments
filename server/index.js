import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app=express();
const connectionURL='mongodb+srv://satvinder:shersinghsp@cluster0.sukyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT=process.env.PORT||5000;

import postRouter from './routes/posts.js';


mongoose.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server running at port:: ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);// for warning messages

app.use(express.json({limit:"30mb",extended:true})); //refer to the documentation why we have not use bodyParser here instead
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.use('/posts',postRouter);//this must be below the cors use line in ortder to communicate with cross origin