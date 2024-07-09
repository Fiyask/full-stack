const express =require ("express")

require ("dotenv").config()
const connectDB= require("./config/db")

const app=express ()
connectDB()
const PORT = 4000 || process.env.PORT
const apiRouter = require("./route")
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())
app.use("/api",apiRouter)
app.get("/", (req,res)=> {
    res.send(working)
})

app.listen(PORT,()=>{
    console.log(`server is working on ${PORT} port`)
})
