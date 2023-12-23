
import userModel from "../models/user.js"

import bcrpyt from "bcrypt"

class userController{
    static home = (req,res)=>{
        res.render("index.ejs")
    }
    static login = (req,res)=>{
        res.render("login.ejs")
    }

    static userCreateDoc = async (req,res)=>{
        try{
            const hashedPassword = await bcrpyt.hash(req.body.password,10)
            const doc = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            })
            await doc.save()
            console.log("doc saved..")
            res.redirect('/login')
        }catch(err){
            console.log(err)
        }
    }

    static registration  = (req,res)=>{
        res.render("registration.ejs")
    }
    static loginVerify = async(req,res)=>{
        try{
        
        const {email,password}  = req.body
        
        const result = await userModel.findOne({email:email})
        console.log(result)
        
        if(result!=null){
            const isMatched = await bcrpyt.compare(password,result.password)
            if(result.email==email && isMatched){
                res.send(`<h1>Dashboard ------------>> ${result}</h1>`)
            }
            else(
                res.send("Credentials not valid!")
            )
            }
        else{
            res.send("<h1>you are not a registered user!</h1>")}
        }
        catch(err){console.log(err)}}
}
export  default userController