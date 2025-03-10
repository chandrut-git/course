//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));


function chec(req,res,next){
    req.c=false;
    const a=req.body["password"];
    if(a=="ILoveProgramming"){
        req.c=true;
    }
    next();
}
app.use(chec);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
app.post("/check",(req,res,next)=>{
    
    if(req.c){
        res.sendFile(__dirname + "/public/secret.html");
      
    }
    else{
        res.redirect("/");
    }
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });