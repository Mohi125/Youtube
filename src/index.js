import dotenv from 'dotenv';
import express from 'express';

dotenv.config({
    path:'./env'
})

const app = express();

app.listen(process.env.PORT,()=>{
    console.log(`Listening on ${process.env.PORT}`);
})
