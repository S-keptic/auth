import mongoose from "mongoose";

const dbConnect = async (DATABASE_URL) =>{
    const DB_OPTIONS = {
        dbname : "blogdb",
    }


    try{
       await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("DATABASE SUCCESSFULLY CONNECTED")

    }catch(err){

    throw err
    }finally{console.log("server setup ended....")}
}

export default dbConnect