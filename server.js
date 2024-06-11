import express from "express";

import { PORT } from './config.js';
//  dotenv.config();
// import dotenv from 'dotenv';
//  dotenv.config();

import urouter from './src/routes/user.routes/user.routes.js';






// const p = process.env.PORT;
console.log(PORT);


const app = express();

app.use( '/api',urouter )


// this seems not tp be working correctly but why?
// there seems to be a problem with the dotenv module??
// this code base is going  to work today because it is all I can do today . PLease help me God.

app.listen( PORT, ()=>{
    console.log(`ok...port=>${PORT}`);

})











