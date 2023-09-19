const express=require("express")
const mongoose=require("mongoose");
const userRoute=require("./routes/user")
require('dotenv').config();


//environment variable
const PORT=process.env.PORT||8000;
const DATABASE_URL=process.env.DATABASE_URL;

const app=express();

//middleware
app.use(express.json())
app.use('/api/users',userRoute);



//connect database
mongoose.connect(DATABASE_URL).then(()=>{
    console.log("Database connection successful!")
}).catch((error)=>{
    console.log(error.message)
})






app.listen(PORT,()=>{
    console.log(`Application running http://localhost:${PORT}`)
})