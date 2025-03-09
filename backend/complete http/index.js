import express from 'express';
const app=express();
const port=4500;
app.get("/",(req,res)=>{
    res.send("<h1>hi i'm chandru</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>Web developer</h1>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1>8531925810</h1>");
});
app.listen(port,()=>{
    console.log(`hi i am port ${port}`);
});