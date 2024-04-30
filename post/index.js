import express from 'express'
import mongoose from 'mongoose'
import ProductRoutes from "./Routes/ProductRoutes.js";
import cors from 'cors'
const port = 5002
const app=express()
app.use(express.json())
app.use(cors())


// app.get('/',(req,res)=>{
//     res.send("this is the running of th eport 5002")
// })
mongoose
  .connect("mongodb+srv://Dinesh:Asdfg123@cluster0.8pjuhmq.mongodb.net/Mongoln?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connected to the mongoose");
    app.use("/products", ProductRoutes); //api=>authentication_Route
    app.listen(port, () => {
      console.log(`port running on `);
    });
  })
  .catch((err) => {
    console.log("error occured while starting the server");
  });