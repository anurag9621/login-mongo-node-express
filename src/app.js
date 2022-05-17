const { response } = require("express")
const express =require("express")
const async = require("hbs/lib/async")
const path=require("path")
const { send } = require("process")
const app= express()
require("./db/conn")
const port=process.env.PORT || 3000
app.use(
    express.urlencoded({ extended: true })
);
const static_file=path.join(__dirname,"../public/index.html")
    
app.use(express.json());
const Register =require("./models/registers")
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/login.html'));
})
app.post("/login",async(req,res)=>{
    try{
        const email= req.body.email
        const password=req.body.password
        const userEmail= await Register.findOne({email:email})
        if(userEmail.password==password){
            response.status(201).render(static_file)
        }else{
            res.send("password is not match")
        }

    }catch(error){
        res.status(400).send("envalid email")
    }
})
app.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/register.html'));
})
app.post("/register",async (req,res)=>{
    try{
        const newUser= new Register({
            name:req.body.name,
            email:req.body.email,
            number:req.body.number,
            password:req.body.password

        })
        const registered=await newUser.save()
        res.status(201).render("index")
    }catch(error){
        res.status(400).send("somthing wrong")
    }
})


app.listen(port,()=>{
    console.log(`server running in localhost:${port}`)
})