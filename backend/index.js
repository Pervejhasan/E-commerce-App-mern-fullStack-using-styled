const express=require("express")
const mongoose=require("mongoose");
const userRoute=require("./routes/user.route")
const authRoute=require('./routes/auth.route')
const productRoute=require('./routes/product.route')
const orderRoute=require('./routes/order.route')
const cartRoute=require('./routes/cart.route');
const stripeRoute=require("./routes/stripe")
const cors=require("cors")
require('dotenv').config();


//environment variable
const PORT=process.env.PORT||8000;
const DATABASE_URL=process.env.DATABASE_URL;

const app=express();

//middleware
app.use(cors());
app.use(express.json());
app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/products',productRoute);
app.use('/api/orders',orderRoute);
app.use('/api/carts',cartRoute);
app.use('/api/checkout',stripeRoute);



//connect database
mongoose.connect(DATABASE_URL).then(()=>{
    console.log("Database connection successful!")
}).catch((error)=>{
    console.log(error.message)
})






app.listen(PORT,()=>{
    console.log(`Application running http://localhost:${PORT}`)
})