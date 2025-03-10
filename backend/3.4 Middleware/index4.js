import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
const port = 3000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit",(req,res)=>{
  var bandName = req.body["street"] + req.body["pet"];
  res.send(`<h4><b>BANDNAME</b></h4> ${bandName}  `);
  
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
