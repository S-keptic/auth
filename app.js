import express from 'express'
import dbConnect from './db/dbConnect.js';
import index from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = 3000;

dbConnect(process.env.DATABASE_URL)

app.use(express.urlencoded({extended: true}))
app.use("/",index)

app.listen(port,()=>{
    console.log(`Server up on http://localhost:${port}`)
})