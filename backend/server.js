const {Users}=require('./Models/userModel')
const {Events}=require('./Models/eventModel')
const {eventRouter}=require('./Routes/eventRoutes')
const {userRouter}=require('./Routes/userRoutes')
const express=require('express')
const app=express()
const cors=require('cors')
const {db_connect}=require('./database/db')
 require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
db_connect()

app.use('/api/user',userRouter)
app.use('/api/event',eventRouter)



let PORT =process.env.SERVER_PORT || 8080
app.listen(PORT,()=>{
    console.log(`Your Server is running on http://localhost:${PORT}`)
})


