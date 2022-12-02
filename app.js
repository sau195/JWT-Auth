import dotenv from"dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import connectDB from "./config/connectdb.js"
import userRoutes from "./routes/UserRoutes.js"
const app=express()

app.use(cors())
app.use(express.json())
app.use(userRoutes)

const port=process.env.PORT || 5000
const DATABASE_URL=process.env.DATABASE_URL

connectDB(DATABASE_URL)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})