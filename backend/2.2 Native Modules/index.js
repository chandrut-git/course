const fs = require("fs");

fs.writeFile("msg.txt","Ashok",(err)=>{
    if (err) throw err;
    console.log("file created");
})
fs.readFile("E:\\full stack development\\2.2 Native Modules\\msg.txt","utf-8",(err, data) => {
    if (err) throw err;
    console.log(data);
  });