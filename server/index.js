import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import collegeRoutes from './routes/college.js';

const app=express();
app.use(cors());




app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));

app.use('/college', collegeRoutes);

const CONNECTION_URL='mongodb+srv://idanishkalam:mongo@D98@cluster0.jr75t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=> console.log(`connection established on port: ${PORT}`))).
catch((err)=>console.log(err.message));

mongoose.set('useFindAndModify',false);