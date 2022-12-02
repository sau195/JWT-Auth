import mongoose from "mongoose";

const connectDB = async(DATABASE_URL)=>
{
    try{
    const DB_NAME={
        dbName:"JWT"
    }
    await mongoose.connect(DATABASE_URL,DB_NAME)
    console.log("Connected Successfully....");
    }
    catch(error)
    {
        console.log(error);
    }
}

export default connectDB