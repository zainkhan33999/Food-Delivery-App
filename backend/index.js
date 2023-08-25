const express = require ('express')
const app = express()
var cors = require('cors')
const port = 5000    
const { connectDB } = require("./db"); // Use destructuring to get the connectDB function
connectDB()
app.use(cors())
app.use(express.json())
app.use('/api',require("./Routers/createUser"));
app.use('/api',require("./Routers/createSeller"))
app.use('/api',require("./Routers/displayData"));
app.use('/api',require("./Routers/createProduct"))
app.use('/api',require("./Routers/displayData"));
app.use('/api', require("./Routers/orderData"));
app.use('/api',require("./Routers/deleteProduct"))
app.listen(port ,()=>{
    console.log(`Example app is listening on port ${port}`)
})