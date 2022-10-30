const express = require('express');
const app = express();
const port=process.env.PORT || 8000;

app.get("/api",(req,res)=>{
    res.json({"users":["Userone","userTwo","userThree"]})
})

app.listen(port,()=>{console.log("Server started on port 8000")})
