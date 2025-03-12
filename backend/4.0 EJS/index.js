import express from 'express';
const app=express();
const port=2600;
app.get("/",(req,res)=>{
    const d = new Date();
    const day = d.getDay();
    const a="a weekday";
    const b="Its time to work hard";
   
    if(day==0 || day==6){
        a="Its Weekend";
        b="Its time to relax";
    }
   res.render("index.ejs",{daytype:a,advice:b});
});

app.listen(port,()=>{
    console.log(`hi i am port ${port}`);
});