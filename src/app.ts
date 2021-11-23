require("dotenv").config();
import express from 'express';
import mongoose from 'mongoose';
import routers from './routers';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

routers.map((route)=>{
    app.use(route)
})

//connection db
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}).then(()=>{
    console.log('connection with database: OK!')
}).catch((error)=>{
    console.log('database error: ')
    console.log(error)
});


export = app