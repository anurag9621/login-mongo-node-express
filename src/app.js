const express =require("express")
const path=require("path")
const app= express()
const hbs= require("hbs")
require("./db/conn")
const Register =require("./models/registers")

const port=process.env.PORT || 3000
const static_file=path.join(__dirname,"../public")
const temp_path=path.join(__dirname,"../templates/views")
const par_path=path.join(__dirname,"../templates/partials")



app.use(express.static(static_file))
app.set("view engine","hbs")
app.set("views",temp_path)
hbs.registerPartials(par_path)
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})


app.post("/register",async (req,res)=>{
    try{
        res.send(req.body.Name)
    }catch(error){
        res.status(400).send(error)
    }
})


app.listen(port,()=>{
    console.log(`server running in localhost:${port}`)
})