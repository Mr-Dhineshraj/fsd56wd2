const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.json());

const bookingDetails=[];
const roomDetails=[];


app.post("/createroom",(req,res)=>{
    console.log(req.body,"req")
    res.send("create room working")

})

app.listen(3000,(req,res)=>{
    console.log("Server start succesfully")
})