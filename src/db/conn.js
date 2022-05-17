const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://shubham:Mahadev1@cluster0.njozc.mongodb.net/?retryWrites=true&w=majority",{
    
}).then(()=>{
    console.log("connection secc db")
}).catch((err)=>{
    console.log("conn")
})