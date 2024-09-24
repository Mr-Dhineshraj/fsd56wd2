const express=require("express");
const bodyparser=require("body-parser");
const path=require('path');
const app = express();

app.use(bodyparser.json());

const handleGetRequest=(req,res)=>{


    const requestid=req.params.id
    const requeststd=req.params.std
    console.log(requestid ,requeststd)

    if (requestid==1){
        res.send('server running successful'+1)
    }else{
        res.send("server running succcess"+2)
    }
    
}


const handleGetQueryRequest=(req,res)=>{
    const myid=req.query.id;
    const myusername=req.query.username
    res.send('server running successful' +myid+myusername)

}
app.get("/myfirstapi/:id/:std",handleGetRequest);

app.get("/mysecondapi",handleGetQueryRequest);
app.get ("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
});
app.post("/createroom",(req,res)=>{

    console.log(req.body,"request")
    res.send("create room working")

})


app.listen(3000,()=>{
    console.log("server started at 3000")
})