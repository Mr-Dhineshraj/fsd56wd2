const {MongoClient}=require('mongodb');

const uri=`mongodb+srv://dhineshrajbaskaran01:010995Dj@guvizen.0wfesxi.mongodb.net/?retryWrites=true&w=majority&appName=Guvizen`;

const client=new MongoClient(uri);


try{
    client.connect(()=>{
        console.log("connected to mongodb")
    })
}catch(e){
    console.log("error while connecting the mongodb")
};