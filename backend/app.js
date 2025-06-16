const express = require("express")
const mongoose=require("mongoose")
const blogrouter=require("./router/blog")
const app = express();
const PORT = 8000;
var cors = require('cors')

mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{console.log("Mongodb is Up")}).catch((err)=>{console.log("Error",err)})

app.use(cors())

app.use(express.json())
app.use("/",blogrouter)
app.listen(PORT,(err) => {
    if (err) console.log("ERROR", err)
    else console.log("SErver is UP")
})