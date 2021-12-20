const express = require("express");
const app= express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.get("/", (req, res)=>{
    res.status(200).send("welcome to server");
})

const server = app.listen(3000, ()=>{
    console.log("my server started on port number :3000");
});

app.post('/register',(req, res)=>{
    console.log(req.body);
    //res.status(200).send({status:true,msg:"data received"});
    res.status(401).send({status:false,msg:"unotherised request"});

})
