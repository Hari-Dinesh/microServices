import express from 'express'
import mongoose from 'mongoose'
import UserRoutes from "./routes/UsersRoutes.js";
import cors from 'cors'
const port = 5001
const app=express()
app.use(express.json())
app.use(cors())

mongoose
  .connect("mongodb+srv://Dinesh:Asdfg123@cluster0.8pjuhmq.mongodb.net/Mongoln?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connected to the mongoose");
    app.use("/api", UserRoutes); //api=>authentication_Routes
    app.listen(port, () => {
      console.log(`port running on `);
    });
  })
  .catch((err) => {
    console.log("error occured while starting the server");
  });