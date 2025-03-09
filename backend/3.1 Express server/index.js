import express from 'express';
const app=express();
app.get("/",(_req,res)=>{
    res.send("helloworld!");
});
app.listen(3000,()=>{
    console.log("server is running at port 3000")
});