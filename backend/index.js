const express = require ('express')
const app = express()
var cors = require('cors')
const port = 5000    
const mongoDB =  require("./db")
mongoDB()
app.get('/',(req,res)=>{
    res.send("Hello World")
})  
app.use(cors())
app.use(express.json())
app.use('/api',require("./Routers/createUser"));
app.use('/api',require("./Routers/displayData"));
app.use('/api', require("./Routers/orderData"));

app.listen(port ,()=>{
    console.log(`Example app is listening on port ${port}`)
})