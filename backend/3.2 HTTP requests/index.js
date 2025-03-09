import express from 'express';
const app=express();
const port=2600;
app.get("/",(req,res)=>{
    res.send("<h1>hi</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>about us</h1>");
});
app.listen(port,()=>{
    console.log(`hi i am port ${port}`);
});