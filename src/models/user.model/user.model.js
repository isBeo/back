import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

const { model,Schema } = mongoose;


const  uSchema = Schema ({
    email:{
        type : String,
        unique : true,
        required : true,
    },
    password:{
        type : String, 
        required : true
    },
},
Timestamp
)

const User = model('User', uSchema);


export default User;
