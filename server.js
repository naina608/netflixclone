const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const userRoutes=require("./routes/UserRoutes");
const dotenv = require("dotenv");
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
const url=process.env.MONGO_URI;
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("DB connected");
}).catch((e)=>{console.log(e)});
app.use("/api/user",userRoutes);
app.listen(5000,console.log("server started"));