import express from "express"
import cors from "cors"
import dotenv from "dotenv"


const app = express()
dotenv.config()

app.use(cors({
    origin:["http://localhost:5173", "http://192.168.0.104:5173/"],
    methods:["POST", "GET"]
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())





app.use("/", (req, res) => {
   const text = res.body

   
})

app.listen(process.env.PORT,() => {
    console.log("server is running")
})